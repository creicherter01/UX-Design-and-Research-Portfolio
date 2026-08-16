import { createFileRoute } from "@tanstack/react-router";
import {
  CaseHero,
  FindingRows,
  NextProject,
  NumberedCards,
  OutcomeList,
  Section,
  StatBand,
} from "@/components/case-study-bits";
import { Reveal } from "@/components/reveal";
const protoResults = { url: "/media/Screenshot_2026-08-12_202729.png" };
const affinity = { url: "/media/affinity-diagram.png" };
const journey = { url: "/media/journey-map.png" };
const protoSeats = { url: "/media/Screenshot_2026-08-12_202817.png" };

export const Route = createFileRoute("/work/flight-booking")({
  head: () => ({
    meta: [
      { title: "Find Your Perfect Flight — UX Case Study by Courtney Reicherter" },
      {
        name: "description",
        content:
          "A UX capstone from research to prototype: 4 user interviews, journey mapping and usability testing turned a fragmented flight booking experience into one connected flow.",
      },
      {
        property: "og:title",
        content: "Find Your Perfect Flight — UX Case Study by Courtney Reicherter",
      },
      {
        property: "og:description",
        content:
          "Research-led redesign of flight booking: clearer legs, integrated seat selection, plain-language baggage and a confirmation you can trust.",
      },
    ],
  }),
  component: FlightCase,
});

const PROBLEMS = [
  {
    title: "Confusing interfaces",
    body: "Booking platforms overwhelm travellers with cluttered screens, unclear hierarchies and inconsistent patterns between steps.",
  },
  {
    title: "Difficult navigation",
    body: "The process jumps between multiple screens; users lose context and re-enter information they've already given.",
  },
  {
    title: "Excessive, irrelevant detail",
    body: "Too many options and competing CTAs distract from the core task, producing real decision fatigue at the point of purchase.",
  },
  {
    title: "A fragmented market",
    body: "Travellers were searching several sites, comparing prices manually and piecing information together before they could commit.",
  },
];

const PAINS = [
  {
    finding:
      "Confusion between departure and return flights — people frequently didn't know which leg they were booking, which led to mistakes and backtracking.",
    solution:
      "Clear visual separation with prominent headers, distinct colour coding, and a progress indicator showing which leg is in play.",
  },
  {
    finding:
      "Unclear confirmation method — users weren't sure whether a booking would be confirmed by email or text, which created real anxiety.",
    solution:
      "A confirmation screen that states explicitly how the booking is confirmed and what happens next, removing the ambiguity entirely.",
  },
  {
    finding:
      "Poor flight-detail highlighting — duration, stops and arrival time were buried or easy to miss when scanning results.",
    solution:
      "Redesigned flight cards with a strong hierarchy: larger type, strategic colour and icons carrying the key details at the top of each card.",
  },
  {
    finding:
      "Unclear baggage information — allowances, fees and inclusions were scattered and written in airline jargon.",
    solution:
      "A simplified baggage page separating what's included from paid add-ons, with plain language, icons and up-front pricing.",
  },
  {
    finding:
      "Third-party seat selection — redirecting to an external seat picker broke the flow and eroded confidence mid-purchase.",
    solution:
      "Seat selection integrated directly into the booking flow with an interactive seat map — no leaving the platform.",
  },
  {
    finding:
      "Shared value: efficiency — every participant valued their time above extra features or personalisation.",
    solution:
      "The whole flow designed for speed: fewer fields, no unnecessary steps, one linear path from search to confirmation.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Research & testing",
    points: [
      "Interviewed 4 users across demographics",
      "Observed real booking sessions end to end",
      "Catalogued recurring frustrations and needs",
    ],
  },
  {
    step: "02",
    title: "Synthesis & analysis",
    points: [
      "Built affinity diagrams from raw research notes",
      "Mapped 5 journey stages with emotional highs and lows",
      "Identified critical moments and design opportunities",
    ],
  },
  {
    step: "03",
    title: "Sketches & ideation",
    points: [
      "Rapid sketching across multiple approaches",
      "Explored alternate information architectures",
      "Selected the most promising directions to test",
    ],
  },
  {
    step: "04",
    title: "Prototyping & refinement",
    points: [
      "Mid-fidelity prototypes for task-based testing",
      "Iterated against observed friction, not opinion",
      "Delivered a high-fidelity interactive prototype",
    ],
  },
];

const OUTCOMES = [
  "One unified search across hundreds of airlines and travel sites",
  "Departure and return legs visually distinct at every step",
  "Flight cards that answer duration, stops and arrival at a glance",
  "Baggage rules rewritten in plain language with clear pricing",
  "Seat selection kept inside the flow via an interactive map",
  "An explicit confirmation screen that removes post-booking anxiety",
];

const TEST_STATS = [
  {
    value: "+10%",
    label: "User satisfaction vs. the original test site",
    sub: "Post-task satisfaction ratings, 8 participants",
  },
  {
    value: "9 → 6",
    label: "Steps to complete a round-trip booking",
    sub: "Seat selection pulled in-flow",
  },
  {
    value: "100%",
    label: "Of testers correctly identified which leg they were booking",
    sub: "Up from 5 of 8 on the original flow",
  },
  {
    value: "4",
    label: "Users interviewed and observed booking end to end",
    sub: "Mixed ages and travel frequency",
  },
];

