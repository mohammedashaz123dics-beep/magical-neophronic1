import { Link } from "react-router-dom";
import { tierFor } from "@/lib/engagement";

export default function MemberCard({ profile, points = 0 }) {
  const tier = tierFor(points);

  return (
    <Link
      to={`/members/${profile.user_id}`}
      className="group block overflow-hidden rounded-2xl border border-border/60 bg-card/40 hover:border-accent/40 transition-colors"
    >
      <div className="aspect-[4/5] overflow-hidden bg-secondary/50">
        {profile.photo ? (
          <img
            src={profile.photo}
            alt={profile.display_name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-display text-6xl text-accent/40">
            {profile.display_name.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      <div className="p-5">
        <p className="font-display text-xl font-light mb-1 group-hover:text-accent transition-colors">
          {profile.display_name}
        </p>
        {profile.headline && (
          <p className="font-body text-[10px] tracking-label uppercase text-muted-foreground mb-4">
            {profile.headline}
          </p>
        )}
        <div className="flex items-center justify-between">
          <span
            className={`inline-flex items-center rounded-full border px-3 py-1 font-body text-[10px] tracking-label uppercase ${tier.className}`}
          >
            {tier.label}
          </span>
          <span className="font-body text-xs text-muted-foreground">
            {points} pts
          </span>
        </div>
      </div>
    </Link>
  );
}