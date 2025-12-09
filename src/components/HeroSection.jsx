import { Button } from "@/components/ui/button";
import { Separator } from "./ui/separator";

export default function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-80px)] w-full px-10 overflow-hidden">
      
      {/* LEFT ACCENT SVG */}
      <svg
        className="absolute -left-10 top-32 w-40 opacity-20"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="80" fill="#c4b5fd" />
      </svg>

      {/* RIGHT ACCENT SVG */}
      <svg
        className="absolute right-0 bottom-20 w-32 opacity-20"
        viewBox="0 0 200 200"
      >
        <rect width="180" height="180" rx="40" fill="#93c5fd" />
      </svg>

      {/* CENTERED CONTENT */}
      <div className="text-center flex flex-col items-center justify-center w-full h-full z-10 relative">
        
        <span className="px-4 py-1.5 text-sm rounded-full bg-muted text-muted-foreground border border-border/50 inline-block">
          Empowering Digital Growth
        </span>

        <h1 className="text-5xl font-bold leading-tight mt-4">
          Build Smart & <br /> Scalable Products
        </h1>

        <p className="text-lg text-muted-foreground max-w-xl mt-2">
          Fast, simple, and production-ready solutions for your entire business ecosystem.
        </p>

        <Button size="lg" className="mt-6 cursor-pointer">
          Get in Touch
        </Button>
      </div>

      <Separator className="mt-8" />


         {/* Floating Accent SVGs */}
         <svg
        className="absolute left-50 top-[300px] w-28 opacity-20"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="80" fill="#c4b5fd" />
      </svg>

      <svg
        className="absolute right-40 top-[500px] w-20 opacity-20"
        viewBox="0 0 200 200"
      >
        <rect width="180" height="180" rx="40" fill="#93c5fd" />
      </svg>
    </section>
  );
}
