"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Droplets, Hash } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/cart-context";

export function ProductDetail({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const details = [
    { icon: Hash, label: "Batch ID", value: product.batchId },
    {
      icon: Clock,
      label: "Sealed",
      value: new Date(product.localDateTime).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
    { icon: MapPin, label: "Coordinates", value: product.coordinates },
    { icon: Droplets, label: "Humidity", value: product.humidity },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <Link
        href="/countries"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Countries
      </Link>

      <div className="mt-4 flex flex-col gap-10 md:flex-row md:gap-16">
        {/* Image */}
        <div className="relative mx-auto w-full max-w-sm md:mx-0 md:flex-1">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-b from-accent/20 to-accent/5">
            <Image
              src={product.image}
              alt={`${product.countryName} canned air`}
              fill
              className="object-contain p-8"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-1 flex-col">
          <p className="text-xs font-semibold tracking-wider text-primary">
            {product.region.toUpperCase()} / {product.vibe.toUpperCase()}
          </p>
          <h1 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            {product.countryName}
          </h1>
          <p className="mt-1 text-sm italic text-muted-foreground">
            {product.vibeLine}
          </p>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          {/* Batch details */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {details.map((detail) => (
              <div
                key={detail.label}
                className="flex items-start gap-3 rounded-xl border border-border p-3"
              >
                <detail.icon
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-[11px] font-semibold tracking-wider text-muted-foreground">
                    {detail.label.toUpperCase()}
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-foreground">
                    {detail.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Price + Add to cart */}
          <div className="mt-8 flex items-center gap-6">
            <span className="text-2xl font-bold text-foreground">
              ${product.priceUSD.toFixed(2)}
            </span>
            <button
              onClick={() => addToCart(product)}
              className="flex-1 rounded-xl bg-primary py-3 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 md:flex-none md:px-10"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
