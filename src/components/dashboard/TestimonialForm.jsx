import { useState } from "react";
import { Star, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function TestimonialForm({ initial, onSubmit, onCancel, saving }) {
  const [form, setForm] = useState({
    client_name: initial?.client_name || "",
    role: initial?.role || "",
    quote: initial?.quote || "",
    rating: initial?.rating || 5,
  });

  const set = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.client_name.trim() || !form.quote.trim()) return;
    onSubmit({
      client_name: form.client_name.trim(),
      role: form.role.trim(),
      quote: form.quote.trim(),
      rating: form.rating,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-accent/30 bg-card/60 p-6 md:p-8 space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="t-name" className="font-body text-xs tracking-label uppercase text-muted-foreground">
            Name
          </Label>
          <Input
            id="t-name"
            value={form.client_name}
            onChange={(e) => set("client_name", e.target.value)}
            placeholder="Amara Okafor"
            className="rounded-full font-body"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="t-role" className="font-body text-xs tracking-label uppercase text-muted-foreground">
            Role / Affiliation
          </Label>
          <Input
            id="t-role"
            value={form.role}
            onChange={(e) => set("role", e.target.value)}
            placeholder="Early access member"
            className="rounded-full font-body"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="t-quote" className="font-body text-xs tracking-label uppercase text-muted-foreground">
          Quote
        </Label>
        <Textarea
          id="t-quote"
          value={form.quote}
          onChange={(e) => set("quote", e.target.value)}
          placeholder="What they said about Zeno…"
          rows={4}
          className="font-body"
        />
      </div>

      <div className="space-y-2">
        <span className="font-body text-xs tracking-label uppercase text-muted-foreground block">
          Rating
        </span>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => set("rating", value)}
              aria-label={`Set rating to ${value}`}
              className="text-accent transition-opacity hover:opacity-80"
            >
              <Star
                size={20}
                fill={value <= form.rating ? "currentColor" : "none"}
                strokeWidth={value <= form.rating ? 0 : 1.5}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <Button type="submit" disabled={saving} className="rounded-full font-body">
          {saving && <Loader2 size={14} className="animate-spin" />}
          {initial ? "Save changes" : "Add testimonial"}
        </Button>
        <Button
          type="button"
          variant="ghost"
          onClick={onCancel}
          className="rounded-full font-body"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}