import { CarouselSection } from "@/components/carousel-section";
import { CategorySection } from "@/components/category-section";
import { HeaderSection } from "@/components/header-section";
import { HowToOrderSection } from "@/components/how-to-order-section";
import { ProductPreviewSection } from "@/components/product-preview-section";
import { PortfolioPreviewSection } from "@/components/portfolio-preview-section";
import { BlogPreviewSection } from "@/components/blog-preview-section";
import { RecentViewedSection } from "@/components/recent-viewed";
import { ContactSection } from "@/components/contact-section";
import { FooterSection } from "@/components/footer-section";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export default function Home() {
  return (
    <main>
      <HeaderSection />
      <CarouselSection />
      <CategorySection />
      <ProductPreviewSection />
      <PortfolioPreviewSection />
      <BlogPreviewSection />
      <HowToOrderSection />
      <RecentViewedSection />
      <ContactSection />
      <FooterSection />
      <FloatingWhatsApp />
    </main>
  );
}