function FlightCase() {
  return (
    <>
      <CaseHero
        index="02"
        title="Find Your Perfect Flight"
        intro="I redesigned flight booking as a single interface that searches hundreds of airlines and travel sites at once, so travellers stop stitching the journey together themselves."
        meta={[
          { label: "Role", value: "UX Designer & Researcher (solo)" },
          { label: "Timeline", value: "Feb – Mar 2026" },
          { label: "Tools", value: "Figma, Miro" },
          { label: "Type", value: "UX capstone project" },
        ]}
        prototype="https://www.figma.com/make/79Uu2mYP7IxKzg7dlV6Bvx/High-Fidelity-Prototype--Copy-?p=f&t=5jjsSvyrtXu0Mngr-0&fullscreen=1"
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                src: protoResults.url,
                cap: "Step 1 of 2 — departing flight results, with the leg stated explicitly and fares compared side by side.",
              },
              {
                src: protoSeats.url,
                cap: "Seat selection built into the flow — interactive map, cabin zones and a legend, no third-party redirect.",
              },
            ].map((it) => (
              <Reveal key={it.src}>
                <figure className="h-full overflow-hidden rounded-lg border border-border bg-card">
                  <img src={it.src} alt={it.cap} loading="lazy" className="w-full" />
                  <figcaption className="label-mono border-t border-border p-3 text-muted-foreground">
                    {it.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Section
        eyebrow="By the numbers"
        title="What testing measured"
        lede="Figures below come from my own moderated task-based sessions comparing the prototype against the booking sites participants normally use."
        tone="muted"
      >
        <StatBand items={TEST_STATS} note="Measured in moderated sessions with 8 participants completing the same round-trip booking task on the original sites and on the prototype." />
      </Section>

      <Section
        eyebrow="The challenge"
        title="A market that made travellers do the work"
        lede="When I started this project I kept seeing the same gap: travellers were forced across multiple platforms, each with its own design language and flow. Those issues compounded into a broken experience where people searched several sites, compared prices by hand, and still weren't confident they'd made the right booking."
      >
        <NumberedCards items={PROBLEMS} />
      </Section>

      <Section
        eyebrow="Research"
        title="How I learned what actually breaks"
        lede="Four interviews, observed booking sessions, affinity mapping and journey maps across five stages — then usability walkthroughs to confirm the friction was structural rather than cosmetic."
        tone="muted"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.07}>
              <article className="h-full rounded-lg border border-border bg-card p-6">
                <span className="font-display text-3xl text-sage-deep">{p.step}</span>
                <h3 className="mt-2 font-display text-xl">{p.title}</h3>
                <ul className="mt-4 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <p className="label-mono text-clay">Research artefacts</p>
          <h3 className="mt-2 font-display text-xl">Affinity diagram & journey map</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            I clustered every interview note in Miro, then translated the clusters into a five-stage
            journey map with the emotional curve of the booking task.{" "}
            <a
              href="https://miro.com/app/board/uXjVJmqObNk=/?share_link_id=991945260277"
              target="_blank"
              rel="noreferrer"
              className="link-underline text-foreground"
            >
              View the full Miro board
            </a>
            .
          </p>
          <div className="mt-5 space-y-4">
            {[
              {
                src: affinity.url,
                cap: "Affinity diagram — raw interview notes clustered into user context, pain points, motivating factors, efficiency blockers and one shared value.",
              },
              {
                src: journey.url,
                cap: "Journey map — five stages from date and airport selection to payment, with context, goals, behaviours, pain points and the emotional curve.",
              },
            ].map((it) => (
              <figure key={it.src} className="overflow-hidden rounded-lg border border-border bg-card">
                <img src={it.src} alt={it.cap} loading="lazy" className="w-full" />
                <figcaption className="label-mono border-t border-border p-3 text-muted-foreground">
                  {it.cap}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section
        eyebrow="Discovery to solution"
        title="Pain points & design iterations"
        lede="Each pain point below came out of research, and each solution was tested rather than assumed."
      >
        <FindingRows items={PAINS} leftLabel="Pain point" rightLabel="Design solution" />
      </Section>

      <Section
        eyebrow="The result"
        title="What the final prototype delivers"
        lede="A high-fidelity booking flow — search, compare, seats, baggage, confirmation — designed around efficiency and clarity at every step."
        tone="muted"
      >
        <OutcomeList items={OUTCOMES} />
        <Reveal delay={0.1} className="mt-10 rounded-lg border border-border bg-card p-7">
          <p className="label-mono text-clay">Reflection</p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            The biggest lesson was how much anxiety lives in the gaps between screens rather than on
            them. Most of my highest-impact changes weren't new features — they were statements of
            certainty: which leg you're booking, what's included, how you'll be confirmed. Next I'd
            run a second round of unmoderated testing on price comparison specifically, and explore
            an accessibility pass on the seat map, which is the densest interaction in the flow.
          </p>
        </Reveal>
      </Section>

      <NextProject to="/work/reflink-app" label="RefLink" />
    </>
  );
}
