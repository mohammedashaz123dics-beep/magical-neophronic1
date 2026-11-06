const TIERS = [
  {
    label: "Core",
    min: 25,
    note: "A constant presence in the studio",
    className: "border-accent/40 bg-accent/10 text-accent",
  },
  {
    label: "Devoted",
    min: 10,
    note: "Explores the site as it grows",
    className: "border-accent/25 bg-accent/[0.06] text-accent",
  },
  {
    label: "Active",
    min: 3,
    note: "Getting to know the models",
    className: "border-border bg-secondary/60 text-foreground",
  },
  {
    label: "Newcomer",
    min: 0,
    note: "Just arrived",
    className: "border-border bg-secondary/40 text-muted-foreground",
  },
];

export function tierFor(points = 0) {
  const index = TIERS.findIndex((tier) => points >= tier.min);
  const tier = TIERS[index === -1 ? TIERS.length - 1 : index];
  const next = index > 0 ? TIERS[index - 1] : null;
  return { ...tier, next };
}