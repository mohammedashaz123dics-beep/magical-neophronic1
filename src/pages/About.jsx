import { motion } from "framer-motion";
import { Sparkles, Clock, ArrowRight, GitBranch } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="pt-28 md:pt-32 pb-24">
      <section className="px-[4%] md:px-[2%] max-w-[1400px] mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 md:mb-32"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <p className="font-body text-xs tracking-label uppercase text-accent">
              Neophronic Studios
            </p>
            <div className="w-8 h-px bg-accent" />
          </div>
          <h1 className="font-display text-display-xl font-light leading-[0.9]">
            Our <span className="italic">Models</span>
          </h1>
          <Link
            to="/branches"
            className="inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-full border border-border font-body text-xs tracking-label uppercase text-foreground hover:border-accent hover:text-accent transition-colors">
            <GitBranch size={14} />
            Other Branches
            <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Zeno 2.0 — Released */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative text-center mb-16 md:mb-24"
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="w-[320px] h-[320px] rounded-full bg-gradient-to-br from-[#d4af37]/25 via-[#facca3]/10 to-transparent blur-3xl" />
          </div>
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <Sparkles size={14} className="text-green-500" />
              <span className="font-body text-xs tracking-label uppercase text-green-500">
                Released — v1.5 Update
              </span>
            </div>
            <h2 className="font-display text-display-xl font-light mb-4 bg-gradient-to-r from-[#facca3] via-[#d4af37] to-[#facca3] bg-clip-text text-transparent">
              Zeno 2.0
            </h2>
            <p className="font-body text-sm tracking-label uppercase text-muted-foreground">
              Released — November 3rd
            </p>
          </div>
        </motion.div>

        {/* Timeline divider */}
        <div className="flex items-center justify-center gap-4 mb-16 md:mb-24">
          <div className="hairline flex-1 max-w-[200px]" />
          <div className="w-2 h-2 rounded-full bg-accent/30" />
          <div className="hairline flex-1 max-w-[200px]" />
        </div>

        {/* V1 — Released */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
            <Sparkles size={14} className="text-green-500" />
            <span className="font-body text-xs tracking-label uppercase text-green-500">
              Released
            </span>
          </div>
          <h2 className="font-display text-display-lg font-light mb-4 bg-gradient-to-r from-[#facca3] via-[#d4af37] to-[#facca3] bg-clip-text text-transparent">
            Zeno G.O.A.T V1
          </h2>
          <p className="font-body text-sm tracking-label uppercase text-muted-foreground">
            Released — October 2nd
          </p>
        </motion.div>

        {/* Timeline divider */}
        <div className="flex items-center justify-center gap-4 mb-16 md:mb-24">
          <div className="hairline flex-1 max-w-[200px]" />
          <div className="w-2 h-2 rounded-full bg-accent/30" />
          <div className="hairline flex-1 max-w-[200px]" />
        </div>

        {/* V2 — Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center py-16 md:py-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <Clock size={14} className="text-accent" />
            <span className="font-body text-xs tracking-label uppercase text-accent">
              Releasing Soon
            </span>
          </div>
          <h2 className="font-display text-display-lg font-light mb-4 bg-gradient-to-r from-[#facca3] via-[#d4af37] to-[#facca3] bg-clip-text text-transparent">
            Zeno G.O.A.T V2
          </h2>
          <p className="font-body text-sm tracking-label uppercase text-muted-foreground">
            November 10th
          </p>
        </motion.div>
      </section>
    </div>
  );
}