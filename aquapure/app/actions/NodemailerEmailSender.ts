"use server";
import nodemailer from 'nodemailer';

export async function sendMail(formData?: FormData) {
  // Use fallbacks to ensure strings are passed to Nodemailer
  const CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
  const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
  const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN || '';
  const SENDER_EMAIL = process.env.SENDER_EMAIL || 'filtotechofficial@gmail.com';
  const RECEIVING_EMAIL = process.env.RECEIVING_EMAIL || '';
  // Extract data if coming from the form
  const customerName = formData?.get('name') || 'Valued Customer';
  const customerEmail = formData?.get('email') || 'No Email';
  const inquiryType = formData?.get('inquiryType') || 'General Inquiry';
  const customerMessage = formData?.get('message') || 'Test Message';
  console.log("formData", formData);
  try {
    // Use OAuth2 for Gmail
    if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
      throw new Error('Missing OAuth2 credentials. Set GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, and GOOGLE_REFRESH_TOKEN in your .env.local');
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: SENDER_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
      },
    });

    const mailOptions = {
      from: `Aquapure <${SENDER_EMAIL}>`,
      to: RECEIVING_EMAIL, // Send the inquiry TO yourself
      replyTo: customerEmail as string,
      subject: `New Inquiry from ${customerName}`,
      text: customerMessage as string,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${customerName}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <p><strong>Email:</strong> ${customerEmail}</p>
        <p><strong>Message:</strong> ${customerMessage}</p>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return { success: true };

  } catch (error: any) {
    console.error('Nodemailer Error:', error);
    return { success: false, error: error.message };
  }
}

// REMOVED: sendMail(); <--- Delete this line so it doesn't run on every refresh/build