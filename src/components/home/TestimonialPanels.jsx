import { Star, ArrowRight } from "lucide-react";

const DISCORD_URL = "https://discord.gg/JESjH6sWR";

const styles = `
.tp-section {
  --tp-bg: hsl(var(--background));
  --tp-ink: hsl(var(--foreground));
  --tp-soft: hsl(var(--muted-foreground));
  --tp-line: hsl(var(--border));
  --tp-dark: #171208;

  --tp-margin: clamp(14px, 3vw, 26px);
  --tp-peek: 80px;
  --tp-card-h: clamp(292px, 28cqi, 320px);
  --tp-gap: 40px;
  --tp-stack-gap: 18px;
  --tp-settle: 0.9;
  --tp-settle-2: 0.95;
  --tp-settle-3: 1;
  --tp-track-mult: 2.6;

  position: relative;
  display: block;
  color: var(--tp-ink);
}
.tp-section *, .tp-section *::before, .tp-section *::after { box-sizing: border-box; }

.tp-track { position: relative; }

.tp-frame {
  position: relative;
  width: calc(100% - var(--tp-margin) * 2);
  margin: var(--tp-margin) auto;
  background: var(--tp-bg);
  border: 1px solid var(--tp-line);
  border-radius: 24px;
  padding-inline: clamp(20px, 7%, 96px);
  padding-bottom: clamp(40px, 8cqi, 72px);
  overflow: hidden;
  container: tp-root / inline-size;
}

.tp-glow {
  position: absolute;
  pointer-events: none;
  border-radius: 9999px;
  filter: blur(70px);
}
.tp-glow--a {
  top: -160px; right: -90px; width: 380px; height: 380px;
  background: radial-gradient(circle at 30% 30%, rgba(250, 204, 163, 0.55), rgba(212, 175, 55, 0.28) 45%, transparent 70%);
}
.tp-glow--b {
  bottom: -180px; left: -110px; width: 340px; height: 340px;
  background: radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.3), rgba(250, 204, 163, 0.12) 55%, transparent 72%);
}

.tp-head {
  position: relative;
  z-index: 5;
  background: transparent;
  text-align: center;
  padding: clamp(28px, 4cqi, 52px) 0 clamp(12px, 2.2cqi, 22px);
}
.tp-eyebrow {
  margin: 0 0 16px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: hsl(var(--accent));
}
.tp-eyebrow::before,
.tp-eyebrow::after {
  content: "";
  width: 32px;
  height: 1px;
  background: hsl(var(--accent));
}
.tp-title {
  margin: 0 0 14px;
  font-family: var(--font-display);
  font-weight: 300;
  font-size: clamp(2rem, 1.4rem + 4cqi, 3.5rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
}
.tp-sub {
  margin: 0 auto;
  max-width: 46ch;
  font-family: var(--font-body);
  font-size: 14px;
  line-height: 1.65;
  color: var(--tp-soft);
}

/* Fallback / narrow / reduced motion — plain flow stack */
.tp-stage { position: relative; display: flex; flex-direction: column; gap: var(--tp-stack-gap); }
.tp-card {
  position: relative;
  min-height: var(--tp-card-h);
  border-radius: 18px;
  padding: clamp(20px, 2.4cqi, 26px) 0 clamp(26px, 3.5cqi, 44px);
  overflow: hidden;
  transform-origin: 50% 0;
  background: #fdf7ea;
}
.tp-cta {
  display: flex;
  justify-content: center;
  margin-top: var(--tp-gap);
}

.tp-card--1 { background: linear-gradient(165deg, #fdf8ec 0%, #f8ecd2 58%, #f2dfb6 100%); }
.tp-card--2 {
  --tp-settle: var(--tp-settle-2);
  background: linear-gradient(180deg,
    #fbeecb 0%,
    #f4dfae 58%,
    #e3bf76 82%,
    #cfa14a 93%,
    #8a6a24 100%);
}
.tp-card--2::before {
  content: "";
  position: absolute; inset: 0; z-index: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Cfilter id='tpnoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23tpnoise)'/%3E%3C/svg%3E");
  background-size: 150px 150px;
  opacity: 0.14; mix-blend-mode: soft-light; pointer-events: none;
}
.tp-card--2 .tp-card-inner { position: relative; z-index: 1; }
.tp-card--3 {
  --tp-settle: var(--tp-settle-3);
  background: radial-gradient(120% 90% at 85% 0%, rgba(212, 175, 55, 0.28) 0%, transparent 60%), var(--tp-dark);
  color: #fdf8ec;
}

.tp-card-inner {
  margin-inline: clamp(16px, 2.5cqi, 36px);
  border-top: 1px solid var(--tp-line);
  padding-top: clamp(14px, 1.8cqi, 20px);
  display: grid;
  gap: 16px 32px;
  align-items: start;
  grid-template-columns: 1fr;
  grid-template-areas: "num" "name" "quote";
}
.tp-card--3 .tp-card-inner { border-top-color: rgba(253, 248, 236, 0.22); }
.tp-num {
  grid-area: num;
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  opacity: 0.6;
}
.tp-name {
  grid-area: name;
  margin: 0 0 6px;
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(1.5rem, 1.1rem + 1.4cqi, 2rem);
  line-height: 1.1;
}
.tp-role {
  display: block;
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  opacity: 0.7;
}
.tp-card--3 .tp-name { color: #f3ddab; }
.tp-quote {
  grid-area: quote;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: clamp(14px, 2cqi, 22px);
  font-family: var(--font-body);
  font-size: clamp(13px, 12px + 0.5cqi, 15.5px);
  line-height: 1.7;
}
.tp-quote p { margin: 0; }
.tp-stars { display: inline-flex; gap: 4px; color: #a8801f; }
.tp-card--3 .tp-stars { color: #d4af37; }
.tp-stars svg { width: 15px; height: 15px; display: block; }

@container tp-root (width >= 720px) {
  .tp-card-inner {
    grid-template-columns: minmax(80px, 0.5fr) minmax(150px, 1fr) minmax(0, 2fr);
    grid-template-areas: "num name quote";
    gap: 24px 40px;
  }
}

@keyframes tp-rise {
  from { transform: translateY(var(--tp-rise, 80vh)) scale(1); }
  to   { transform: translateY(0) scale(var(--tp-settle)); }
}
@keyframes tp-cta-in {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
@supports (animation-timeline: view()) {
  @media (min-width: 760px) and (prefers-reduced-motion: no-preference) {
    .tp-section {
      --tp-vp: min(100svh, 1500px);
      --tp-rise: calc((var(--tp-vp) - var(--tp-margin) * 2) * 0.82);
    }
    .tp-track {
      view-timeline-name: --tp-track;
      view-timeline-axis: block;
      height: calc((var(--tp-vp) - var(--tp-margin) * 2) * var(--tp-track-mult));
    }
    .tp-frame {
      position: sticky;
      top: var(--tp-margin);
      height: calc(var(--tp-vp) - var(--tp-margin) * 2);
      margin-block: 0;
      padding-bottom: 0;
      display: flex;
      flex-direction: column;
    }
    .tp-stage { flex: 1 1 auto; min-height: 0; display: block; }
    .tp-card {
      position: absolute; left: 0; right: 0;
      animation: tp-rise linear both;
      animation-timeline: --tp-track;
    }
    .tp-card--1 { top: 0; animation-range: contain 3% contain 34%; }
    .tp-card--2 { top: var(--tp-peek); animation-range: contain 30% contain 61%; }
    .tp-card--3 { top: calc(var(--tp-peek) * 2); animation-range: contain 57% contain 88%; }
    .tp-cta {
      position: absolute; left: 0; right: 0;
      top: calc(var(--tp-peek) * 2 + var(--tp-card-h) + var(--tp-gap));
      margin-top: 0;
      animation: tp-cta-in linear both;
      animation-timeline: --tp-track;
      animation-range: contain 86% contain 99%;
    }
  }
}

.tp-btn {
  display: inline-flex; align-items: center; gap: 10px;
  min-height: 44px; padding: 4px 2px;
  background: none; border: 0; color: var(--tp-ink);
  font-family: var(--font-body); font-size: 12px;
  letter-spacing: 0.15em; text-transform: uppercase;
  text-decoration: none; cursor: pointer;
}
.tp-btn-label { position: relative; }
.tp-btn-label::after {
  content: ""; position: absolute; left: 0; right: 0; bottom: -3px;
  height: 1px; background: currentColor;
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.tp-btn-arrow { width: 16px; height: 16px; transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1); }
.tp-btn:hover .tp-btn-label::after,
.tp-btn:focus-visible .tp-btn-label::after { transform: scaleX(1); }
.tp-btn:hover .tp-btn-arrow,
.tp-btn:focus-visible .tp-btn-arrow { transform: translateX(6px); }
.tp-btn:focus-visible { outline: 2px solid hsl(var(--accent)); outline-offset: 4px; border-radius: 4px; }
@media (prefers-reduced-motion: reduce) {
  .tp-btn-label::after, .tp-btn-arrow { transition: none; }
}
`;

