"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { banners, siteConfig } from "@/constants";
import { MessageCircle, ShoppingBag } from "lucide-react";
import Link from "next/link";

export function CarouselSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      setProgress(0);
    });

    // Progress bar animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 2; // 5000ms / 50 = 100 intervals of 2%
      });
    }, 100);

    return () => clearInterval(interval);
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <div className="relative">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-muted/20 z-10">
        <div
          className="h-full bg-primary transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[autoplayPlugin.current]}
        opts={{
          loop: true,
        }}
        onMouseEnter={() => autoplayPlugin.current.stop()}
        onMouseLeave={() => autoplayPlugin.current.play()}
      >
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={banner.id}>
              <div className="h-[calc(100vh-4rem)] relative">
                <Image
                  fill
                  src={banner.image}
                  alt={banner.title}
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Enhanced Gradient Overlay - Radial from center */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="max-w-4xl mx-auto px-4 text-center text-white space-y-8">
                    {/* Title */}
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                      {banner.title}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-lg md:text-2xl lg:text-3xl drop-shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                      {banner.subtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                      {/* Primary CTA - WhatsApp */}
                      <a
                        href={`https://wa.me/${
                          siteConfig.whatsappNumber
                        }?text=${encodeURIComponent(
                          "Halo, saya tertarik dengan layanan Noto Printing. Mohon informasi lebih lanjut."
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="lg"
                          className="text-base md:text-lg px-8 py-6 shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105"
                        >
                          <MessageCircle className="mr-2 h-5 w-5" />
                          Konsultasi Gratis
                        </Button>
                      </a>

                      {/* Secondary CTA - Browse Products */}
                      <Link href="/search">
                        <Button
                          size="lg"
                          variant="outline"
                          className="text-base md:text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white shadow-xl hover:scale-105 transition-all"
                        >
                          <ShoppingBag className="mr-2 h-5 w-5" />
                          Lihat Katalog
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="left-4 md:left-8 hidden md:flex bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white shadow-xl" />
        <CarouselNext className="right-4 md:right-8 hidden md:flex bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white shadow-xl" />
      </Carousel>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="flex justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all duration-300 rounded-full ${
                index === current
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
