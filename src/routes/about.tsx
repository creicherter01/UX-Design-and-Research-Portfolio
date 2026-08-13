import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealWords } from "@/components/reveal";
import { EMAIL, LINKEDIN } from "@/components/site-chrome";
import portrait from "@/assets/courtney-portrait.png.asset.json";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Courtney Reicherter — Psychology-Led UX Designer" },
      {
        name: "description",
        content:
          "How a psychology degree became a UX practice: my background, philosophy, education and skills across research, interaction design and prototyping.",
      },
      { property: "og:title", content: "About Courtney Reicherter — Psychology-Led UX Designer" },
      {
        property: "og:description",
        content:
          "From a B.A. in Psychology to full UX case studies — research, interaction design, prototyping and testing.",
      },
    ],
  }),
  component: AboutPage,
});

const JOURNEY = [
  {
    step: "01",
    kicker: "The starting point",
    title: "A psychology degree and an open question",
    body: "After graduating with my degree in psychology, I found myself at a crossroads. I've always been drawn to understanding people and their behaviour, but traditional psychology career paths didn't resonate. I wanted to apply that understanding somewhere it could shape how people actually live and work.",
  },
  {
    step: "02",
    kicker: "The discovery",
    title: "Where psychology and technology intersect",
    body: "My research led me to UX — a field where behavioural science and technology meet. Understanding motivations, mental models and pain points is the heart of building meaningful digital experiences. That realisation sparked the whole practice.",
  },
  {
    step: "03",
    kicker: "The honest part",
    title: "Not a \u201ctech person\u201d — and that's my advantage",
    body: "Learning design software felt daunting at first. But while others focused on aesthetics and execution, I was asking deeper questions: why does this interaction feel confusing? What mental model do users bring? How do we reduce cognitive load? Those questions became my north star.",
  },
  {
    step: "04",
    kicker: "The commitment",
    title: "Keeping real people in the room",
    body: "However fast the tools change, the decisions still land on someone trying to get something done. So I keep asking harder questions, listening longer, and testing with real people before I call anything finished.",
  },
];

const SKILLS = [
  {
    title: "UX Research",
    body: "User interviews, usability testing, affinity mapping and desk research — I want to know what's true before I start designing.",
  },
  {
    title: "Interaction Design",
    body: "Building flows and states so the next step is clear and people don't have to think too hard about what to do next.",
  },
  {
    title: "Prototyping",
    body: "From quick sketches to clickable high-fidelity prototypes I can put in front of users and watch them use.",
  },
  {
    title: "User Testing",
    body: "Moderated sessions where I watch real people try tasks, then use what breaks to guide the next round of design.",
  },
  {
    title: "Design Systems",
    body: "Organising reusable components so a product stays consistent without reinventing the same button every time.",
  },
  {
    title: "Psychology-Led Design",
    body: "Using what I learned about memory, attention and decision-making to reduce friction and make choices easier.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="paper-grain border-b border-border bg-secondary/30">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-20 sm:grid-cols-[1.3fr_1fr] sm:px-8 sm:py-28">
          <div>
            <p className="label-mono text-clay">About</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
              <RevealWords text="Designing for how people think, decide and behave." />
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              I'm Courtney — a UX designer and researcher with a psychology degree and a habit of
              asking too many questions. I like the kind of design that feels obvious once it's
              done: the path forward is clear, the hard stuff has been handled, and nothing is
              there by accident.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {["Research before assumptions", "Details matter", "Design for real people"].map(
                (t) => (
                  <span
                    key={t}
                    className="label-mono rounded-full border border-border px-4 py-2 text-muted-foreground"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
          <Reveal delay={0.15} className="order-first sm:order-last">
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src={portrait.url}
                alt="Portrait of Courtney Reicherter, UX designer and researcher"
                className="aspect-[4/5] w-full object-cover object-[50%_42%]"
              />
            </div>
          </Reveal>
        </div>
      </section>


      <section className="border-b border-border">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 py-16 sm:grid-cols-[1fr_1.2fr] sm:px-8 sm:py-20">
          <Reveal>
            <p className="label-mono text-clay">Philosophy</p>
            <blockquote className="mt-4 font-display text-3xl leading-tight tracking-tight">
              “The best design is the one nobody notices — it just works.”
            </blockquote>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Psychology taught me to start with what people actually do, not what they say they'll
              do. That habit carries into every screen I design: I want to know where someone gets
              stuck before I decide what the fix looks like.
            </p>
            <p>
              I'm most interested in the small decisions that quietly shape an experience — a
              clearer label, a better order of steps, a button placed where someone already expects
              it. Those details are usually what separate a frustrating flow from an easy one.
            </p>
            <p>
              I work in loops: research, sketch, test, refine. Nothing stays because it looks nice;
              it stays because it held up when real people tried to use it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <p className="label-mono text-clay">My background</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
              My journey to UX design
            </h2>
          </Reveal>
          <div className="mt-12 divide-y divide-border border-y border-border">
            {JOURNEY.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.06}>
                <div className="grid gap-4 py-8 sm:grid-cols-[auto_1fr] sm:gap-10">
                  <div className="shrink-0">
                    <span className="font-display text-4xl text-sage-deep">{item.step}</span>
                  </div>
                  <div>
                    <p className="label-mono text-muted-foreground">{item.kicker}</p>
                    <h3 className="mt-2 font-display text-xl leading-snug">{item.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <p className="label-mono text-clay">Education</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
              Two disciplines in tandem
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-lg border border-border bg-card p-7">
                <p className="label-mono text-sage-deep">Design</p>
                <h3 className="mt-3 font-display text-2xl">UX Design Institute</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Diploma in UX Design — professional certification
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-lg border border-border bg-card p-7">
                <p className="label-mono text-sage-deep">Psychology</p>
                <h3 className="mt-3 font-display text-2xl">Binghamton University</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  B.A. in Psychology, minor in Health &amp; Wellness Studies
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <p className="label-mono text-clay">Expertise</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
              Skills &amp; specialisms
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group h-full rounded-lg border border-border bg-card p-6 transition-colors hover:border-sage-deep">
                  <h3 className="font-display text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <p className="label-mono text-clay">Off the clock</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
              The things that keep me curious
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
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
            ].map((item, i) => (
              <Reveal key={item.k} delay={i * 0.05}>
                <div className="h-full rounded-lg border border-border bg-card p-6">
                  <h3 className="font-display text-lg">{item.k}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 px-5 py-16 sm:px-8">
          <p className="font-display text-2xl sm:text-3xl">
            Curious how I work? Start with a case study.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View work
            </Link>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition-colors hover:border-clay hover:text-clay"
            >
              LinkedIn <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition-colors hover:border-clay hover:text-clay"
            >
              Email me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
