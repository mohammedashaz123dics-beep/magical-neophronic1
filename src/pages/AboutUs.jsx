import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutUs() {
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: parallaxRef, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div className="pt-28 md:pt-32 pb-24">
      {/* Hero */}
      <section className="px-[4%] md:px-[2%] max-w-[1400px] mx-auto mb-20 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <p className="font-body text-xs tracking-label uppercase text-accent">
              Neophronic Studios
            </p>
          </div>
          <h1 className="font-display text-display-xl font-light leading-[0.9] mb-8">
            The Story of <span className="italic">Neophronic</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-[600px] leading-relaxed text-base md:text-lg">
            Neophronic Studios is a creative studio — a vision born from curiosity,
            built for fun, and evolved into something extraordinary.
          </p>
        </motion.div>
      </section>

      {/* Story sections */}
      <section className="px-[4%] md:px-[2%] max-w-[1400px] mx-auto mb-20 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-xs tracking-label uppercase text-accent mb-4 block">
              01 — Origins
            </span>
            <h2 className="font-display text-display-md font-light mb-6">
              It started as <span className="italic">fun</span>
            </h2>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
              What began as a fun project among developers quickly revealed something
              far greater. The team realized the potential to create something better —
              something that could redefine how people interact with AI.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="font-body text-xs tracking-label uppercase text-accent mb-4 block">
              02 — Evolution
            </span>
            <h2 className="font-display text-display-md font-light mb-6">
              Then came <span className="italic">Zeno</span>
            </h2>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
              On November 5th, the developers' vision took shape with the creation of
              Zeno — an AI built to be the greatest of all time. Alongside Zeno,
              Neophronic was born as the parent company to lead and nurture this vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full bleed image with overlay */}
      <div className="w-full h-[400px] md:h-[600px] overflow-hidden relative mb-20 md:mb-32">
        <motion.div
          ref={parallaxRef}
          className="absolute inset-0 w-full h-[140%] top-[-20%]"
          style={{ y: parallaxY }}
        >
          <img
            src="https://media.base44.com/images/public/6a0c3ea982f98940623f21f5/6dda216cf_Base44_Templates_Gemini_3__Nano_Banana_Pro__2026-05-19_14-53-44.jpg"
            alt="Neophronic"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
      </div>

      {/* Neophronic mission */}
      <section className="px-[4%] md:px-[2%] max-w-[1400px] mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-body text-xs tracking-label uppercase text-accent mb-6 block">
            The Mission
          </span>
          <h2 className="font-display text-display-lg font-light mb-6">
            Neophronic Studios is the <span className="italic">home</span><br />
            of the models
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            As a studio, Neophronic oversees the development, direction, and future of
            the Zeno G.O.A.T lineup. What started as fun became a mission — and that
            mission is just getting started.
          </p>
        </motion.div>
      </section>

      {/* Copyright */}
      <section className="px-[4%] md:px-[2%] max-w-[1400px] mx-auto pt-12 border-t border-border/50">
        <p className="font-body text-xs text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
          © 2026 Neophronic. All rights reserved. Zeno™, Zeno G.O.A.T™, and Neophronic™
          are trademarks of Neophronic. This project, its content, and the Zeno
          G.O.A.T software are protected by copyright law. Unauthorized copying, reproduction,
          or distribution is strictly prohibited.
        </p>
      </section>
    </div>
  );
}