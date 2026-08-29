import { Suspense } from "react";
import { HeaderSection } from "@/components/header-section";
import { FooterSection } from "@/components/footer-section";
import { PortfolioContent } from "@/components/portfolio-content";

export default function PortfolioPage() {
  return (
    <>
      <HeaderSection />
      <Suspense
        fallback={
          <main className="min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center py-12">
                <p className="text-muted-foreground">Memuat portfolio...</p>
              </div>
            </div>
          </main>
        }
      >
        <PortfolioContent />
      </Suspense>
      <FooterSection />
    </>
  );
}
