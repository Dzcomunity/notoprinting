"use client";

import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { products, categories } from "@/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export function ProductPreviewSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Produk Kami</h2>
          <p className="text-muted-foreground text-lg">
            Temukan berbagai produk berkualitas untuk kebutuhan Anda
          </p>
        </div>

        {categories.map((category) => {
          const categoryProducts = products.filter(
            (product) => product.categoryId === category.id
          );

          if (categoryProducts.length === 0) return null;

          return (
            <ProductCategoryRow
              key={category.id}
              category={category}
              products={categoryProducts}
            />
          );
        })}
      </div>
    </section>
  );
}

function ProductCategoryRow({
  category,
  products,
}: {
  category: { id: string; name: string; slug: string };
  products: typeof import("@/constants").products;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">{category.name}</h3>
        <Link href={`/search?category=${category.slug}`}>
          <Button variant="outline">Lihat Semua</Button>
        </Link>
      </div>

      <div className="relative group/scroll">
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover/scroll:opacity-100 transition-opacity"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="shrink-0 w-72"
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover/scroll:opacity-100 transition-opacity"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
