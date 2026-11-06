import { format, parseISO } from "date-fns";
import { User } from "lucide-react";

export default function RecentMembers({ users }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card/50 p-6 md:p-8">
      <p className="font-display text-2xl font-light">Newest members</p>
      <p className="font-body text-xs text-muted-foreground mt-1 mb-6">
        The latest people to join Neophronic Studios
      </p>

      {users.length === 0 ? (
        <p className="font-body text-sm text-muted-foreground">No members yet.</p>
      ) : (
        <ul className="divide-y divide-border/50">
          {users.map((member) => (
            <li key={member.id} className="flex items-center gap-4 py-3">
              <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <User size={15} className="text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-body text-sm truncate">
                  {member.full_name || member.email}
                </p>
                <p className="font-body text-xs text-muted-foreground truncate">
                  {member.email}
                </p>
              </div>
              <span className="font-body text-[10px] tracking-label uppercase text-muted-foreground shrink-0">
                {member.created_date
                  ? format(parseISO(member.created_date), "MMM d")
                  : ""}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}