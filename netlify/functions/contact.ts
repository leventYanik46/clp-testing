import { google } from "googleapis";
import nodemailer from "nodemailer";
import dotenv from 'dotenv';
import type { Handler } from '@netlify/functions';

dotenv.config()

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed"}
  }
  try {
    const { name, email, phone, message } = JSON.parse(event.body || "{}");
    if (!name || !email || !phone || !message) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing required fields" }) };
    }

    // OAuth2 Credentials (Set these in your environment variables)
    const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
    const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;
    const SENDER_EMAIL = process.env.GOOGLE_EMAIL; // Your Gmail account

    if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN || !SENDER_EMAIL) {
      return { statusCode: 500, body: JSON.stringify({ error: "Missing OAuth2 credentials" }) };
    }

    const oAuth2Client = new google.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });


    const accessToken = await oAuth2Client.getAccessToken();
    if (!accessToken.token) { throw new Error("Failed to retrieve access token."); }

    const transporter = nodemailer.createTransport({
      host: "gmail",
      auth: {
        type: "OAuth2",
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
      subject: `Client: ${name}`,
      text: `Email: ${email}\nPhone: ${phone}\nMessage:\n${message}\n------------------------\nSent from your website contact form.`,
    };
    await transporter.sendMail(mailOptions);
    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (error) {
    console.error("ERROR sending email:", error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
}
