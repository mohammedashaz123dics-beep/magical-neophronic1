import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { base44 } from "@/api/base44Client";

const DISCORD_URL = "https://discord.gg/JESjH6sWR";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    await base44.entities.Inquiry.create({
      full_name: "Newsletter Subscriber",
      email,
      inquiry_type: "General",
      message: "Newsletter subscription",
    });
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-foreground text-background w-full">
      <div className="px-[2%] w-full">
        <div className="py-24 md:py-40 pb-16 md:pb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 px-[2%] mx-auto max-w-[1400px]">
            <div>
              <h2 className="font-display text-display-lg font-light mb-6">
                Know <span className="italic">More?</span>
              </h2>
              <p className="font-body text-background/60 text-sm leading-relaxed max-w-md mb-8">
                Join the world of Neophronic Studios for updates on our models and more.
              </p>
              {subscribed ? (
                <p className="font-body text-sm tracking-label uppercase text-background/80">
                  Thank you for subscribing
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center border-b border-background/20 pb-2 max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 bg-transparent font-body text-sm text-background placeholder:text-background/40 focus:outline-none"
                    required
                  />
                  <button type="submit" className="ml-4 text-background/60 hover:text-background transition-colors">
                    <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-12">
              <div>
                <h3 className="font-body text-xs tracking-label uppercase text-background/60 mb-4">Navigate</h3>
                <nav className="flex flex-col gap-2">
                  <Link to="/" className="font-body text-sm text-background/70 hover:text-background transition-colors">Home</Link>
                  <Link to="/about-us" className="font-body text-sm text-background/70 hover:text-background transition-colors">About Us</Link>
                  <Link to="/sell" className="font-body text-sm text-background/70 hover:text-background transition-colors">Library</Link>
                  <Link to="/about" className="font-body text-sm text-background/70 hover:text-background transition-colors">Models</Link>
                </nav>
              </div>
              <div>
                <h3 className="font-body text-xs tracking-label uppercase text-background/60 mb-4">Contact</h3>
                <address className="not-italic flex flex-col gap-2 font-body text-sm text-background/70">
                  <a href="mailto:contact@neophronic.ai" className="hover:text-background transition-colors">contact@neophronic.ai</a>
                  <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">Join Discord</a>
                </address>
              </div>
              <div>
               <h3 className="font-body text-xs tracking-label uppercase text-background/60 mb-4">Follow</h3>
                <nav className="flex flex-col gap-2">
                  <a href="#" className="font-body text-sm text-background/70 hover:text-background transition-colors">Instagram</a>
                  <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-background/70 hover:text-background transition-colors">Join Discord</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 py-6 pb-10 md:pb-8 bg-foreground w-full">
        <div className="px-[2%]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start gap-4">
            <Link to="/" className="font-display text-xl font-light tracking-editorial order-first text-white">
              NEO<span style={{ color: "#FFCBA4" }}>PHRONIC</span>
            </Link>
            <span className="font-body text-xs text-background/40 mx-auto">
              © 2026 Neophronic. All rights reserved. Zeno™, Zeno G.O.A.T™ & Neophronic™ are trademarks of Neophronic.
            </span>
            <div className="flex gap-4 lg:ml-0 self-center lg:self-auto">
              <Link to="/privacy" onClick={() => window.scrollTo(0, 0)} className="font-body text-xs text-background/40 hover:text-background/70 transition-colors">Privacy Policy</Link>
              <Link to="/terms" onClick={() => window.scrollTo(0, 0)} className="font-body text-xs text-background/40 hover:text-background/70 transition-colors">Terms &amp; Conditions</Link>
              <Link to="/accessibility" onClick={() => window.scrollTo(0, 0)} className="font-body text-xs text-background/40 hover:text-background/70 transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}