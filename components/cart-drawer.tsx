"use client";

import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/context/cart-context";

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalPrice,
    totalItems,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-2xl"
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="flex items-center gap-2 font-serif text-lg font-semibold text-foreground">
            <ShoppingBag className="h-5 w-5" />
            Cart ({totalItems})
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="rounded-lg p-2 transition-colors hover:bg-muted"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <ShoppingBag className="h-12 w-12 text-border" />
              <p className="text-sm text-muted-foreground">
                Your cart is empty.
              </p>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li
                  key={item.product.slug}
                  className="flex gap-4 rounded-xl border border-border p-3"
                >
                  <div className="relative h-20 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-b from-accent/20 to-accent/5">
                    <Image
                      src={item.product.image}
                      alt={item.product.countryName}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">
                        {item.product.countryName}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        ${item.product.priceUSD.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.slug,
                            item.quantity - 1
                          )
                        }
                        className="flex h-7 w-7 items-center justify-center rounded-lg border border-border transition-colors hover:bg-muted"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="min-w-[20px] text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.slug,
                            item.quantity + 1
                          )
                        }
                        className="flex h-7 w-7 items-center justify-center rounded-lg border border-border transition-colors hover:bg-muted"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.slug)}
                    className="self-start rounded-lg p-1 text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={`Remove ${item.product.countryName}`}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-4">
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="font-medium text-muted-foreground">Total</span>
              <span className="text-lg font-bold text-foreground">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <button className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
