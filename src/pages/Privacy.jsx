import { motion } from "framer-motion";

export default function Privacy() {
  const sections = [
    {
      title: "Information we collect",
      text: "When you create an account or subscribe to our newsletter, we collect your email address and any other information you voluntarily provide. We do not sell or share your personal data with third parties.",
    },
    {
      title: "How we use your information",
      text: "We use your email to send newsletter updates about Neophronic Studios and our models. Your account information is used solely to provide access to the platform and personalize your experience.",
    },
    {
      title: "Data storage & security",
      text: "Your data is stored securely using industry-standard encryption. We do not store payment information on our servers. Access to personal data is restricted to authorized personnel only.",
    },
    {
      title: "Your rights",
      text: "You may request access to, correction of, or deletion of your personal data at any time. You can unsubscribe from our newsletter at any time by clicking the link in any email we send.",
    },
    {
      title: "Cookies",
      text: "We use essential cookies to maintain your authentication session. We do not use tracking or advertising cookies.",
    },
    {
      title: "Contact",
      text: "For privacy-related questions, reach out to us via our Discord community or the contact information provided in the footer of this site.",
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
            Privacy Policy
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