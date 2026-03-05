import { Package, CalendarDays, Gift } from "lucide-react";

const badges = [
  {
    icon: Package,
    label: "LIMITED BATCHES",
  },
  {
    icon: CalendarDays,
    label: "BATCH ID & DATE",
  },
  {
    icon: Gift,
    label: "GIFT-READY PACKAGING",
  },
];

export function TrustBadges() {
  return (
    <section className="bg-background">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-4 py-6 md:gap-4 md:px-6">
        {badges.map((badge) => (
          <div
            key={badge.label}
            className="flex items-center gap-2 rounded-full bg-accent/50 px-5 py-2.5"
          >
            <badge.icon
              className="h-4 w-4 text-foreground/70"
              strokeWidth={1.5}
            />
            <span className="text-xs font-semibold tracking-wider text-foreground/80">
              {badge.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
