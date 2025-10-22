import nodemailer from "nodemailer";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const fromEmail = process.env.FROM_EMAIL || "no-reply@example.com";

if (!smtpHost || !smtpUser || !smtpPass) {
  // In development you may want to skip throwing; but in production prompt config failure
  console.warn("SMTP config incomplete. Emails will fail unless SMTP_* env vars are set.");
}

export const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpPort === 465,
  auth: smtpUser ? { user: smtpUser, pass: smtpPass } : undefined,
});

// helper functions
export async function sendConfirmationEmail(email: string, confirmUrl: string, unsubUrl: string) {
  const html = `
    <p>Thanks for signing up for the Boundier beta!</p>
    <p>Please confirm your email by clicking the link below:</p>
    <p><a href="${confirmUrl}">Confirm my email</a></p>
    <hr/>
    <p>If you didn't sign up or want to unsubscribe, click <a href="${unsubUrl}">Unsubscribe</a>.</p>
  `;
  return transporter.sendMail({
    from: fromEmail,
    to: email,
    subject: "Confirm your Boundier beta signup",
    html,
  });
}

export async function sendAlreadyOnListEmail(email: string, unsubUrl: string) {
  const html = `
    <p>Your email is already on the Boundier waitlist.</p>
    <p>If you want to unsubscribe, click <a href="${unsubUrl}">Unsubscribe</a>.</p>
  `;
  return transporter.sendMail({
    from: fromEmail,
    to: email,
    subject: "You're already on the Boundier waitlist",
    html,
  });
}
