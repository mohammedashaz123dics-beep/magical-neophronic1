import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Zap } from "lucide-react";

const ZENO_FC_URL = "https://gameday-win-zone.base44.app";

const comingSoon = [
  { name: "Zeno Learn", note: "Guided lessons and study tools" },
  { name: "Zeno MC", note: "AKA Neophronic Host — live hosting and events" },
  { name: "Zeno Speak", note: "Voice, speech and conversation" },
];

export default function Branches() {
  return (
    <div className="relative pt-28 md:pt-32 pb-24 overflow-hidden">
      {/* Gradient blur backdrop */}
      <div className="pointer-events-none absolute -top-40 -right-32 w-[460px] h-[460px] rounded-full bg-gradient-to-br from-[#d4af37]/30 via-[#facca3]/20 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-72 -left-40 w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-[#7dd3fc]/25 via-[#c4b5fd]/20 to-transparent blur-3xl" />

      <section className="relative px-[4%] md:px-[2%] max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <p className="font-body text-xs tracking-label uppercase text-accent">
              Neophronic Studios
            </p>
          </div>
          <h1 className="font-display text-display-xl font-light leading-[0.95]">
            Other <span className="italic">Branches</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-[560px] leading-relaxed text-base md:text-lg mt-8">
            Beyond the studio — the worlds Neophronic is building next.
          </p>
        </motion.div>

        {/* Under Zeno */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-20 md:mb-28"
        >
          <span className="font-body text-xs tracking-label uppercase text-accent mb-6 block">
            Under Zeno
          </span>
          <a
            href={ZENO_FC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10 overflow-hidden rounded-3xl border border-border/60 bg-card/60 p-8 md:p-12 hover:border-accent/40 transition-colors"
          >
            <div className="pointer-events-none absolute -top-24 -right-16 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#d4af37]/25 via-[#facca3]/10 to-transparent blur-3xl" />
            <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 border border-accent/20 shrink-0">
              <Zap size={22} className="text-accent" />
            </div>
            <div className="relative flex-1">
              <h2 className="font-display text-display-md font-light mb-2">
                Zeno FC
              </h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md">
                An all-in-one inclusive football app — match predictions, AI
                strategy, live scores tracker and more.
              </p>
            </div>
            <span className="relative inline-flex items-center gap-2 font-body text-xs tracking-label uppercase text-foreground group-hover:text-accent transition-colors">
              Visit Zeno FC
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </span>
          </a>
        </motion.div>

        {/* Coming soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-accent" />
            <p className="font-body text-xs tracking-label uppercase text-accent">
              Coming Soon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoon.map((branch, i) => (
              <motion.div
                key={branch.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-8"
              >
                <div className="pointer-events-none absolute -bottom-16 -right-12 w-[180px] h-[180px] rounded-full bg-gradient-to-tr from-[#d4af37]/20 via-[#7dd3fc]/10 to-transparent blur-2xl" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-body text-xs tracking-label uppercase text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                      <Clock size={12} className="text-accent" />
                      <span className="font-body text-[10px] tracking-label uppercase text-accent">
                        Coming Soon
                      </span>
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-light mb-2">
                    {branch.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {branch.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}