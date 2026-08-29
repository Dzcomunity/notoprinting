"use client";

import { useState } from "react";
import { Portfolio, products } from "@/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard } from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";

interface PortfolioDetailContentProps {
  portfolio: Portfolio;
}

export function PortfolioDetailContent({
  portfolio,
}: PortfolioDetailContentProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  // Get related products
  const relatedProducts = products.filter((product) =>
    portfolio.productIds.includes(product.id)
  );

  return (
    <main className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Portfolio", href: "/portfolio" },
            { label: portfolio.title },
          ]}
        />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative h-96 md:h-[500px] w-full rounded-lg overflow-hidden">
              <Image
                src={portfolio.images[selectedImage]}
                alt={portfolio.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Thumbnail Images */}
            {portfolio.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {portfolio.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-primary"
                        : "border-transparent hover:border-muted-foreground"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${portfolio.title} - ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Portfolio Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">{portfolio.category}</Badge>
                <div className="flex items-center text-sm text-muted-foreground gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(portfolio.completedDate).toLocaleDateString(
                    "id-ID",
                    {
                      year: "numeric",
                      month: "long",
                    }
                  )}
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {portfolio.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Client: {portfolio.client}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {portfolio.description}
              </p>
            </div>

            {/* Tags */}
            {portfolio.tags.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {portfolio.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonial */}
            {portfolio.testimonial && (
              <Card className="bg-muted/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3 text-yellow-500">
                    {Array.from({ length: portfolio.testimonial.rating }).map(
                      (_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      )
                    )}
                  </div>
                  <p className="italic mb-3">
                    &ldquo;{portfolio.testimonial.text}&rdquo;
                  </p>
                  <p className="font-semibold text-sm">
                    — {portfolio.testimonial.author}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Produk yang Digunakan</h2>
              <p className="text-muted-foreground">
                Produk yang digunakan dalam portfolio ini
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center">
              <Link href="/search">
                <Button size="lg">Lihat Semua Produk</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
