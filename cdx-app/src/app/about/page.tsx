import { Award, Rocket, Sparkles, Users } from "lucide-react";

const milestones = [
  "Brand systems for VC-backed startups",
  "Product launches across SaaS, fintech, and media",
  "High-converting digital experiences across five service lines",
];

const principles = [
  {
    icon: Rocket,
    title: "Build with intent",
    text: "Every decision should support a measurable business outcome rather than pure aesthetics.",
  },
  {
    icon: Users,
    title: "Design for people",
    text: "Interface quality, clarity, and trust are part of product strategy, not extras.",
  },
  {
    icon: Sparkles,
    title: "Ship with polish",
    text: "We care about the details that make a product feel premium at every touchpoint.",
  },
  {
    icon: Award,
    title: "Stay relentlessly curious",
    text: "We test, learn, and evolve — blending AI, UX, and engineering for continuous improvement.",
  },
];

export const metadata = {
  title: "About | CDX",
  description: "Learn how CDX brings strategy, product, and creativity together.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7dd3fc]">
            About CDX
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
            We turn bold ideas into experiences people remember.
          </h1>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-300">
          CDX is a strategy-first creative and engineering studio built for teams that want more than a template. We help businesses design products, brands, and campaigns that feel premium and convert with confidence.
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {milestones.map((item, index) => (
          <div
            key={item}
            className="rounded-3xl border border-white/10 bg-[#111827] p-6"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#007AFF] to-[#00D4FF] text-sm font-bold text-white">
              0{index + 1}
            </div>
            <p className="text-base leading-7 text-slate-200">{item}</p>
          </div>
        ))}
      </section>

      <section className="mt-20">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7dd3fc]">
          Operating principles
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {principles.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#111827] text-[#00D4FF]">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
