import { createFileRoute } from "@tanstack/react-router";
import {
  BeforeAfter,
  CaseHero,
  FindingRows,
  NextProject,
  NumberedCards,
  OutcomeList,
  Section,
  StatBand,
} from "@/components/case-study-bits";

import { Reveal } from "@/components/reveal";
import afterHome from "@/assets/Screenshot_2026-07-09_102408.png.asset.json";
import beforeHome from "@/assets/Screenshot_2026-07-23_102740.png.asset.json";
import beforeInventory from "@/assets/Screenshot_2026-07-09_102449.png.asset.json";
import afterContact from "@/assets/Screenshot_2026-07-20_194739.png.asset.json";
import beforeService from "@/assets/Screenshot_2026-07-23_102814.png.asset.json";
import beforeSales from "@/assets/Screenshot_2026-07-23_102848.png.asset.json";
import afterHomeFull from "@/assets/Screenshot_2026-08-12_202402.png.asset.json";
import afterSales from "@/assets/Screenshot_2026-08-12_202503.png.asset.json";
import beforeContact from "@/assets/Screenshot_2026-07-20_194816.png.asset.json";

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
    body: "One generic form handled every enquiry type, forcing visitors to guess whether they were even in the right place to book service.",
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
      "One-size-fits-all contact form — sales and service enquiries funnelled into the same undifferentiated fields, adding friction for both.",
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

const AUDIT_STATS = [
  {
    value: "+20%",
    label: "Task-flow efficiency vs. the original live site",
    sub: "Moderated task timings, before vs. after",
  },
  {
    value: "23",
    label: "Usability issues logged across 6 pages",
    sub: "Nielsen heuristic audit",
  },
  {
    value: "4 → 1",
    label: "Clicks from landing to booking a service",
    sub: "Task-flow reduction",
  },
  {
    value: "11 → 5",
    label: "Competing top-level navigation choices",
    sub: "Information architecture",
  },
  {
    value: "0 → 3",
    label: "Trust signals visible above the fold",
    sub: "40+ years, Carfax rating, NAPA AutoCare",
  },
];

const BENCHMARK_STATS = [
  {
    value: "50ms",
    label: "Time it takes a visitor to form a first impression of a site's credibility",
    sub: "Lindgaard et al., 2006",
  },
  {
    value: "75%",
    label: "Of users judge a company's credibility on visual design alone",
    sub: "Stanford Web Credibility Project",
  },
  {
    value: "88%",
    label: "Of visitors are less likely to return after one bad experience",
    sub: "Amazon Web Services / Toptal UX research",
  },
  {
    value: "61%",
    label: "Of mobile users leave immediately if they can't find what they need fast",
    sub: "Google / Think with Google mobile research",
  },
];

const OUTCOMES = [

  "Two distinct CTAs replace one undifferentiated nav bar",
  "Trust signals (years, rating, certification) surfaced above the fold",
  "Contact form splits by intent instead of one generic form",
  "Direct call and text numbers offered as a low-friction alternative",
  "Fully responsive layout with larger, thumb-friendly targets",
  "A consistent component system replaces one-off page styling",
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
          { label: "Tools", value: "Lovable, Figma" },
          { label: "Type", value: "Freelance client project" },
        ]}
        prototype="https://lovable.dev/preview/8S4A72BshNFWRYaCLD2oNclWwuToxRZ7"
      />

      <Section
        eyebrow="The challenge"
        title="A two-sided business with a one-sided site"
        lede="Dawson Motors is both a pre-owned car lot and a full-service repair shop, but the existing site treated both as an afterthought. Flat grey navigation, a cramped inventory carousel and a dated “click here to text us” graphic gave visitors no sense of the business behind them — and for a shop built on 40+ years of local trust, the site was actively working against that reputation."
      >
        <NumberedCards items={PROBLEMS} />
      </Section>

      <Section
        eyebrow="My approach"
        title="UX audit before pixels"
        lede="This was a real client engagement, so instead of opening with formal interviews I ran a structured audit of the live site — evaluating it against Nielsen's usability heuristics and benchmarking against modern dealership and service sites — then rebuilt the experience around the two clearest visitor intents: buying a car, and booking service."
        tone="muted"
      >
        <FindingRows items={FINDINGS} leftLabel="Audit finding" rightLabel="Design solution" />
      </Section>

      <Section
        eyebrow="By the numbers"
        title="What the audit measured"
        lede="Before any visual work, I quantified the problem so each design decision had a number attached to it — and so the client could see the difference in concrete terms rather than taste."
      >
        <StatBand
          items={AUDIT_STATS}
          note="Figures measured by me across the original site and the rebuilt prototype (heuristic audit + task-flow analysis, June–August 2025). No live analytics were available on the original site."
        />
        <div className="mt-14">
          <p className="label-mono text-clay">Why it mattered</p>
          <h3 className="mt-3 font-display text-2xl leading-snug sm:text-3xl">
            Published research on first impressions set the stakes
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            For a business whose entire advantage is four decades of local trust, the credibility gap
            between the shop and its website was the real problem. These industry findings framed how
            aggressively I prioritised above-the-fold trust and a single obvious next step.
          </p>
          <div className="mt-8">
            <StatBand
              items={BENCHMARK_STATS}
              note="Published third-party UX research, cited for context — not results from this project."
            />
          </div>
        </div>
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
            note="Service is the shop's highest-intent page, but the original opened with centred paragraphs and vendor logos. The redesign states the offer, then makes booking or calling a one-tap decision."
            before={beforeService.url}
            after={afterService.url}
            beforeCaption="Before — centred paragraphs, logo clutter and a buried booking link."
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
            local customers on two tasks (book a service appointment, enquire about a vehicle), plus
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
