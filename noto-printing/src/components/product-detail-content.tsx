"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb } from "@/components/breadcrumb";
import { ProductCard } from "@/components/product-card";
import { PortfolioCard } from "@/components/portfolio-card";
import { products, siteConfig, categories, portfolios } from "@/constants";
import { useRecentViewed } from "@/hooks/useRecentViewed";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

interface ProductDetailContentProps {
  product: (typeof products)[number];
}

export function ProductDetailContent({
  product,
}: {
  product: (typeof products)[number];
}) {
  const { addProduct } = useRecentViewed();
  const [currentImage, setCurrentImage] = useState(product.images[0]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [productUrl, setProductUrl] = useState(
    `https://noto-printing.vercel.app/product/${product.slug}`
  );

  // Track product view and set actual URL after hydration
  useEffect(() => {
    addProduct(product.id);
    // Set actual URL after client-side hydration
    setProductUrl(window.location.href);
  }, [product.id, product.slug, addProduct]);

  const whatsappMessage = `Halo, saya tertarik dengan produk:
*${product.name}*

${productUrl}

Mohon informasi lebih lanjut. Terima kasih!`;
  const whatsappLink = `https://wa.me/${
    siteConfig.whatsappNumber
  }?text=${encodeURIComponent(whatsappMessage)}`;

  // Get category name
  const category = categories.find((c) => c.id === product.categoryId);

  // Get related portfolios (portfolios that use this product)
  const relatedPortfolios = portfolios.filter((portfolio) =>
    portfolio.productIds.includes(product.id)
  );

  // Get recommended products (same category, exclude current)
  const recommendedProducts = products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 4);

  return (
    <main className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Produk", href: "/search" },
            {
              label: category?.name || "Kategori",
              href: `/search?category=${category?.slug}`,
            },
            { label: product.name },
          ]}
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative h-96 md:h-[500px] w-full rounded-lg overflow-hidden">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
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
                      alt={`${product.name} - ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {product.name}
              </h1>
              <p className="text-muted-foreground text-lg">
                {product.description}
              </p>
            </div>

            <Separator />

            {/* Specifications */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Spesifikasi</h2>
              <Card>
                <CardContent className="p-0">
                  {product.specifications.map((spec, index) => (
                    <div
                      key={index}
                      className={`grid grid-cols-2 gap-4 p-4 ${
                        index !== product.specifications.length - 1
                          ? "border-b"
                          : ""
                      }`}
                    >
                      <div className="font-semibold text-muted-foreground">
                        {spec.label}
                      </div>
                      <div className="font-medium">{spec.value}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* WhatsApp CTA */}
            <div className="sticky bottom-4 md:relative md:bottom-0">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full text-lg" variant="default">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Pesan via WhatsApp
                </Button>
              </a>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Hubungi kami untuk informasi harga dan pemesanan
              </p>
            </div>
          </div>
        </div>

        {/* Portfolio Showcase - Products Used In */}
        {relatedPortfolios.length > 0 && (
          <div className="mt-16">
            <Separator className="mb-8" />
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                Portfolio Menggunakan Produk Ini
              </h2>
              <p className="text-muted-foreground">
                Lihat hasil karya yang menggunakan {product.name}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPortfolios.map((portfolio) => (
                <PortfolioCard key={portfolio.id} portfolio={portfolio} />
              ))}
            </div>
          </div>
        )}

        {/* Product Recommendations */}
        {recommendedProducts.length > 0 && (
          <div className="mt-16">
            <Separator className="mb-8" />
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Produk Terkait</h2>
              <p className="text-muted-foreground">
                Produk lain dari kategori {category?.name}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
