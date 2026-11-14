import Link from "next/link";
import { projects } from "@/data/projects";
import PortfolioGrid from "@/components/portfolio-grid";

export const metadata = {
  title: "Portfolio | CDX",
  description: "Selected work spanning product design, development, AI, and media creation.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <section className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7dd3fc]">
          Portfolio
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
          Proof that great experiences drive growth.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-300">
          Selected client and studio work spanning high-performance web engineering, brand identity, visual communication, and cinematic video production.
        </p>
      </section>

      <PortfolioGrid projects={projects} />

      <div className="mt-14 rounded-3xl border border-[#007AFF]/20 bg-gradient-to-r from-[#0B0F17] via-[#111827] to-[#0B0F17] p-8 text-center">
        <h3 className="text-3xl font-bold text-white">Ready to make your next launch feel premium?</h3>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
          From product strategy to execution, CDX helps teams ship with clarity, speed, and visual confidence.
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-[#007AFF] to-[#00D4FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(0,122,255,0.4)] transition hover:scale-[1.02]"
          >
            Start a conversation
          </Link>
        </div>
      </div>
    </div>
  );
}
