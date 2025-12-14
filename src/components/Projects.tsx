"use client";

import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8},
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.08,
      duration: 0.6,
      
    },
  }),
};

export function Projects() {
  const items = [
    {
      title: "CalmBuddy",
      emoji: "🌿",
      pill: "Assistive concept",
      text: "An AI-informed mental wellness exploration for neurodiverse users—especially kids—focused on early signals and just-in-time calm.",
      linkLabel: "View concept",
      href: "https://oghoghouzamere19.wixsite.com/my-site-2",
    },
    {
      title: "vPMO Initiative",
      emoji: "📊",
      pill: "Workflow & clarity",
      text: "A Virtual Project Management Office concept that turns scattered work into a calm layer of structure, dashboards, and AI-assisted insight.",
      linkLabel: "Explore direction",
      href: "https://github.com/bestbess",
    },
    {
      title: "Ezzy",
      emoji: "⚡",
      pill: "Content automation",
      text: "An AI content pipeline idea that takes raw input and quietly handles the in-between: drafting, formatting, and preparing posts.",
      linkLabel: "In progress on GitHub",
      href: "https://github.com/bestbess",
    },
    {
      title: "Bilucy",
      emoji: "📜",
      pill: "Civic tech",
      text: "An intelligent explorer for bills and policies—designed to turn legal noise into structured, human-readable awareness.",
      linkLabel: "In progress on GitHub",
      href: "https://github.com/bestbess",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="px-4 py-16 sm:py-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-8 sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Projects &amp; Expressions
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
            Experiments at the edge of assistive tech &amp; workflows.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            These are not loud launches—they’re calm, evolving explorations in
            assistive AI, vPMO, and structured civic information.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -6,
                boxShadow: "0 22px 60px rgba(15,23,42,0.18)",
              }}
              className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white/90 p-5 shadow-sm transition"
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{item.emoji}</span>
                  <h3 className="text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                </div>
                <span className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {item.pill}
                </span>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-slate-600">
                {item.text}
              </p>
              <div className="mt-4">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-800"
                >
                  {item.linkLabel}
                  <span className="ml-2 text-[13px]">↗</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
