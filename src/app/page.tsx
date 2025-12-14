"use client";
import Link from "next/link";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type SectionId = "apps" | "contact";



export default function Page() {
  const [active, setActive] = useState<SectionId>("apps");

  const sections = useMemo(
    () =>
      [
        { id: "apps", label: "Work" },
        { id: "contact", label: "Contact" },
      ] as const,
    []
  );

  // Premium active-nav: highlight current section while scrolling
  useEffect(() => {
    const ids: SectionId[] = ["apps", "contact"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // pick the entry closest to being "most visible"
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) {
          setActive(visible.target.id as SectionId);
        }
      },
      {
        root: null,
        threshold: [0.25, 0.4, 0.6],
        rootMargin: "-10% 0px -65% 0px", // makes the active state feel "editorial"
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const onNavClick = (id: SectionId) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      {/* ================= HEADER (PREMIUM) ================= */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0B0B0B]/75 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 sm:px-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/bess_logo.png"
              alt="Bess Logo"
              width={36}
              height={36}
              priority
              className="opacity-95"
            />




            <span className="text-sm tracking-wide text-white/90">Bessie Ani</span>
          </div>

          {/* Nav (active underline) */}
          <nav className="flex items-center gap-7 text-sm">
            {sections.map((s) => (
              <NavLink
                key={s.id}
                href={`#${s.id}`}
                label={s.label}
                isActive={active === s.id}
                onClick={onNavClick(s.id)}
              />
            ))}

            {/* Subtle CTA in header (premium, tiny) */}
            <a
              href="#contact"
              onClick={onNavClick("contact")}
              className="
                ml-1 hidden sm:inline-flex
                items-center justify-center
                rounded-xl bg-[#FFC83D]
                px-4 py-2
                text-xs font-medium
                text-black
                transition
                hover:bg-[#ffda6a]
              "
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <motion.p {...fadeUp(0)} className="text-sm tracking-wide text-white/50">
            Technical Project Management · AI Systems · Automation
          </motion.p>

          <motion.h1
            {...fadeUp(0.06)}
            className="
              mt-6
              text-[2.6rem] sm:text-[3.2rem]
              font-[520]
              leading-[1.15]
              tracking-[-0.02em]
            "
          >
            I design systems that turn <span className="text-white">complexity</span>{" "}
            into <span className="text-[#FFC83D]">clarity</span>.
          </motion.h1>

          <motion.p
            {...fadeUp(0.12)}
            className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-white/65"
          >
            I build clean workflows, AI-assisted tools, and delivery systems that reduce
            friction and increase execution confidence.
          </motion.p>

          <motion.div {...fadeUp(0.18)} className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href="#apps"
              onClick={onNavClick("apps")}
              className="
                inline-flex items-center justify-center
                rounded-2xl bg-[#FFC83D]
                px-6 py-3
                text-sm font-medium
                text-black
                transition
                hover:bg-[#ffda6a]
              "
            >
              View work
            </a>

            <a
              href="#contact"
              onClick={onNavClick("contact")}
              className="text-sm font-medium text-white/80 hover:text-white transition"
            >
              Let’s collaborate →
            </a>
          </motion.div>
        </div>
      </section>
      {/* ================= APPROACH DIAGRAM ================= */}
      <motion.section {...sectionReveal()} className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-white/40">
            How I Approach Complex Problems
          </p>

          <h2 className="mt-4 text-2xl sm:text-3xl font-medium">
            From ambiguity to execution
          </h2>

          <p className="mt-4 max-w-xl text-white/60">
            A simple operating system for turning complexity into clear, confident action.
          </p>

          <div className="mt-10 rounded-2xl border border-white/10 bg-[#0B0B0B] p-4 sm:p-6">
            <Image
              src="/approach-diagram.png"
              alt="Ambiguity to execution approach diagram"
              width={1600}
              height={420}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </motion.section>
      <Divider />

      {/* ================= WHAT I DO ================= */}
      <motion.section {...sectionReveal()} className="py-20 sm:py-28" id="work">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-white/40">Focus</p>
          <h2 className="mt-4 text-2xl sm:text-3xl font-medium">
            Simple, high-trust execution
          </h2>

          <div className="mt-10 max-w-2xl space-y-4">
            {[
              "Project & delivery systems",
              "Operational systems and immersive learning workflows",
              "AI-assisted workflows and validation",
              
            ].map((item) => (
              <div key={item} className="flex gap-4">
                <div className="mt-2 h-4 w-px bg-[#FFC83D]" />
                <p className="text-white/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <Divider />

      {/* ================= APPS ================= */}
      <motion.section {...sectionReveal()} id="apps" className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-white/40">
            Applications
          </p>

          <h2 className="mt-4 text-2xl sm:text-3xl font-medium">Selected Work (in progress)</h2>

          <p className="mt-4 max-w-xl text-white/60">
            Each application will have its own dedicated page when live. These are
            intentional placeholders.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <AppCard
              title="AI PMO Assistant"
              description="AI-assisted workflows for delivery visibility and execution."
              status="In Development"
              delay={0.02}
              href="/apps/ai-pmo-assistant"
            />
            <AppCard
              title="Inspection Pattern Finder"
              description="Automating report matching, missing detection, and trends."
              status="In Development"
              delay={0.06}
              href="/apps/inspection-pattern-finder"
            />
            <AppCard
              title="Immersive Learning Lab"
              description="Exploring structured learning with immersive systems."
              status="Concept"
              delay={0.1}
              href="/apps/immersive-learning-lab"
            />
          </div>
        </div>
      </motion.section>

      <Divider />

      {/* ================= CONTACT ================= */}
      <motion.section {...sectionReveal()} id="contact" className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-white/40">Contact</p>

          <h2 className="mt-4 text-2xl sm:text-3xl font-medium">
            Let’s build something serious
          </h2>

          <div className="mt-8 space-y-3 text-base">
            <a
              href="mailto:hello@yourdomain.com"
              className="block text-[#FFC83D] hover:opacity-90"
            >
             hello@bessani.dev→
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="block text-white/70 hover:text-white"
            >
              LinkedIn →
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="block text-white/70 hover:text-white"
            >
              GitHub →
            </a>
          </div>


        </div>
      </motion.section>
    </main>
  );
}

/* ================= NAV LINK (PREMIUM UNDERLINE) ================= */

function NavLink({
  href,
  label,
  isActive,
  onClick,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={[
        "relative",
        "text-white/70 hover:text-white",
        "transition",
        "py-1",
      ].join(" ")}
    >
      <span className="relative z-10">{label}</span>

      {/* underline */}
      <span
        className={[
          "absolute left-0 -bottom-1 h-[2px] w-full rounded-full",
          "bg-[#FFC83D]",
          "transition-all duration-300",
          isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-50",
          "origin-left",
        ].join(" ")}
      />

      {/* subtle hover underline (only when not active) */}
      {!isActive ? (
        <span
          className="
            pointer-events-none
            absolute left-0 -bottom-1
            h-[2px] w-full rounded-full
            bg-[#FFC83D]/50
            opacity-0 scale-x-50
            origin-left
            transition-all duration-300
            group-hover:opacity-100
          "
        />
      ) : null}
    </a>
  );
}

/* ================= COMPONENTS ================= */

function Divider() {
  return <div className="mx-auto my-20 h-px max-w-5xl bg-white/10" />;
}

function AppCard({
  title,
  description,
  status,
  delay,
  href,
}: {
  title: string;
  description: string;
  status: string;
  delay: number;
  href: string;
}) {
  return (
    <motion.div {...cardReveal(delay)}>
      <Link
        href={href}
        className="
          block rounded-2xl border border-white/10 bg-[#121212]
          p-6 transition hover:border-[#FFC83D]/60
        "
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              {description}
            </p>
          </div>
          <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
            {status}
          </span>
        </div>

        <div className="mt-6 text-xs text-white/40">Open →</div>
      </Link>
    </motion.div>
  );
}


/* ================= MOTION (SUBTLE + PREMIUM) ================= */

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      delay,
    },
  } as const;
}

function sectionReveal() {
  return {
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  } as const;
}

function cardReveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      delay,
    },
  } as const;
}
