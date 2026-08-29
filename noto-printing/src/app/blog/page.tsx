import { Suspense } from "react";
import { HeaderSection } from "@/components/header-section";
import { FooterSection } from "@/components/footer-section";
import { BlogContent } from "@/components/blog-content";

export default function BlogPage() {
  return (
    <>
      <HeaderSection />
      <Suspense
        fallback={
          <main className="min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center py-12">
                <p className="text-muted-foreground">Memuat artikel...</p>
              </div>
            </div>
          </main>
        }
      >
        <BlogContent />
      </Suspense>
      <FooterSection />
    </>
  );
}
