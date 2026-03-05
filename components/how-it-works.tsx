import { Camera, Package, Truck } from "lucide-react";

const steps = [
  {
    icon: Camera,
    number: "1",
    title: "CAPTURE",
    description: "Man on mountain with machine",
  },
  {
    icon: Package,
    number: "2",
    title: "SEAL",
    description: "Sealing can in a clean room",
  },
  {
    icon: Truck,
    number: "3",
    title: "DELIVER",
    description: "Deliver seamless small can",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <h2 className="text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
          How It Works
        </h2>
        <div className="mt-10 grid grid-cols-3 gap-4 md:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background md:h-16 md:w-16">
                <step.icon
                  className="h-6 w-6 text-primary md:h-7 md:w-7"
                  strokeWidth={1.5}
                />
              </div>
              <p className="mt-3 text-[11px] font-bold tracking-wider text-muted-foreground md:mt-4 md:text-xs">
                {step.number}. {step.title}
              </p>
              <p className="mt-1 text-[11px] leading-snug text-muted-foreground md:text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
