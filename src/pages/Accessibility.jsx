import { motion } from "framer-motion";

export default function Accessibility() {
  const sections = [
    {
      title: "Our commitment",
      text: "Neophronic is committed to making our website accessible to all visitors, including those with disabilities. We strive to ensure that everyone can browse, navigate, and engage with our content with the same level of ease and enjoyment.",
    },
    {
      title: "Accessibility adjustments on this site",
      text: "We have adapted this site in accordance with WCAG guidelines and have made the content accessible to the extent possible. As part of this effort, we have:",
      list: [
        "Set the language of the site",
        "Defined clear heading structures on all pages",
        "Added alternative text to images",
        "Implemented color combinations that meet required contrast ratios",
        "Ensured keyboard navigation is supported",
        "Reduced unnecessary motion and animations",
      ],
    },
    {
      title: "Browser & assistive technology support",
      text: "This site is designed to be compatible with modern browsers and commonly used assistive technologies, including screen readers and voice recognition software.",
    },
    {
      title: "Requests, issues and suggestions",
      text: "If you find an accessibility issue on the site, or if you require further assistance, please reach out to us through our Discord community. We are continually working to improve the accessibility of our site and welcome your feedback.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 md:pt-32">
      <section className="pb-24 px-[4%] md:px-[2%] max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[760px]"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <p className="font-body text-xs tracking-label uppercase text-accent">Legal</p>
          </div>
          <h1 className="font-display text-display-lg font-light mb-16">
            Accessibility Statement
          </h1>

          <div className="space-y-14">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="hairline mb-8" />
                <h2 className="font-display text-display-sm font-light mb-4">{section.title}</h2>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {section.text}
                </p>
                {section.list && (
                  <ul className="space-y-2">
                    {section.list.map((item, j) => (
                      <li key={j} className="font-body text-sm text-muted-foreground leading-relaxed flex gap-3">
                        <span className="text-accent mt-1">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          <div className="hairline mt-14 mb-8" />
          <p className="font-body text-xs text-muted-foreground leading-relaxed">
            © 2026 Neophronic. Zeno™, Zeno G.O.A.T™, and Neophronic™ are trademarks of Neophronic.
          </p>
        </motion.div>
      </section>
    </div>
  );
}