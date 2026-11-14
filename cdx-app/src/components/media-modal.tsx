"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Grid,
  Maximize2,
  Play,
  Tv,
  X,
} from "lucide-react";
import type { ProjectMedia } from "@/types/project";

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  projectCategory: string;
  mediaList: ProjectMedia[];
  initialIndex?: number;
}

export default function MediaModal({
  isOpen,
  onClose,
  projectTitle,
  projectCategory,
  mediaList = [],
  initialIndex = 0,
}: MediaModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [viewMode, setViewMode] = useState<"player" | "grid">("player");
  const videoRef = useRef<HTMLVideoElement>(null);
  const filmstripRef = useRef<HTMLDivElement>(null);

  // Sync index when initialIndex changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex >= 0 && initialIndex < mediaList.length ? initialIndex : 0);
      setViewMode("player");
    }
  }, [isOpen, initialIndex, mediaList.length]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && mediaList.length > 1) {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : mediaList.length - 1));
      } else if (e.key === "ArrowRight" && mediaList.length > 1) {
        setCurrentIndex((prev) => (prev < mediaList.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = origOverflow;
    };
  }, [isOpen, onClose, mediaList.length]);

  // Scroll active thumbnail into view in filmstrip
  useEffect(() => {
    if (!filmstripRef.current) return;
    const activeThumb = filmstripRef.current.children[currentIndex] as HTMLElement | undefined;
    if (activeThumb) {
      activeThumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [currentIndex]);

  if (!isOpen || mediaList.length === 0) return null;

  const currentMedia = mediaList[currentIndex] || mediaList[0];
  const isVideo = currentMedia.type === "video";
  const hasMultiple = mediaList.length > 1;

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : mediaList.length - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev < mediaList.length - 1 ? prev + 1 : 0));
  };

  const handleFullscreen = () => {
    const el = videoRef.current;
    if (el) {
      if (el.requestFullscreen) {
        el.requestFullscreen();
      } else if ((el as unknown as { webkitRequestFullscreen?: () => void }).webkitRequestFullscreen) {
        (el as unknown as { webkitRequestFullscreen: () => void }).webkitRequestFullscreen();
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 p-3 backdrop-blur-2xl sm:p-5 md:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${projectTitle} Media Gallery`}
    >
      {/* 1. TOP HEADER BAR */}
      <div
        className="mx-auto flex w-full max-w-7xl items-center justify-between border-b border-white/10 pb-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="inline-flex rounded-full border border-white/10 bg-[#111827] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#8fe3ff]">
                {projectCategory}
              </span>
              <span className="text-xs text-slate-400">
                {currentIndex + 1} of {mediaList.length}
              </span>
            </div>
            <h2 className="mt-1 truncate text-base font-bold text-white sm:text-lg">
              {projectTitle}
            </h2>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* View Mode Toggle */}
          {hasMultiple && (
            <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-1">
              <button
                type="button"
                onClick={() => setViewMode("player")}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition ${
                  viewMode === "player"
                    ? "bg-[#00D4FF] text-black shadow-[0_0_12px_rgba(0,212,255,0.4)]"
                    : "text-slate-300 hover:text-white"
                }`}
                title="Theater View"
              >
                <Tv className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Theater</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition ${
                  viewMode === "grid"
                    ? "bg-[#00D4FF] text-black shadow-[0_0_12px_rgba(0,212,255,0.4)]"
                    : "text-slate-300 hover:text-white"
                }`}
                title="Grid Overview"
              >
                <Grid className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">All ({mediaList.length})</span>
              </button>
            </div>
          )}

          {/* Video Fullscreen Trigger */}
          {viewMode === "player" && isVideo && (
            <button
              type="button"
              onClick={handleFullscreen}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition hover:border-[#00D4FF] hover:bg-white/10 hover:text-white"
              title="Fullscreen player"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          )}

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition hover:border-red-400 hover:bg-red-500/20 hover:text-white"
            title="Close (Esc)"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* 2. MAIN STAGE */}
      <div
        className="relative mx-auto my-auto flex h-full max-h-[72vh] w-full max-w-7xl items-center justify-center overflow-hidden p-1 sm:p-2"
        onClick={(e) => e.stopPropagation()}
      >
        {viewMode === "player" ? (
          /* THEATER PLAYER VIEW (Original Aspect Ratio, Fits Any Screen) */
          <>
            {/* Prev Arrow */}
            {hasMultiple && (
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-1 z-20 hidden h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white shadow-xl backdrop-blur-md transition hover:scale-105 hover:border-[#00D4FF] hover:bg-[#00D4FF]/20 sm:flex"
                aria-label="Previous media"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {/* Media Canvas */}
            <div className="relative flex max-h-[70vh] max-w-[92vw] items-center justify-center">
              {isVideo ? (
                <video
                  ref={videoRef}
                  key={currentMedia.src}
                  src={currentMedia.src}
                  poster={currentMedia.poster}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[70vh] max-w-[90vw] rounded-2xl border border-white/15 bg-black object-contain shadow-[0_0_60px_rgba(0,0,0,0.85)]"
                >
                  Your browser does not support the video element.
                </video>
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={currentMedia.src}
                  src={currentMedia.src}
                  alt={currentMedia.alt}
                  className="max-h-[70vh] max-w-[90vw] rounded-2xl border border-white/15 bg-[#111827] object-contain shadow-[0_0_60px_rgba(0,0,0,0.85)]"
                />
              )}
            </div>

            {/* Next Arrow */}
            {hasMultiple && (
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-1 z-20 hidden h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white shadow-xl backdrop-blur-md transition hover:scale-105 hover:border-[#00D4FF] hover:bg-[#00D4FF]/20 sm:flex"
                aria-label="Next media"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </>
        ) : (
          /* GRID OVERVIEW VIEW (See All Items at Once) */
          <div className="h-full max-h-[70vh] w-full overflow-y-auto rounded-2xl border border-white/10 bg-white/[0.02] p-4">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {mediaList.map((media, idx) => (
                <button
                  key={media.src}
                  type="button"
                  onClick={() => {
                    setCurrentIndex(idx);
                    setViewMode("player");
                  }}
                  className={`group relative flex flex-col overflow-hidden rounded-xl border p-1 text-left transition ${
                    idx === currentIndex
                      ? "border-[#00D4FF] bg-[#00D4FF]/10 shadow-[0_0_16px_rgba(0,212,255,0.3)]"
                      : "border-white/10 bg-[#111827]/80 hover:border-white/30 hover:bg-white/5"
                  }`}
                >
                  <div className={`relative w-full overflow-hidden rounded-lg bg-black ${media.type === "video" ? "aspect-[9/16]" : "aspect-video"}`}>
                    {media.type === "video" ? (
                      <>
                        {media.poster && (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={media.poster}
                            alt={media.title}
                            className="h-full w-full object-cover"
                          />
                        )}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <Play className="h-6 w-6 text-white drop-shadow" />
                        </div>
                      </>
                    ) : (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={media.src}
                        alt={media.alt}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <p className="mt-1.5 truncate text-[11px] font-medium text-slate-300">
                    {media.title}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 3. BOTTOM FOOTER & THUMBNAIL FILMSTRIP */}
      <div
        className="mx-auto flex w-full max-w-7xl flex-col border-t border-white/10 pt-3"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Caption & Mobile Nav Controls */}
        <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
          <p className="truncate font-medium text-slate-200">
            {currentMedia.title}
          </p>

          {/* Mobile Prev / Next */}
          {hasMultiple && (
            <div className="flex items-center gap-2 sm:hidden">
              <button
                type="button"
                onClick={handlePrev}
                className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white"
              >
                <ChevronLeft className="h-4 w-4" /> Prev
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white"
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}

          <span className="hidden sm:inline text-slate-500">
            {isVideo ? "Video" : "Image"} • Esc to close
          </span>
        </div>

        {/* Horizontal Filmstrip Carousel (Visible when multiple items and in player mode) */}
        {hasMultiple && viewMode === "player" && (
          <div
            ref={filmstripRef}
            className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-white/20"
          >
            {mediaList.map((media, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <button
                  key={media.src}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative flex-shrink-0 overflow-hidden rounded-lg border transition ${
                    isSelected
                      ? "border-[#00D4FF] shadow-[0_0_12px_rgba(0,212,255,0.4)] scale-105"
                      : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
                  } ${media.type === "video" ? "h-14 w-9" : "h-14 w-20"}`}
                >
                  {/* Thumbnail Image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={media.type === "video" ? media.poster || media.src : media.src}
                    alt={media.title}
                    className="h-full w-full object-cover"
                  />
                  {media.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Play className="h-3 w-3 text-white fill-white" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
