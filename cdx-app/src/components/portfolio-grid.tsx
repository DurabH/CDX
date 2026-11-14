"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Building2,
  ExternalLink,
  Maximize2,
  Play,
  Sparkles,
} from "lucide-react";
import type { PortfolioProject } from "@/types/project";
import MediaModal from "@/components/media-modal";

const categories = [
  { id: "all", label: "All Work" },
  { id: "web", label: "Web Development" },
  { id: "design", label: "Brand & Design" },
  { id: "video", label: "Video & Motion" },
] as const;

type FilterKey = (typeof categories)[number]["id"];

export default function PortfolioGrid({ projects }: { projects: PortfolioProject[] }) {
  const [activeTab, setActiveTab] = useState<FilterKey>("all");
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const filtered = activeTab === "all" 
    ? projects 
    : projects.filter((p) => p.vertical === activeTab);

  const openProjectPopup = (project: PortfolioProject, index = 0) => {
    if (project.media.length === 0) return;
    setActiveMediaIndex(index);
    setActiveProject(project);
  };

  return (
    <div>
      {/* Interactive Fullscreen Media Popup Modal */}
      {activeProject && (
        <MediaModal
          isOpen={!!activeProject}
          onClose={() => setActiveProject(null)}
          projectTitle={activeProject.title}
          projectCategory={activeProject.category}
          mediaList={activeProject.media}
          initialIndex={activeMediaIndex}
        />
      )}

      {/* Category Filter Tabs */}
      <div className="mb-10 flex flex-wrap gap-2.5 sm:gap-3">
        {categories.map((tab) => {
          const count = tab.id === "all" 
            ? projects.length 
            : projects.filter((p) => p.vertical === tab.id).length;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition duration-200 sm:text-sm ${
                isActive
                  ? "bg-gradient-to-r from-[#007AFF] to-[#00D4FF] text-white shadow-[0_0_20px_rgba(0,122,255,0.4)]"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] ${
                  isActive ? "bg-white/20 text-white" : "bg-white/10 text-slate-400"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project, index) => {
          const isVideoProject = project.vertical === "video";
          const hasMedia = project.media.length > 0;

          return (
            <article
              key={project.id}
              className={`group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#00D4FF]/30 hover:bg-white/[0.08] sm:p-6 ${
                isVideoProject && activeTab === "video" ? "md:col-span-2" : ""
              }`}
            >
              <div>
                {/* Header Tag & Counter */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex rounded-full border border-white/10 bg-[#111827] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-300">
                      {project.category}
                    </span>
                    {isVideoProject && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#9fe8ff]">
                        <Sparkles className="h-3 w-3 text-[#00D4FF]" />
                        Video collection
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Cover Image Banner (Clickable to open popup) */}
                <div
                  className={`relative mb-5 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111827] to-[#0B0F17] ${
                    hasMedia ? "cursor-pointer" : ""
                  }`}
                  onClick={() => hasMedia && openProjectPopup(project, 0)}
                >
                  {project.coverImage ? (
                    <>
                      <Image
                        src={project.coverImage}
                        alt={project.coverAlt ?? project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        priority={index < 2}
                      />
                      {hasMedia && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:opacity-100">
                          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-4 py-2 text-xs font-semibold text-white shadow-2xl backdrop-blur-md">
                            {isVideoProject ? (
                              <Play className="h-4 w-4 text-[#00D4FF] fill-[#00D4FF]" />
                            ) : (
                              <Maximize2 className="h-4 w-4 text-[#00D4FF]" />
                            )}
                            {isVideoProject ? "Watch Video Reels" : "Explore Project Media"}
                          </span>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-slate-400">
                      <Building2 className="h-9 w-9 text-[#7dd3fc]" aria-hidden="true" />
                      <span className="text-sm">Project preview coming soon</span>
                    </div>
                  )}
                </div>

                {/* Details & Highlights */}
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

                  {project.clientFeedback && (
                    <div className="mt-5 rounded-xl border border-white/10 bg-[#0B0F17]/60 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7dd3fc]">
                        Feedback summary · {project.clientFeedback.attribution}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {project.clientFeedback.summary}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Actions Area */}
              <div>
                {project.liveUrl && (
                  <div className="mt-6 flex flex-wrap gap-4 border-t border-white/10 pt-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition hover:border-[#00D4FF]/40 hover:bg-white/10 hover:text-[#00D4FF]"
                    >
                      <ExternalLink className="h-3.5 w-3.5 text-[#00D4FF]" />
                      Visit live website
                      <ArrowUpRight className="h-3 w-3 text-slate-400" />
                    </a>
                  </div>
                )}

                {/* Highly Engaging "Explore Project Media" / "Watch Video Reels" Button */}
                {hasMedia ? (
                  <div className={`mt-5 ${project.liveUrl ? "" : "border-t border-white/10 pt-4"}`}>
                    <button
                      type="button"
                      onClick={() => openProjectPopup(project, 0)}
                      className="group/btn relative flex w-full items-center justify-between overflow-hidden rounded-2xl border border-[#00D4FF]/30 bg-gradient-to-r from-[#007AFF]/15 via-[#00D4FF]/20 to-[#007AFF]/10 p-3.5 sm:p-4 text-left transition-all duration-300 hover:border-[#00D4FF] hover:bg-gradient-to-r hover:from-[#007AFF]/25 hover:via-[#00D4FF]/25 hover:to-[#007AFF]/20 hover:shadow-[0_0_32px_rgba(0,212,255,0.25)] hover:-translate-y-0.5"
                    >
                      {/* Ambient background glow */}
                      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#00D4FF]/20 blur-2xl transition duration-500 group-hover/btn:bg-[#00D4FF]/35" />

                      <div className="relative flex items-center gap-3">
                        {isVideoProject ? (
                          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#007AFF] to-[#00D4FF] text-white shadow-[0_0_16px_rgba(0,212,255,0.45)] transition-transform duration-300 group-hover/btn:scale-110">
                            <Play className="h-5 w-5 fill-white" />
                          </div>
                        ) : (
                          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-[#00D4FF]/40 bg-gradient-to-br from-[#007AFF]/30 to-[#00D4FF]/30 text-[#00D4FF] shadow-[0_0_16px_rgba(0,212,255,0.25)] transition-transform duration-300 group-hover/btn:scale-110">
                            <Sparkles className="h-5 w-5" />
                          </div>
                        )}

                        <div>
                          <p className="text-sm font-bold tracking-tight text-white transition group-hover/btn:text-[#00D4FF] sm:text-base">
                            {isVideoProject ? "Watch Video Reels" : "Explore Project Media"}
                          </p>
                          <p className="text-xs text-slate-300">
                            {isVideoProject
                              ? `Cinematic Showcase • ${project.media.length} Featured Videos`
                              : `Interactive Gallery • ${project.media.length} Items`}
                          </p>
                        </div>
                      </div>

                      <div className="relative flex items-center gap-2">
                        <span className="hidden rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-semibold text-[#8fe3ff] backdrop-blur sm:inline-flex">
                          Open Popup
                        </span>
                        <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 group-hover/btn:border-[#00D4FF] group-hover/btn:bg-[#00D4FF] group-hover/btn:text-black group-hover/btn:rotate-45">
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>
                    </button>

                    {/* Preview Thumbnail Row (Clicking any thumbnail directly opens that item in the popup) */}
                    <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1">
                      {project.media.slice(0, 5).map((media, idx) => (
                        <button
                          key={media.src}
                          type="button"
                          onClick={() => openProjectPopup(project, idx)}
                          className={`group/thumb relative flex-shrink-0 overflow-hidden rounded-lg border border-white/10 transition hover:border-[#00D4FF] hover:scale-105 ${
                            media.type === "video" ? "h-14 w-9" : "h-12 w-16"
                          }`}
                          title={`Open ${media.title}`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={media.type === "video" ? media.poster || media.src : media.src}
                            alt={media.title}
                            className="h-full w-full object-cover"
                          />
                          {media.type === "video" && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                              <Play className="h-3 w-3 text-white fill-white" />
                            </div>
                          )}
                        </button>
                      ))}

                      {project.media.length > 5 && (
                        <button
                          type="button"
                          onClick={() => openProjectPopup(project, 5)}
                          className="flex h-12 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#111827] px-3 text-xs font-semibold text-slate-300 transition hover:border-[#00D4FF] hover:text-white"
                        >
                          +{project.media.length - 5} more
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-6 text-slate-400">
                    {project.mediaNote}
                  </p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
