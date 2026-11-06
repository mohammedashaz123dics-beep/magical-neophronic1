import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, Quote } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import TestimonialForm from "@/components/dashboard/TestimonialForm";

export default function TestimonialManager() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    const list = await base44.entities.Testimonial.list("-created_date", 50);
    setItems(Array.isArray(list) ? list : []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const save = async (data) => {
    setSaving(true);
    if (editing === "new") {
      await base44.entities.Testimonial.create(data);
    } else {
      await base44.entities.Testimonial.update(editing.id, data);
    }
    setSaving(false);
    setEditing(null);
    await load();
  };

  const remove = async (id) => {
    await base44.entities.Testimonial.delete(id);
    if (editing !== "new" && editing?.id === id) setEditing(null);
    await load();
  };

  return (
    <div className="rounded-2xl border border-border/60 bg-card/50 p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <p className="font-display text-2xl font-light mb-1">Testimonials</p>
          <p className="font-body text-sm text-muted-foreground">
            The three most recent appear on the home page.
          </p>
        </div>
        {editing === null && (
          <Button
            onClick={() => setEditing("new")}
            className="rounded-full font-body"
          >
            <Plus size={16} />
            Add testimonial
          </Button>
        )}
      </div>

      {editing !== null && (
        <div className="mb-6">
          <TestimonialForm
            initial={editing === "new" ? null : editing}
            onSubmit={save}
            onCancel={() => setEditing(null)}
            saving={saving}
          />
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-6 h-6 border-2 border-border border-t-accent rounded-full animate-spin" />
        </div>
      ) : items.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border/70 py-12 text-center">
          <Quote size={20} className="text-accent mx-auto mb-4" />
          <p className="font-body text-sm text-muted-foreground">
            No testimonials yet — add the first one to show it on the home page.
          </p>
        </div>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-start gap-4 rounded-xl border border-border/60 bg-background/40 p-5"
            >
              <div className="flex-1 min-w-0">
                <p className="font-body text-sm font-medium">{item.client_name}</p>
                {item.role && (
                  <p className="font-body text-[11px] tracking-label uppercase text-muted-foreground mt-1">
                    {item.role}
                  </p>
                )}
                <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">
                  “{item.quote}”
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setEditing(item)}
                  aria-label={`Edit testimonial from ${item.client_name}`}
                  className="rounded-full"
                >
                  <Pencil size={16} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => remove(item.id)}
                  aria-label={`Delete testimonial from ${item.client_name}`}
                  className="rounded-full text-muted-foreground hover:text-destructive"
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}