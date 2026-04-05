import { MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

const dailyDelights = [
  { name: "Pap & Liver with Salad", price: "R40" },
  { name: "Pap & Chicken with Salad", price: "R50" },
  { name: "Pap & Pork Steak with Salad", price: "R50" },
  { name: "Pap & Boerewors with Salad", price: "R40" },
];

const freshSalads = ["Beetroot", "Spinach", "Coleslaw", "Cabbage & Carrot Mix"];

const weekendSpecials = [
  { name: "Dumpling with Carrot Mix & Inhloko", price: "R50" },
  { name: "Rice & Fish with Salad", price: "R40" },
  {
    name: "Panini Burger: Beef Patty, Red Onion, Green Pepper, Cucumber, Lettuce, Tomato, Cheese & Egg with Chips",
    price: "R45",
  },
];

export function FoodMenuPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 px-4 bg-[#14110D]/80 border-b border-border/40">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-secondary text-xs uppercase tracking-[0.4em] mb-3 font-semibold">
              Organic
            </p>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-brand-sand leading-tight">
              WAT-A-TING
              <span className="block text-secondary">FOOD MENU</span>
            </h1>
            <p className="text-muted-foreground mt-4 text-sm">
              Fresh, organic, made with love — from the heart of Soweto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-2xl space-y-14">
          {/* Daily Delights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-2xl font-bold text-brand-sand mb-1 uppercase tracking-wider">
              Daily Delights
            </h2>
            <p className="text-secondary text-xs uppercase tracking-widest mb-6">
              Available every day
            </p>
            <div className="space-y-3">
              {dailyDelights.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between border-b border-border/30 pb-3 group"
                >
                  <span className="text-white/90 group-hover:text-brand-sand transition-colors">
                    {item.name}
                  </span>
                  <span className="font-bold text-secondary ml-4 shrink-0">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Fresh Salads */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-2xl font-bold text-brand-sand mb-1 uppercase tracking-wider">
              Fresh Salads
            </h2>
            <p className="text-secondary text-xs uppercase tracking-widest mb-6">
              Freshly prepared daily
            </p>
            <div className="grid grid-cols-2 gap-3">
              {freshSalads.map((salad) => (
                <div
                  key={salad}
                  className="bg-[#14110D]/60 border border-border/30 rounded-lg px-4 py-3 text-white/90 hover:text-brand-sand hover:border-secondary/50 transition-colors"
                >
                  {salad}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Weekend Specials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-2xl font-bold text-brand-sand mb-1 uppercase tracking-wider">
              Weekend Specials
            </h2>
            <p className="text-secondary text-xs uppercase tracking-widest mb-6">
              Friday to Monday only
            </p>
            <div className="space-y-3">
              {weekendSpecials.map((item) => (
                <div
                  key={item.name}
                  className="flex items-start justify-between border-b border-border/30 pb-3 gap-4 group"
                >
                  <span className="text-white/90 group-hover:text-brand-sand transition-colors">
                    {item.name}
                  </span>
                  <span className="font-bold text-secondary shrink-0">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Order Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#14110D]/80 border border-secondary/30 rounded-xl p-6 text-center"
          >
            <p className="text-brand-sand font-bold mb-4 uppercase tracking-wider text-sm">
              WhatsApp to Order • Delivery or Call & Collect
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/27738204908"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/40 rounded-lg px-5 py-3 transition-colors font-semibold"
              >
                <MessageCircle className="h-4 w-4" />
                @STHUKZN · +27 73 820 4908
              </a>
              <a
                href="https://wa.me/27785595159"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/40 rounded-lg px-5 py-3 transition-colors font-semibold"
              >
                <Phone className="h-4 w-4" />
                @BROWN · +27 78 559 5159
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
