"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Layers, Rocket, Sparkles, Users } from "lucide-react";

export default function WhatWeDo() {
  const items = [
    {
      title: "1. Discovery & Requirements",
      icon: <Users className="w-8 h-8 text-primary" />,
      desc: "We understand the goal, collect requirements, and identify challenges to set a clear direction.",
    },
    {
      title: "2. System Architecture",
      icon: <Layers className="w-8 h-8 text-primary" />,
      desc: "We plan the structure, choose the right tech, and design scalable, maintainable system blueprints.",
    },
    {
      title: "3. Product Engineering",
      icon: <Rocket className="w-8 h-8 text-primary" />,
      desc: "We convert ideas into real features using best engineering practices and modern development workflows.",
    },
    {
      title: "4. Full-Stack Development",
      icon: <Code className="w-8 h-8 text-primary" />,
      desc: "We build powerful frontends and efficient backend APIs that deliver speed, reliability, and clean UX.",
    },
    {
      title: "5. QA, Testing & Optimization",
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      desc: "We test for performance, security, consistency, and ensure everything runs smoothly across all devices.",
    },
    {
      title: "6. Launch & Continuous Support",
      icon: <Rocket className="w-8 h-8 text-primary rotate-45" />,
      desc: "We deploy, monitor, improve, and support the product to help it scale confidently over time.",
    },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-10">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-4">
        <span className="px-4 py-1.5 text-sm rounded-full bg-muted text-muted-foreground border">
          What We Do
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Turning Ideas Into Real, Scalable Products
        </h2>

        <p className="max-w-2xl text-muted-foreground text-lg">
          From architecture to execution — every step is centered around quality.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto mt-16 max-w-4xl">
        {/* Vertical line (only on md+) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-border/40 -translate-x-1/2"></div>

        <div className="flex flex-col gap-12 md:gap-20">
          {items.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.title}
                className={`
                  relative flex w-full 
                  ${isLeft ? "md:justify-start" : "md:justify-end"}
                `}
              >
                {/* Dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>

                {/* Card */}
                <Card
                  className={`
                    w-full md:w-[45%] 
                    rounded-2xl shadow-sm
                    ${isLeft ? "md:mr-auto" : "md:ml-auto"}
                  `}
                >
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-3 rounded-xl bg-muted">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground text-base">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
