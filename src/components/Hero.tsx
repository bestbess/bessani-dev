"use client";

import { motion, Variants } from "framer-motion";

const heroContainer: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const boardVariant: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.1,
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const walkerPath: Variants = {
  animate: {
    x: ["-15%", "110%"],
    y: [0, -6, 0, -4, 0],
    transition: {
      x: {
        duration: 7,
        repeat: Infinity,
        ease: "linear",
      },
      y: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
};

export function Hero() {
  return (
    <section className="relative flex items-center justify-center px-4 py-10 sm:py-16">
      {/* Aura background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 -left-10 h-80 w-80 rounded-full bg-rose-200/60 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-sky-200/60 blur-3xl" />
      </motion.div>

      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto flex w-full max-w-5xl flex-col gap-10 rounded-3xl bg-white/90 p-6 shadow-2xl shadow-slate-900/15 ring-1 ring-white/60 backdrop-blur-lg sm:p-8 md:flex-row md:gap-12"
      >
        {/* LEFT: copy */}
        <div className="flex-1 space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Product &amp; AI Strategist
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Designing calm, intelligent systems for{" "}
            <span className="relative inline-block px-1">
              <span className="relative z-10">neurodiversity</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: 0.6,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="absolute inset-x-0 bottom-1 z-0 h-3 origin-left rounded-full bg-gradient-to-r from-rose-400 to-orange-300"
              />
            </span>{" "}
            &amp; modern teams.
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
            I build assistive concepts, a virtual PMO, and AI-driven workflows
            that reduce noise and increase clarity. CalmBuddy, vPMO, and other
            experiments—all guided by a human-centered approach to AI.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white shadow-lg shadow-slate-900/30 transition hover:-translate-y-0.5 hover:bg-black">
              View Projects
            </button>
            <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50">
              Read Insights
            </button>
          </div>
        </div>

        {/* RIGHT: animated stage */}
        <motion.div variants={boardVariant} initial="hidden" animate="visible" className="relative flex-1">
          <div className="relative h-64 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 sm:h-72">
            {/* Product board */}
            <div className="absolute inset-y-4 left-4 right-10 rounded-2xl bg-white/95 p-4 shadow-xl shadow-slate-900/25">
              <div className="mb-3 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-slate-400">
                <span>bessani.dev</span>
                <span>Experimental Studio</span>
              </div>
              <div className="space-y-2">
                <span className="inline-flex rounded-full bg-rose-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-500">
                  Assistive Tech · vPMO · AI
                </span>
                <h2 className="text-lg font-semibold text-slate-900">
                  Calm systems for complex work &amp; minds.
                </h2>
                <p className="text-xs text-slate-600">
                  Exploring how AI, workflows and experience compression can
                  quietly support neurodiverse users and modern teams.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-600">
                <span className="rounded-full bg-slate-100 px-3 py-1">
                  Neurodiversity
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1">
                  AI Workflows
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1">
                  vPMO
                </span>
              </div>
            </div>

            {/* Walker */}
            <motion.div
              variants={walkerPath}
              animate="animate"
              className="absolute bottom-1 left-0 flex h-20 w-16 items-end justify-center"
            >
              <span className="text-4xl drop-shadow-[0_14px_24px_rgba(15,23,42,0.6)]">
                🧕🏽
              </span>
              
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
