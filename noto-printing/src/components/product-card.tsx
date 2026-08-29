"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { products, siteConfig } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  product: (typeof products)[number];
  className?: string;
}

export function ProductCard({ product, className = "" }: ProductCardProps) {
  const [productUrl, setProductUrl] = useState(
    `https://noto-printing.vercel.app/product/${product.slug}`
  );

  useEffect(() => {
    // Set actual URL after client-side hydration
    setProductUrl(`${window.location.origin}/product/${product.slug}`);
  }, [product.slug]);

  const whatsappMessage = `Halo, saya tertarik dengan produk:
*${product.name}*

${productUrl}

Mohon informasi lebih lanjut. Terima kasih!`;
  const whatsappLink = `https://wa.me/${
    siteConfig.whatsappNumber
  }?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Card
      className={`h-full hover:shadow-lg hover:scale-105 transition-all duration-300 group ${className}`}
    >
      <Link href={`/product/${product.slug}`}>
        <CardHeader className="p-0">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover rounded-t-lg group-hover:scale-105 transition-transform"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg mb-2 line-clamp-1">
            {product.name}
          </CardTitle>
          <CardDescription className="line-clamp-2 mb-4">
            {product.description}
          </CardDescription>
        </CardContent>
      </Link>

      {/* WhatsApp CTA */}
      <div className="px-4 pb-4">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          <Button className="w-full" size="sm" variant="default">
            <MessageCircle className="mr-2 h-4 w-4" />
            Pesan Sekarang
          </Button>
        </a>
      </div>
    </Card>
  );
}
