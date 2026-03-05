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
    <section className="border-y border-border bg-muted">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 py-5 md:gap-12">
        {badges.map((badge) => (
          <div
            key={badge.label}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <badge.icon className="h-4 w-4" strokeWidth={1.5} />
            <span className="text-xs font-semibold tracking-wider">
              {badge.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
