import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Reveal, RevealWords } from "@/components/reveal";
import { EMAIL, LINKEDIN } from "@/components/site-chrome";
import dawsonAfter from "@/assets/Screenshot_2026-07-09_102408.png.asset.json";
import dawsonContact from "@/assets/Screenshot_2026-07-20_194739.png.asset.json";

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
    image: dawsonContact.url,
  },
];

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="paper-grain relative overflow-hidden border-b border-border">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-sage/50 blur-3xl"
        animate={{ scale: [1, 1.12, 1], x: [0, -30, 0], y: [0, 24, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 h-[26rem] w-[26rem] rounded-full bg-clay/15 blur-3xl"
        animate={{ scale: [1, 1.18, 1], x: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{ y, opacity: fade }}
        className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-36"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="label-mono flex items-center gap-2 text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-clay opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-clay" />
          </span>
          Open to UX roles · 2026
        </motion.p>

        <h1 className="mt-8 max-w-4xl font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          <RevealWords text="Designing with" />
          <br />
          <span className="text-clay">
            <RevealWords text="empathy, intention" delay={0.25} />
          </span>
          <br />
          <RevealWords text="&amp; craft." delay={0.5} />
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 grid gap-8 sm:grid-cols-[1.1fr_1fr] sm:items-end"
        >
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            I'm <span className="text-foreground">Courtney Reicherter</span>, a UX designer and
            researcher with a psychology degree. I turn complex, frustrating digital experiences
            into something people actually enjoy — grounded in research, refined through iteration.
          </p>
          <div className="flex flex-wrap gap-3 sm:justify-end">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              See my work <ArrowDown className="h-4 w-4" />
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
