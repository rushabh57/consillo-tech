"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, Rocket, Sparkles, Smile } from "lucide-react";

export default function AboutUs() {
  const items = [
    {
      label: "Creative Team",
      icon: <Users className="w-8 h-8 text-primary" />,
      content:
        "Our creative team consists of engineers, designers, and problem solvers who collaborate to craft innovative solutions. We focus on user experience, scalability, and aesthetics.",
    },
    {
      label: "Innovation First",
      icon: <Rocket className="w-8 h-8 text-primary" />,
      content:
        "Innovation drives everything we do. We experiment with new technologies to stay ahead of the curve and deliver future-proof digital products.",
    },
    {
      label: "High Quality",
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      content:
        "Quality is core to our work — from clean code and scalable architecture to polished UX. Every product undergoes rigorous testing.",
    },
    {
      label: "Human Focused",
      icon: <Smile className="w-8 h-8 text-primary" />,
      content:
        "We build intuitive and enjoyable experiences. Every decision is made with the user in mind to maximize engagement and satisfaction.",
    },
  ];

  return (
    <section className="w-full py-24 px-10">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-4">
        <span className="px-4 py-1.5 text-sm rounded-full bg-muted text-muted-foreground border border-border/40">
          About Us
        </span>
        <h2 className="text-4xl md:text-5xl font-bold">
          We Build Modern & Scalable Digital Products
        </h2>
        <p className="max-w-2xl text-muted-foreground text-lg">
          Our team designs, builds, and scales beautiful and powerful technology.
        </p>
      </div>

      {/* Cards */}
      <div className="grid max-w-5xl mx-auto mt-12 gap-6 grid-cols-1 md:grid-cols-2">
        {items.map((item) => (
          <Card key={item.label} className="rounded-2xl shadow-none">
            <CardHeader className="flex flex-col items-center gap-3">
              {item.icon}
              <CardTitle className="text-xl">{item.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center text-base">
                {item.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
