import Image from "next/image";

export function WhyAirSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
          {/* Text */}
          <div className="flex-1">
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
              Why air?
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Canned Air is somewhere between a travel souvenir and an art
                piece. Every can holds a real sample of air from an iconic and
                beautiful place on Earth.
              </p>
              <p>
                Beautiful photo, a beautifully made concept, advanced on
                craftsmanship, intentionally created. Carefully collected,
                sealed, and labeled with its exact origin, date, and batch ID
                &mdash; each can is a snapshot of a real place in time.
              </p>
              <p>
                It&apos;s a poetic reminder that the air we breathe connects us
                to the real countries and beautiful places. More than a product,
                it&apos;s an invitation to pause, breathe, and remember the
                vastness of the world beyond your walls.
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="flex-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/shelf.jpg"
                alt="Collection of canned air products displayed on a shelf"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
