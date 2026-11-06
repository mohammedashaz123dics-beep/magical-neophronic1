import { format } from "date-fns";
import { Activity } from "lucide-react";
import { tierFor } from "@/lib/engagement";

function Stat({ label, value }) {
  return (
    <div>
      <p className="font-display text-2xl font-light leading-none">{value}</p>
      <p className="font-body text-[10px] tracking-label uppercase text-muted-foreground mt-2">
        {label}
      </p>
    </div>
  );
}

export default function EngagementStatus({ points = 0, visits = 0, since }) {
  const tier = tierFor(points);

  return (
    <div className="rounded-2xl border border-border/60 bg-card/50 p-6">
      <div className="flex items-center gap-3 mb-4">
        <Activity size={16} className="text-accent" />
        <p className="font-body text-[10px] tracking-label uppercase text-muted-foreground">
          Engagement status
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-5">
        <span
          className={`inline-flex items-center rounded-full border px-3 py-1 font-body text-[10px] tracking-label uppercase ${tier.className}`}
        >
          {tier.label}
        </span>
        <span className="font-body text-xs text-muted-foreground">
          {tier.note}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 border-t border-border/60 pt-5">
        <Stat label="Points" value={points} />
        <Stat label="Pages explored" value={visits} />
        <Stat
          label="Member since"
          value={since ? format(new Date(since), "MMM yyyy") : "—"}
        />
      </div>

      {tier.next && (
        <p className="font-body text-xs text-muted-foreground mt-5">
          {tier.next.min - points} more to reach {tier.next.label}.
        </p>
      )}
    </div>
  );
}