export default function TestimonialPanels({ testimonials = [] }) {
  const items = testimonials.slice(0, 3);
  if (items.length === 0) return null;

  return (
    <section className="tp-section" aria-labelledby="testimonials-heading">
      <style>{styles}</style>
      <div className="tp-track">
        <div className="tp-frame">
          <div className="tp-glow tp-glow--a" aria-hidden="true" />
          <div className="tp-glow tp-glow--b" aria-hidden="true" />

          <header className="tp-head">
            <p className="tp-eyebrow">Testimonials</p>
            <h2 id="testimonials-heading" className="tp-title">
              Voices from our <span className="italic">community</span>
            </h2>
            <p className="tp-sub">
              Notes from the people already building with Zeno — from first access to
              the latest release.
            </p>
          </header>

          <div className="tp-stage">
            {items.map((item, i) => {
              const rating = Math.min(5, Math.max(1, Number(item.rating) || 5));
              return (
                <article key={item.id} className={`tp-card tp-card--${i + 1}`}>
                  <div className="tp-card-inner">
                    <span className="tp-num">{`(${String(i + 1).padStart(2, "0")})`}</span>
                    <div>
                      <p className="tp-name">{item.client_name}</p>
                      <span className="tp-role">
                        {item.role || item.location || "Community member"}
                      </span>
                    </div>
                    <blockquote className="tp-quote">
                      <span
                        className="tp-stars"
                        role="img"
                        aria-label={`Rated ${rating} out of 5 stars`}
                      >
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star
                            key={s}
                            size={15}
                            fill={s < rating ? "currentColor" : "none"}
                            strokeWidth={s < rating ? 0 : 1.5}
                            aria-hidden="true"
                          />
                        ))}
                      </span>
                      <p>{item.quote}</p>
                    </blockquote>
                  </div>
                </article>
              );
            })}

            <div className="tp-cta">
              <a
                className="tp-btn"
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="tp-btn-label">Join the conversation</span>
                <ArrowRight className="tp-btn-arrow" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}