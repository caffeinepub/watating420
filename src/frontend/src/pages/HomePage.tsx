import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin, Star } from "lucide-react";
import { motion } from "motion/react";

const venuePhotos = [
  {
    id: "community",
    src: "/assets/uploads/screenshot_20260330_044330_chrome-019d3ca1-76dc-7368-ae73-4c380696de16-2.jpg",
    alt: "WataTing420 community space",
  },
  {
    id: "bar",
    src: "/assets/uploads/screenshot_20260330_044355_chrome-019d3ca1-7950-706f-9fe6-09d6d6b3e06a-4.jpg",
    alt: "WataTing420 wooden bar area",
  },
  {
    id: "gathering",
    src: "/assets/uploads/screenshot_20260330_044410_chrome-019d3ca1-79f0-7565-b516-93dda01e467f-5.jpg",
    alt: "WataTing420 community gathering",
  },
  {
    id: "exterior",
    src: "/assets/uploads/screenshot_20260330_044335_chrome-019d3ca1-7b43-709d-8711-51585d0b2c53-8.jpg",
    alt: "WataTing420 shop exterior with murals",
  },
];

export function HomePage() {
  return (
    <main>
      {/* Split Hero -- Choose Your Experience */}
      <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/img-20260331-wa0059-019d4410-0cef-717e-b439-d44d9625ed29.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        {/* Weed Side */}
        <Link
          to="/shop"
          search={{ category: undefined }}
          className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 py-24 group cursor-pointer border-b md:border-b-0 md:border-r border-white/10 hover:bg-green-900/20 transition-colors duration-500"
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-6xl mb-6">🌿</div>
            <p className="text-white/50 text-xs uppercase tracking-[0.4em] mb-3">
              Soweto's Finest
            </p>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white leading-tight mb-4">
              Premium
              <span className="block text-secondary">Cannabis</span>
            </h2>
            <p className="text-white/70 text-sm mb-8 max-w-xs mx-auto">
              Indoor, Outdoor, Greenhouse & Pre-rolls. Open 24 hours.
            </p>
            <span className="inline-flex items-center gap-2 bg-secondary/20 hover:bg-secondary/40 text-secondary border border-secondary/50 font-bold px-8 py-3 rounded-sm text-xs uppercase tracking-widest transition-colors">
              Browse Shop <ArrowRight className="h-4 w-4" />
            </span>
          </motion.div>
        </Link>

        {/* Divider label (mobile) */}
        <div className="relative z-10 md:hidden flex items-center justify-center py-4 bg-black/60">
          <span className="text-white/40 text-xs uppercase tracking-widest">
            or
          </span>
        </div>

        {/* Vertical OR divider (desktop) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-2">
          <div className="w-px h-20 bg-white/20" />
          <span className="text-white/40 text-xs uppercase tracking-widest">
            or
          </span>
          <div className="w-px h-20 bg-white/20" />
        </div>

        {/* Food Side */}
        <Link
          to="/food-menu"
          className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 py-24 group cursor-pointer hover:bg-yellow-900/20 transition-colors duration-500"
        >
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-6xl mb-6">🍽️</div>
            <p className="text-white/50 text-xs uppercase tracking-[0.4em] mb-3">
              Organic
            </p>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white leading-tight mb-4">
              Organic
              <span className="block text-brand-sand">Food Menu</span>
            </h2>
            <p className="text-white/70 text-sm mb-8 max-w-xs mx-auto">
              Daily delights, fresh salads & weekend specials. Order for
              delivery or collect.
            </p>
            <span className="inline-flex items-center gap-2 bg-brand-beige/20 hover:bg-brand-beige/40 text-brand-sand border border-brand-sand/50 font-bold px-8 py-3 rounded-sm text-xs uppercase tracking-widest transition-colors">
              View Menu <ArrowRight className="h-4 w-4" />
            </span>
          </motion.div>
        </Link>
      </section>

      {/* About strip */}
      <section className="py-16 px-4 bg-[#14110D]/60" data-ocid="about.section">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-3"
            >
              <Star className="h-8 w-8 text-brand-sand" />
              <h3 className="font-display text-2xl text-brand-sand font-bold">
                4.9 Rating
              </h3>
              <p className="text-muted-foreground text-sm">
                Trusted by our community since day one
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center gap-3"
            >
              <Clock className="h-8 w-8 text-secondary" />
              <h3 className="font-display text-2xl text-brand-sand font-bold">
                Open 24 Hours
              </h3>
              <p className="text-muted-foreground text-sm">
                We're always here when you need us
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center gap-3"
            >
              <MapPin className="h-8 w-8 text-brand-sand" />
              <h3 className="font-display text-2xl text-brand-sand font-bold">
                Soweto Roots
              </h3>
              <p className="text-muted-foreground text-sm">
                Corner Vilakazi & Magwaza, Moroka
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Gallery */}
      <section className="py-20 px-4" data-ocid="gallery.section">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl font-bold text-brand-sand mb-3">
              Our Community
            </h2>
            <p className="text-muted-foreground">
              WataTing420 — more than just a dispensary
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {venuePhotos.map((photo, i) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-xl overflow-hidden ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
