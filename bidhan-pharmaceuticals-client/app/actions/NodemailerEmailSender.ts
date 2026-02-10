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
      from: `Bidhan Pharmaceuticals [AYURVEDIC DIVISION] <${SENDER_EMAIL}>`,
      to: RECEIVING_EMAIL, // Send the inquiry TO yourself
      replyTo: customerEmail as string,
      subject: `New Inquiry from ${customerName}`,
      attachments: [{
    filename: 'bidhanlogo.png',
    path: './public/bidhanlogo.png', // Path to your file
    cid: 'companylogo' // Same name as used in the src="cid:..."
  }],
      text: customerMessage as string,
     html: `
<!DOCTYPE html>
<html>
<body style="margin: 0; padding: 0; background-color: #f4f7f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.08);">
          
          <tr>
            <td align="center" style="background-color: #1D4ED8; padding: 30px 20px;">
              <h2 style="color: #ffffff; margin: 0; font-size: 20px; letter-spacing: 1px; display: flex; justify-content: center; align-items: center;"><img src="cid:companylogo" alt="Bidhan Pharmaceuticals Ayurvedic Division Logo" style="width: 100offpx; height: auto; margin-bottom: 10px;">BIDHAN PHARMACEUTICALS [AYURVEDIC DIVISION]</h2>
            </td>
          </tr>

          <tr>
            <td style="padding: 40px 30px;">
              <h3 style="color: #374151; font-size: 18px; margin-top: 0;">New Contact Form Submission</h3>
              <p style="color: #6b7280; font-size: 14px; margin-bottom: 25px;">You have received a new inquiry through the company website. Details are provided below:</p>
              
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 10px; border-bottom: 1px solid #edf2f7; color: #1D4ED8; font-weight: bold; width: 30%; font-size: 13px;">NAME</td>
                  <td style="padding: 12px 10px; border-bottom: 1px solid #edf2f7; color: #374151; font-size: 14px;">${customerName}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 10px; border-bottom: 1px solid #edf2f7; color: #1D4ED8; font-weight: bold; font-size: 13px;">INQUIRY TYPE</td>
                  <td style="padding: 12px 10px; border-bottom: 1px solid #edf2f7; color: #374151; font-size: 14px;">${inquiryType}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 10px; border-bottom: 1px solid #edf2f7; color: #1D4ED8; font-weight: bold; font-size: 13px;">EMAIL</td>
                  <td style="padding: 12px 10px; border-bottom: 1px solid #edf2f7; color: #1D4ED8; font-size: 14px; text-decoration: none;">${customerEmail}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 10px; color: #1D4ED8; font-weight: bold; font-size: 13px; vertical-align: top;">MESSAGE</td>
                  <td style="padding: 12px 10px; color: #374151; font-size: 14px; line-height: 1.5;">${customerMessage}</td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="background-color: #f8fafc; padding: 20px 30px; border-top: 1px solid #e2e8f0;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="color: #94a3b8; font-size: 12px;">
                    <strong>Bidhan Pharmaceuticals Pvt. Ltd.</strong><br>
                    This is an automated system notification.
                  </td>
                  <td align="right">
                    <div style="height: 3px; width: 30px; background-color: #1D4ED8;"></div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
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