import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Product } from "../backend.d";
import { useActor } from "./useActor";

const FALLBACK_PRODUCTS: Product[] = [
  {
    id: BigInt(1),
    name: "Indoor",
    category: "Indoor",
    description:
      "Premium indoor-grown cannabis. Cultivated in controlled environments for consistent quality and potency.",
    priceZAR: 50.0,
    imageUrl: "/assets/generated/product-indoor.dim_600x600.jpg",
    inStock: true,
  },
  {
    id: BigInt(2),
    name: "Outdoor",
    category: "Outdoor",
    description:
      "Sun-grown outdoor cannabis. Natural cultivation under the South African sun for rich, earthy flavours.",
    priceZAR: 50.0,
    imageUrl: "/assets/generated/product-outdoor.dim_600x600.jpg",
    inStock: true,
  },
  {
    id: BigInt(3),
    name: "Greenhouse",
    category: "Greenhouse",
    description:
      "Greenhouse cannabis. The best of both worlds — natural light with controlled conditions.",
    priceZAR: 50.0,
    imageUrl: "/assets/generated/product-greenhouse.dim_600x600.jpg",
    inStock: true,
  },
  {
    id: BigInt(4),
    name: "Pre-roll",
    category: "Pre-rolls",
    description:
      "Ready-to-smoke pre-rolled joints. Premium flower, expertly rolled for your convenience.",
    priceZAR: 50.0,
    imageUrl: "/assets/generated/product-prerolls.dim_600x600.jpg",
    inStock: true,
  },
];

function mergeWithFallback(backendProducts: Product[]): Product[] {
  if (backendProducts.length > 0) return backendProducts;
  return FALLBACK_PRODUCTS;
}

export function useProducts() {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      if (!actor) return FALLBACK_PRODUCTS;
      const result = await actor.getProducts();
      return mergeWithFallback(result);
    },
    enabled: !!actor && !isFetching,
    placeholderData: FALLBACK_PRODUCTS,
  });
}

export function useProductsByCategory(category: string) {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products", category],
    queryFn: async () => {
      if (!actor) {
        if (category === "All") return FALLBACK_PRODUCTS;
        return FALLBACK_PRODUCTS.filter((p) => p.category === category);
      }
      if (category === "All") {
        const result = await actor.getProducts();
        return mergeWithFallback(result);
      }
      const result = await actor.getProductsByCategory(category);
      if (result.length > 0) return result;
      return FALLBACK_PRODUCTS.filter((p) => p.category === category);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCategories() {
  const { actor, isFetching } = useActor();
  return useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getCategories();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useIsAdmin() {
  const { actor, isFetching } = useActor();
  return useQuery<boolean>({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddProduct() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (product: Product) => {
      if (!actor) throw new Error("Not connected");
      return actor.addProduct(product);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

export function useUpdateProduct() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (product: Product) => {
      if (!actor) throw new Error("Not connected");
      return actor.updateProduct(product);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

export function useDeleteProduct() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Not connected");
      return actor.deleteProduct(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
