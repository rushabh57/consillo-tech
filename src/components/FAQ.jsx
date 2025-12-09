"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="w-full py-24 px-10">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
        <span className="px-4 py-1.5 text-sm rounded-full bg-muted text-muted-foreground border border-border/40">
          FAQ
        </span>

        <h2 className="text-3xl md:text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        <p className="max-w-xl text-muted-foreground text-lg">
          Quick answers to the most common questions we receive.
        </p>
      </div>

      {/* Accordion */}
      <div className="mt-12 max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-3">
          <AccordionItem value="item-1">
            <AccordionTrigger>What services do you provide?</AccordionTrigger>
            <AccordionContent>
              We help with system design, full-stack development, product
              engineering, and long-term support from planning to deployment.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Do you work with startups?</AccordionTrigger>
            <AccordionContent>
              Yes, we collaborate with startups and fast-moving teams to build
              MVPs, scale systems, and ship production-ready features.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can you build full production-grade applications?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely. We cover architecture, backend APIs, frontend,
              databases, devops, deployment, and optimization.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Do you offer long-term support?</AccordionTrigger>
            <AccordionContent>
              Yes. We provide maintenance, feature updates, scaling support, and
              performance improvements as your product grows.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
