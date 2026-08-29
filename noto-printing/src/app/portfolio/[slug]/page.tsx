import { notFound } from "next/navigation";
import { HeaderSection } from "@/components/header-section";
import { FooterSection } from "@/components/footer-section";
import { PortfolioDetailContent } from "@/components/portfolio-detail-content";
import { portfolios } from "@/constants";

interface PortfolioDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PortfolioDetailPage({
  params,
}: PortfolioDetailPageProps) {
  const { slug } = await params;
  const portfolio = portfolios.find((p) => p.slug === slug);

  if (!portfolio) {
    notFound();
  }

  return (
    <>
      <HeaderSection />
      <PortfolioDetailContent portfolio={portfolio} />
      <FooterSection />
    </>
  );
}
