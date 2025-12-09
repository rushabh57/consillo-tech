"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "toast-face";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");

    if (!name || !email || !message) {
      toast.error("All fields are required!");
      return;
    }

    try {
      setLoading(true);

      // 1️⃣ SEND EMAIL TO YOU (ADMIN)
      await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });
      
      toast.success("Message sent successfully!");
      e.currentTarget.reset();
    } catch (err) {
      toast.error(err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full py-24 px-10">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4 animate-fade-up">
        <span className="px-4 py-1.5 text-sm rounded-full bg-muted text-muted-foreground border border-border/40">
          Contact
        </span>
        <h2 className="text-3xl md:text-4xl font-bold">Let's Connect</h2>
        <p className="max-w-xl text-muted-foreground text-lg">
          Have a project or idea? Send a message — we usually reply within hours.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* LEFT CARD */}
        <Card className="p-8 rounded-2xl flex flex-col gap-6 animate-fade-right">
          <h3 className="text-xl font-semibold">Contact Details</h3>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">contact@yourdomain.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">+91 98765 43210</span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">
              Gujarat, India <br /> Remote worldwide
            </span>
          </div>
        </Card>

        {/* RIGHT CARD */}
        <Card className="p-8 rounded-2xl animate-fade-left">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <Input name="name" placeholder="Your Name" className="h-12" />
            <Input name="email" type="email" placeholder="Your Email" className="h-12" />
            <Textarea name="message" placeholder="Your Message" rows={5} />
            <Button
              disabled={loading}
              className="h-12 text-base font-medium flex items-center gap-2"
              type="submit"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
