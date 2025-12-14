import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
export const metadata = {
  title: "Bessie Ani — Systems, Delivery, and Clarity",
  description:
    "I design systems that turn complexity into clarity. Project delivery, operational workflows, and AI-assisted execution.",
  openGraph: {
    title: "Bessie Ani — Systems & Execution",
    description:
      "Clean systems, structured workflows, and high-trust execution.",
    url: "https://bessani.dev",
    siteName: "Bessie Ani",
    images: [
      {
        url: "/og.png", // optional later
        width: 1200,
        height: 630,
        alt: "Bessie Ani — Systems & Execution",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[#0B0B0B] text-white antialiased">
        {/* Page content */}
        <div className="min-h-screen">{children}</div>

        {/* Minimal premium footer */}
        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 sm:px-8 py-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/45">
              © {new Date().getFullYear()} Bessie Ani. Built for clarity.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <Link href="/apps" className="text-white/65 hover:text-white">
                Apps
              </Link>
              <Link href="/#contact" className="text-white/65 hover:text-white">
                Contact
              </Link>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white/65 hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white/65 hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
