import { Link, useLocation } from "@tanstack/react-router";
import { Leaf } from "lucide-react";

export function Navbar() {
  const location = useLocation();

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#14110D]/95 backdrop-blur-sm"
      data-ocid="navbar.panel"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
            data-ocid="navbar.link"
          >
            <Leaf className="h-5 w-5 text-secondary" />
            <span className="font-display font-bold text-xl text-brand-sand">
              WataTing<span className="text-secondary">420</span>
            </span>
          </Link>

          {/* Nav links - center */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`text-xs font-semibold tracking-widest transition-colors hover:text-brand-sand ${location.pathname === "/" ? "text-brand-sand border-b-2 border-secondary pb-0.5" : "text-muted-foreground"}`}
              data-ocid="navbar.link"
            >
              HOME
            </Link>
            <Link
              to="/shop"
              search={{ category: undefined }}
              className={`text-xs font-semibold tracking-widest transition-colors hover:text-brand-sand ${location.pathname === "/shop" ? "text-brand-sand border-b-2 border-secondary pb-0.5" : "text-muted-foreground"}`}
              data-ocid="navbar.link"
            >
              SHOP
            </Link>
            <Link
              to="/food-menu"
              className={`text-xs font-semibold tracking-widest transition-colors hover:text-brand-sand ${location.pathname === "/food-menu" ? "text-brand-sand border-b-2 border-secondary pb-0.5" : "text-muted-foreground"}`}
              data-ocid="navbar.link"
            >
              FOOD MENU
            </Link>
            <Link
              to="/about"
              className={`text-xs font-semibold tracking-widest transition-colors hover:text-brand-sand ${location.pathname === "/about" ? "text-brand-sand border-b-2 border-secondary pb-0.5" : "text-muted-foreground"}`}
              data-ocid="navbar.link"
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              className={`text-xs font-semibold tracking-widest transition-colors hover:text-brand-sand ${location.pathname === "/contact" ? "text-brand-sand border-b-2 border-secondary pb-0.5" : "text-muted-foreground"}`}
              data-ocid="navbar.link"
            >
              CONTACT
            </Link>
            <Link
              to="/admin"
              className={`text-xs font-semibold tracking-widest transition-colors hover:text-brand-sand ${location.pathname === "/admin" ? "text-brand-sand border-b-2 border-secondary pb-0.5" : "text-muted-foreground"}`}
              data-ocid="navbar.link"
            >
              ADMIN
            </Link>
          </nav>

          {/* Mobile nav */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              to="/"
              className={`text-[10px] font-semibold tracking-wider ${location.pathname === "/" ? "text-brand-sand" : "text-muted-foreground"}`}
              data-ocid="navbar.link"
            >
              HOME
            </Link>
            <Link
              to="/shop"
              search={{ category: undefined }}
              className={`text-[10px] font-semibold tracking-wider ${location.pathname === "/shop" ? "text-brand-sand" : "text-muted-foreground"}`}
              data-ocid="navbar.link"
            >
              SHOP
            </Link>
            <Link
              to="/food-menu"
              className={`text-[10px] font-semibold tracking-wider ${location.pathname === "/food-menu" ? "text-brand-sand" : "text-muted-foreground"}`}
              data-ocid="navbar.link"
            >
              FOOD
            </Link>
            <Link
              to="/about"
              className={`text-[10px] font-semibold tracking-wider ${location.pathname === "/about" ? "text-brand-sand" : "text-muted-foreground"}`}
              data-ocid="navbar.link"
            >
              ABOUT
            </Link>
            <Link
              to="/admin"
              className={`text-[10px] font-semibold tracking-wider ${location.pathname === "/admin" ? "text-brand-sand" : "text-muted-foreground"}`}
              data-ocid="navbar.link"
            >
              ADMIN
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
