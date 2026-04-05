import { Clock, MapPin, Phone, Star } from "lucide-react";
import { motion } from "motion/react";

export function AboutPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1
            className="font-display text-5xl font-bold text-brand-sand mb-6"
            data-ocid="about.section"
          >
            About WataTing420
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            WataTing420 is more than a dispensary — it's a cultural landmark
            nestled in the heart of Soweto. Located at the famous corner of
            Vilakazi Street and Magwaza Street in Moroka, we bring premium
            cannabis to our community with love, quality, and authenticity.
          </p>

          <div className="relative rounded-2xl overflow-hidden mb-12 aspect-video">
            <img
              src="/assets/uploads/screenshot_20260330_044335_chrome-019d3ca1-7b43-709d-8711-51585d0b2c53-8.jpg"
              alt="WataTing420 exterior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="font-display text-3xl font-bold text-brand-sand">
                Soweto's Own
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <h2 className="font-display text-2xl text-brand-sand mb-4">
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Born from the vibrant streets of Soweto, WataTing420 was built
                on the belief that quality cannabis should be accessible,
                celebrated, and consumed in community. Our space features
                original township murals, Afrocentric artwork, and a welcoming
                vibe that feels like home.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <h2 className="font-display text-2xl text-brand-sand mb-4">
                Our Promise
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We source only the finest indoor, outdoor, and greenhouse
                cultivated flowers. Every product on our shelves is curated for
                quality, potency, and effect. We also offer perfectly rolled
                pre-rolls for convenience.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Star, label: "4.9 Stars", sub: "Google Rating" },
              { icon: Clock, label: "24 Hours", sub: "Always Open" },
              { icon: MapPin, label: "Soweto", sub: "Moroka, 1860" },
              { icon: Phone, label: "073 820 4908", sub: "Call Us" },
            ].map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="bg-card rounded-xl p-5 border border-border/50 text-center"
              >
                <Icon className="h-6 w-6 text-secondary mx-auto mb-2" />
                <p className="font-display font-bold text-brand-sand text-lg">
                  {label}
                </p>
                <p className="text-muted-foreground text-xs">{sub}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
