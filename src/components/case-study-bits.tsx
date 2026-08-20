import { Link } from "@tanstack/react-router";
import { animate, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
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
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
          >
            View interactive prototype
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
          <motion.article
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="group relative h-full overflow-hidden rounded-lg border border-border bg-card p-6 transition-colors duration-300 hover:border-sage-deep hover:shadow-md"
          >
            <span className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-clay transition-transform duration-400 ease-out group-hover:scale-y-100" />
            <span className="label-mono inline-block text-sage-deep transition-transform duration-300 group-hover:-translate-y-0.5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-display text-xl leading-snug">{item.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </motion.article>
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
          <div className="group grid gap-5 rounded-md px-2 py-7 transition-colors duration-300 hover:bg-secondary/50 sm:grid-cols-2 sm:gap-10 sm:px-4">
            <div>
              <p className="label-mono text-muted-foreground transition-colors duration-300 group-hover:text-clay">
                {String(i + 1).padStart(2, "0")} · {leftLabel}
              </p>
              <p className="mt-2 text-sm leading-relaxed">{item.finding}</p>
            </div>
            <div className="border-l-2 border-clay/40 pl-5 transition-all duration-300 group-hover:border-clay group-hover:pl-6">
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
              className={`label-mono relative rounded-full px-4 py-1.5 transition-colors active:scale-95 ${
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
      <div className="group mt-5 overflow-hidden rounded-md border border-border bg-secondary/40">
        <motion.img
          key={src}
          src={src}
          alt={`${title} — ${view}`}
          loading="lazy"
          initial={{ opacity: 0, scale: 1.01 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
        />
      </div>
      <p className="label-mono mt-3 text-muted-foreground">{caption}</p>
    </Reveal>
  );
}

function AnimatedStat({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const match = value.match(/^([^0-9.-]*)(-?[\d.,]+)(.*)$/);

  useEffect(() => {
    if (!inView || !match || !ref.current) return;
    const node = ref.current;
    const target = Number(match[2].replace(/,/g, ""));
    if (!Number.isFinite(target)) return;
    const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0;
    const controls = animate(0, target, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate: (v) => {
        node.textContent = `${match[1]}${v.toFixed(decimals)}${match[3]}`;
      },
    });
    return () => controls.stop();
  }, [inView, match]);

  return <span ref={ref}>{value}</span>;
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
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="h-full rounded-lg border border-border bg-card p-6 transition-colors duration-300 hover:border-sage-deep hover:shadow-md"
            >
              <p className="font-display text-4xl leading-none tracking-tight text-sage-deep">
                <AnimatedStat value={s.value} />
              </p>
              <p className="mt-3 text-sm leading-snug">{s.label}</p>
              {s.sub && (
                <p className="label-mono mt-2 text-muted-foreground">{s.sub}</p>
              )}
            </motion.div>
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
          <li className="group flex gap-3 rounded-md bg-secondary/50 p-4 text-sm leading-relaxed transition-all duration-300 hover:translate-x-1 hover:bg-secondary">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay transition-transform duration-300 group-hover:scale-[1.9]" />
            {item}
          </li>
        </Reveal>
      ))}
    </ul>
  );
}

export function PhoneFrame({
  children,
  caption,
  className,
}: {
  children: React.ReactNode;
  caption?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="mx-auto w-full max-w-[320px]">
        <div className="relative rounded-[2.6rem] border border-border bg-primary p-[10px] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)]">
          <div className="absolute left-1/2 top-[14px] z-10 h-[6px] w-[76px] -translate-x-1/2 rounded-full bg-background/25" />
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.1rem] bg-secondary">
            {children}
          </div>
        </div>
      </div>
      {caption && (
        <p className="label-mono mt-4 text-center text-muted-foreground">{caption}</p>
      )}
    </div>
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
