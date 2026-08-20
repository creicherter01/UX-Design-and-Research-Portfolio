import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/case-study-bits";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/work/reflink-app/prototype")({
  head: () => ({
    meta: [
      { title: "RefLink Prototype — Courtney Reicherter" },
      {
        name: "description",
        content: "Interactive RefLink mobile prototype shown inside a phone frame.",
      },
    ],
  }),
  component: ReflinkPrototype,
});

function ReflinkPrototype() {
  return (
    <div className="paper-grain flex min-h-screen flex-col">
      <header className="border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            to="/work/reflink-app"
            className="label-mono link-underline inline-flex items-center gap-2 text-muted-foreground"
          >
            <ArrowLeft className="h-3 w-3" /> Back to case study
          </Link>
          <p className="label-mono text-clay">RefLink prototype</p>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-5 py-10 sm:px-8">
        <PhoneFrame caption="Live prototype — scroll and tap inside the phone.">
          <iframe
            src="https://reflinkappbuild.netlify.app/"
            title="RefLink interactive prototype"
            className="h-full w-full border-0"
          />
        </PhoneFrame>
      </main>
    </div>
  );
}
