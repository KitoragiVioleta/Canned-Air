"use client";

import { useState, useMemo } from "react";
import { products, getRegions, getVibes } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { cn } from "@/lib/utils";

export default function CountriesPage() {
  const [activeRegion, setActiveRegion] = useState<string>("All");
  const [activeVibe, setActiveVibe] = useState<string>("All");

  const regions = useMemo(() => ["All", ...getRegions()], []);
  const vibes = useMemo(() => ["All", ...getVibes()], []);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchRegion = activeRegion === "All" || p.region === activeRegion;
      const matchVibe = activeVibe === "All" || p.vibe === activeVibe;
      return matchRegion && matchVibe;
    });
  }, [activeRegion, activeVibe]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
      <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
        Countries
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Explore our collection by region or vibe.
      </p>

      {/* Filters */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-8">
        {/* Region filter */}
        <div>
          <p className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground">
            REGION
          </p>
          <div className="flex flex-wrap gap-2">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={cn(
                  "rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                  activeRegion === region
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-background text-muted-foreground hover:border-primary hover:text-primary"
                )}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Vibe filter */}
        <div>
          <p className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground">
            VIBE
          </p>
          <div className="flex flex-wrap gap-2">
            {vibes.map((vibe) => (
              <button
                key={vibe}
                onClick={() => setActiveVibe(vibe)}
                className={cn(
                  "rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                  activeVibe === vibe
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-background text-muted-foreground hover:border-primary hover:text-primary"
                )}
              >
                {vibe}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-sm text-muted-foreground">
          No products match your current filters. Try adjusting your selection.
        </p>
      )}
    </div>
  );
}
