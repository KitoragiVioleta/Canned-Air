"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Is it empty?",
    answer:
      "Not at all. Each can is sealed at the point of collection and contains a real sample of air from the listed location. It's not a vacuum — it's a genuine atmospheric snapshot.",
  },
  {
    question: "Can I travel with it?",
    answer:
      "Yes! Canned Air is carry-on friendly. The cans are sealed at standard atmospheric pressure and comply with airline regulations for non-hazardous items.",
  },
  {
    question: "Can I travel option it?",
    answer:
      "Each can is designed to be a collectible and conversation piece. While you can open it to experience the air, most collectors prefer to keep them sealed as a memento.",
  },
  {
    question: "Can I travel parent/pAt?",
    answer:
      "Absolutely. Each can makes a unique and thoughtful gift for travelers, collectors, or anyone who appreciates the wonder of our planet.",
  },
  {
    question: "How is the air collected?",
    answer:
      "Our team travels to each location with specialized portable sealing equipment. The air is captured in a controlled process and immediately sealed in food-grade aluminum cans to preserve its authenticity.",
  },
  {
    question: "Is this a real product?",
    answer:
      "Yes. Canned Air is a real, physical product. Each can is manufactured, labeled, and shipped from our facility. The air inside is genuinely sourced from the location stated on the label.",
  },
];

function FaqAccordionItem({ item }: { item: FaqItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-foreground transition-colors hover:text-primary"
        aria-expanded={isOpen}
      >
        {item.question}
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-200",
          isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-20 bg-background">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
          FAQ
        </h2>
        <div className="mt-8 border-t border-border">
          {faqs.map((faq) => (
            <FaqAccordionItem key={faq.question} item={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
