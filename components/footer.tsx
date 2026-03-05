"use client";

import Link from "next/link";
import { Instagram, Twitter } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46v-7.15a8.16 8.16 0 005.58 2.18v-3.45a4.81 4.81 0 01-3.77-1.8v-.01l3.77.01V6.69z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Newsletter */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Subscribe</h3>
            <p className="mb-4 text-xs text-primary-foreground/60">
              Get notified about new batches and limited releases.
            </p>
            <form
              className="flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 rounded-xl border border-primary-foreground/20 bg-transparent px-3 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary focus:outline-none"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Links</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/"
                  className="text-xs text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/countries"
                  className="text-xs text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                >
                  Countries
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-xs text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Socials</h3>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/40">
            Copyright &copy; {new Date().getFullYear()} Canned Air | Ultima
            Collectible Canned Air Co. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
