import { Suspense } from "react";
import { HeaderSection } from "@/components/header-section";
import { FooterSection } from "@/components/footer-section";
import { SearchContent } from "@/components/search-content";

export default function SearchPage() {
  return (
    <>
      <HeaderSection />
      <Suspense
        fallback={
          <main className="min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center py-12">
                <p className="text-muted-foreground">Memuat...</p>
              </div>
            </div>
          </main>
        }
      >
        <SearchContent />
      </Suspense>
      <FooterSection />
    </>
  );
}
