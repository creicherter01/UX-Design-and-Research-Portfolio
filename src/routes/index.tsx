import { createFileRoute, Link } from "@tanstack/react-router";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Reveal, RevealChars } from "@/components/reveal";

import { EMAIL, LINKEDIN } from "@/components/site-chrome";
import dawsonAfter from "@/assets/Screenshot_2026-07-09_102408.png.asset.json";
import flightCover from "@/assets/flight-booking-cover.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Courtney Reicherter — UX Designer & Researcher" },
      {
        name: "description",
        content:
          "Psychology-led UX design portfolio: two end-to-end case studies covering research, interaction design and high-fidelity prototyping — flight booking and a family auto shop redesign.",
      },
      { property: "og:title", content: "Courtney Reicherter — UX Designer & Researcher" },
      {
        property: "og:description",
        content:
          "Psychology-led UX portfolio with two end-to-end case studies: research, interaction design and high-fidelity prototypes.",
      },
      { property: "og:image", content: dawsonAfter.url },
      { name: "twitter:image", content: dawsonAfter.url },
    ],
  }),
  component: Home,
});

const MARQUEE = [
  "User interviews",
  "Usability testing",
  "Affinity mapping",
  "Journey maps",
  "Interaction design",
  "Design systems",
  "Hi-fi prototyping",
  "Heuristic audits",
  "Behavioural science",
];

const STATS = [
  { value: "2", label: "End-to-end case studies" },
  { value: "12+", label: "Users interviewed per project" },
  { value: "B.A.", label: "Psychology, Binghamton" },
  { value: "Hi-Fi", label: "Research through to pixels" },
];

const PROJECTS = [
  {
    to: "/work/dawson-motors" as const,
    index: "01",
    title: "Dawson Motors Redesign",
    blurb:
      "Rebuilding a 40-year-old family auto shop's dated website into a modern, trustworthy front door for both sales and service.",
    tags: ["UX Audit", "Visual Redesign", "Prototyping"],
    kind: "Freelance client project",
    image: dawsonAfter.url,
  },
  {
    to: "/work/flight-booking" as const,
    index: "02",
    title: "Find Your Perfect Flight",
    blurb:
      "Reimagining a fragmented flight booking experience as one unified interface that searches hundreds of airlines at once.",
    tags: ["UX Research", "Interaction Design", "Prototyping"],
    kind: "UX capstone project",
    image: flightCover,
  },
];

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  const mx = useMotionValue(50);
  const my = useMotionValue(40);
  const spotlight = useMotionTemplate`radial-gradient(38rem 38rem at ${mx}% ${my}%, oklch(0.78 0.09 140 / 0.5), transparent 70%)`;

  return (
    <section
      ref={ref}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width) * 100);
        my.set(((e.clientY - r.top) / r.height) * 100);
      }}
      className="paper-grain relative overflow-hidden border-b border-border"
    >
      {/* curtain wipe on load */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 origin-top bg-primary"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
      />

      <motion.div
        aria-hidden
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 blur-2xl"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 h-[26rem] w-[26rem] rounded-full bg-clay/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{ y, opacity: fade, scale }}
        className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="label-mono flex items-center gap-2 text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-clay opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-clay" />
          </span>
          UX Designer &amp; Researcher · Psychology-led research
        </motion.p>

        <h1 className="mt-8 max-w-5xl font-display text-[2.6rem] leading-[0.92] tracking-[-0.03em] sm:text-7xl lg:text-[7rem]">
          <span className="block">
            <RevealChars text="Read the room." delay={0.9} />
          </span>
          <span className="block text-sage-deep">
            <RevealChars text="Read the data." delay={1.25} />
          </span>
          <span className="block italic text-clay">
            <RevealChars text="Then design." delay={1.6} />
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2 }}
          className="mt-12 grid gap-8 sm:grid-cols-[1.1fr_1fr] sm:items-end"
        >
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            I'm <span className="text-foreground">Courtney Reicherter</span> — a UX designer with a
            psychology degree, three years reading real people on a luxury hospitality floor, and a
            data-analyst's appetite for evidence. Most portfolios show you screens. Mine shows you
            <span className="text-foreground"> why every screen looks the way it does.</span>
          </p>
          <div className="flex flex-wrap gap-3 sm:justify-end">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              See the case studies
              <ArrowDown className="h-4 w-4 transition-transform duration-500 group-hover:translate-y-1" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition-colors hover:border-clay hover:text-clay"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <div className="relative border-t border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-border px-5 sm:grid-cols-4 sm:divide-x sm:px-8">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="px-0 py-7 sm:px-6">
              <p className="font-display text-3xl sm:text-4xl">{s.value}</p>
              <p className="label-mono mt-2 text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const EDGE = [
  {
    k: "Psychology, not guesswork",
    v: "A B.A. in Psychology means I arrive with research methodology and cognitive-load thinking already built in — not learned from a blog post.",
  },
  {
    k: "Three years reading real users",
    v: "Front-of-house team lead at a luxury mansion hotel: spotting friction in someone's experience and fixing it in real time, every shift.",
  },
  {
    k: "Comfortable with the numbers",
    v: "A payroll data analyst internship taught me to sit with messy data until it says something true — the same muscle usability synthesis needs.",
  },
  {
    k: "Client-tested, not classroom-only",
    v: "I ran a real freelance engagement solo: outreach, discovery, audit, redesign, revisions and launch — including the client's privacy constraints.",
  },
];


