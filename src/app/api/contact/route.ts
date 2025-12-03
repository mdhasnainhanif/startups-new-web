import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !company || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // true for 465, SSL/TLS
      auth: {
        user: process.env.SMTP_USER || 'babarsleekhive@gmail.com',
        pass: process.env.SMTP_PASS || 'zywn mtun qpth lzag',
      },
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000,
      socketTimeout: 10000,
      tls: {
        // Do not fail on invalid certificates
        rejectUnauthorized: false,
      },
      debug: true, // Enable debug output
      logger: true, // Log to console
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER || 'babarsleekhive@gmail.com'}>`,
      replyTo: email, // Allow replies to go to the form submitter
      to: 'inhouseteam502@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        Message: ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    // Log detailed error information
    console.error('Error sending email:', error);
    console.error('Error message:', error?.message);
    console.error('Error code:', error?.code);
    console.error('Error response:', error?.response);
    console.error('Error responseCode:', error?.responseCode);
    console.error('Error command:', error?.command);
    
    // Extract error message
    let errorMessage = 'Failed to send email';
    if (error?.message) {
      errorMessage = error.message;
    } else if (error?.response) {
      errorMessage = error.response;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: errorMessage,
        code: error?.code || 'UNKNOWN_ERROR'
      },
      { status: 500 }
    );
  }
}

