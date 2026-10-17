import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "NovaFlow",
    category: "Web platform",
    description: "A premium B2B platform redesign that increased demo bookings and purchase intent across the funnel.",
    outcome: "+148% lead conversions",
  },
  {
    title: "Aster Mobile",
    category: "Mobile app",
    description: "A fintech mobile experience blending trust, speed, and custom analytics for a global audience.",
    outcome: "4.9/5 app rating",
  },
  {
    title: "Signal AI Studio",
    category: "AI product",
    description: "An automation suite for marketing teams using LLM workflows to streamline research, reporting, and content generation.",
    outcome: "3x faster campaign ops",
  },
  {
    title: "Northstar Brand",
    category: "Brand systems",
    description: "A complete identity refresh spanning web, social, and motion assets for a venture-backed startup.",
    outcome: "Stronger premium positioning",
  },
];

export const metadata = {
  title: "Portfolio | CDX",
  description: "Selected work spanning product design, development, AI, and media creation.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <section className="mb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7dd3fc]">
          Portfolio
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
          Proof that great experiences drive growth.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-300">
          We help brands turn complexity into clarity — through high-converting product experiences, creative direction, and launch-ready execution.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-[#00D4FF]/30 hover:bg-white/[0.08]"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="inline-flex rounded-full border border-white/10 bg-[#111827] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-300">
                {project.category}
              </span>
              <ArrowUpRight className="h-4 w-4 text-[#7dd3fc] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#111827] to-[#0B0F17] p-5">
              <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                <span>Case study</span>
                <span>0{index + 1}</span>
              </div>
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-sm text-slate-400">Outcome</span>
              <span className="text-sm font-semibold text-[#8fe3ff]">{project.outcome}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 rounded-3xl border border-[#007AFF]/20 bg-gradient-to-r from-[#0B0F17] via-[#111827] to-[#0B0F17] p-8 text-center">
        <h3 className="text-3xl font-bold text-white">Ready to make your next launch feel premium?</h3>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
          From product strategy to execution, CDX helps teams ship with clarity, speed, and visual confidence.
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-[#007AFF] to-[#00D4FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(0,122,255,0.4)]"
          >
            Start a conversation
          </Link>
        </div>
      </div>
    </div>
  );
}
