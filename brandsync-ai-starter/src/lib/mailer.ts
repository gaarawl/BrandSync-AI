import nodemailer from "nodemailer";
export async function sendMail(to: string, subject: string, html: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT || 465),
    secure: true,
    auth: { user: process.env.EMAIL_SERVER_USER, pass: process.env.EMAIL_SERVER_PASSWORD }
  });
  return transporter.sendMail({ from: process.env.EMAIL_FROM, to, subject, html });
}
