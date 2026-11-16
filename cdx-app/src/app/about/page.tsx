import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  ExternalLink,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import { founders } from "@/data/founders";

const approach = [
  {
    number: "01",
    title: "Understand first",
    text: "Get clear on the people, goals, and problem before settling on a solution.",
  },
  {
    number: "02",
    title: "Make with care",
    text: "Bring strategy, design, and technology together with attention to the details.",
  },
  {
    number: "03",
    title: "See it through",
    text: "Stay hands-on, communicate clearly, and carry the work through to delivery.",
  },
];

const principles = [
  {
    icon: Rocket,
    title: "Build with intent",
    text: "Every decision should support a real need, not just add visual noise.",
  },
  {
    icon: Users,
    title: "Design for people",
    text: "Clarity, usability, and trust belong at the heart of every experience.",
  },
  {
    icon: Sparkles,
    title: "Take care with craft",
    text: "Thoughtful details make digital products feel considered and complete.",
  },
  {
    icon: Award,
    title: "Keep learning",
    text: "We stay curious, test ideas, and keep improving how we work.",
  },
];

export const metadata = {
  title: "About | CDX",
  description:
    "Meet the founders of CDX and learn about our thoughtful, hands-on approach to digital work.",
};

function FounderMessage() {
  return (
    <section
      className="rounded-[2rem] border border-[#00D4FF]/15 bg-[linear-gradient(110deg,rgba(0,122,255,0.1),rgba(15,23,42,0.7)_55%)] p-6 sm:p-10 lg:p-12"
      aria-labelledby="founder-message-title"
    >
      <div className="max-w-4xl">
        <p
          className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7dd3fc] sm:text-sm"
        >
          A message from our founders
        </p>
        <h2
          id="founder-message-title"
          className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Founders&apos; message
        </h2>
        <blockquote className="mt-6 border-l-2 border-[#00D4FF]/50 pl-5 text-base leading-8 text-slate-200 sm:pl-7 sm:text-lg sm:leading-9">
          <p>
            Our journey at CDX began with a simple yet powerful vision: to build
            a company driven by genuine heart, where client happiness is the
            ultimate benchmark of success. Today, our core objective remains
            unchanged—to transform your ideas into complete, end-to-end
            solutions that help your business thrive. Every step of the way, we
            stay relentlessly focused on execution, pouring our full dedication
            into every detail until we deliver nothing short of perfection and
            leave you truly thrilled with the result.
          </p>
          <footer className="mt-6 text-sm font-semibold text-white">
            Durab Haider &amp; Waleed Bin Naeem{" "}
            <span className="text-slate-400">· Co-founders, CDX</span>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,122,255,0.16),transparent_65%)]"
      />

      <div className="mx-auto max-w-7xl px-4 pb-24 pt-14 sm:px-6 sm:pt-20 lg:px-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f172a]/60 px-6 py-10 shadow-[0_30px_90px_rgba(0,0,0,0.24)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#00D4FF]/10 blur-3xl"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#7dd3fc] sm:text-sm">
                <span className="h-px w-8 bg-[#00D4FF]/70" />
                About CDX
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                Thoughtful digital work,{" "}
                <span className="text-gradient-brand">built hands-on.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                We are a founder-led creative and digital studio. We bring
                strategy, design, and technology together to make useful,
                considered work for businesses and project teams.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#007AFF] to-[#00D4FF] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,122,255,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(0,122,255,0.32)]"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#080c14]/70 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                How we work
              </p>
              <div className="mt-5 space-y-4">
                {approach.map((item) => (
                  <div
                    key={item.number}
                    className="flex items-center gap-4 border-b border-white/[0.08] pb-4 last:border-0 last:pb-0"
                  >
                    <span className="font-mono text-xs text-[#7dd3fc]">
                      {item.number}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 sm:mt-24" aria-labelledby="mission-vision-title">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7dd3fc] sm:text-sm">
              Our purpose
            </p>
            <h2
              id="mission-vision-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Mission &amp; vision
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-[1.5rem] border border-white/10 bg-[#0f172a]/70 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7dd3fc]">
                Our mission
              </p>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-white sm:text-2xl">
                Turn ideas into useful, end-to-end work.
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Help people and businesses shape ideas into complete digital
                solutions, bringing strategy, design, and technology together
                from first brief to final handoff.
              </p>
            </article>
            <article className="rounded-[1.5rem] border border-white/10 bg-[#0f172a]/70 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7dd3fc]">
                Our vision
              </p>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-white sm:text-2xl">
                A studio built on trust, care, and craft.
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Build lasting client relationships through thoughtful work,
                honest collaboration, and digital experiences that help people
                and businesses move forward.
              </p>
            </article>
          </div>
        </section>

        <div className="mt-20 sm:mt-24">
          <FounderMessage />
        </div>

        <section className="mt-20 sm:mt-24">
          <div className="mb-8 flex flex-col gap-3 sm:mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7dd3fc] sm:text-sm">
                The people behind the work
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Meet the founders
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
              A small, hands-on team. We stay close to the work and care about
              how it comes together.
            </p>
          </div>

          <div className="grid gap-8">
            {[...founders].reverse().map((founder) => (
              <article
                key={founder.id}
                className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0f172a]/70 transition duration-300 hover:border-[#00D4FF]/25 hover:bg-[#111a2b]"
              >
                <div className="grid lg:h-full lg:grid-cols-[0.82fr_1.18fr]">
                  <div
                    className={`relative aspect-[3/4] overflow-hidden ${
                      founder.id === "waleed-bin-naeem" ? "bg-[#e5e5e5]" : "bg-[#080c14]"
                    } lg:aspect-auto lg:min-h-[330px]`}
                  >
                    <Image
                      src={founder.avatarImage}
                      alt={`Portrait of ${founder.name}`}
                      fill
                      quality={90}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 260px"
                      style={
                        founder.id === "durab-haider"
                          ? { objectPosition: "center 39%" }
                          : undefined
                      }
                      className={`object-cover transition duration-500 ${
                        founder.id === "waleed-bin-naeem"
                          ? "scale-[0.94] group-hover:scale-[0.97]"
                          : "group-hover:scale-[1.03]"
                      }`}
                    />
                  </div>

                  <div className="flex flex-col p-6 sm:p-7">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7dd3fc]">
                        {founder.role}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                        {founder.name}
                      </h3>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {founder.portfolioDescription}
                    </p>

                    {founder.specialties && (
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {founder.specialties.map((specialty) => (
                          <li
                            key={specialty}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
                          >
                            {specialty}
                          </li>
                        ))}
                      </ul>
                    )}

                    <a
                      href={founder.portfolioUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto inline-flex w-fit items-center gap-2 pt-7 text-sm font-semibold text-white transition hover:text-[#8fe3ff]"
                    >
                      {founder.portfolioLabel}
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 sm:mt-24 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7dd3fc] sm:text-sm">
                What guides us
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                A considered way of working.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
                Good outcomes come from sound thinking, honest collaboration,
                and care at every stage.
              </p>
            </div>

            <div className="grid gap-x-8 sm:grid-cols-2">
              {principles.map(({ icon: Icon, title, text }, index) => (
                <div
                  key={title}
                  className="flex gap-4 border-t border-white/10 py-5 first:border-t-0 sm:odd:border-t-0"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#00D4FF]/15 bg-[#00D4FF]/[0.06] text-[#7dd3fc]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-slate-500">
                        0{index + 1}
                      </span>
                      <h3 className="text-sm font-semibold text-white">
                        {title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 flex flex-col items-start justify-between gap-5 rounded-3xl border border-[#00D4FF]/15 bg-[linear-gradient(110deg,rgba(0,122,255,0.1),rgba(15,23,42,0.7)_55%)] p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="text-xl font-semibold text-white">
              Have something in mind?
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Tell us what you are working on. We would be glad to hear about it.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#00D4FF]/40 hover:bg-white/10"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </section>
      </div>
    </div>
  );
}
