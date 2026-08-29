"use client";

import { portfolios } from "@/constants";
import { PortfolioCard } from "@/components/portfolio-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PortfolioPreviewSection() {
  const featuredPortfolios = portfolios.slice(0, 6);

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Portfolio Kami
          </h2>
          <p className="text-muted-foreground text-lg">
            Lihat hasil karya dan kepuasan client kami
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredPortfolios.map((portfolio) => (
            <PortfolioCard key={portfolio.id} portfolio={portfolio} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio">
            <Button size="lg" variant="outline">
              Lihat Semua Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
