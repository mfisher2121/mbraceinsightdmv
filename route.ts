import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

  try {
    await sgMail.send({
      to: 'mfisher@mbraceinsight.com',
      from: 'noreply@mbraceinsight.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `<p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
