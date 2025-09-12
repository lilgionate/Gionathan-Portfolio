// api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // envs must be set in Vercel Settings (and .env.local for local)
    const need = ['SMTP_USER','SMTP_PASS','FROM_EMAIL','TO_EMAIL'];
    const missing = need.filter(k => !process.env[k]);
    if (missing.length) {
      return res.status(500).json({ error: 'Missing env', missing });
    }

    const { user_name, user_email, user_phone, user_option, message } = req.body || {};
    if (!user_name || !user_email || !message) {
      return res.status(400).json({ error: 'Missing required fields: user_name, user_email, message' });
    }

    // Gmail transport (requires App Password)
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });

    // If Gmail service fails (some regions), fall back to port 465
    try {
      await transporter.verify();
    } catch {
      transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      });
      await transporter.verify();
    }

    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.FROM_EMAIL}>`, // should equal SMTP_USER for Gmail
      to: process.env.TO_EMAIL,
      replyTo: user_email,
      subject: `New message from ${user_name}${user_option ? ' - ' + user_option : ''}`,
      html: `
        <p><strong>From:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Phone:</strong> ${user_phone || ''}</p>
        <p><strong>Subject:</strong> ${user_option || ''}</p>
        <pre style="white-space:pre-wrap">${message}</pre>
      `
    });

    return res.status(200).json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error('Mailer error:', err);
    return res.status(500).json({ error: err?.message || 'Email failed', code: err?.code || null });
  }
}
