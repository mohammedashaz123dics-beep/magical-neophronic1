import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HelpCircle, Coins, LogOut, ChevronRight, BarChart3 } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";

const items = [
  {
    label: "Dashboard",
    description: "Track members and growth",
    icon: BarChart3,
    to: "/dashboard",
  },
  {
    label: "FAQ",
    description: "Answers to common questions",
    icon: HelpCircle,
    to: "/faq",
  },
  {
    label: "Shares",
    description: "Buy shares of Neophronic Studios",
    icon: Coins,
    to: "/shares",
  },
];

export default function Settings() {
  const { logout } = useAuth();

  return (
    <div className="pt-28 md:pt-32 pb-24 min-h-screen px-[4%] md:px-[2%]">
      <div className="max-w-[720px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <p className="font-body text-xs tracking-label uppercase text-accent">
              Menu
            </p>
          </div>
          <h1 className="font-display text-display-lg font-light">Settings</h1>
        </motion.div>

        <div className="border-t border-border/60">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              >
                <Link
                  to={item.to}
                  className="group flex items-center gap-5 py-6 border-b border-border/60 hover:border-accent/40 transition-colors"
                >
                  <Icon size={20} className="text-accent shrink-0" />
                  <div className="flex-1">
                    <p className="font-display text-2xl font-light">{item.label}</p>
                    <p className="font-body text-xs text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                  <ChevronRight
                    size={18}
                    className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all"
                  />
                </Link>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              onClick={() => logout()}
              className="group flex items-center gap-5 py-6 w-full text-left border-b border-border/60 hover:border-accent/40 transition-colors"
            >
              <LogOut size={20} className="text-accent shrink-0" />
              <div className="flex-1">
                <p className="font-display text-2xl font-light">Log Out</p>
                <p className="font-body text-xs text-muted-foreground mt-1">
                  End your session
                </p>
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}