"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/cart-context";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#shop", label: "Shop" },
  { href: "/countries", label: "Countries" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-xl font-bold tracking-wide text-foreground">
          CANNED AIR
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center justify-center rounded-md p-2 transition-colors hover:bg-muted"
            aria-label="Open cart"
          >
            <ShoppingCart className="h-5 w-5 text-foreground" />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
                {totalItems}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center rounded-md p-2 transition-colors hover:bg-muted md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
