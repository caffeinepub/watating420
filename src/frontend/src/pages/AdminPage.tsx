import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Loader2,
  LogIn,
  Pencil,
  Plus,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import type { Product } from "../backend.d";
import {
  useAddProduct,
  useDeleteProduct,
  useProducts,
  useUpdateProduct,
} from "../hooks/useQueries";

const ADMIN_USERNAME = "admin@WatATing";
const ADMIN_PASSWORD = "420420";

const CATEGORIES = ["Indoor", "Outdoor", "Greenhouse", "Pre-rolls"];
const SKELETON_KEYS = ["a", "b", "c", "d", "e"];

const emptyForm = (): Omit<Product, "id"> => ({
  name: "",
  category: "Indoor",
  description: "",
  priceZAR: 50,
  inStock: true,
  imageUrl: "",
});

export function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");

  const { data: products = [], isLoading: productsLoading } = useProducts();
  const addProduct = useAddProduct();
  const updateProduct = useUpdateProduct();
  const deleteProduct = useDeleteProduct();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<bigint | null>(null);
  const [form, setForm] = useState<Omit<Product, "id">>(emptyForm());

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      loginForm.username === ADMIN_USERNAME &&
      loginForm.password === ADMIN_PASSWORD
    ) {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Incorrect username or password.");
    }
  };

  const openAdd = () => {
    setEditingProduct(null);
    setForm(emptyForm());
    setDialogOpen(true);
  };

  const openEdit = (product: Product) => {
    setEditingProduct(product);
    setForm({
      name: product.name,
      category: product.category,
      description: product.description,
      priceZAR: product.priceZAR,
      inStock: product.inStock,
      imageUrl: product.imageUrl,
    });
    setDialogOpen(true);
  };

  const confirmDelete = (id: bigint) => {
    setDeleteTarget(id);
    setDeleteDialogOpen(true);
  };

  const handleSave = async () => {
    try {
      if (editingProduct) {
        await updateProduct.mutateAsync({ ...form, id: editingProduct.id });
        toast.success("Product updated successfully");
      } else {
        await addProduct.mutateAsync({ ...form, id: BigInt(Date.now()) });
        toast.success("Product added successfully");
      }
      setDialogOpen(false);
    } catch {
      toast.error("Failed to save product");
    }
  };

  const handleDelete = async () => {
    if (deleteTarget === null) return;
    try {
      await deleteProduct.mutateAsync(deleteTarget);
      toast.success("Product deleted");
    } catch {
      toast.error("Failed to delete product");
    }
    setDeleteDialogOpen(false);
    setDeleteTarget(null);
  };

  const isSaving = addProduct.isPending || updateProduct.isPending;

  // Login screen
  if (!isLoggedIn) {
    return (
      <main
        className="min-h-screen flex items-center justify-center px-4"
        data-ocid="admin.section"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm"
        >
          <div className="text-center mb-8">
            <ShieldCheck className="h-14 w-14 text-secondary mx-auto mb-4" />
            <h1 className="font-display text-3xl font-bold text-brand-sand">
              Admin Login
            </h1>
            <p className="text-muted-foreground text-sm mt-2">
              WataTing420 staff only
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider">
                Username
              </Label>
              <Input
                value={loginForm.username}
                onChange={(e) =>
                  setLoginForm((p) => ({ ...p, username: e.target.value }))
                }
                placeholder="Username"
                autoComplete="username"
                className="bg-background border-border/60 focus:border-brand-sand"
                data-ocid="admin.input"
              />
            </div>

            <div className="space-y-1.5">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider">
                Password
              </Label>
              <Input
                type="password"
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm((p) => ({ ...p, password: e.target.value }))
                }
                placeholder="Password"
                autoComplete="current-password"
                className="bg-background border-border/60 focus:border-brand-sand"
                data-ocid="admin.input"
              />
            </div>

            {loginError && (
              <p className="text-destructive text-sm">{loginError}</p>
            )}

            <Button
              type="submit"
              className="w-full bg-brand-beige text-[#1A1A1A] hover:bg-brand-sand font-bold px-8 py-5 uppercase tracking-widest"
              data-ocid="admin.primary_button"
            >
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Button>
          </form>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-12 px-4" data-ocid="admin.section">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="font-display text-4xl font-bold text-brand-sand">
              Admin Panel
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Manage your product catalogue
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={openAdd}
              className="bg-brand-beige text-[#1A1A1A] hover:bg-brand-sand font-bold uppercase tracking-widest"
              data-ocid="admin.open_modal_button"
            >
              <Plus className="mr-2 h-4 w-4" /> Add Product
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsLoggedIn(false)}
              className="border-border/60 text-muted-foreground hover:text-foreground"
            >
              Log out
            </Button>
          </div>
        </div>

        {productsLoading ? (
          <div className="space-y-3" data-ocid="admin.loading_state">
            {SKELETON_KEYS.map((k) => (
              <Skeleton key={k} className="h-14 w-full rounded-lg" />
            ))}
          </div>
        ) : products.length === 0 ? (
          <div
            className="text-center py-16 text-muted-foreground"
            data-ocid="admin.empty_state"
          >
            <p>No products yet. Add your first product!</p>
          </div>
        ) : (
          <div className="overflow-auto rounded-xl border border-border/50">
            <table className="w-full text-sm" data-ocid="admin.table">
              <thead className="bg-card/80">
                <tr className="border-b border-border/50">
                  <th className="text-left px-4 py-3 text-muted-foreground font-medium">
                    Product
                  </th>
                  <th className="text-left px-4 py-3 text-muted-foreground font-medium">
                    Category
                  </th>
                  <th className="text-left px-4 py-3 text-muted-foreground font-medium">
                    Price (ZAR)
                  </th>
                  <th className="text-left px-4 py-3 text-muted-foreground font-medium">
                    Status
                  </th>
                  <th className="text-right px-4 py-3 text-muted-foreground font-medium">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, i) => (
                  <tr
                    key={String(product.id)}
                    className="border-b border-border/30 hover:bg-card/50 transition-colors"
                    data-ocid={`admin.row.${i + 1}`}
                  >
                    <td className="px-4 py-3">
                      <p className="font-medium text-foreground">
                        {product.name}
                      </p>
                      <p className="text-muted-foreground text-xs line-clamp-1">
                        {product.description}
                      </p>
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        variant="outline"
                        className="text-brand-sand border-brand-sand/40"
                      >
                        {product.category}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 font-semibold text-foreground">
                      R {Number(product.priceZAR).toFixed(2)}
                    </td>
                    <td className="px-4 py-3">
                      {product.inStock ? (
                        <Badge className="bg-secondary/20 text-secondary-foreground border-secondary/30">
                          In Stock
                        </Badge>
                      ) : (
                        <Badge variant="destructive">Out of Stock</Badge>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => openEdit(product)}
                          className="h-8 w-8 p-0 border-border/50 hover:border-brand-sand"
                          data-ocid={`admin.edit_button.${i + 1}`}
                        >
                          <Pencil className="h-3.5 w-3.5" />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => confirmDelete(product.id)}
                          className="h-8 w-8 p-0"
                          data-ocid={`admin.delete_button.${i + 1}`}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add/Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent
          className="bg-card border-border/60 text-foreground max-w-lg"
          data-ocid="admin.dialog"
        >
          <DialogHeader>
            <DialogTitle className="font-display text-brand-sand text-xl">
              {editingProduct ? "Edit Product" : "Add New Product"}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div className="space-y-1.5">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider">
                Name
              </Label>
              <Input
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({ ...p, name: e.target.value }))
                }
                placeholder="e.g. Durban Poison"
                className="bg-background border-border/60 focus:border-brand-sand"
                data-ocid="admin.input"
              />
            </div>

            <div className="space-y-1.5">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider">
                Category
              </Label>
              <Select
                value={form.category}
                onValueChange={(v) => setForm((p) => ({ ...p, category: v }))}
              >
                <SelectTrigger
                  className="bg-background border-border/60 focus:border-brand-sand"
                  data-ocid="admin.select"
                >
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border/60">
                  {CATEGORIES.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider">
                Description
              </Label>
              <Textarea
                value={form.description}
                onChange={(e) =>
                  setForm((p) => ({ ...p, description: e.target.value }))
                }
                placeholder="Describe this product..."
                rows={3}
                className="bg-background border-border/60 focus:border-brand-sand resize-none"
                data-ocid="admin.textarea"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-muted-foreground text-xs uppercase tracking-wider">
                  Price (ZAR)
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">
                    R
                  </span>
                  <Input
                    type="number"
                    value={form.priceZAR}
                    onChange={(e) =>
                      setForm((p) => ({
                        ...p,
                        priceZAR: Number.parseFloat(e.target.value) || 0,
                      }))
                    }
                    className="bg-background border-border/60 focus:border-brand-sand pl-7"
                    min={0}
                    step={0.01}
                    data-ocid="admin.input"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-muted-foreground text-xs uppercase tracking-wider">
                  Image URL
                </Label>
                <Input
                  value={form.imageUrl}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, imageUrl: e.target.value }))
                  }
                  placeholder="https://..."
                  className="bg-background border-border/60 focus:border-brand-sand"
                  data-ocid="admin.input"
                />
              </div>
            </div>

            <div className="flex items-center justify-between bg-background rounded-lg px-4 py-3 border border-border/40">
              <Label className="text-muted-foreground text-sm">In Stock</Label>
              <Switch
                checked={form.inStock}
                onCheckedChange={(v) => setForm((p) => ({ ...p, inStock: v }))}
                data-ocid="admin.switch"
              />
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={() => setDialogOpen(false)}
              className="border-border/60"
              data-ocid="admin.cancel_button"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={isSaving || !form.name}
              className="bg-brand-beige text-[#1A1A1A] hover:bg-brand-sand font-bold"
              data-ocid="admin.save_button"
            >
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...
                </>
              ) : editingProduct ? (
                "Update Product"
              ) : (
                "Add Product"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirm */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent
          className="bg-card border-border/60"
          data-ocid="admin.dialog"
        >
          <AlertDialogHeader>
            <AlertDialogTitle className="font-display text-brand-sand">
              Delete Product?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-muted-foreground">
              This action cannot be undone. The product will be permanently
              removed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              className="border-border/60"
              data-ocid="admin.cancel_button"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              data-ocid="admin.confirm_button"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}
