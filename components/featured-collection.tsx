import { products } from "@/data/products";
import { ProductCard } from "./product-card";

export function FeaturedCollection() {
  return (
    <section id="shop" className="scroll-mt-20 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <h2 className="mb-6 font-serif text-2xl font-bold text-foreground md:text-3xl">
          Featured Collection
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
