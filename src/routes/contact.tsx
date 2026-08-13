import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Copy, Check, Linkedin, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { Reveal, RevealWords } from "@/components/reveal";
import { EMAIL, LINKEDIN } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Courtney Reicherter — UX Designer & Researcher" },
      {
        name: "description",
        content:
          "Get in touch with Courtney Reicherter about UX design and research roles, freelance projects or collaboration — by email or LinkedIn.",
      },
      { property: "og:title", content: "Contact Courtney Reicherter — UX Designer & Researcher" },
      {
        property: "og:description",
        content: "Open to UX design and research roles. Reach me by email or on LinkedIn.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <section className="paper-grain border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="label-mono text-clay">Contact</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
            <RevealWords text="Let's build something people actually enjoy." />
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I'm currently open to UX design and research roles, and I'm always happy to talk
            through a project, a problem or a portfolio review. The fastest way to reach me is
            email.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-5xl gap-5 px-5 py-16 sm:grid-cols-2 sm:px-8 sm:py-20">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-lg border border-border bg-card p-7">
              <div>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary">
                  <Mail className="h-5 w-5 text-primary" />
                </span>
                <p className="label-mono mt-6 text-muted-foreground">Email</p>
                <p className="mt-2 break-all font-display text-2xl">{EMAIL}</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Best for role enquiries, freelance work and anything with detail attached.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Write to me
                </a>
                <button
                  type="button"
                  onClick={copy}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-clay hover:text-clay"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Copied" : "Copy address"}
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-between rounded-lg border border-border bg-card p-7">
              <div>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary">
                  <Linkedin className="h-5 w-5 text-primary" />
                </span>
                <p className="label-mono mt-6 text-muted-foreground">LinkedIn</p>
                <p className="mt-2 font-display text-2xl">Courtney Reicherter</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Connect for the short version — recent work, availability and background.
                </p>
              </div>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-clay hover:text-clay"
              >
                Open profile <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <p className="label-mono text-clay">Send a message</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
              Tell me what you're working on
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Fill this in and it lands straight in my inbox at {EMAIL}.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <form
              onSubmit={onSubmit}
              className="mt-8 grid gap-5 rounded-lg border border-border bg-card p-7 sm:grid-cols-2"
            >
              <label className="grid gap-2">
                <span className="label-mono text-muted-foreground">Your name</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-clay"
                  placeholder="Jane Doe"
                />
              </label>
              <label className="grid gap-2">
                <span className="label-mono text-muted-foreground">Your email</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-clay"
                  placeholder="you@company.com"
                />
              </label>
              <label className="grid gap-2 sm:col-span-2">
                <span className="label-mono text-muted-foreground">Subject</span>
                <input
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-clay"
                  placeholder="UX role · project · portfolio review"
                />
              </label>
              <label className="grid gap-2 sm:col-span-2">
                <span className="label-mono text-muted-foreground">Message</span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="resize-y rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-clay"
                  placeholder="A few lines about the role, project or question."
                />
              </label>
              <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Send message <ArrowUpRight className="h-4 w-4" />
                </button>
                {sent && (
                  <p className="label-mono text-sage-deep">
                    Your email client is opening with the message ready to send.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 py-16 sm:grid-cols-3 sm:px-8">
          <Reveal>
            <p className="label-mono text-muted-foreground">Availability</p>
            <p className="mt-2 text-sm leading-relaxed">
              Open to full-time UX design and research roles, plus select freelance engagements.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="label-mono text-muted-foreground">Response time</p>
            <p className="mt-2 text-sm leading-relaxed">
              I reply to every message, usually within 1–2 business days.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="label-mono flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" /> Based in
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              New York — working remotely or hybrid across US time zones.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
