"use server"

// In a real application, you would use a library like nodemailer or an email service like SendGrid
// This is a simplified example to demonstrate the concept

interface OrderData {
  product: string
  name: string
  email: string
  phone: string
  quantity: number
  size: string
}

// Default organization email to receive all orders
const ORGANIZATION_EMAIL = "orders@africarefined.org"

export async function sendOrderEmail(data: OrderData): Promise<{ success: boolean; message: string }> {
  try {
    // Validate the data
    if (!data.name || !data.email || !data.phone || !data.quantity || !data.size) {
      return {
        success: false,
        message: "Please fill in all required fields",
      }
    }

    // Log the data that would be sent (for demonstration purposes)
    console.log("Order data to be emailed:", data)

    // In a real application, you would send two emails here:
    // 1. To the organization
    // 2. To the customer

    /*
    import nodemailer from 'nodemailer';

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // 1. Send email to the organization
    await transporter.sendMail({
      from: '"Africa Refined Orders" <orders@africarefined.org>',
      to: ORGANIZATION_EMAIL,
      subject: `New Order: ${data.product}`,
      text: `
        New Order Details:
        
        Product: ${data.product}
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        Quantity: ${data.quantity}
        Size: ${data.size}
      `,
      html: `
        <h2>New Order Details</h2>
        <p><strong>Product:</strong> ${data.product}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Quantity:</strong> ${data.quantity}</p>
        <p><strong>Size:</strong> ${data.size}</p>
      `,
    });

    // 2. Send confirmation email to the customer
    await transporter.sendMail({
      from: '"Africa Refined" <orders@africarefined.org>',
      to: data.email,
      subject: `Your Africa Refined Order: ${data.product}`,
      text: `
        Dear ${data.name},

        Thank you for your order! We've received your request for:
        
        Product: ${data.product}
        Quantity: ${data.quantity}
        Size: ${data.size}
        
        Our team will contact you shortly to confirm your order and arrange payment.
        
        Thank you for supporting the Nelson Mandela Jersey Initiative.
        
        Best regards,
        The Africa Refined Team
      `,
      html: `
        <h2>Thank You for Your Order!</h2>
        <p>Dear ${data.name},</p>
        <p>We've received your order request for the following item:</p>
        <div style="margin: 20px 0; padding: 15px; border-left: 4px solid #e53e3e; background-color: #f8f8f8;">
          <p><strong>Product:</strong> ${data.product}</p>
          <p><strong>Quantity:</strong> ${data.quantity}</p>
          <p><strong>Size:</strong> ${data.size}</p>
        </div>
        <p>Our team will contact you shortly to confirm your order and arrange payment.</p>
        <p>Thank you for supporting the Nelson Mandela Jersey Initiative.</p>
        <p>Best regards,<br>The Africa Refined Team</p>
      `,
    });
    */

    // Simulate a delay to mimic sending emails
    await new Promise((resolve) => setTimeout(resolve, 1500))

    return {
      success: true,
      message: "Order information sent! Check your email for confirmation.",
    }
  } catch (error) {
    console.error("Error sending order email:", error)
    return {
      success: false,
      message: "Failed to send order information. Please try again later.",
    }
  }
}

