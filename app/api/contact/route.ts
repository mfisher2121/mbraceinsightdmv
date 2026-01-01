import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // Validate required fields
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'All fields are required' },
      { status: 400 }
    );
  }

  // Check for SendGrid API key
  const sendGridApiKey = process.env.SENDGRID_API_KEY;
  if (!sendGridApiKey) {
    console.error('SENDGRID_API_KEY environment variable is not set');
    return NextResponse.json(
      { error: 'Email service is not configured' },
      { status: 500 }
    );
  }

  sgMail.setApiKey(sendGridApiKey);

  const fromEmail = process.env.EMAIL_FROM || 'noreply@mbraceinsight.com';

  try {
    await sgMail.send({
      to: 'mfisher@mbraceinsight.com',
      from: fromEmail,
      replyTo: email, // Allow replying directly to the submitter
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin-top: 10px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
      text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('SendGrid error:', error);
    
    // Provide more helpful error messages
    if (error.response) {
      const { body, statusCode } = error.response;
      console.error('SendGrid API Error:', statusCode, body);
      
      // Common SendGrid errors
      if (statusCode === 403) {
        return NextResponse.json(
          { error: 'Email service authentication failed. Please check API key.' },
          { status: 500 }
        );
      }
      if (statusCode === 400 && body?.errors) {
        const errorMessage = body.errors.map((e: any) => e.message).join(', ');
        return NextResponse.json(
          { error: `Email validation error: ${errorMessage}` },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
