"use server";
import nodemailer from 'nodemailer';



// 1. Define your credentials
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;//'YOUR_CLIENT_ID_HERE';
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET//'YOUR_CLIENT_SECRET_HERE';
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN//'YOUR_REFRESH_TOKEN_HERE'; // The one you just copied
const SENDER_EMAIL = 'filtotechofficial@gmail.com';

export async function sendMail() {
  // e.preventDefault();
  try {
    // 2. Create the transporter with OAuth2
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

    // 3. Define the email details
    const mailOptions = {
  from: `"BIDHAN PHARMACEUTICALS PVT. LTD." <${process.env.SENDER_EMAIL}>`,
  to: process.env.RECEIVING_EMAIL,
  subject: 'New Inquiry: Bidhan Pharmaceuticals',
  text: 'Thank you for your inquiry. Our team will get back to you shortly.',
  html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bidhan Pharmaceuticals</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f4f4f7; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td align="center" style="padding: 20px 0;">
            <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
              
              <tr>
                <td align="center" style="background-color: #1D4ED8; padding: 30px 20px;">
                  <img src="/bidhanlogo.png" alt="Bidhan Pharmaceuticals" width="180" style="display: block; font-family: Arial, sans-serif; color: #ffffff; font-size: 20px; font-weight: bold;">
                </td>
              </tr>

              <tr>
                <td style="padding: 40px 30px;">
                  <h1 style="margin: 0 0 20px 0; color: #111827; font-size: 22px; font-weight: 700; line-height: 1.3;">
                    New Inquiry Received
                  </h1>
                  <p style="margin: 0 0 25px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                    Hello,<br><br>
                    You have received a new contact form submission. Below are the details of the inquiry:
                  </p>

                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f9fafb; border-radius: 6px; border: 1px solid #e5e7eb;">
                    <tr>
                      <td style="padding: 15px; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 12px; text-transform: uppercase; font-weight: bold; width: 30%;">Name</td>
                      <td style="padding: 15px; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px; font-weight: 500;">Bidhan Pharmaceuticals Pvt. Ltd.</td>
                    </tr>
                    <tr>
                      <td style="padding: 15px; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 12px; text-transform: uppercase; font-weight: bold;">Inquiry Type</td>
                      <td style="padding: 15px; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px;">Bulk/Institutional Purchase</td>
                    </tr>
                    <tr>
                      <td style="padding: 15px; color: #6b7280; font-size: 12px; text-transform: uppercase; font-weight: bold;">Message</td>
                      <td style="padding: 15px; color: #111827; font-size: 14px;">Final test in production environment.</td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="background-color: #374151; padding: 30px; border-top: 4px solid #1D4ED8;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td align="left" style="color: #9ca3af; font-size: 12px; line-height: 1.5;">
                        <strong style="color: #ffffff;">Bidhan Pharmaceuticals Pvt. Ltd.</strong><br>
                        Industrial Area, Sector 5, Building 42<br>
                        Support: support@bidhanpharma.com
                      </td>
                      <td align="right">
                         <div style="width: 40px; height: 2px; background-color: #1D4ED8; margin-bottom: 10px;"></div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

            </table>
            
            <p style="color: #9ca3af; font-size: 11px; margin-top: 20px;">
              © 2026 Bidhan Pharmaceuticals. All rights reserved.
            </p>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `,
};

    // 4. Send it!
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);

  } catch (error: any) {
    console.error('Error occurred:', error.message);
  }
}

sendMail();