import { motion } from "framer-motion";

const LOGO_URL = "https://media.base44.com/images/public/6ac8911d1be83d1b620a4dd6/de423c2cd_Neophronic_Logo.jpg";

export default function IntroSection() {
  return (
    <section className="py-24 md:py-40 px-[4%] md:px-[2%] max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <p className="font-body text-xs tracking-label uppercase text-accent">
              Who We Are
            </p>
          </div>
          <h2 className="font-display text-display-lg font-light leading-[1.1] mb-8">
            Inside<br />
            <span className="italic">Neophronic Studios</span>
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
            Neophronic Studios is a creative studio — a vision born from curiosity,
            built for fun, and evolved into something extraordinary. We oversee the
            development, direction, and future of the Zeno G.O.A.T model lineup.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-accent/[0.04] blur-3xl scale-150" />
            <img
              src={LOGO_URL}
              alt="Neophronic"
              className="relative w-48 h-48 md:w-64 md:h-64 object-contain rounded-full shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}