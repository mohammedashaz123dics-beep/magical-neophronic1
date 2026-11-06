import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

export default function Faq() {
  return (
    <div className="pt-28 md:pt-32 pb-24 min-h-screen">
      <section className="px-[4%] md:px-[2%] max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center py-24 md:py-40"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-accent" />
            <p className="font-body text-xs tracking-label uppercase text-accent">
              Help Center
            </p>
            <div className="w-8 h-px bg-accent" />
          </div>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/50 border border-border/50 mb-8">
            <HelpCircle size={28} className="text-muted-foreground" />
          </div>
          <h1 className="font-display text-display-lg font-light mb-6">
            Not yet <span className="italic">released</span>
          </h1>
          <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
            Our FAQ page is coming soon. Check back later for answers to common questions.
          </p>
        </motion.div>
      </section>
    </div>
  );
}