"use client";

export default function Partners() {
  const items = [
    { label: "Startups" },
    { label: "Tech Teams" },
    { label: "Educational Institutions" },
    { label: "Digital Creators" },
    { label: "Growing Businesses" },
  ];

  const skeletons = Array(5).fill(null);

  return (
    <section className="w-full py-20 px-10">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-4">
        <span className="px-4 py-1.5 text-sm rounded-full bg-muted text-muted-foreground border border-border/40">
          Partners
        </span>

        <h2 className="text-3xl md:text-4xl font-bold">
          Building With Visionary Teams
        </h2>

        <p className="max-w-2xl text-muted-foreground text-lg">
          We’re preparing to onboard our first official partners — join us early
          and grow together.
        </p>
      </div>

      {/* Skeleton cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skeletons.map((_, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-border/50 bg-muted/30 p-6 flex flex-col gap-3 animate-pulse"
          >
            <div className="w-12 h-12 rounded-xl bg-muted-foreground/20" />
            <div className="h-4 w-2/3 bg-muted-foreground/20 rounded" />
            <div className="h-3 w-1/2 bg-muted-foreground/10 rounded" />
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div className="mt-10 text-center">
        <p className="text-muted-foreground text-base">
          <strong className="text-primary">Be the first ones!</strong>  
          — we’re currently open for strategic partnerships.
        </p>

        <button className="mt-4 px-6 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium shadow hover:opacity-90 transition">
          Become a Partner
        </button>
      </div>
    </section>
  );
}
