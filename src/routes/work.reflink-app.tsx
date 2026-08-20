import { createFileRoute } from "@tanstack/react-router";
import {
  CaseHero,
  FindingRows,
  NextProject,
  NumberedCards,
  OutcomeList,
  PhoneFrame,
  Section,
  ThoughtProcess,
} from "@/components/case-study-bits";
import { Reveal } from "@/components/reveal";

const heroDesktop = { url: "/media/reflink-hero.png" };

const organizerDash = { url: "/media/reflink-organizer-dashboard.png" };
const refereeDash = { url: "/media/reflink-referee-dashboard.png" };

export const Route = createFileRoute("/work/reflink-app")({
  head: () => ({
    meta: [
      { title: "RefLink — Sports Officiating Marketplace Concept by Courtney Reicherter" },
      {
        name: "description",
        content:
          "A mobile app concept connecting youth and minor league sports organizers with qualified referees. Case study covers two-sided UX, mobile-first flows and role-based dashboards.",
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


const THOUGHTS = [
  {
    phase: "01",
    title: "Where the idea came from",
    did: "I grew up playing sports, and I have several family members who teach during the week and referee on the side. They talk constantly about how disorganized officiating is — how hard it is for leagues to find refs who actually know what they're doing, and how hard it is for refs to find games that fit around a full-time job.",
    why: "I wanted a project rooted in a problem I'd already heard described dozens of times at family dinners rather than one I invented to have something to design. Starting from real complaints meant I already knew which frustrations were loudest on each side.",
  },
  {
    phase: "02",
    title: "Frame it as two users, not one product",
    did: "I wrote out the goals of an organizer and the goals of a referee separately before sketching a single screen, and kept them in two columns as I worked.",
    why: "The two sides have opposite mental models. An organizer is trying to fill an empty slot; a referee is trying to protect their time. If I designed one interface for both, I'd end up with something that half-served each, so I let the underlying game data stay shared and split the actions by role.",
  },
  {
    phase: "03",
    title: "Design for the phone first",
    did: "I built everything as a phone-native experience: card-based open games, tap to accept or decline, filters for sport, distance and pay, and a schedule view that's always one tap away.",
    why: "This was the hardest call, and I chose the referee's phone as the constraint on purpose. Refs are making these decisions in seconds — in a parking lot, between games, walking to a field. If the flow doesn't work one-handed on a phone, it doesn't work at all, even if the organizer side would have been easier to design on a wide screen.",
  },
  {
    phase: "04",
    title: "Make trust visible before the whistle",
    did: "I surfaced certification level, completed games and rating directly on assignment rows and game details, instead of hiding them a tap away on a profile.",
    why: "Nobody assigns a stranger to a youth game. My family's whole complaint was not knowing whether a ref actually knew the rules, so credibility had to sit where the decision gets made — on the row you're about to accept — not on a screen someone might never open.",
  },
];

const OUTCOMES = [
  "Mobile-first design so referees can manage games from their phone",
  "Role-based dashboards for organizers and referees, built from opposite mental models",
  "Tap to accept or decline, with smart filters for sport, distance and pay",
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
        intro="A mobile app concept I designed to connect youth and minor league sports organizers with qualified referees. I explored the core flows for both sides — posting games and filling them — so the product works on the device referees actually carry: their phone."
        meta={[
          { label: "Role", value: "UX Designer & Researcher (solo)" },
          { label: "Timeline", value: "Mar – Apr 2026" },
          { label: "Tools", value: "Figma" },
          { label: "Type", value: "Personal project" },
        ]}
        prototype="/work/reflink-app/prototype"
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
        eyebrow="My process"
        title="How I thought about it, step by step"
        lede="This started as an idea rather than a brief, so here's the reasoning I worked through — where it came from and the calls I made along the way."
      >
        <ThoughtProcess items={THOUGHTS} />
      </Section>

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
        lede="I started with the referee's phone. If an official can browse, accept and manage a game while walking to the field, the rest of the flow falls into place. From there I split the interface by role without duplicating the underlying game data."
        tone="muted"
      >
        <FindingRows items={FINDINGS} leftLabel="Research finding" rightLabel="Design solution" />
      </Section>

      <Section
        eyebrow="Scope"
        title="What this concept covered"
        lede="RefLink is a self-directed concept, so there are no usage numbers behind it. I focused on the core flows for both sides of the marketplace and the interactions that would matter most if the idea were built."
        tone="muted"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Organizer flow",
              body: "Post games, track fill status and see assigned officials at a glance.",
            },
            {
              title: "Referee flow",
              body: "Browse open games, accept or decline invites and manage a personal schedule.",
            },
            {
              title: "Trust surface",
              body: "Verified badges, ratings and certification levels on profiles and assignment rows.",
            },
            {
              title: "Mobile-first prototype",
              body: "Built as a phone-native experience so referees could manage games from the device already in their bag.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <article className="h-full rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="prototype"
        eyebrow="Mobile prototype"
        title="Built for the device referees actually carry"
        lede="The prototype is designed as a phone-first experience — referees browse, accept and manage games from the device already in their gear bag."
        tone="muted"
      >
        <div className="mx-auto max-w-sm">
          <Reveal>
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
        lede="A two-sided mobile prototype where organizers can fill a game in minutes and referees can manage their whole schedule from a phone."
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
