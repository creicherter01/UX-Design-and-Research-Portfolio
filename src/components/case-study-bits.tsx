import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal, RevealWords } from "./reveal";

export function CaseHero({
  index,
  title,
  intro,
  meta,
  prototype,
}: {
  index: string;
  title: string;
  intro: string;
  meta: { label: string; value: string }[];
  prototype?: string;
}) {
  return (
    <section className="paper-grain border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <Link to="/" className="label-mono link-underline inline-flex items-center gap-2 text-muted-foreground">
          <ArrowLeft className="h-3 w-3" /> All work
        </Link>
        <p className="label-mono mt-10 text-clay">Case study {index}</p>
        <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
          <RevealWords text={title} />
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>

        <dl className="mt-12 grid gap-6 border-t border-border pt-8 sm:grid-cols-4">
          {meta.map((m) => (
            <div key={m.label}>
              <dt className="label-mono text-muted-foreground">{m.label}</dt>
              <dd className="mt-1.5 text-sm">{m.value}</dd>
            </div>
          ))}
        </dl>

        {prototype && (
          <a
            href={prototype}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            View interactive prototype <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </section>
  );
}

export function Section({
  eyebrow,
  title,
  lede,
  children,
  tone = "default",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
  tone?: "default" | "muted";
}) {
  return (
    <section
      className={
        tone === "muted"
          ? "border-b border-border bg-secondary/30"
          : "border-b border-border"
      }
    >
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <p className="label-mono text-clay">{eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            {title}
          </h2>
          {lede && (
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {lede}
            </p>
          )}
        </Reveal>
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}

export function NumberedCards({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.07}>
          <article className="group h-full rounded-lg border border-border bg-card p-6 transition-colors duration-300 hover:border-sage-deep">
            <span className="label-mono text-sage-deep">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-display text-xl leading-snug">{item.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function FindingRows({
  items,
  leftLabel,
  rightLabel,
}: {
  items: { finding: string; solution: string }[];
  leftLabel: string;
  rightLabel: string;
}) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => (
        <Reveal key={item.finding} delay={i * 0.05}>
          <div className="grid gap-5 py-7 sm:grid-cols-2 sm:gap-10">
            <div>
              <p className="label-mono text-muted-foreground">
                {String(i + 1).padStart(2, "0")} · {leftLabel}
              </p>
              <p className="mt-2 text-sm leading-relaxed">{item.finding}</p>
            </div>
            <div className="border-l-2 border-clay/40 pl-5">
              <p className="label-mono text-clay">{rightLabel}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.solution}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function BeforeAfter({
  title,
  note,
  before,
  after,
  beforeCaption,
  afterCaption,
}: {
  title: string;
  note: string;
  before: string;
  after: string;
  beforeCaption: string;
  afterCaption: string;
}) {
  const [view, setView] = useState<"before" | "after">("before");
  const src = view === "after" ? after : before;
  const caption = view === "after" ? afterCaption : beforeCaption;

  return (
    <Reveal className="rounded-lg border border-border bg-card p-5 sm:p-7">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <h3 className="min-w-0 font-display text-xl">{title}</h3>
        <div className="flex shrink-0 rounded-full border border-border p-1">
          {(["before", "after"] as const).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setView(k)}
              className={`label-mono relative rounded-full px-4 py-1.5 transition-colors ${
                view === k ? "text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              {view === k && (
                <motion.span
                  layoutId={`ba-${title}`}
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                />
              )}
              <span className="relative">{k}</span>
            </button>
          ))}
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{note}</p>
      <div className="mt-5 overflow-hidden rounded-md border border-border bg-secondary/40">
        <motion.img
          key={src}
          src={src}
          alt={`${title} — ${view}`}
          loading="lazy"
          initial={{ opacity: 0, scale: 1.01 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="w-full"
        />
      </div>
      <p className="label-mono mt-3 text-muted-foreground">{caption}</p>
    </Reveal>
  );
}

export function StatBand({
  items,
  note,
}: {
  items: { value: string; label: string; sub?: string }[];
  note?: string;
}) {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.07}>
            <div className="h-full rounded-lg border border-border bg-card p-6">
              <p className="font-display text-4xl leading-none tracking-tight text-sage-deep">
                {s.value}
              </p>
              <p className="mt-3 text-sm leading-snug">{s.label}</p>
              {s.sub && (
                <p className="label-mono mt-2 text-muted-foreground">{s.sub}</p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
      {note && (
        <p className="label-mono mt-5 max-w-3xl leading-relaxed text-muted-foreground">{note}</p>
      )}
    </div>
  );
}

export function OutcomeList({ items }: { items: string[] }) {

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item, i) => (
        <Reveal key={item} delay={i * 0.04}>
          <li className="flex gap-3 rounded-md bg-secondary/50 p-4 text-sm leading-relaxed">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
            {item}
          </li>
        </Reveal>
      ))}
    </ul>
  );
}

export function NextProject({ to, label }: { to: "/work/dawson-motors" | "/work/flight-booking" | "/work/reflink-app"; label: string }) {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <Link to={to} className="group block">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-5 py-14 sm:px-8">
          <div className="min-w-0">
            <p className="label-mono opacity-70">Next case study</p>
            <p className="mt-2 truncate font-display text-3xl sm:text-4xl">{label}</p>
          </div>
          <ArrowUpRight className="h-8 w-8 shrink-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
        </div>
      </Link>
    </section>
  );
}
