import { createFileRoute } from "@tanstack/react-router";
import {
  BeforeAfter,
  CaseHero,
  EmbedBoard,
  FindingRows,
  NextProject,
  NumberedCards,
  OutcomeList,
  Section,
  ThoughtProcess,
} from "@/components/case-study-bits";

import { Reveal } from "@/components/reveal";
const afterHome = { url: "/media/Screenshot_2026-07-09_102408.png" };
const beforeHome = { url: "/media/Screenshot_2026-07-23_102740.png" };
const afterContact = { url: "/media/Screenshot_2026-07-20_194739.png" };
const beforeService = { url: "/media/Screenshot_2026-07-23_102814.png" };
const afterService = { url: "/media/dawson-service-after.png" };
const afterHomeFull = { url: "/media/Screenshot_2026-08-12_202402.png" };
const afterSales = { url: "/media/Screenshot_2026-08-12_202503.png" };
const beforeContact = { url: "/media/Screenshot_2026-07-20_194816.png" };

export const Route = createFileRoute("/work/dawson-motors")({
  head: () => ({
    meta: [
      { title: "Dawson Motors Redesign — UX Case Study by Courtney Reicherter" },
      {
        name: "description",
        content:
          "A freelance UX audit and redesign of a 40-year-old family auto shop's website: heuristic audit, intent-based architecture, and a trust-first homepage and contact flow.",
      },
      {
        property: "og:title",
        content: "Dawson Motors Redesign — UX Case Study by Courtney Reicherter",
      },
      {
        property: "og:description",
        content:
          "Heuristic audit to high-fidelity build: splitting sales and service intents and surfacing 40 years of trust above the fold.",
      },
      { property: "og:image", content: afterHome.url },
      { name: "twitter:image", content: afterHome.url },
    ],
  }),
  component: DawsonCase,
});

const PROBLEMS = [
  {
    title: "No visual trust signals",
    body: "Four decades of reputation, certifications and reviews existed nowhere near the top of the page, where a first-time visitor would actually see them.",
  },
  {
    title: "Sales & service competing for space",
    body: "Buying a car and booking a repair are entirely different intents, yet the homepage gave both equal, undifferentiated weight in a flat grey button row.",
  },
  {
    title: "Dated, low-credibility visuals",
    body: "System-default buttons, cramped inventory thumbnails and clip-art graphics made the shop feel smaller and less established than it is.",
  },
  {
    title: "A contact form with no guidance",
    body: "One generic form handled every inquiry type, forcing visitors to guess whether they were even in the right place to book service.",
  },
];

const PROCESS = [
  {
    phase: "01",
    title: "Audited the live site before touching design",
    did: "I walked the existing site the way a first-time visitor would, screen by screen, and logged every friction point against Nielsen's usability heuristics on my Miro board.",
    why: "This was a real business, not a made-up brief. I wanted my recommendations tied to something I could point at and defend, instead of my own taste.",
  },
  {
    phase: "02",
    title: "Talked to the owners about where the business was going",
    did: "I asked what they actually wanted to grow. They told me pre-owned sales was the priority, but service kept the lights on and regulars needed to reach it fast.",
    why: "The hierarchy of a homepage is a business decision as much as a design one. Guessing would have meant designing for the wrong goal.",
  },
  {
    phase: "03",
    title: "Split the homepage by intent",
    did: "I gave sales and service two distinct primary paths instead of one grey row of buttons, with sales leading visually and service one tap away.",
    why: "Buying a car and booking a repair are different mindsets. Making people share a path meant both groups did extra work to get anywhere.",
  },
  {
    phase: "04",
    title: "Pulled the trust story above the fold",
    did: "I moved the 40-year history, Carfax rating and NAPA AutoCare status into the first screen alongside the hero.",
    why: "Their reputation was the strongest thing they had and the old site hid it. Trust is what makes someone hand over their car keys or their money.",
  },
  {
    phase: "05",
    title: "Rebuilt contact around what people are asking for",
    did: "I added an \"I'm interested in\" selector and surfaced call and text numbers directly, rather than routing every inquiry through one generic form.",
    why: "A single form made the visitor figure out the routing. Sorting by intent up front is less thinking for them and cleaner handoffs for the shop.",
  },
];


const FINDINGS = [
  {
    finding:
      "Weak visual hierarchy — every nav item, badge and CTA carried the same weight, so nothing told a first-time visitor where to look.",
    solution:
      "One dominant hero headline, two distinct primary CTAs (Book Service / Browse Sales), and trust stats pulled above the fold.",
  },
  {
    finding:
      "Trust was implied, not shown — “family-owned since 1982” appeared nowhere on the original homepage despite being the shop's strongest differentiator.",
    solution:
      "A badge, headline and stat bar (40+ years, 5-star Carfax rating, NAPA AutoCare status) establish credibility in the first five seconds.",
  },
  {
    finding:
      "One-size-fits-all contact form — sales and service inquiries funneled into the same undifferentiated fields, adding friction for both.",
    solution:
      "An “I'm interested in” selector splits the form by intent, with direct call and text numbers surfaced for anyone who'd rather skip it.",
  },
  {
    finding:
      "No responsive or modern layout — fixed-width tables and small tap targets made the original difficult to use on a phone.",
    solution:
      "Rebuilt fully responsive with generous spacing, larger touch targets and a consistent component system throughout.",
  },
];

