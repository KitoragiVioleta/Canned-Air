"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={`${product.countryName} canned air`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <Link href={`/product/${product.slug}`} className="block">
          <h3 className="font-serif text-base font-semibold text-card-foreground">
            {product.countryName}
          </h3>
          <p className="mt-0.5 text-xs font-medium italic text-muted-foreground">
            {product.vibeLine}
          </p>
        </Link>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm font-bold text-card-foreground">
            ${product.priceUSD.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
