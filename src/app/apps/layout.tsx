import Link from "next/link";
import Image from "next/image";

export default function AppsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      {/* Premium shared header for /apps routes */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0B0B0B]/75 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 sm:px-8">
          {/* Logo + Name */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/bess_logo.png"
              alt="Bess Logo"
              width={32}
              height={32}
              priority
              className="opacity-95"
            />
            <span className="text-sm tracking-wide text-white/90">
              Bessie Ani
            </span>
          </Link>

          {/* Apps nav */}
          <nav className="flex items-center gap-7 text-sm">
            <Link
              href="/apps"
              className="text-white/70 hover:text-white transition"
            >
              Apps
            </Link>
            <Link
              href="/#contact"
              className="text-white/70 hover:text-white transition"
            >
              Contact
            </Link>

            {/* Small premium CTA */}
            <Link
              href="/#contact"
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
              Message
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      {children}
    </main>
  );
}
