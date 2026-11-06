import { useEffect, useState } from "react";
import { Trophy } from "lucide-react";
import { base44 } from "@/api/base44Client";

const rankStyles = {
  1: "border-accent/40 bg-accent/[0.06]",
  2: "border-border/60 bg-background/40",
  3: "border-border/60 bg-background/40",
};

export default function EngagementLeaderboard({ users = [] }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const result = await base44.entities.MemberActivity.aggregate({
        groupBy: "user_id",
        sum: ["points"],
      });

      const ranked = (result?.rows || [])
        .slice()
        .sort(
          (a, b) =>
            (b.sum_points || 0) - (a.sum_points || 0) || b.count - a.count
        )
        .slice(0, 5);

      const nameFor = (userId) => {
        const user = users.find((u) => u.id === userId);
        return user?.full_name || user?.email || "Former member";
      };

      setRows(
        ranked.map((row) => ({
          id: row.user_id,
          name: nameFor(row.user_id),
          points: row.sum_points || 0,
          visits: row.count || 0,
        }))
      );
      setLoading(false);
    };

    load();
  }, [users]);

  return (
    <div className="rounded-2xl border border-border/60 bg-card/50 p-6 md:p-8">
      <div className="flex items-center gap-3 mb-2">
        <Trophy size={18} className="text-accent" />
        <p className="font-display text-2xl font-light">Top members</p>
      </div>
      <p className="font-body text-sm text-muted-foreground mb-6">
        Ranked by how much of the site they explore.
      </p>

      {loading ? (
        <div className="flex justify-center py-10">
          <div className="w-6 h-6 border-2 border-border border-t-accent rounded-full animate-spin" />
        </div>
      ) : rows.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border/70 py-10 text-center">
          <p className="font-body text-sm text-muted-foreground">
            No activity yet — engagement is recorded as members browse the site.
          </p>
        </div>
      ) : (
        <ol className="space-y-3">
          {rows.map((row, i) => {
            const rank = i + 1;
            return (
              <li
                key={row.id || row.name}
                className={`flex items-center gap-4 rounded-xl border p-4 ${rankStyles[rank] || "border-border/60 bg-background/40"}`}
              >
                <span className="font-display text-lg font-light w-7 text-muted-foreground">
                  {String(rank).padStart(2, "0")}
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-full border border-accent/25 bg-accent/10 font-body text-xs tracking-label uppercase text-accent shrink-0">
                  {row.name.charAt(0)}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-body text-sm font-medium truncate">
                    {row.name}
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">
                    {row.visits} {row.visits === 1 ? "page" : "pages"} explored
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-display text-xl font-light leading-none">
                    {row.points}
                  </p>
                  <p className="font-body text-[10px] tracking-label uppercase text-muted-foreground mt-1">
                    points
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}