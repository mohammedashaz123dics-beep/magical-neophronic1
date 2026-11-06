import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function GrowthChart({ data }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card/50 p-6 md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
        <div>
          <p className="font-display text-2xl font-light">Growth</p>
          <p className="font-body text-xs text-muted-foreground mt-1">
            Last 14 days
          </p>
        </div>
        <div className="flex items-center gap-4 font-body text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Members
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-muted-foreground/50" />
            Newsletter
          </span>
        </div>
      </div>

      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 4, right: 4, left: -24, bottom: 0 }}>
            <defs>
              <linearGradient id="membersFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity={0.35} />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="newsFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--muted-foreground))" stopOpacity={0.25} />
                <stop offset="100%" stopColor="hsl(var(--muted-foreground))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(var(--border))"
              vertical={false}
            />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
              axisLine={false}
              tickLine={false}
              interval={1}
            />
            <YAxis
              allowDecimals={false}
              tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: "1px solid hsl(var(--border))",
                background: "hsl(var(--background))",
                fontSize: 12,
              }}
            />
            <Area
              type="monotone"
              dataKey="members"
              name="Members"
              stroke="hsl(var(--accent))"
              strokeWidth={2}
              fill="url(#membersFill)"
            />
            <Area
              type="monotone"
              dataKey="subscribers"
              name="Newsletter"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth={1.5}
              fill="url(#newsFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}