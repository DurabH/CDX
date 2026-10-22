import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, Code2, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

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
          Each project is shaped around the people it serves: making important information easier to find, choices easier to compare, and the next step easier to take.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-[#00D4FF]/30 hover:bg-white/[0.08] sm:p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="inline-flex rounded-full border border-white/10 bg-[#111827] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-300">
                {project.category}
              </span>
              <span className="text-xs text-slate-500">0{index + 1}</span>
            </div>

            <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111827] to-[#0B0F17]">
              {project.coverImage ? (
                <Image
                  src={project.coverImage}
                  alt={project.coverAlt ?? project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-slate-400">
                  <Building2 className="h-9 w-9 text-[#7dd3fc]" aria-hidden="true" />
                  <span className="text-sm">No local preview image in the source repository</span>
                </div>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
              <h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#8fe3ff]">
                What it offers
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="text-[#7dd3fc]" aria-hidden="true">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 border-t border-white/10 pt-4">
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#8fe3ff] transition hover:text-white"
              >
                <Code2 className="h-4 w-4" aria-hidden="true" />
                Source code
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#8fe3ff] transition hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Visit website
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
            </div>

            {project.media.length > 0 ? (
              <details className="mt-5 border-t border-white/10 pt-4">
                <summary className="cursor-pointer text-sm font-semibold text-white marker:text-[#7dd3fc]">
                  Explore project media ({project.media.length})
                </summary>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {project.media.map((media) => (
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
            ) : (
              <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-6 text-slate-400">
                {project.mediaNote}
              </p>
            )}
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
