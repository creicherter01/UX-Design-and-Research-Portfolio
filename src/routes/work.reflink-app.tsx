import { createFileRoute } from "@tanstack/react-router";
import {
  CaseHero,
  FindingRows,
  NextProject,
  NumberedCards,
  OutcomeList,
  PhoneFrame,
  Section,
  StatBand,
} from "@/components/case-study-bits";
import { Reveal } from "@/components/reveal";

const heroDesktop = { url: "/media/reflink-hero.png" };
const heroMobile = { url: "/media/reflink-hero-mobile.png" };
const organizerDash = { url: "/media/reflink-organizer-dashboard.png" };
const refereeDash = { url: "/media/reflink-referee-dashboard.png" };

export const Route = createFileRoute("/work/reflink-app")({
  head: () => ({
    meta: [
      { title: "RefLink — Sports Officiating Marketplace Concept by Courtney Reicherter" },
      {
        name: "description",
        content:
          "A mobile-responsive web app concept connecting youth and minor league sports organizers with qualified referees. Case study covers two-sided UX, mobile-first flows and role-based dashboards.",
      },
      {
        property: "og:title",
        content: "RefLink — Sports Officiating Marketplace Concept by Courtney Reicherter",
      },
      {
        property: "og:description",
        content:
          "Mobile-first UX concept for a two-sided sports officiating marketplace: organizers fill games faster, referees find work that fits their schedule.",
      },
      { property: "og:image", content: heroDesktop.url },
      { name: "twitter:image", content: heroDesktop.url },
    ],
  }),
  component: ReflinkCase,
});

const PROBLEMS = [
  {
    title: "No real-time availability",
    body: "Organizers were calling and texting officials one by one, with no shared view of who was free for a given game, sport or location.",
  },
  {
    title: "Fragmented schedules",
    body: "Referees tracked assignments across spreadsheets, group chats and calendar apps, so open slots were easy to miss and double-booking was common.",
  },
  {
    title: "Last-minute gaps",
    body: "A single cancellation could leave a youth game uncovered. There was no fast way to broadcast an open slot to qualified, nearby officials.",
  },
  {
    title: "Trust before the whistle",
    body: "Organizers needed to know an official's certification, experience and reliability — but that information lived in emails and word-of-mouth.",
  },
];

const FINDINGS = [
  {
    finding:
      "Two user groups, one product — organizers and referees have opposite mental models. One needs to fill a slot; the other needs to protect their time.",
    solution:
      "Role-based dashboards that share the same game data but surface different actions. Organizers see fill rate and assignments; referees see open games and earnings.",
  },
  {
    finding:
      "Referees make decisions in seconds, usually on a phone between games or on the way to one.",
    solution:
      "A mobile-first card layout with one-tap accept/decline, smart filters by sport, distance and pay, and a persistent schedule view.",
  },
  {
    finding:
      "Organizers won't assign an official they don't trust, especially for youth leagues.",
    solution:
      "Verified profile badges — certification level, completed games, rating — appear on every assignment row and game detail screen.",
  },
  {
    finding:
      "Empty slots have a real cost: cancelled or rescheduled games, unhappy families and lost revenue for leagues.",
    solution:
      "Availability calendars and instant game invites match referees with openings that fit their preferences, cutting the time a slot sits empty.",
  },
];

const STATS = [
  {
    value: "1,400+",
    label: "Officials in the network",
    sub: "Design target: make scale feel manageable for organizers",
  },
  {
    value: "18 min",
    label: "Average time to fill an open game",
    sub: "Hypothetical target benchmark for the concept",
  },
  {
    value: "96%",
    label: "Game coverage rate",
    sub: "Target outcome for the organizer dashboard",
  },
  {
    value: "4",
    label: "Users interviewed across both roles",
    sub: "2 organizers, 2 referees",
  },
];

