import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your preferred email service
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password',
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, propertyId } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email content for admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: process.env.ADMIN_EMAIL || 'admin@propertyhub.com',
      subject: `New Contact Form Submission - ${subject || 'Property Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 15px;">
          <h2 style="text-align: center; margin-bottom: 30px; color: #ffffff;">🏠 New Property Inquiry</h2>
          
          <div style="background: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h3 style="color: #ffffff; margin-bottom: 15px;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject || 'Property Inquiry'}</p>
            ${propertyId ? `<p><strong>Property ID:</strong> ${propertyId}</p>` : ''}
          </div>
          
          <div style="background: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 10px;">
            <h3 style="color: #ffffff; margin-bottom: 15px;">Message</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.3);">
            <p style="color: #ffffff; opacity: 0.8;">This inquiry was submitted through PropertyHub contact form</p>
            <p style="color: #ffffff; opacity: 0.8;">Time: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    };

    // Auto-reply to customer
    const customerMailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: email,
      subject: 'Thank you for contacting PropertyHub',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); border-radius: 15px;">
          <h2 style="text-align: center; margin-bottom: 30px; color: #333333;">🏠 Thank You!</h2>
          
          <div style="background: white; padding: 20px; border-radius: 10px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);">
            <p style="color: #333333; line-height: 1.6;">Dear ${name},</p>
            <p style="color: #333333; line-height: 1.6;">Thank you for contacting PropertyHub. We have received your inquiry and our team will get back to you within 24 hours.</p>
            
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h4 style="margin: 0; color: #ffffff;">Your Inquiry Details:</h4>
              <p style="margin: 10px 0 0 0; color: #ffffff;"><strong>Subject:</strong> ${subject || 'Property Inquiry'}</p>
              <p style="margin: 5px 0; color: #ffffff;"><strong>Message:</strong> ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}</p>
            </div>
            
            <p style="color: #333333; line-height: 1.6;">If you have any urgent questions, please feel free to call us at <strong>+91 99999 00000</strong>.</p>
          </div>
          
          <div style="text-align: center; color: #666666;">
            <p>Best regards,<br>The PropertyHub Team</p>
            <p style="font-size: 14px;">© 2024 PropertyHub. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon!'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
