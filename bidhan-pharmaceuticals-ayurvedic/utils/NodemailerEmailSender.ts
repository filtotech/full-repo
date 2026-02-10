// Email sending utility function using Nodemailer with Gmail's OAUTH2.0 
// Make sure to set the following environment variables in your .env file as provided in the .env.exampple file...
// DONT TAMPER THE [ .env ] FILE as it is used for storing sensitive information and should not be shared publicly.
import nodemailer from 'nodemailer';



// 1. Define your credentials
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;//'YOUR_CLIENT_ID_HERE';
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET//'YOUR_CLIENT_SECRET_HERE';
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN//'YOUR_REFRESH_TOKEN_HERE'; 
const SENDER_EMAIL = 'filtotechofficial@gmail.com';

export async function sendMail() {
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
      from: `BIDHAN PHARMACEUTICALS PVT. LTD.- [AYURVEDIC DIVISION] <${SENDER_EMAIL}>`,
      to: process.env.RECEIVING_EMAIL, // Change this to your test recipient IF REQUIRED
      subject: 'Nodemailer OAuth2 Success!',
      text: 'If you are reading this, your OAuth2 setup is working perfectly.',
      html: '<h1>Success!</h1><p>Your Nodemailer app is now authenticated via OAuth2.</p>',
    };

    // 4. Send it!
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);

  } catch (error: any) {
    console.error('Error occurred:', error.message);
  }
}

sendMail();