import Image from "next/image";
import { ArrowUpRight, Award, ExternalLink, Rocket, Sparkles, Users } from "lucide-react";
import { founders } from "@/data/founders";

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
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7dd3fc]">
            The people behind CDX
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Meet our co-founders
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Get to know the people building CDX and explore their work.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {founders.map((founder) => (
            <article
              key={founder.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[16/9] border-b border-white/10 bg-[#080c14]">
                {founder.portfolioCover ? (
                  <Image
                    src={founder.portfolioCover}
                    alt={founder.portfolioCoverAlt ?? `${founder.name}'s portfolio`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[radial-gradient(ellipse_at_center,_rgba(0,122,255,0.18),_transparent_62%)]">
                    <span className="flex h-24 w-24 items-center justify-center rounded-3xl border border-[#00D4FF]/25 bg-[#0B0F17]/80 text-3xl font-bold tracking-wider text-[#8fe3ff] shadow-[0_0_48px_rgba(0,122,255,0.18)]">
                      {founder.name
                        .split(" ")
                        .map((namePart) => namePart[0])
                        .join("")}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{founder.name}</h3>
                    <p className="mt-1 text-sm font-medium text-[#8fe3ff]">{founder.role}</p>
                  </div>
                  <a
                    href={founder.portfolioUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#00D4FF]/40 hover:text-[#8fe3ff]"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    {founder.portfolioLabel}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {founder.portfolioDescription}
                </p>

                {founder.portfolioMedia && (
                  <details className="mt-6 border-t border-white/10 pt-5">
                    <summary className="cursor-pointer text-sm font-semibold text-white marker:text-[#7dd3fc]">
                      Explore selected work ({founder.portfolioMedia.length})
                    </summary>
                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {founder.portfolioMedia.map((media) => (
                        <figure key={media.src} className="min-w-0">
                          {media.type === "video" ? (
                            <video
                              className="aspect-video w-full rounded-xl border border-white/10 bg-black object-cover"
                              controls
                              playsInline
                              preload="none"
                              poster={media.poster}
                              aria-label={media.title}
                            >
                              <source src={media.src} type="video/mp4" />
                              Your browser does not support the video element.
                            </video>
                          ) : (
                            <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-[#111827]">
                              <Image
                                src={media.src}
                                alt={media.alt}
                                fill
                                sizes="(max-width: 640px) 50vw, 25vw"
                                className="object-cover"
                              />
                            </div>
                          )}
                          <figcaption className="mt-2 truncate text-xs text-slate-400">
                            {media.title}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            </article>
          ))}
        </div>
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
