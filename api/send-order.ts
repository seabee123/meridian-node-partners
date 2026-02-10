import type { VercelRequest, VercelResponse } from '@vercel/node';
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
      .map(item => `• ${item.name} x${item.quantity} - $${item.total.toLocaleString()}`)
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
