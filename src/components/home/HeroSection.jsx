import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const LOGO_URL = "https://media.base44.com/images/public/6ac8911d1be83d1b620a4dd6/de423c2cd_Neophronic_Logo.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background flex flex-col items-center justify-center px-[4%]">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-accent/[0.04] blur-3xl"
        />
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-10 md:mb-14 z-10"
      >
        <img
          src={LOGO_URL}
          alt="Neophronic Logo"
          className="w-32 h-32 md:w-44 md:h-44 object-contain rounded-full shadow-xl"
        />
      </motion.div>

      {/* Main text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-center relative z-10"
      >
        <h1 className="font-display text-display-xl text-foreground font-light leading-[0.9]">
          NEOPHRONIC<br />
          <span className="italic">Studios</span>
        </h1>
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="font-body text-xs tracking-label uppercase text-muted-foreground mt-8 md:mt-10 relative z-10"
      >
        The Greatest of All Time
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-muted-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}