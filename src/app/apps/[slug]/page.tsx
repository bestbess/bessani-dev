import Link from "next/link";
import { notFound } from "next/navigation";



const APP_DATA: Record<
  string,
  {
    name: string;
    status: string;
    oneLiner: string;
    highlights: string[];
    planned: string[];
  }
> = {
  "ai-pmo-assistant": {
    name: "AI PMO Assistant",
    status: "In Development",
    oneLiner: "AI-assisted workflows for delivery visibility and execution.",
    highlights: [
      "Delivery visibility: status, risks, and next actions",
      "Automation-first: reduce manual coordination overhead",
      "Designed for clean reporting and decision-making",
    ],
    planned: [
      "Dashboard + timeline views",
      "Risk signals and weekly summaries",
      "Integrations (Sheets / Email / Jira-style workflows)",
    ],
  },
  "inspection-pattern-finder": {
    name: "Inspection Pattern Finder",
    status: "In Development",
    oneLiner: "Automating report matching, missing detection, and trend signals.",
    highlights: [
      "Fast matching of schedules ↔ reports",
      "Missing/received tracking with audit trail",
      "Pattern detection for recurring issues",
    ],
    planned: [
      "Search + filters by project/inspector/date",
      "Export-ready summaries",
      "Rule-based + AI-assisted validations",
    ],
  },
  "immersive-learning-lab": {
    name: "Immersive Learning Lab",
    status: "Concept",
    oneLiner: "Exploring structured learning with immersive systems.",
    highlights: [
      "Focus on rigor, not hype",
      "Structured learning paths with measurable outcomes",
      "Clear content architecture for mastery",
    ],
    planned: [
      "Prototype learning modules",
      "Interaction design + assessment logic",
      "Pilot experience with one focused topic",
    ],
  },
};
export default async function AppDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const app = APP_DATA[slug];
  if (!app) notFound();

  return (
   
      <div className="mx-auto max-w-5xl px-6 sm:px-8 py-20 sm:py-28">
        <p className="text-xs uppercase tracking-[0.18em] text-white/40">
          Application
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl sm:text-4xl font-medium tracking-tight">
            {app.name}
          </h1>

          <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
            {app.status}
          </span>
        </div>

        <p className="mt-5 max-w-2xl text-white/65 leading-relaxed">
          {app.oneLiner}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
          <section>
            <h2 className="text-lg font-medium">What it’s for</h2>
            <ul className="mt-4 space-y-3 text-white/75">
              {app.highlights.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 h-4 w-px bg-[#FFC83D]" />
                  <span className="leading-relaxed">{x}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium">Planned next</h2>
            <ul className="mt-4 space-y-3 text-white/75">
              {app.planned.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 h-4 w-px bg-[#FFC83D]" />
                  <span className="leading-relaxed">{x}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-white/10 bg-[#121212] p-6">
              <p className="text-sm text-white/70 leading-relaxed">
                Placeholder page — full experience will be published here when
                live.
              </p>
              <p className="mt-3 text-xs text-white/40">
                If you want this adapted to your workflow, contact me.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-14 flex items-center gap-6">
          <Link href="/apps" className="text-sm text-white/70 hover:text-white">
            ← All apps
          </Link>
          <Link href="/" className="text-sm text-white/70 hover:text-white">
            Home
          </Link>
        </div>
      </div>
    
  );
}
