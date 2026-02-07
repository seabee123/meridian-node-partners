import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

interface OrderData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  items: OrderItem[];
  total: number;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const orderData: OrderData = req.body;

    // Validate required fields
    if (!orderData.firstName || !orderData.lastName || !orderData.email || !orderData.items?.length) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Format order items for email
    const itemsList = orderData.items
      .map(item => `• ${item.name} x${item.quantity} - $${item.total.toLocaleString()}`)
      .join('\n');

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Meridian Node Partners <orders@meridiannodepartners.com>',
      to: ['privateman0011@gmail.com'],
      subject: `New AirNode Order from ${orderData.firstName} ${orderData.lastName}`,
      html: `
        <h2>New AirNode Order Request</h2>
        
        <h3>Customer Information</h3>
        <p><strong>Name:</strong> ${orderData.firstName} ${orderData.lastName}</p>
        <p><strong>Email:</strong> ${orderData.email}</p>
        ${orderData.phone ? `<p><strong>Phone:</strong> ${orderData.phone}</p>` : ''}
        ${orderData.company ? `<p><strong>Company:</strong> ${orderData.company}</p>` : ''}
        
        <h3>Order Details</h3>
        <pre>${itemsList}</pre>
        
        <h3>Order Total: $${orderData.total.toLocaleString()}</h3>
        
        <hr>
        <p><em>This order was submitted through the Meridian Node Partners website.</em></p>
        <p><em>Please contact the customer to confirm the order and arrange payment.</em></p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true, messageId: data?.id });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
