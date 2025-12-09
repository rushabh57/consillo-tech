// api/sendEmail.js
import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { name, email, message } = req.body;

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "ConsiloTech <noreply@yourdomain.com>",
      to: "your-email@domain.com",
      subject: "New Contact Form Message",
      html: `
        <h2>Message from ${name}</h2>
        <p>Email: ${email}</p>
        <p>${message}</p>
      `,
    });

    await resend.emails.send({
      from: "ConsiloTech <noreply@yourdomain.com>",
      to: email,
      subject: "Thanks for contacting us!",
      html: `
        <h2>Hello ${name}</h2>
        <p>We received your message.</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.log("Email error:", err);
    return res.status(500).json({ error: err.message });
  }
}
