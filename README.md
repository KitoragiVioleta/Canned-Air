# Canned Air

**Breathe the World, Sealed.**

Real air from real places. Collected, sealed, dated, and delivered in limited batches.

## Overview

Canned Air is a collectible ecommerce concept. Each can holds a genuine sample of air from an iconic location around the world. This website serves as the storefront and brand experience.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Playfair Display (headings), Inter (body)
- **Icons:** Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Description |
|---|---|
| `/` | Home page with hero, featured collection, how it works, reviews, FAQ |
| `/countries` | Full product grid with region and vibe filters |
| `/product/[slug]` | Individual product detail page with batch info |

## Project Structure

```
app/
  layout.tsx          # Root layout with fonts, nav, footer, cart
  page.tsx            # Home page
  countries/page.tsx  # Countries listing with filters
  product/[slug]/     # Dynamic product pages
components/
  navbar.tsx          # Sticky navigation
  hero-section.tsx    # Hero with CTA buttons
  trust-badges.tsx    # Trust row badges
  featured-collection.tsx
  how-it-works.tsx
  why-air-section.tsx
  reviews-section.tsx
  faq-section.tsx
  product-card.tsx    # Reusable product card
  product-detail.tsx  # Product detail view
  cart-drawer.tsx     # Slide-out cart drawer
  footer.tsx          # Site footer
context/
  cart-context.tsx    # Client-side cart state
data/
  products.ts         # Product catalog data
```

## License

All Rights Reserved. Ultima Collectible Canned Air Co.
