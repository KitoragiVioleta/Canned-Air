import { Star } from "lucide-react";

interface Review {
  name: string;
  rating: number;
  text: string;
  product: string;
}

const reviews: Review[] = [
  {
    name: "Monty",
    rating: 5,
    text: "Honestly, I bought it as a joke. But the packaging is gorgeous and it made an incredible gift. My friend who loves Iceland was genuinely moved.",
    product: "Iceland Glaciers",
  },
  {
    name: "Jem",
    rating: 5,
    text: "This is the most unique thing I've ever bought online. The batch ID and coordinates give it a real sense of authenticity. Love it.",
    product: "Swiss Alps",
  },
  {
    name: "Boris",
    rating: 4,
    text: "Got this for my partner who misses Tokyo terribly. She cried happy tears. That alone made it worth every penny.",
    product: "Tokyo Sakura",
  },
  {
    name: "Seawen",
    rating: 5,
    text: "I collect these now. Each can sits on my shelf like a little piece of the world. The Scottish Highlands one has the most beautiful label.",
    product: "Scottish Highlands",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-accent text-accent"
              : "fill-none text-border"
          }`}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-muted">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
          Reviews
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex flex-col gap-3 rounded-lg border border-border bg-card p-5"
            >
              <StarRating rating={review.rating} />
              <p className="flex-1 text-sm leading-relaxed text-card-foreground">
                {review.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {review.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {review.product}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
