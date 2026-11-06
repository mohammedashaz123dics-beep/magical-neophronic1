import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { base44 } from "@/api/base44Client";

const SKIP_PAGES = ["/dashboard", "/settings"];
const SESSION_KEY = "np_explored_pages";

export default function ActivityTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (SKIP_PAGES.includes(pathname)) return;

    const log = async () => {
      const seen = JSON.parse(sessionStorage.getItem(SESSION_KEY) || "[]");
      if (seen.includes(pathname)) return;

      const me = await base44.auth.me().catch(() => null);
      if (!me) return;

      sessionStorage.setItem(
        SESSION_KEY,
        JSON.stringify([...seen, pathname])
      );

      await base44.entities.MemberActivity.create({
        user_id: me.id,
        user_name: me.full_name || me.email,
        action: "visit",
        page: pathname,
        points: 1,
      });
    };

    log();
  }, [pathname]);

  return null;
}