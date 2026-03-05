import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-16 md:flex-row md:gap-12 md:py-24">
        {/* Text content */}
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">
              Breathe the{" "}
              <span className="italic">World</span>, Sealed.
            </span>
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Real air from real places. Collected, sealed, dated, and delivered in
            limited batches.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/#shop"
              className="inline-flex h-12 items-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Shop the Collection
            </Link>
            <Link
              href="/countries"
              className="inline-flex h-12 items-center rounded-md border-2 border-primary px-6 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Explore Countries
            </Link>
          </div>
        </div>

        {/* Hero can image */}
        <div className="relative flex flex-1 items-center justify-center">
          {/* Warm glow */}
          <div className="absolute h-80 w-80 rounded-full bg-accent/40 blur-3xl md:h-96 md:w-96" />
          <div className="relative z-10 h-72 w-56 md:h-96 md:w-72">
            <Image
              src="/images/hero-can.jpg"
              alt="Swiss Alps canned air with authenticity seal"
              fill
              className="object-contain drop-shadow-2xl"
              priority
              sizes="(max-width: 768px) 224px, 288px"
            />
          </div>
          {/* Country label */}
          <div className="absolute bottom-4 right-4 z-20 rounded-md bg-background/90 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-sm md:bottom-8 md:right-8">
            country label
          </div>
        </div>
      </div>
    </section>
  );
}
