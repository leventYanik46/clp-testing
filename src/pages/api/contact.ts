import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
export const prerender = false;

export async function POST({ request }) {
  dotenv.config();
  const { name, email, phone, message } = await request.json();

  // Validate required fields
  if (!name || !email || !phone || !message) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  // OAuth2 Credentials (Set these in your environment variables)
  const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
  const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;
  const SENDER_EMAIL = process.env.GOOGLE_EMAIL; // Your Gmail account

  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN || !SENDER_EMAIL) {
    return new Response(JSON.stringify({ error: 'Missing OAuth2 credentials' }), { status: 500 });
  }

  const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  );

  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  try {
    const accessToken = await oAuth2Client.getAccessToken();
    if (!accessToken.token) {
      throw new Error('Failed to retrieve access token.');
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465, // Use 587 for STARTTLS
      secure: true, // `true` for port 465, `false` for port 587
      auth: {
        type: 'OAuth2',
        user: SENDER_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: `Website Contact Form <${SENDER_EMAIL}>`, // Must be your Gmail
      to: SENDER_EMAIL, // Send it to yourself
      replyTo: email, // Allows you to reply directly to the user
      subject: `New Contact: ${name}`,
      text: `Email: ${email}\nPhone: ${phone}\nMessage: ${message}\n-------------`,
    };
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({
        success: true,
        mail: mailOptions,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('ERROR sending email:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
