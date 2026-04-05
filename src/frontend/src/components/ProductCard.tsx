import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "../backend.d";

const categoryImages: Record<string, string> = {
  Indoor: "/assets/generated/cannabis-indoor.dim_600x600.jpg",
  Outdoor: "/assets/generated/cannabis-outdoor.dim_600x600.jpg",
  Greenhouse: "/assets/generated/cannabis-greenhouse.dim_600x600.jpg",
  "Pre-rolls": "/assets/generated/cannabis-prerolls.dim_600x600.jpg",
};

const categoryColors: Record<string, string> = {
  Indoor: "bg-purple-900/60 text-purple-200",
  Outdoor: "bg-green-900/60 text-green-200",
  Greenhouse: "bg-emerald-900/60 text-emerald-200",
  "Pre-rolls": "bg-amber-900/60 text-amber-200",
};

function isValidImageUrl(url: string): boolean {
  return (
    url.startsWith("/") ||
    url.startsWith("http://") ||
    url.startsWith("https://")
  );
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const imgSrc =
    product.imageUrl && isValidImageUrl(product.imageUrl)
      ? product.imageUrl
      : categoryImages[product.category] || categoryImages.Indoor;
  const badgeClass =
    categoryColors[product.category] || "bg-muted text-muted-foreground";

  return (
    <Card
      className="overflow-hidden bg-card border-border/50 hover:border-brand-sand/40 transition-all duration-300 group"
      data-ocid={`product.item.${index}`}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={imgSrc}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-3 left-3">
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${badgeClass}`}
          >
            {product.category}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          {product.inStock ? (
            <Badge className="bg-secondary/80 text-secondary-foreground text-xs">
              In Stock
            </Badge>
          ) : (
            <Badge variant="destructive" className="text-xs">
              Out of Stock
            </Badge>
          )}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-display font-bold text-lg text-brand-sand mb-1 truncate">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-foreground">
            R {Number(product.priceZAR).toFixed(2)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
