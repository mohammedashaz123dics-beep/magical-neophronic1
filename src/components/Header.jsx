import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "https://media.base44.com/images/public/6ac8911d1be83d1b620a4dd6/de423c2cd_Neophronic_Logo.jpg";
const DISCORD_URL = "https://discord.gg/JESjH6sWR";

function DiscordIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.872-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      setHidden(currentY > lastScrollY && currentY > 200);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
   { label: "About Us", path: "/about-us" },
   { label: "Library", path: "/sell" },
   { label: "Models", path: "/about" },
   { label: "Members", path: "/members" }];

  const textColor = "text-foreground";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        hidden ? "-translate-y-full" : "translate-y-0"} ${
        scrolled ? "bg-background/95 backdrop-blur-xl border-b border-border/50" : "bg-transparent"}`}>

        <div className="w-full px-[4%] md:px-[2%]">
          <div className="flex items-center justify-between h-14 md:h-16">
            <Link to="/" className="relative z-10 flex items-center gap-2">
              <img src={LOGO_URL} alt="Neophronic" className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover" />
              <span className={`font-display text-2xl md:text-3xl 3xl:text-4xl font-light tracking-editorial ${menuOpen ? "text-foreground" : textColor}`}>NEO<span className="text-accent">PHRONIC</span></span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) =>
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-xs tracking-label uppercase relative group pb-1 ${
                location.pathname === link.path ? "text-accent" : "text-foreground"}`}
                >
                   {link.label}
                   <span className="absolute bottom-0 left-0 w-full h-px bg-current origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              )}
              <a
                href="https://zeno-ai-app.base44.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-8 py-3 text-sm font-body tracking-widest uppercase transition-all duration-500 rounded-full border border-foreground bg-foreground text-background hover:bg-foreground/80">
                Go to Zeno
              </a>

              {/* Discord link */}
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground hover:text-foreground/70 transition-colors"
                aria-label="Discord">
                <DiscordIcon size={20} />
              </a>

              {/* Settings */}
              <Link
                to="/settings"
                className="p-2 text-foreground hover:text-foreground/70 transition-colors"
                aria-label="Settings">
                <Settings size={20} />
              </Link>
            </nav>

            {/* Mobile: discord + settings + hamburger */}
            <div className="flex items-center gap-1 md:hidden">
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative z-10 p-2 ${menuOpen ? "text-foreground" : textColor}`}
                aria-label="Discord">
                <DiscordIcon size={22} />
              </a>
              <Link
                to="/settings"
                onClick={() => setMenuOpen(false)}
                className={`relative z-10 p-2 ${menuOpen ? "text-foreground" : textColor}`}
                aria-label="Settings">
                <Settings size={22} />
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`relative z-10 p-2 ${menuOpen ? "text-foreground" : textColor}`}
                aria-label="Toggle menu">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-40 bg-background flex flex-col items-start justify-center px-[4%]">
            <nav className="flex flex-col items-start gap-6">
              {navLinks.map((link, i) =>
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.2 }}>
                  <Link
                  to={link.path}
                  className="font-display text-display-md text-foreground hover:text-[#976620] transition-colors text-left">
                    {link.label}
                  </Link>
                </motion.div>
            )}
              <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}>
                <a href="https://zeno-ai-app.base44.app/" target="_blank" rel="noopener noreferrer" className="ghost-btn text-sm mt-6">
                  Go to Zeno
                </a>
              </motion.div>
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </>);
}