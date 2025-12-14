import Link from "next/link";
import { APPS } from "./_data";

export default function AppsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 sm:px-8 py-20 sm:py-28">
      <p className="text-xs uppercase tracking-[0.18em] text-white/40">
        Applications
      </p>

      <h1 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight">
        Apps
      </h1>

      <p className="mt-4 max-w-xl text-white/60 leading-relaxed">
        Dedicated pages for each application. These are placeholders until the
        full experiences are live.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {APPS.map((app) => (
          <Link
            key={app.slug}
            href={`/apps/${app.slug}`}
            className="
              block rounded-2xl border border-white/10 bg-[#121212]
              p-6 transition hover:border-[#FFC83D]/60
            "
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-medium">{app.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {app.oneLiner}
                </p>
              </div>

              <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
                {app.status}
              </span>
            </div>

            <p className="mt-6 text-xs text-white/40">Open →</p>
          </Link>
        ))}
      </div>

      <div className="mt-14">
        <Link href="/" className="text-sm text-white/70 hover:text-white">
          ← Back home
        </Link>
      </div>
    </div>
  );
}
