import { motion } from "framer-motion";

const stats = [
  { value: "2025", label: "Founded" },
  { value: "1", label: "Model Live" },
  { value: "1", label: "Coming Soon" },
  { value: "∞", label: "Potential" },
];

export default function StatsSection() {
  return (
    <section className="py-24 md:py-32 border-y border-border/50">
      <div className="px-[4%] md:px-[2%] max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-display-md font-light text-foreground mb-2">
                {stat.value}
              </p>
              <p className="font-body text-xs tracking-label uppercase text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}