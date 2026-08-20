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
const dawsonAfter = { url: "/media/Screenshot_2026-07-09_102408.png" };
const flightCover = { url: "/media/Screenshot_2026-08-12_202729.png" };
const reflinkCover = { url: "/media/reflink-hero.png" };
const portrait = { url: "/media/courtney-portrait.png" };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Courtney Reicherter — UX Designer & Researcher" },
      {
        name: "description",
        content:
          "Psychology-led UX design portfolio: three full case studies covering research, interaction design and high-fidelity prototyping — flight booking, a family auto shop redesign and a sports officiating marketplace.",
      },
      { property: "og:title", content: "Courtney Reicherter — UX Designer & Researcher" },
      {
        property: "og:description",
        content:
          "Psychology-led UX portfolio with three full case studies: research, interaction design and high-fidelity prototypes.",
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
  { value: "3", label: "Full case studies" },
  { value: "4", label: "Users interviewed per project" },
  { value: "B.A.", label: "Psychology, Binghamton" },
  { value: "Hi-Fi", label: "Research through to final screens" },
];

const PERSONAL = [
  {
    k: "Always mid-book",
    v: "Usually two at once — one fiction, one about how people think. It's where a lot of my research instincts come from.",
  },
  {
    k: "Puzzles on the table",
    v: "1,000 pieces, no picture-peeking. Same satisfaction as watching messy interview notes finally cluster into themes.",
  },
  {
    k: "Running most mornings",
    v: "My thinking time. Half my best ideas about a stuck screen show up somewhere around mile three.",
  },
  {
    k: "Baking for people",
    v: "I test recipes the way I test prototypes: change one variable, ask someone honest, adjust.",
  },
  {
    k: "Exploring new towns",
    v: "Weekend drives with no plan. I notice signage, menus and parking apps far more than I should.",
  },
  {
    k: "Family and animals",
    v: "Very close to my family, and a soft spot for every animal I meet — the pets get greeted before the people.",
  },
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
    image: flightCover.url,
  },
  {
    to: "/work/reflink-app" as const,
    index: "03",
    title: "RefLink",
    blurb:
      "A mobile app concept that matches youth and minor league sports organizers with qualified referees — designed for both sides of a two-sided marketplace.",
    tags: ["Mobile UX", "Two-Sided Marketplace", "Prototyping"],
    kind: "UX capstone / personal project",
    image: reflinkCover.url,
  },
];

function Hero() {
  return (
    <section className="paper-grain relative overflow-hidden border-b border-border">
      {/* subtle warm gradient blob */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[32rem] w-[32rem] rounded-full bg-clay/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], x: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 h-[26rem] w-[26rem] rounded-full bg-sage/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-14">
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-clay opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-clay" />
            </span>
            <span className="label-mono text-muted-foreground">UX Designer &amp; Researcher · Open to roles</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 font-display text-[3.25rem] leading-[0.95] tracking-[-0.03em] sm:text-7xl lg:text-[5.5rem]"
          >
            Courtney
            <br />
            <span className="text-sage-deep">Reicherter</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            Psychology-trained. Hospitality-sharpened. I turn user research into
            interfaces people actually want to use — from first interview to final screen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              See the case studies
              <ArrowDown className="h-4 w-4 transition-transform duration-500 group-hover:translate-y-1" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-6 py-3 text-sm transition-colors hover:border-foreground/50 hover:text-clay"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative order-1 lg:order-2"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-transform duration-500 hover:-translate-y-1">
            <img
              src={portrait.url}
              alt="Courtney Reicherter"
              className="h-[22rem] w-full object-cover object-[50%_57%] sm:h-[28rem] lg:h-[32rem]"
            />
          </div>
        </motion.aside>
      </div>

      <div className="relative border-t border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-border px-5 sm:grid-cols-4 sm:divide-x sm:px-8">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 + i * 0.08 }}
              className="px-0 py-7 sm:px-6"
            >
              <p className="font-display text-3xl sm:text-4xl">{s.value}</p>
              <p className="label-mono mt-2 text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const EDGE = [
  {
    k: "I start with people, not mockups",
    v: "Psychology taught me how to ask better questions: what mental model someone brings, where they get stuck, and what would make the next step obvious.",
  },
  {
    k: "Three years watching real users struggle",
    v: "As a front-of-house team lead at a luxury hotel, my job was to notice friction and fix it on the spot — the same reflex I use in research and design.",
  },
  {
    k: "I like messy data",
    v: "A payroll analyst internship taught me to sit with spreadsheets until they tell the truth. Usability synthesis uses the same patience.",
  },
  {
    k: "I've worked with a real client",
    v: "Dawson Motors wasn't a classroom brief. I handled outreach, discovery, audit, redesign, revisions and launch — including what the owner did and didn't want public.",
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
              A few things that shape how I work.
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
              Three projects, start to finish
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              One real client and two capstones — all carried from research and audit through to
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
              interface second.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6">
            <p className="text-base leading-relaxed text-muted-foreground">
              My background changes the questions I ask. Instead of “does this look right?”, I want
              to know what someone already expects, where they hesitate, and which single change
              would make the next step feel obvious.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { k: "Understand", v: "Talk to people, watch them work, audit what's already live" },
                { k: "Frame", v: "Cluster notes, map the journey, decide what matters most" },
                { k: "Build & test", v: "Prototype fast, put it in front of users, refine" },
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

      <section className="border-b border-border bg-secondary/20">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Reveal>
            <p className="label-mono text-clay">Away from the screen</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              The rest of me, briefly.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              I'm close with my family — Sunday dinners are non-negotiable — and I have never met a
              dog I didn't stop to greet. The habits below are also, quietly, how I got good at this
              work: patience, pattern-spotting and a tolerance for sitting with a problem.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PERSONAL.map((p, i) => (
              <Reveal key={p.k} delay={i * 0.06}>
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="h-full rounded-xl border border-border bg-card p-6"
                >
                  <h3 className="font-display text-xl leading-snug">{p.k}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.v}</p>
                </motion.article>
              </Reveal>
            ))}
          </div>
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
