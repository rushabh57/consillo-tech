// api/sendEmail.js

import { Resend } from "resend";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const resend = new Resend(process.env.VITE_RESEND_API_KEY);

    // Send to admin
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

    // Send thank-you mail
    await resend.emails.send({
      from: "ConsiloTech <noreply@yourdomain.com>",
      to: email,
      subject: "Thanks for contacting us!",
      html: `
        <h2>Hello ${name}</h2>
        <p>We received your message.</p>
      `,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
