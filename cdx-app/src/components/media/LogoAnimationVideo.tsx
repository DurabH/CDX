"use client";

import { useEffect, useRef, useState } from "react";

export default function LogoAnimationVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 2;
    video.muted = false;
    video.play().catch(() => {
      video.muted = true;
      setIsMuted(true);
      video.play().catch(() => {
        window.dispatchEvent(new Event("intro-video-ended"));
      });
    });
  }, []);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.play().catch((error: unknown) => {
      console.error("Unable to enable intro video audio.", error);
    });
    setIsMuted(false);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;

    if (video.duration - video.currentTime <= 1) {
      video.pause();
      window.dispatchEvent(new Event("intro-video-ended"));
    }
  };

  return (
    <>
      <svg
        className="intro-video-filter"
        aria-hidden="true"
        focusable="false"
      >
        <filter id="intro-transparent-background" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0.5 0.5 1 0 -0.12
            "
          />
        </filter>
      </svg>
      <video
        ref={videoRef}
        src="/videos/LogoAnimation.mp4"
        className="intro-video"
        playsInline
        preload="auto"
        autoPlay
        tabIndex={-1}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => window.dispatchEvent(new Event("intro-video-ended"))}
        onError={() => window.dispatchEvent(new Event("intro-video-ended"))}
      />

      {isMuted && (
        <button
          type="button"
          onClick={handleUnmute}
          className="absolute bottom-6 right-6 z-20 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/15"
        >
          Enable intro sound
        </button>
      )}
    </>
  );
}