function Marquee() {
  return (
    <div className="overflow-hidden border-b border-border bg-primary py-4 text-primary-foreground">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
            {MARQUEE.map((item) => (
              <span key={`${dup}-${item}`} className="label-mono flex items-center px-6">
                {item}
                <span className="ml-6 h-1 w-1 rounded-full bg-sage" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  i,
}: {
  project: (typeof PROJECTS)[number];
  i: number;
}) {
  return (
    <Reveal delay={i * 0.1}>
      <Link to={project.to} className="group block">
        <article className="grid gap-8 rounded-xl border border-border bg-card p-6 transition-colors duration-500 hover:border-sage-deep sm:grid-cols-2 sm:p-8">
          <div className="order-2 flex flex-col justify-between sm:order-1">
            <div>
              <div className="flex items-center gap-3">
                <span className="label-mono text-clay">Case study {project.index}</span>
                <span className="h-px flex-1 bg-border" />
                <span className="label-mono text-muted-foreground">{project.kind}</span>
              </div>
              <h3 className="mt-5 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                {project.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {project.blurb}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="label-mono rounded-full bg-secondary px-3 py-1.5 text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 text-sm text-clay">
              Read the case study
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </div>
          <div className="order-1 overflow-hidden rounded-lg border border-border bg-secondary/40 sm:order-2">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              className="h-full w-full object-cover object-left-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
            />
          </div>
        </article>
      </Link>
    </Reveal>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Marquee />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <p className="label-mono text-clay">Why me</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Four things most junior UX candidates can't say.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {EDGE.map((e, i) => (
              <Reveal key={e.k} delay={i * 0.08}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="h-full rounded-xl border border-border bg-card p-7"
                >
                  <span className="label-mono text-sage-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-2xl leading-snug">{e.k}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.v}</p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      <section id="work" className="scroll-mt-20 border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <p className="label-mono text-clay">Selected work</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Two end-to-end case studies
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              One real client, one capstone — both carried from research and audit through to
              high-fidelity, interactive prototypes.
            </p>
          </Reveal>
          <div className="mt-12 space-y-6">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.to} project={p} i={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:grid-cols-[1fr_1.1fr] sm:px-8">
          <Reveal>
            <p className="label-mono text-clay">How I work</p>
            <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight">
              Psychology first,
              <br />
              pixels second.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6">
            <p className="text-base leading-relaxed text-muted-foreground">
              A psychology background changes the questions I ask. Instead of “does this look
              right?”, I'm asking what mental model someone brings, where cognitive load spikes, and
              which single decision would remove the most friction.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { k: "Understand", v: "Interviews, desk research, heuristic audits" },
                { k: "Frame", v: "Affinity maps, journeys, personas, priorities" },
                { k: "Build & test", v: "Wireframes, hi-fi prototypes, usability rounds" },
              ].map((s) => (
                <div key={s.k} className="rounded-lg border border-border bg-card p-5">
                  <p className="label-mono text-sage-deep">{s.k}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="link-underline inline-flex text-sm text-clay">
              More about my background
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Reveal>
            <p className="label-mono text-clay">Let's connect</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
              If the work resonates, I'd love to hear from you.
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                {EMAIL}
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition-colors hover:border-clay hover:text-clay"
              >
                LinkedIn <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition-colors hover:border-clay hover:text-clay"
              >
                Contact page
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
