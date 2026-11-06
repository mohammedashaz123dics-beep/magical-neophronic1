import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Pencil } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import EngagementStatus from "@/components/members/EngagementStatus";
import ProfileEditor from "@/components/members/ProfileEditor";

export default function MemberProfile() {
  const { userId } = useParams();
  const [me, setMe] = useState(null);
  const [profile, setProfile] = useState(null);
  const [stats, setStats] = useState({ points: 0, visits: 0 });
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  const load = async () => {
    const [currentUser, profiles, engagement] = await Promise.all([
      base44.auth.me().catch(() => null),
      base44.entities.MemberProfile.filter({ user_id: userId }),
      base44.entities.MemberActivity.aggregate({
        query: { user_id: userId },
        groupBy: "user_id",
        sum: ["points"],
      }),
    ]);

    const row = engagement?.rows?.[0];
    setMe(currentUser);
    setProfile(profiles[0] || null);
    setStats({ points: row?.sum_points || 0, visits: row?.count || 0 });
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    setEditing(false);
    load();
  }, [userId]);

  const isOwner = !loading && me?.id === userId;
  const missing = !loading && !profile && !isOwner;

  useEffect(() => {
    if (!missing) return;
    const meta = document.createElement("meta");
    meta.name = "prerender-status-code";
    meta.content = "404";
    document.head.appendChild(meta);
    return () => meta.remove();
  }, [missing]);

  const showForm = !loading && (editing || (isOwner && !profile));

  return (
    <div className="pt-28 md:pt-32 pb-24 px-[4%] md:px-[2%]">
      <div className="max-w-[1200px] mx-auto">
        <Link
          to="/members"
          className="inline-flex items-center gap-2 font-body text-xs tracking-label uppercase text-muted-foreground hover:text-accent transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          All members
        </Link>

        {loading ? (
          <div className="flex justify-center py-24">
            <div className="w-6 h-6 border-2 border-border border-t-accent rounded-full animate-spin" />
          </div>
        ) : missing ? (
          <div className="rounded-2xl border border-border/60 bg-card/50 p-12 text-center">
            <p className="font-display text-3xl font-light mb-3">
              Profile not found
            </p>
            <p className="font-body text-sm text-muted-foreground">
              This member hasn't set up a profile yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 md:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border/60 bg-secondary/50">
                {profile?.photo ? (
                  <img
                    src={profile.photo}
                    alt={profile.display_name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-display text-7xl text-accent/40">
                    {(profile?.display_name || me?.full_name || "?").charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-display text-display-lg font-light leading-[0.95] mb-3">
                {profile?.display_name || me?.full_name || "Your profile"}
              </h1>
              {profile?.headline && (
                <p className="font-body text-xs tracking-label uppercase text-accent mb-6">
                  {profile.headline}
                </p>
              )}

              {profile?.bio && (
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mb-8">
                  {profile.bio}
                </p>
              )}

              <div className="space-y-6">
                <EngagementStatus
                  points={stats.points}
                  visits={stats.visits}
                  since={profile?.created_date}
                />

                {showForm ? (
                  <ProfileEditor
                    profile={profile}
                    userId={userId}
                    onSaved={() => {
                      setEditing(false);
                      setLoading(true);
                      load();
                    }}
                    onCancel={profile ? () => setEditing(false) : null}
                  />
                ) : (
                  isOwner && (
                    <Button
                      onClick={() => setEditing(true)}
                      className="rounded-full font-body"
                    >
                      <Pencil size={14} />
                      Edit profile
                    </Button>
                  )
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}