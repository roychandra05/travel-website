// RESEND

import EmailTamplate from "@/components/EmailTamplate";
import { Resend } from "resend";
const { PUBLIC_EMAIL, RESEND_API_KEY } = process.env;
const resend = new Resend(RESEND_API_KEY);

export const sendEmail = async (name, email, phoneNumber, message) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "FROM_TRAVEL_APP <onboarding@resend.dev>",
      to: [PUBLIC_EMAIL],
      subject: "To book or inquire",
      react: EmailTamplate({ name: name, email: email, message: message, phoneNumber:phoneNumber }),
      replyTo: email,
    });
    if (error) {
      return error;
    }
    return data;
  } catch (error) {
    return error;
  }
};
export default sendEmail;

// NODEMAILER

// import nodemailer from "nodemailer";
// import { google } from "googleapis";

// const OAuth2 = google.auth.OAuth2;
// const OAuth2_client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
// OAuth2_client.setCredentials({ refresh_token: REFRESH_TOKEN });

// export default async function sendEmail(name, email, subject, message) {
//   const ACCESS_TOKEN = await OAuth2_client.getAccessToken();

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     port:587,
//     secure: false,
//     socketTimeout: 1000,

//     auth: {
//       type: "OAuth2",
//       user: PUBLIC_EMAIL,
//       clientId: CLIENT_ID,
//       clientSecret: CLIENT_SECRET,
//       refreshToken: REFRESH_TOKEN,
//       accessToken: ACCESS_TOKEN,

//     },
//   });

//   try {
//     const testResult = await transporter.verify();
//     // console.info(testResult);
//   } catch (error) {
//     return { error };
//   }
//   console.info(name, email, subject, message);
//   try {
//     const sendResult = await transporter.sendMail({
//       from: PUBLIC_EMAIL,
//       to: PUBLIC_EMAIL,
//       subject: "Response from travel app" + email,
//       text: `name: ${name}`,
//       html: `<div> <h2>from: ${name}</h2> <h2>email: ${email}</h2> <h3>subject: ${subject}</h3> <h3>message: ${message} </h3> </div>`,
//     });
//     return sendResult;
//   } catch (error) {
//     return error;
//   }
// }


