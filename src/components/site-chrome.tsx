import { Link, useRouterState } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export const LINKEDIN = "https://linkedin.com/in/courtney-reicherter-0b84b7297/";
export const EMAIL = "creicherter01@gmail.com";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX: x }}
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-clay"
    />
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
        <Link to="/" className="group flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary font-display text-sm text-primary-foreground transition-transform duration-500 group-hover:rotate-[18deg]">
            cr
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base leading-none">
              Courtney Reicherter
            </span>
            <span className="label-mono text-muted-foreground">UX Research &amp; Design</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {NAV.map((item) => {
            const active =
              item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`label-mono link-underline transition-colors ${
                  active ? "text-clay" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="label-mono inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 transition-colors hover:border-clay hover:text-clay"
          >
            LinkedIn <ArrowUpRight className="h-3 w-3" />
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border sm:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/70 px-5 py-4 sm:hidden">
          <div className="flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="label-mono text-muted-foreground"
              >
                {item.label}
              </Link>
            ))}
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="label-mono text-clay">
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div className="min-w-0">
            <p className="font-display text-2xl leading-tight">
              Psychology-led UX,
              <br />
              built on evidence.
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Currently open to UX design and research roles.
            </p>
          </div>
          <div>
            <p className="label-mono text-muted-foreground">Pages</p>
            <ul className="mt-3 space-y-2 text-sm">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="link-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-mono text-muted-foreground">Elsewhere</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={LINKEDIN} target="_blank" rel="noreferrer" className="link-underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="link-underline">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="label-mono mt-12 text-muted-foreground">
          © {new Date().getFullYear()} Courtney Reicherter
        </p>
      </div>
    </footer>
  );
}
