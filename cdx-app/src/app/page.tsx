import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Monitor,
  Palette,
  Play,
  ShieldCheck,
  Sparkles,
  Video,
} from "lucide-react";
import { services } from "@/data/services";

const stats = [
  { value: "5", label: "core service tracks" },
  { value: "120+", label: "launches supported" },
  { value: "95%", label: "average client retention" },
];

const highlightCards = [
  { icon: Monitor, title: "Product engineering", text: "High-performance web and app experiences engineered for growth." },
  { icon: Brain, title: "AI systems", text: "Practical AI strategy and implementation that turns ideas into value." },
  { icon: Palette, title: "Brand & UX", text: "Premium interfaces and visual systems built to convert attention into action." },
  { icon: Video, title: "Media production", text: "Cinematic content and rapid-turn social media assets for modern brands." },
];

export default function HomePage() {
  return (
    <div className="pb-20">
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#8fe3ff]">
              <Sparkles className="h-3.5 w-3.5" />
              Creative • Develop • Experience
            </div>
            <h1 className="mt-6 max-w-2xl text-5xl font-black tracking-[-0.04em] text-white md:text-7xl">
              Build the next chapter of your brand.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              CDX blends product engineering, UX design, AI strategy, and media production to create premium digital experiences that help businesses scale.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#007AFF] to-[#00D4FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(0,122,255,0.4)]"
              >
                Book a consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white"
              >
                <Play className="h-4 w-4" />
                View our work
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-300">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-[#007AFF]/20 via-[#00D4FF]/10 to-transparent blur-2xl" />
            <div className="rounded-[2rem] border border-white/10 bg-[#111827]/80 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur">
              <div className="rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(0,122,255,0.45),_transparent_40%),linear-gradient(135deg,#111827,#0B0F17)] p-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  {highlightCards.map(({ icon: Icon, title, text }) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#007AFF] to-[#00D4FF] text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7dd3fc]">
              What we do
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Full-service capability, focused on momentum.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-[#00D4FF]/30 hover:bg-white/[0.08]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#007AFF] to-[#00D4FF] text-white shadow-[0_0_24px_rgba(0,122,255,0.35)]">
                {service.icon === "Monitor" && <Monitor className="h-5 w-5" />}
                {service.icon === "Smartphone" && <ShieldCheck className="h-5 w-5" />}
                {service.icon === "Brain" && <Brain className="h-5 w-5" />}
                {service.icon === "Palette" && <Palette className="h-5 w-5" />}
                {service.icon === "Video" && <Video className="h-5 w-5" />}
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{service.shortDescription}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.techStack.slice(0, 3).map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-[#111827] px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[#007AFF]/20 bg-gradient-to-br from-[#111827] via-[#111827] to-[#0B0F17] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7dd3fc]">
                Why CDX
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Premium execution without the agency friction.
              </h2>
            </div>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00D4FF]" />
                <span>Clear strategic thinking before design and code go live.</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#007AFF]" />
                <span>Real product collaboration across branding, UX, engineering, and delivery.</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00D4FF]" />
                <span>Focused on measurable market impact, not vanity metrics.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
