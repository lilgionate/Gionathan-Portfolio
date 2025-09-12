// api/contact.js
import 'dotenv/config';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const { user_name, user_email, user_phone, user_option, message } = req.body || {};
  if (!user_name || !user_email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const html = `
      <p><strong>From:</strong> ${user_name}</p>
      <p><strong>Email:</strong> ${user_email}</p>
      <p><strong>Phone:</strong> ${user_phone || ''}</p>
      <p><strong>Subject:</strong> ${user_option || ''}</p>
      <pre style="white-space:pre-wrap">${message}</pre>
    `;

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      subject: `New message from ${user_name}${user_option ? ' - ' + user_option : ''}`,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Mailer error:', err);
    return res.status(500).json({ error: 'Email failed to send' });
  }
}
