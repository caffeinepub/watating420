import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ProductCard } from "../components/ProductCard";
import { useProducts } from "../hooks/useQueries";

const CATEGORIES = ["All", "Indoor", "Outdoor", "Greenhouse", "Pre-rolls"];
const SKELETON_KEYS = ["a", "b", "c", "d", "e", "f", "g", "h"];

export function ShopPage() {
  const search = useSearch({ strict: false }) as { category?: string };
  const navigate = useNavigate();
  const activeCategory = search.category || "All";
  const { data: products = [], isLoading } = useProducts();

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  function handleCategory(cat: string) {
    navigate({
      to: "/shop",
      search: { category: cat === "All" ? undefined : cat },
    });
  }

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-sand mb-2">
            Shop
          </h1>
          <p className="text-muted-foreground">
            Premium cannabis, R 50.00 per item
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10" data-ocid="shop.panel">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              className={`text-xs uppercase tracking-widest font-semibold ${
                activeCategory === cat
                  ? "bg-brand-beige text-[#1A1A1A] hover:bg-brand-sand"
                  : "border-border/60 text-muted-foreground hover:text-brand-sand hover:border-brand-sand"
              }`}
              onClick={() => handleCategory(cat)}
              data-ocid="shop.tab"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            data-ocid="shop.loading_state"
          >
            {SKELETON_KEYS.map((k) => (
              <Skeleton key={k} className="aspect-square rounded-xl" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div
            className="text-center py-20 text-muted-foreground"
            data-ocid="shop.empty_state"
          >
            <p className="text-lg">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <motion.div
                key={String(product.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <ProductCard product={product} index={i + 1} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
