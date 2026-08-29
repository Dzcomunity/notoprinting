import { notFound } from "next/navigation";
import { HeaderSection } from "@/components/header-section";
import { FooterSection } from "@/components/footer-section";
import { ProductDetailContent } from "@/components/product-detail-content";
import { products } from "@/constants";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <HeaderSection />
      <ProductDetailContent product={product} />
      <FooterSection />
    </>
  );
}
