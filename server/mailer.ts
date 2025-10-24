import nodemailer from "nodemailer";

const DEFAULT_RECEIVER = "boundierofficial@gmail.com";
const DEFAULT_FROM = process.env.EMAIL_FROM || `Boundier <${DEFAULT_RECEIVER}>`;

/**
 * Transporter configuration:
 * - Uses SMTP settings from environment variables:
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE
 * - If SMTP_* variables are not provided, transporter will be created in "direct" mode
 *   which may not deliver reliably. Provide SMTP credentials in production.
 */
function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const secure = process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (host && port && user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });
  }

  // Fallback transporter: will attempt to send without auth (may be blocked by providers).
  // For reliable delivery, set SMTP_* env vars.
  return nodemailer.createTransport({
    host: host || "localhost",
    port: port || 587,
    secure: secure || false,
  });
}

const transporter = createTransporter();

// Verify transporter once (log but do not throw)
transporter.verify().catch((err) => {
  // eslint-disable-next-line no-console
  console.warn("Mailer verification failed (emails may not send):", err?.message || err);
});

/**
 * Send an email but always direct the actual delivery to DEFAULT_RECEIVER:
 * - 'to' is forced to DEFAULT_RECEIVER so that all outgoing messages are received at
 *   boundierofficial@gmail.com as requested.
 * - 'replyTo' is set to the original user's email so replies go to the user if desired.
 *
 * The original intended recipient email is included in subject and body so you can
 * identify who the email was for while still funneling deliveries to one monitored address.
 */
async function sendEmail({
  toEmail,
  subject,
  text,
  html,
}: {
  toEmail: string;
  subject: string;
  text?: string;
  html?: string;
}) {
  const mailOptions = {
    from: DEFAULT_FROM,
    to: DEFAULT_RECEIVER, // override: send to boundierofficial@gmail.com
    // set reply-to to the real user so replies route back to them:
    replyTo: toEmail,
    subject,
    text,
    html,
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
}

export async function sendConfirmationEmail(toEmail: string, confirmUrl: string, unsubUrl: string) {
  const subject = `Waitlist confirmation requested for ${toEmail}`;
  const text = [
    `A new waitlist signup was submitted for: ${toEmail}`,
    "",
    `Confirm the address: ${confirmUrl}`,
    `Unsubscribe: ${unsubUrl}`,
    "",
    `This email was routed to ${DEFAULT_RECEIVER} for monitoring. Reply-to is set to ${toEmail}.`,
  ].join("\n");

  const html = `
    <p>A new waitlist signup was submitted for: <strong>${toEmail}</strong></p>
    <p>Confirm the address: <a href="${confirmUrl}">${confirmUrl}</a></p>
    <p>Unsubscribe: <a href="${unsubUrl}">${unsubUrl}</a></p>
    <hr/>
    <p>This message was routed to <strong>${DEFAULT_RECEIVER}</strong> for monitoring. Reply-to is set to <em>${toEmail}</em>.</p>
  `;

  return sendEmail({ toEmail, subject, text, html });
}

export async function sendAlreadyOnListEmail(toEmail: string, unsubUrl: string) {
  const subject = `Waitlist: already registered (${toEmail})`;
  const text = [
    `An attempt was made to add ${toEmail} to the waitlist but they are already on it.`,
    "",
    `Unsubscribe: ${unsubUrl}`,
    "",
    `This email was routed to ${DEFAULT_RECEIVER} for monitoring. Reply-to is set to ${toEmail}.`,
  ].join("\n");

  const html = `
    <p>An attempt was made to add <strong>${toEmail}</strong> to the waitlist but they are already registered.</p>
    <p>Unsubscribe: <a href="${unsubUrl}">${unsubUrl}</a></p>
    <hr/>
    <p>This message was routed to <strong>${DEFAULT_RECEIVER}</strong> for monitoring. Reply-to is set to <em>${toEmail}</em>.</p>
  `;

  return sendEmail({ toEmail, subject, text, html });
}
