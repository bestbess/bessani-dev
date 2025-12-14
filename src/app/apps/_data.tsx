export type AppItem = {
  slug: string;
  name: string;
  status: "In Development" | "Live" | "Concept";
  oneLiner: string;
  highlights: string[];
  planned: string[];
};

export const APPS: AppItem[] = [
  {
    slug: "ai-pmo-assistant",
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
  {
    slug: "inspection-pattern-finder",
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
  {
    slug: "immersive-learning-lab",
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
];
