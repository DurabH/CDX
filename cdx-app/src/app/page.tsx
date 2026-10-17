"use client";

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
import { useEffect, useState } from "react";
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

const luxuryPillars = [
  "Strategy",
  "Brand systems",
  "Product design",
  "AI growth",
];

const introLetters = [
  { letter: "C", label: "Create", delay: "0s" },
  { letter: "D", label: "Develop", delay: "0.8s" },
  { letter: "X", label: "Experience", delay: "1.6s" },
];

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 3200);

    return () => clearTimeout(introTimer);
  }, []);

  return (
    <div className="pb-20">
      <div
        className={`brand-intro ${showIntro ? "visible" : "hidden"}`}
        aria-hidden={!showIntro}
      >
        <div className="brand-intro-inner">
          {introLetters.map(({ letter, label, delay }) => (
            <div key={letter} className="brand-row" style={{ animationDelay: delay }}>
              <span className="brand-letter">{letter}</span>
              <span className="brand-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={`site-content ${showIntro ? "site-content--dimmed" : "site-content--ready"}`}>
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div className="relative">
            <div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-[#007AFF]/20 blur-3xl" />
            <div className="absolute -right-4 bottom-0 h-24 w-24 rounded-full bg-[#00D4FF]/20 blur-3xl" />

            <div className="relative inline-flex items-center gap-2 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#9fe8ff] sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" />
              Strategy • Design • Growth
            </div>

            <h1 className="mt-6 max-w-2xl text-4xl font-black leading-[0.92] tracking-[-0.06em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Luxury digital experiences <span className="text-gradient-brand">built to lead.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              We help ambitious brands look sharper, think clearer, and convert faster through strategy, product design, AI systems, and premium media execution.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#007AFF] to-[#00D4FF] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_32px_rgba(0,122,255,0.45)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(0,212,255,0.35)]"
              >
                Book a consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#00D4FF]/40 hover:bg-white/10"
              >
                <Play className="h-4 w-4" />
                View our work
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {luxuryPillars.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-5 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="min-w-[110px]">
                  <div className="text-2xl font-black text-white sm:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-[#007AFF]/30 via-[#00D4FF]/10 to-transparent blur-3xl" />
            <div className="grid-faint rounded-[2rem] border border-white/10 bg-[#0f172a]/80 p-4 shadow-[0_40px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:p-5">
              <div className="rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(0,122,255,0.45),_transparent_36%),linear-gradient(135deg,#111827,#0B0F17)] p-4 sm:p-5">
                <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Agency stack</p>
                    <p className="mt-2 text-xl font-semibold text-white">CDX operating model</p>
                  </div>
                  <div className="rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#9fe8ff]">
                    Live
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {highlightCards.map(({ icon: Icon, title, text }) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:border-[#00D4FF]/40 hover:bg-white/8">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#007AFF] to-[#00D4FF] text-white shadow-[0_0_20px_rgba(0,122,255,0.35)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-[#00D4FF]/20 bg-[#0b1220]/80 p-4">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-slate-400">
                    <span>Current focus</span>
                    <span>Q4</span>
                  </div>
                  <div className="mt-3 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-3xl font-black text-white">3.2x</p>
                      <p className="text-xs text-slate-400">Average growth lift</p>
                    </div>
                    <div className="flex h-12 items-end gap-1">
                      <span className="w-2 rounded-t bg-[#00D4FF]/70" style={{ height: "30%" }} />
                      <span className="w-2 rounded-t bg-[#00D4FF]/80" style={{ height: "48%" }} />
                      <span className="w-2 rounded-t bg-[#00D4FF]" style={{ height: "62%" }} />
                      <span className="w-2 rounded-t bg-[#007AFF]" style={{ height: "78%" }} />
                      <span className="w-2 rounded-t bg-[#7dd3fc]" style={{ height: "100%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-18 max-w-7xl px-4 sm:mt-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { label: "Brand strategy", text: "Position your business like a category leader." },
            { label: "Luxury design", text: "Elegant interfaces that command attention instantly." },
            { label: "Product systems", text: "Digital experiences built for trust and conversion." },
            { label: "AI & content", text: "Faster execution with smarter brand momentum." },
          ].map((item) => (
            <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#7dd3fc]">{item.label}</p>
              <p className="mt-3 text-base leading-7 text-slate-200">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:mt-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7dd3fc]">
              What we do
            </p>
            <h2 className="mt-3 max-w-2xl text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Full-service capability built for brands that want momentum.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[#00D4FF]/35 hover:bg-white/[0.05]"
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
        <div className="rounded-[2rem] border border-[#00D4FF]/20 bg-[linear-gradient(135deg,rgba(17,24,39,0.96),rgba(11,15,23,0.96))] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.28)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7dd3fc]">
                Why CDX
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Premium execution without the agency friction.
              </h2>
            </div>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00D4FF]" />
                <span>Clear strategic thinking before design and code go live.</span>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#007AFF]" />
                <span>Real product collaboration across branding, UX, engineering, and delivery.</span>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00D4FF]" />
                <span>Focused on measurable market impact, not vanity metrics.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
