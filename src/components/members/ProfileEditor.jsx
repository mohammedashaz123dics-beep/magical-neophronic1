import { useState } from "react";
import { ImagePlus, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ProfileEditor({ profile, userId, onSaved, onCancel }) {
  const [form, setForm] = useState({
    display_name: profile?.display_name || "",
    headline: profile?.headline || "",
    bio: profile?.bio || "",
    photo: profile?.photo || "",
  });
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  const set = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const uploadPhoto = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const { file_url } = await base44.integrations.Core.UploadPublicFile({ file });
    setForm((f) => ({ ...f, photo: file_url }));
    setUploading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.display_name.trim()) return;
    setSaving(true);

    const data = {
      user_id: userId,
      display_name: form.display_name.trim(),
      headline: form.headline.trim(),
      bio: form.bio.trim(),
      photo: form.photo,
    };

    if (profile) {
      await base44.entities.MemberProfile.update(profile.id, data);
    } else {
      await base44.entities.MemberProfile.create(data);
    }

    setSaving(false);
    onSaved();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-accent/30 bg-card/60 p-6 md:p-8 space-y-5"
    >
      <div className="space-y-2">
        <span className="font-body text-xs tracking-label uppercase text-muted-foreground block">
          Photo
        </span>
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-secondary/60 border border-border/60 flex items-center justify-center">
            {form.photo ? (
              <img src={form.photo} alt="" className="w-full h-full object-cover" />
            ) : (
              <ImagePlus size={20} className="text-muted-foreground" />
            )}
          </div>
          <label className="inline-flex items-center gap-2 cursor-pointer rounded-full border border-border px-5 py-2 font-body text-xs tracking-label uppercase hover:border-accent hover:text-accent transition-colors">
            {uploading ? <Loader2 size={14} className="animate-spin" /> : <ImagePlus size={14} />}
            {form.photo ? "Change photo" : "Upload photo"}
            <input type="file" accept="image/*" onChange={uploadPhoto} className="hidden" />
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="p-name" className="font-body text-xs tracking-label uppercase text-muted-foreground">
            Display name
          </Label>
          <Input
            id="p-name"
            value={form.display_name}
            onChange={(e) => set("display_name", e.target.value)}
            placeholder="Amara Okafor"
            className="rounded-full font-body"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="p-headline" className="font-body text-xs tracking-label uppercase text-muted-foreground">
            Headline
          </Label>
          <Input
            id="p-headline"
            value={form.headline}
            onChange={(e) => set("headline", e.target.value)}
            placeholder="Beta tester, Zeno G.O.A.T"
            className="rounded-full font-body"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="p-bio" className="font-body text-xs tracking-label uppercase text-muted-foreground">
          Bio
        </Label>
        <Textarea
          id="p-bio"
          value={form.bio}
          onChange={(e) => set("bio", e.target.value)}
          placeholder="A short introduction…"
          rows={4}
          className="font-body"
        />
      </div>

      <div className="flex items-center gap-3 pt-2">
        <Button type="submit" disabled={saving || uploading} className="rounded-full font-body">
          {saving && <Loader2 size={14} className="animate-spin" />}
          {profile ? "Save profile" : "Create profile"}
        </Button>
        {onCancel && (
          <Button type="button" variant="ghost" onClick={onCancel} className="rounded-full font-body">
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
}