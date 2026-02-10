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
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const orderData: OrderData = req.body;

    if (!orderData.firstName || !orderData.lastName || !orderData.email || !orderData.items?.length) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const itemsList = orderData.items
      .map(item => `• ${item.name} x${item.quantity} – $${item.total.toLocaleString()}`)
      .join('\n');

    // Send admin notification email
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: 'Meridian Node Partners <onboarding@resend.dev>',
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

    if (adminError) {
      console.error('Admin email error:', adminError);
      return res.status(500).json({ error: 'Failed to send admin notification' });
    }

    // Send customer confirmation email
    const { error: customerError } = await resend.emails.send({
      from: 'Meridian Node Partners <onboarding@resend.dev>',
      to: [orderData.email],
      subject: 'Your AirNode Order Confirmation - Meridian Node Partners',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #000; padding: 20px; text-align: center;">
            <h1 style="color: #F5B800; margin: 0;">Meridian Node Partners</h1>
          </div>
          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #333;">Thank You for Your Order, ${orderData.firstName}!</h2>
            <p style="color: #666; font-size: 16px;">
              We have received your AirNode order request and our enterprise team will contact you within 24 hours to confirm details and arrange payment.
            </p>
            <div style="background-color: #fff; border: 1px solid #ddd; border-radius: 8px; padding: 20px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Order Summary</h3>
              <pre style="background-color: #f5f5f5; padding: 15px; border-radius: 4px;">${itemsList}</pre>
              <p style="font-size: 18px; font-weight: bold; color: #333;">
                Total: <span style="color: #F5B800;">$${orderData.total.toLocaleString()}</span>
              </p>
            </div>
            <div style="background-color: #e8f5e9; border-left: 4px solid #4caf50; padding: 15px; margin: 20px 0;">
              <h4 style="color: #2e7d32; margin: 0 0 10px 0;">Buyback Guarantee Included</h4>
              <p style="color: #666; margin: 0; font-size: 14px;">
                Your purchase includes our exclusive buyback guarantee. You can sell your nodes back to us at any time.
              </p>
            </div>
            <h3 style="color: #333;">What Happens Next?</h3>
            <ol style="color: #666; line-height: 1.8;">
              <li>Our team will review your order</li>
              <li>We'll contact you within 24 hours to confirm details</li>
              <li>Payment arrangements will be discussed</li>
              <li>Your AirNodes will be shipped with priority handling</li>
            </ol>
            <p style="color: #666; font-size: 14px;">
              If you have any questions, simply reply to this email or contact our enterprise team.
            </p>
          </div>
          <div style="background-color: #333; padding: 20px; text-align: center;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              Meridian Node Partners - Licensed Enterprise Reseller<br>
              Not affiliated with World Mobile Ltd
            </p>
          </div>
        </div>
      `,
    });

    if (customerError) {
      console.error('Customer email error:', customerError);
      // Don't fail the request if customer email fails, admin was notified
    }

    return res.status(200).json({ success: true, message: 'Order submitted successfully' });
  } catch (error) {
    console.error('Order submission error:', error);
    return res.status(500).json({ error: 'Failed to process order' });
  }
}

