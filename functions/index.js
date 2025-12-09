const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const { Resend } = require("resend");

const resend = new Resend(functions.config().resend.key);

exports.sendThankYouEmail = functions.https.onRequest(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).send("");
  }

  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const { name, email } = req.body;
  if (!name || !email) return res.status(400).send("Missing fields");

  try {
    await resend.emails.send({
      from: "Your Company <noreply@yourdomain.com>",
      to: email,
      subject: "Thanks for reaching out!",
      html: `<h2>Hi ${name},</h2><p>We received your message and will get back to you soon.</p><br/><p>Regards,<br/>Team</p>`,
    });

    res.status(200).send({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message || "Unknown error" });
  }
});
