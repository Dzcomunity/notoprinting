import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { categories } from "@/constants";
import * as Icons from "lucide-react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

export function CategorySection() {
  return (
    <section id="categories" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kategori Produk
          </h2>
          <p className="text-muted-foreground text-lg">
            Pilih kategori sesuai kebutuhan Anda
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const IconComponent =
              (Icons as unknown as Record<string, LucideIcon>)[category.icon] ||
              Icons.Package;

            return (
              <Link
                key={category.id}
                href={`/search?category=${category.slug}`}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                  <CardHeader className="text-center p-6">
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-base">{category.name}</CardTitle>
                    <CardDescription className="text-xs line-clamp-2">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
