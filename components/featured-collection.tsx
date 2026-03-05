import { products } from "@/data/products";
import { ProductCard } from "./product-card";

export function FeaturedCollection() {
  return (
    <section id="shop" className="scroll-mt-20 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
          Featured Collection
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
