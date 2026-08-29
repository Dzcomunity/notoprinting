"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/constants";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show button when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Show scroll to top button when scrolled down more than 300px
      setShowScrollTop(currentScrollY > 300);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappLink = `https://wa.me/${
    siteConfig.whatsappNumber
  }?text=${encodeURIComponent(
    "Halo, saya ingin menanyakan tentang layanan percetakan Noto Printing."
  )}`;

  return (
    <>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-24 z-50 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4 shadow-lg transition-all duration-300 ${
          isVisible && showScrollTop
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>

      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
        aria-label="Chat via WhatsApp"
      >
        <Image
          src="/images/whatsapp.png"
          alt="WhatsApp"
          width={60}
          height={60}
          className="animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] drop-shadow-lg"
        />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold border-2 border-white rounded-full h-6 w-6 flex items-center justify-center">
          !
        </span>
      </a>
    </>
  );
}
