import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { format, isSameDay, parseISO, startOfDay, subDays } from "date-fns";
import { Users, UserPlus, CalendarDays, Mail, BarChart3 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import StatCard from "@/components/dashboard/StatCard";
import GrowthChart from "@/components/dashboard/GrowthChart";
import RecentMembers from "@/components/dashboard/RecentMembers";
import TestimonialManager from "@/components/dashboard/TestimonialManager";
import EngagementLeaderboard from "@/components/dashboard/EngagementLeaderboard";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState([]);
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const load = async () => {
      const me = await base44.auth.me();
      if (me?.role !== "admin") {
        setIsAdmin(false);
        setLoading(false);
        return;
      }
      setIsAdmin(true);

      const [userResult, subscriberList] = await Promise.all([
        base44.entities.User.list(),
        base44.entities.Inquiry.filter({ message: "Newsletter subscription" }),
      ]);

      setUsers(Array.isArray(userResult) ? userResult : userResult?.items || []);
      setSubscribers(subscriberList || []);
      setLoading(false);
    };
    load();
  }, []);

  const now = new Date();
  const joinedSince = (days) =>
    users.filter(
      (u) =>
        u.created_date &&
        parseISO(u.created_date) >= startOfDay(subDays(now, days))
    ).length;

  const chartData = Array.from({ length: 14 }, (_, i) =>
    startOfDay(subDays(now, 13 - i))
  ).map((day) => ({
    date: format(day, "MMM d"),
    members: users.filter(
      (u) => u.created_date && isSameDay(parseISO(u.created_date), day)
    ).length,
    subscribers: subscribers.filter(
      (s) => s.created_date && isSameDay(parseISO(s.created_date), day)
    ).length,
  }));

  return (
    <div className="pt-28 md:pt-32 pb-24 min-h-screen px-[4%] md:px-[2%]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <p className="font-body text-xs tracking-label uppercase text-accent">
              Neophronic Studios
            </p>
          </div>
          <h1 className="font-display text-display-lg font-light mb-4">
            Growth <span className="italic">Dashboard</span>
          </h1>
          <p className="font-body text-sm text-muted-foreground max-w-xl leading-relaxed">
            How many people are joining the world of Neophronic.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-24">
            <div className="w-6 h-6 border-2 border-border border-t-accent rounded-full animate-spin" />
          </div>
        ) : !isAdmin ? (
          <div className="rounded-2xl border border-border/60 bg-card/50 p-10 text-center">
            <p className="font-display text-2xl font-light mb-3">
              Admins only
            </p>
            <p className="font-body text-sm text-muted-foreground max-w-sm mx-auto">
              This dashboard shows member data, so it is limited to app admins.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                label="Total members"
                value={users.length}
                hint="Everyone with an account"
                icon={Users}
              />
              <StatCard
                label="New this week"
                value={joinedSince(7)}
                hint="Joined in the last 7 days"
                icon={UserPlus}
              />
              <StatCard
                label="New this month"
                value={joinedSince(30)}
                hint="Joined in the last 30 days"
                icon={CalendarDays}
              />
              <StatCard
                label="Newsletter"
                value={subscribers.length}
                hint="Email subscribers"
                icon={Mail}
              />
            </div>

            <GrowthChart data={chartData} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <RecentMembers users={users.slice(0, 6)} />
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/50 p-6 md:p-8">
                <BarChart3 size={18} className="text-accent mb-6" />
                <p className="font-display text-2xl font-light mb-3">
                  Site traffic
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Page views, sessions, traffic sources and recordings live in your
                  app's Analytics dashboard, under Dashboard in the editor.
                </p>
              </div>
            </div>

            <EngagementLeaderboard users={users} />

            <TestimonialManager />
          </div>
        )}
      </div>
    </div>
  );
}