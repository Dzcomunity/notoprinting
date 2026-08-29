import { blogPosts } from "@/constants";
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
import { Calendar, Clock, User } from "lucide-react";

interface BlogCardProps {
  post: (typeof blogPosts)[number];
  className?: string;
}

export function BlogCard({ post, className = "" }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className={className}>
      <Card className="h-full hover:shadow-lg transition-all hover:scale-105 overflow-hidden">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary" className="text-xs">
              {post.category}
            </Badge>
          </div>
          <CardTitle className="text-lg mb-2 line-clamp-2">
            {post.title}
          </CardTitle>
          <CardDescription className="line-clamp-2 mb-3">
            {post.excerpt}
          </CardDescription>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              {post.author}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(post.publishedDate).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime} min
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
