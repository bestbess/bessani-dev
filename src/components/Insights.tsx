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

const noteVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 + i * 0.06,
      duration: 0.5,
      
    },
  }),
};

export function Insights() {
  const notes = [
    {
      title: "Designing Calm Technology for Neurodiverse Users",
      tag: "Assistive Design",
      text: "Why calm, predictable interaction patterns matter—and how small UX decisions can reduce cognitive load.",
    },
    {
      title: "What a Modern vPMO Should Actually Do",
      tag: "Workflow",
      text: "Moving beyond rigid governance to quiet visibility, intelligent surfacing of risk, and humane project rhythms.",
    },
    {
      title: "AI That Supports, Not Overwhelms",
      tag: "AI & Behavior",
      text: "Rethinking AI from a signal-delivery tool into a gentler co-pilot that respects human attention and energy.",
    },
    {
      title: "Experience Compression as a Product Lens",
      tag: "Founder Note",
      text: "How to turn years of lived experience into simple, testable product hypotheses—without overclaiming or oversharing.",
    },
  ];

  return (
    <motion.section
      id="insights"
      className="px-4 py-16 sm:py-20 bg-slate-50/60"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-8 sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Public Insights
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
            Notes on assistive tech, workflows, and human-centered AI.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            A growing collection of short reflections, frameworks, and
            explorations. Not finished doctrine—just honest thinking in public.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {notes.map((note, index) => (
            <motion.article
              key={note.title}
              custom={index}
             variants={noteVariants} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -4,
                boxShadow: "0 18px 45px rgba(15,23,42,0.16)",
              }}
              className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition"
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {note.tag}
                </span>
                <span className="h-1 w-10 rounded-full bg-gradient-to-r from-rose-400 to-orange-300" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                {note.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {note.text}
              </p>
              <div className="mt-3">
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
                  Short note · More coming soon
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
