"use client";

import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8},
  },
};

export function Contact() {
  return (
    <motion.section
      id="contact"
      className="px-4 py-16 sm:py-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="mx-auto w-full max-w-3xl rounded-3xl bg-white/90 p-6 shadow-xl shadow-slate-900/10 ring-1 ring-slate-100 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Contact
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
          Let&apos;s explore something thoughtful together.
        </h2>
        <p className="mt-3 max-w-xl text-sm text-slate-600 sm:text-base">
          I&apos;m open to conversations around assistive tech, vPMO, AI
          workflows, and thoughtful, long-term collaborations. If you&apos;re
          building in a similar direction, I&apos;d love to hear from you.
        </p>

        <div className="mt-6 space-y-3 text-sm text-slate-700">
          <div className="flex items-center gap-2">
            <span className="text-lg">📩</span>
            <a
              href="mailto:bessieani24@gmail.com"
              className="font-medium text-slate-900 underline-offset-4 hover:underline"
            >
              bessieani24@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">📍</span>
            <span>New York, USA</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://www.linkedin.com/in/bestbess"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-slate-900 underline-offset-4 hover:underline"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://www.tiktok.com/@bessani09"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-slate-900 underline-offset-4 hover:underline"
            >
              TikTok ↗
            </a>
            {/* add others as you like */}
          </div>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-4 text-xs text-slate-500">
          © {new Date().getFullYear()} Bess Ani · bessani.dev
        </div>
      </div>
    </motion.section>
  );
}
