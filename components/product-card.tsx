"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md md:p-5">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gradient-to-b from-accent/20 to-accent/5">
          <Image
            src={product.image}
            alt={`${product.countryName} canned air`}
            fill
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className="mt-3 flex flex-1 flex-col gap-1">
        <Link href={`/product/${product.slug}`} className="block">
          <h3 className="font-sans text-sm font-semibold text-card-foreground">
            {product.countryName}
          </h3>
          <p className="text-xs italic text-muted-foreground">
            {product.vibeLine}
          </p>
        </Link>
        <p className="mt-1 text-sm font-bold text-primary">
          ${product.priceUSD.toFixed(2)}
        </p>
        <button
          onClick={() => addToCart(product)}
          className="mt-3 flex h-11 w-full items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
