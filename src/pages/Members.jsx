import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import { base44 } from "@/api/base44Client";
import MemberCard from "@/components/members/MemberCard";

export default function Members() {
  const [me, setMe] = useState(null);
  const [profiles, setProfiles] = useState([]);
  const [activity, setActivity] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const [currentUser, list, engagement] = await Promise.all([
        base44.auth.me().catch(() => null),
        base44.entities.MemberProfile.list("-created_date", 50),
        base44.entities.MemberActivity.aggregate({
          groupBy: "user_id",
          sum: ["points"],
        }),
      ]);

      const map = {};
      (engagement?.rows || []).forEach((row) => {
        map[row.user_id] = {
          points: row.sum_points || 0,
          visits: row.count || 0,
        };
      });

      setMe(currentUser);
      setProfiles(Array.isArray(list) ? list : []);
      setActivity(map);
      setLoading(false);
    };

    load();
  }, []);

  const hasOwnProfile = profiles.some((p) => p.user_id === me?.id);

  return (
    <div className="pt-28 md:pt-32 pb-24 px-[4%] md:px-[2%]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <p className="font-body text-xs tracking-label uppercase text-accent">
              Neophronic Studios
            </p>
          </div>
          <h1 className="font-display text-display-xl font-light leading-[0.95] mb-6">
            The <span className="italic">Members</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-[560px] leading-relaxed text-base md:text-lg">
            The people exploring the world of Zeno — and how deeply they've
            wandered.
          </p>
        </motion.div>

        {!loading && me && !hasOwnProfile && (
          <Link
            to={`/members/${me.id}`}
            className="mb-12 flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-accent/30 bg-accent/[0.06] p-6 hover:border-accent/60 transition-colors"
          >
            <span className="flex items-center justify-center w-11 h-11 rounded-full bg-accent/10 border border-accent/25 shrink-0">
              <UserRound size={18} className="text-accent" />
            </span>
            <div className="flex-1">
              <p className="font-display text-xl font-light mb-1">
                Set up your profile
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Add your name, photo and a short bio so members can find you.
              </p>
            </div>
            <span className="font-body text-xs tracking-label uppercase text-accent">
              Create profile →
            </span>
          </Link>
        )}

        {loading ? (
          <div className="flex justify-center py-24">
            <div className="w-6 h-6 border-2 border-border border-t-accent rounded-full animate-spin" />
          </div>
        ) : profiles.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border/70 py-20 text-center">
            <p className="font-display text-2xl font-light mb-3">
              No profiles yet
            </p>
            <p className="font-body text-sm text-muted-foreground">
              Member profiles will appear here as they are created.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-6">
            {profiles.map((profile, i) => (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.4) }}
              >
                <MemberCard
                  profile={profile}
                  points={activity[profile.user_id]?.points || 0}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}