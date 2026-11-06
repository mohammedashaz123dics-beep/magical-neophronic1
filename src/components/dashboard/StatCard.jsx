export default function StatCard({ label, value, hint, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card/50 p-6">
      <div className="flex items-center justify-between mb-6">
        <p className="font-body text-[10px] tracking-label uppercase text-muted-foreground">
          {label}
        </p>
        {Icon && <Icon size={16} className="text-accent" />}
      </div>
      <p className="font-display text-4xl font-light leading-none">{value}</p>
      {hint && (
        <p className="font-body text-xs text-muted-foreground mt-3">{hint}</p>
      )}
    </div>
  );
}