import { Link } from "@tanstack/react-router";
import { Clock, Leaf, MapPin, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer className="bg-[#14110D] border-t border-border/40 mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-5 w-5 text-secondary" />
              <span className="font-display font-bold text-xl text-brand-sand">
                WataTing<span className="text-secondary">420</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Soweto's finest cannabis dispensary. Premium quality, community
              roots.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-brand-sand text-lg mb-4">
              Find Us
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
                <span>
                  Corner of Vilakazi &amp; 883 Magwaza St, Moroka, Soweto, 1860
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary shrink-0" />
                <a
                  href="tel:0738204908"
                  className="hover:text-brand-sand transition-colors"
                >
                  073 820 4908
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-secondary shrink-0" />
                <span>Open 24 Hours</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display text-brand-sand text-lg mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link
                to="/"
                className="text-muted-foreground hover:text-brand-sand transition-colors"
                data-ocid="footer.link"
              >
                Home
              </Link>
              <Link
                to="/shop"
                search={{ category: undefined }}
                className="text-muted-foreground hover:text-brand-sand transition-colors"
                data-ocid="footer.link"
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="text-muted-foreground hover:text-brand-sand transition-colors"
                data-ocid="footer.link"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-brand-sand transition-colors"
                data-ocid="footer.link"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground">
          © {year}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-sand transition-colors underline underline-offset-2"
          >
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
