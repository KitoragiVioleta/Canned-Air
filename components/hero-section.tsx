import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-14 md:flex-row md:gap-12 md:px-6 md:py-24">
        {/* Text content */}
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          <h1 className="font-serif text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-[60px]">
            <span className="text-balance">
              Breathe the{"\n"}
              <span className="italic">World</span>, Sealed.
            </span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Real air from real places. Collected, sealed, dated, and delivered in
            limited batches.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/#shop"
              className="inline-flex h-12 items-center rounded-xl bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Shop the Collection
            </Link>
            <Link
              href="/countries"
              className="inline-flex h-12 items-center rounded-xl border-2 border-primary px-7 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Explore Countries
            </Link>
          </div>
        </div>

        {/* Hero can image */}
        <div className="relative flex flex-1 items-center justify-center">
          {/* Warm radial glow */}
          <div className="absolute h-72 w-72 rounded-full bg-accent/30 blur-[80px] md:h-[400px] md:w-[400px]" />

          <div className="relative z-10 h-72 w-52 md:h-[420px] md:w-[280px]">
            <Image
              src="/images/hero-can.jpg"
              alt="Swiss Alps canned air with authenticity seal"
              fill
              className="object-contain drop-shadow-2xl"
              priority
              sizes="(max-width: 768px) 208px, 280px"
            />
          </div>

          {/* Country label pill */}
          <div className="absolute right-2 top-6 z-20 rounded-full bg-background/90 px-3 py-1 text-[11px] font-medium text-muted-foreground shadow-sm ring-1 ring-border backdrop-blur-sm md:right-4 md:top-12">
            country label
          </div>

          {/* Authenticity seal stamp */}
          <div className="absolute -bottom-2 left-2 z-20 flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-foreground/30 bg-background/90 backdrop-blur-sm md:bottom-4 md:left-4 md:h-24 md:w-24">
            <div className="flex flex-col items-center">
              <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-foreground/70 md:text-[9px]">
                Authenticity
              </span>
              <span className="text-[10px] font-black uppercase tracking-wider text-foreground md:text-xs">
                Seal
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
