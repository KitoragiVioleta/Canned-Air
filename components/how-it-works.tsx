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
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h2 className="text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
          How It Works
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background">
                <step.icon
                  className="h-7 w-7 text-primary"
                  strokeWidth={1.5}
                />
              </div>
              <p className="mt-4 text-xs font-bold tracking-wider text-muted-foreground">
                {step.number}. {step.title}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
