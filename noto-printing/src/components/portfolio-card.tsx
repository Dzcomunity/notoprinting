import { portfolios } from "@/constants/portfolios";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PortfolioCardProps {
  portfolio: (typeof portfolios)[number];
  className?: string;
}

export function PortfolioCard({
  portfolio,
  className = "",
}: PortfolioCardProps) {
  return (
    <Link href={`/portfolio/${portfolio.slug}`} className={className}>
      <Card className="h-full hover:shadow-lg transition-all hover:scale-105 overflow-hidden">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            <Image
              src={portfolio.thumbnail}
              alt={portfolio.title}
              fill
              className="object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="text-xs">
              {portfolio.category}
            </Badge>
            {portfolio.testimonial && (
              <div className="flex items-center text-yellow-500">
                {Array.from({ length: portfolio.testimonial.rating }).map(
                  (_, i) => (
                    <span key={i} className="text-sm">
                      ★
                    </span>
                  )
                )}
              </div>
            )}
          </div>
          <CardTitle className="text-lg mb-1 line-clamp-1">
            {portfolio.title}
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground mb-2">
            {portfolio.client}
          </CardDescription>
          <CardDescription className="line-clamp-2 text-sm">
            {portfolio.description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