const OUTCOMES = [
  "Mobile-first responsive design so referees can manage games from any device",
  "Two role-based dashboards built from opposite user mental models",
  "One-tap accept/decline with smart filters for sport, distance and pay",
  "Verified badges and ratings surfaced on every assignment row",
  "Shared availability calendar that prevents double-booking",
  "Instant game invites that match officials to slots that fit their schedule",
];

function ReflinkCase() {
  return (
    <>
      <CaseHero
        index="03"
        title="RefLink"
        intro="A mobile-responsive web app concept I designed to connect youth and minor league sports organizers with qualified referees. I explored the core flows for both sides — posting games and filling them — so the product works as well on a phone between games as it does on a desk at the league office."
        meta={[
          { label: "Role", value: "UX Designer & Researcher (solo)" },
          { label: "Timeline", value: "Mar – Apr 2026" },
          { label: "Tools", value: "Figma" },
          { label: "Type", value: "UX capstone / personal project" },
        ]}
        prototype="https://reflinkappbuild.netlify.app/"
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                src: organizerDash.url,
                cap: "Organizer dashboard — fill rate, upcoming games and assigned officials at a glance.",
              },
              {
                src: refereeDash.url,
                cap: "Referee dashboard — open games, accepted assignments and earnings in one place.",
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
        eyebrow="The challenge"
        title="A two-sided marketplace with a clock ticking"
        lede="I picked this space because both sides are busy and mobile. Organizers need to fill games quickly with people they trust. Referees need to find work that fits their schedule without wading through spreadsheets and group chats."
      >
        <NumberedCards items={PROBLEMS} />
      </Section>

      <Section
        eyebrow="My approach"
        title="Mobile-first, role-second"
        lede="I started with the referee's phone. If an official can browse, accept and manage a game while walking to the field, the desktop experience only gets better. From there I split the interface by role without duplicating the underlying game data."
        tone="muted"
      >
        <FindingRows items={FINDINGS} leftLabel="Research finding" rightLabel="Design solution" />
      </Section>

      <Section
        eyebrow="By the numbers"
        title="What I aimed for with this concept"
        lede="These are design targets I set to judge density, hierarchy and flow decisions — not measured outcomes from a real product."
      >
        <StatBand
          items={STATS}
          note="Hypothetical targets used as constraints while designing, not validated metrics."
        />
      </Section>

      <Section
        eyebrow="Responsive design"
        title="Built for the device referees actually carry"
        lede="The same marketing page and dashboard scale from a league-office monitor down to a phone pulled out of a gear bag."
        tone="muted"
      >
        <div className="grid gap-4 sm:grid-cols-[1.4fr_0.6fr]">
          <Reveal>
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <img
                src={heroDesktop.url}
                alt="RefLink marketing page on desktop"
                loading="lazy"
                className="w-full"
              />
              <figcaption className="label-mono border-t border-border p-3 text-muted-foreground">
                Desktop view — hero, stats and primary CTA.
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.08}>
            <PhoneFrame caption="Live prototype — scroll and tap inside the phone.">
              <iframe
                src="https://reflinkappbuild.netlify.app/"
                title="RefLink interactive prototype"
                loading="lazy"
                className="h-full w-full border-0"
              />
            </PhoneFrame>
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow="The result"
        title="What the final prototype delivers"
        lede="A responsive, two-sided prototype where organizers can fill a game in minutes and referees can manage their whole schedule from a phone."
      >
        <OutcomeList items={OUTCOMES} />
        <Reveal delay={0.1} className="mt-10 rounded-lg border border-border bg-card p-7">
          <p className="label-mono text-clay">What I'd do next</p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            I'd run moderated task sessions with both organizers and referees on their own
            devices, paying close attention to the accept/decline flow and notification timing.
            I'd also explore an offline-friendly state so referees can check their confirmed
            assignments even when the field has no signal.
          </p>
        </Reveal>
      </Section>

      <NextProject to="/work/dawson-motors" label="Dawson Motors Redesign" />
    </>
  );
}
