import { Clock, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

export function ContactPage() {
  return (
    <main className="min-h-screen py-16 px-4" data-ocid="contact.section">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="font-display text-5xl font-bold text-brand-sand mb-3">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg">
            Come visit us or give us a call
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 rounded-lg p-3">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display text-brand-sand text-xl mb-1">
                    Address
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Corner of Vilakazi &amp; 883 Magwaza St
                    <br />
                    Moroka, Soweto, 1860
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 rounded-lg p-3">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display text-brand-sand text-xl mb-1">
                    Phone
                  </h3>
                  <a
                    href="tel:0738204908"
                    className="text-brand-sand hover:text-brand-beige text-lg font-semibold transition-colors"
                    data-ocid="contact.link"
                  >
                    073 820 4908
                  </a>
                  <p className="text-muted-foreground text-sm mt-1">
                    Tap to call directly
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 rounded-lg p-3">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display text-brand-sand text-xl mb-1">
                    Hours
                  </h3>
                  <p className="text-brand-sand font-bold text-lg">
                    Open 24 Hours
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Every day, all week
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl overflow-hidden border border-border/50 min-h-[400px]"
          >
            <iframe
              title="WataTing420 Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.6!2d27.8833!3d-26.2667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE2JzAwLjAiUyAyN8KwNTMnMDAuMCJF!5e0!3m2!1sen!2sza!4v1680000000000!5m2!1sen!2sza&q=Corner+of+Vilakazi+%26+883+Magwaza+St+Moroka+Soweto+1860"
              width="100%"
              height="100%"
              style={{
                minHeight: "400px",
                border: 0,
                filter: "invert(90%) hue-rotate(180deg)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
