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
import { useEffect, useRef, useState } from "react";
import LogoAnimationVideo from "@/components/media/LogoAnimationVideo";
import { services } from "@/data/services";

const highlightCards = [
  { icon: Monitor, title: "Web development", text: "Responsive websites and web applications shaped around the brief." },
  { icon: Brain, title: "AI & machine learning", text: "AI and machine-learning prototypes for clearly defined project needs." },
  { icon: Palette, title: "Graphic design & UX", text: "Visual identities and interfaces made to communicate clearly." },
  { icon: Video, title: "Video & motion", text: "Edited video and motion assets for company and social channels." },
];

const studioServices = [
  "Websites & apps",
  "AI & machine learning",
  "Graphic design",
  "Video",
];

let introCheckedThisDocument = false;


export default function HomePage() {
  const [showIntro, setShowIntro] = useState(false);
  const shouldPlayIntro = useRef<boolean | null>(null);

  useEffect(() => {
    if (shouldPlayIntro.current === null) {
      shouldPlayIntro.current = !introCheckedThisDocument;
      introCheckedThisDocument = true;
    }

    if (!shouldPlayIntro.current) return;

    const fallback = window.setTimeout(() => setShowIntro(false), 15000);
    const onVideoEnd = () => {
      window.clearTimeout(fallback);
      setShowIntro(false);
    };

    window.addEventListener("intro-video-ended", onVideoEnd);
    setShowIntro(true);
    return () => {
      window.clearTimeout(fallback);
      window.removeEventListener("intro-video-ended", onVideoEnd);
    };
  }, []);

  return (
    <div className="pb-20">
      {showIntro && (
        <div className="brand-intro" aria-hidden="true">
          <div className="intro-video-stage">
            <LogoAnimationVideo />
          </div>
        </div>
      )}

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
              Websites and digital work <span className="text-gradient-brand">built with care.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              We are a small, founder-led studio building websites for clients, exploring AI through project work, and creating design and video. You work directly with the people doing the work.
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
              {studioServices.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-200"
                >
                  {item}
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
                    <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">How we work</p>
                    <p className="mt-2 text-xl font-semibold text-white">Founder-led, hands-on</p>
                  </div>
                  <div className="rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#9fe8ff]">
                    Direct
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
                  <p className="text-sm font-semibold text-white">
                    Direct collaboration, from brief to handoff.
                  </p>
                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    Clear conversations, thoughtful scope, and the founders
                    involved throughout the project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-18 max-w-7xl px-4 sm:mt-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { label: "Websites", text: "Clear, responsive websites shaped around your business and customers." },
            { label: "AI & machine learning", text: "Practical experiments and software projects using AI and data." },
            { label: "Graphic design", text: "Visual identity, graphics, and design work for digital and print." },
            { label: "Video", text: "Edited video and motion work for brands and online channels." },
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
              A small team with a practical mix of creative and technical skills.
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
                Work directly with the people building your project.
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
                <span>Clear communication and a considered handoff.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
