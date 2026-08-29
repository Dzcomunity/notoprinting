"use client";

import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/constants";

export const HeaderSection = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { href: "/", label: "Beranda" },
    { href: "/search", label: "Produk" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/calculator", label: "Kalkulator" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="h-16 sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl h-full mx-auto px-4 py-2 flex place-items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src="/images/logo-light.png"
              alt={siteConfig.name}
              fill
              className="object-contain dark:hidden"
            />
            <Image
              src="/images/logo-dark.png"
              alt={siteConfig.name}
              fill
              className="object-contain hidden dark:block"
            />
          </div>
          <span className="font-bold text-lg hidden sm:inline">
            {siteConfig.name}
          </span>
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="px-4 py-2 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Mobile Menu - Burger Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-3">
                  <div className="relative w-8 h-8">
                    <Image
                      src="/logo.png"
                      alt={siteConfig.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {siteConfig.name}
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col gap-4 mt-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-4 py-3 text-lg hover:bg-muted rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile - Additional Info */}
              <div className="absolute bottom-8 left-0 right-0 px-6">
                <div className="border-t pt-6 space-y-4">
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold mb-2">Hubungi Kami</p>
                    <p>{siteConfig.contact.phone}</p>
                    <p>{siteConfig.contact.email}</p>
                  </div>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber
                      }?text=${encodeURIComponent(
                        "Halo, saya ingin bertanya tentang Noto Printing."
                      )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full" variant="default">
                      Chat via WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
