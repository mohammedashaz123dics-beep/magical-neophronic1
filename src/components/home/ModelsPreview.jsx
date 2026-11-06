import { motion } from "framer-motion";
import { Sparkles, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const models = [
  {
    version: "V1",
    name: "Zeno G.O.A.T V1",
    status: "Released",
    date: "October 2nd",
    Icon: Sparkles,
    iconColor: "text-green-500",
    badgeBg: "bg-green-500/10 border-green-500/20",
  },
  {
    version: "V2",
    name: "Zeno G.O.A.T V2",
    status: "Releasing Soon",
    date: "November 10th",
    Icon: Clock,
    iconColor: "text-accent",
    badgeBg: "bg-accent/10 border-accent/20",
  },
];

export default function ModelsPreview() {
  return (
    <section className="py-24 md:py-40 px-[4%] md:px-[2%] max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16 md:mb-24"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-accent" />
          <p className="font-body text-xs tracking-label uppercase text-accent">
            The Lineup
          </p>
          <div className="w-8 h-px bg-accent" />
        </div>
        <h2 className="font-display text-display-lg font-light leading-[1.1]">
          Our <span className="italic">Models</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {models.map((model, i) => {
          const { Icon } = model;
          return (
            <motion.div
              key={model.version}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative border border-border/50 rounded-3xl p-10 md:p-14 hover:border-accent/30 transition-all duration-500 bg-card/50"
            >
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${model.badgeBg} border mb-8`}>
                <Icon size={14} className={model.iconColor} />
                <span className={`font-body text-xs tracking-label uppercase ${model.iconColor}`}>
                  {model.status}
                </span>
              </div>
              <h3 className="font-display text-display-md font-light mb-4 bg-gradient-to-r from-[#facca3] via-[#d4af37] to-[#facca3] bg-clip-text text-transparent">
                {model.name}
              </h3>
              <p className="font-body text-sm tracking-label uppercase text-muted-foreground">
                {model.date}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-center mt-16"
      >
        <Link
          to="/about"
          className="inline-flex items-center gap-2 font-body text-xs tracking-label uppercase text-foreground hover:text-accent transition-colors group"
        >
          View All Models
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </section>
  );
}