function DawsonCase() {
  return (
    <>
      <CaseHero
        index="01"
        title="Dawson Motors Redesign"
        intro="A family-owned auto shop had been serving the same town since 1982 — but their website hadn't kept pace. I rebuilt it from the ground up so the site felt as trustworthy as the business behind it."
        meta={[
          { label: "Role", value: "Freelance UX Designer (solo)" },
          { label: "Timeline", value: "June 2025" },
          { label: "Tools", value: "Figma" },
          { label: "Type", value: "Freelance client project" },
        ]}
        prototype="https://dawsonmotorsrefresh.netlify.app/"
      />

      <Section
        eyebrow="Thinking it through"
        title="How I worked the problem"
        lede="This is the board I actually worked on while auditing the site — findings, notes to myself and the layout thinking behind each screen. Pan and zoom it right here; the reasoning matters more than the tidy final screens."
        tone="muted"
      >
        <EmbedBoard
          src="https://miro.com/app/live-embed/uXjVHvh3OLk=/?embedAutoplay=false"
          title="Dawson Motors redesign — Miro working board"
          caption="Drag to pan, scroll to zoom, or open it full screen."
          href="https://miro.com/app/board/uXjVHvh3OLk=/?share_link_id=931729459358"
        />
      </Section>

      <Section
        eyebrow="The challenge"
        title="A two-sided business with a one-sided site"
        lede="Dawson Motors is both a pre-owned car lot and a full-service repair shop, but the existing site treated both as an afterthought. Flat grey navigation, a cramped inventory carousel and a dated “click here to text us” graphic gave visitors no sense of the business behind them — and for a shop built on 40+ years of local trust, the site was actively working against that reputation."
      >
        <NumberedCards items={PROBLEMS} />
      </Section>

      <Section
        eyebrow="My process"
        title="How I thought about it, step by step"
        lede="Here's the order I worked in and the reasoning behind each move — including the conversation with the owners that decided the whole hierarchy."
      >
        <ThoughtProcess items={PROCESS} />
      </Section>

      <Section
        eyebrow="My approach"
        title="Audit findings, and what I did about each one"
        lede="This was a real client engagement, so instead of opening with formal interviews I ran a structured audit of the live site — evaluating it against Nielsen's usability heuristics and benchmarking against modern dealership and service sites — then rebuilt the experience around the two clearest visitor intents: buying a car, and booking service."
        tone="muted"
      >
        <FindingRows items={FINDINGS} leftLabel="Audit finding" rightLabel="Design solution" />
      </Section>


      <Section
        eyebrow="Before & after"
        title="Two comparisons that carry the redesign"
        lede="Each comparison opens on the original site — toggle to After to see what changed and why."
      >
        <div className="space-y-6">
          <BeforeAfter
            title="Homepage"
            note="The original buried the shop's two core offerings inside a flat navigation bar and a cramped inventory carousel. The redesign leads with trust and a clear choice."
            before={beforeHome.url}
            after={afterHomeFull.url}
            beforeCaption="Before — flat grey nav buttons, cramped carousel, no hierarchy or trust signals."
            afterCaption="After — a confident hero headline, two CTAs split by intent, and trust stats above the fold."
          />
          <BeforeAfter
            title="Service & repair"
            note="Service is the shop's highest-intent page, but the original opened with centered paragraphs and vendor logos. The redesign states the offer, then makes booking or calling a one-tap decision."
            before={beforeService.url}
            after={afterService.url}
            beforeCaption="Before — centered paragraphs, logo clutter and a buried booking link."
            afterCaption="After — a direct headline, NAPA credibility in one line, and Schedule Service plus a tap-to-call number."
          />
        </div>
        <Reveal className="mt-12">
          <p className="label-mono text-clay">Also redesigned</p>
          <h3 className="mt-2 font-display text-xl">Contact and inventory</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              {
                src: afterContact.url,
                cap: "Contact — an intent selector splits service from sales, with direct call and text options for anyone who'd rather skip the form.",
              },
              {
                src: afterSales.url,
                cap: "Inventory — the cramped carousel became a filterable grid with price, mileage and one clear action per card.",
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
        eyebrow="The result"
        title="Design decisions & learnings"
        lede="Every change traces back to a specific audit finding. The goal was a site that earns the same trust in five seconds that the shop has earned over four decades — for a car buyer and a service customer alike."
        tone="muted"
      >
        <OutcomeList items={OUTCOMES} />
        <Reveal delay={0.1} className="mt-10 rounded-lg border border-border bg-card p-7">
          <p className="label-mono text-clay">What I'd do next</p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            With a live site in place, the natural next step is validation: moderated tests with
            local customers on two tasks (book a service appointment, inquire about a vehicle), plus
            simple analytics on which CTA wins. I'd also push for real photography of the shop and
            team — for a business whose advantage is being local and familiar, stock-feeling imagery
            leaves credibility on the table.
          </p>
        </Reveal>
      </Section>

      <NextProject to="/work/flight-booking" label="Find Your Perfect Flight" />
    </>
  );
}
