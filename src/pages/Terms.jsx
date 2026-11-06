import { motion } from "framer-motion";

export default function Terms() {
  const sections = [
    {
      title: "Acceptance of terms",
      text: "By accessing and using this website, you accept and agree to be bound by these Terms & Conditions. If you do not agree, please do not use the site.",
    },
    {
      title: "Use of the site",
      text: "You may use this site for personal, non-commercial purposes. You agree not to modify, distribute, or reproduce the content without prior written permission from Neophronic.",
    },
    {
      title: "Intellectual property",
      text: "All content on this site — including the Neophronic Studios and Zeno G.O.A.T names, logos, text, and designs — is the property of Neophronic and protected by copyright and trademark law. Zeno™, Zeno G.O.A.T™, and Neophronic™ are trademarks of Neophronic.",
    },
    {
      title: "User accounts",
      text: "Access to certain areas of the site requires an account. You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account.",
    },
    {
      title: "Third-party links",
      text: "This site may contain links to external websites, including the Zeno platform. Neophronic Studios is not responsible for the content or practices of any third-party sites.",
    },
    {
      title: "Limitation of liability",
      text: "Neophronic provides this site on an \"as is\" basis. We are not liable for any damages arising from the use of or inability to use the site or its content.",
    },
    {
      title: "Changes to these terms",
      text: "Neophronic reserves the right to update these Terms & Conditions at any time. Continued use of the site after changes constitutes acceptance of the new terms.",
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
            Terms &amp; Conditions
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
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {section.text}
                </p>
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