"use client";

import { useEffect, useState } from "react";
import { products } from "@/constants";
import { ProductCard } from "@/components/product-card";
import { useRecentViewed } from "@/hooks/useRecentViewed";

export function RecentViewedSection() {
  const { getRecentProducts } = useRecentViewed();
  const [recentProducts, setRecentProducts] = useState<typeof products>([]);

  useEffect(() => {
    const recentIds = getRecentProducts();
    const recent = products.filter((p) => recentIds.includes(p.id));
    setRecentProducts(recent);
  }, [getRecentProducts]);

  if (recentProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Produk yang Baru Dilihat
          </h2>
          <p className="text-muted-foreground">
            Lanjutkan menjelajahi produk yang Anda minati
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
