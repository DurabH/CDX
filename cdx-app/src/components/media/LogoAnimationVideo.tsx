"use client";

import React, { useRef, useEffect, useState } from "react";

export default function LogoAnimationVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    // Step 1: Try to play WITH sound (works if user has interacted before)
    vid.muted = false;
    const playWithSound = vid.play();

    if (playWithSound !== undefined) {
      playWithSound.catch(() => {
        // Step 2: Browser blocked sound — fall back to muted autoplay
        vid.muted = true;
        setIsMuted(true);
        vid.play().catch(() => {
          // Autoplay fully blocked — skip intro
          window.dispatchEvent(new Event("intro-video-ended"));
        });
      });
    }
  }, []);

  const handleUnmute = () => {
    const vid = videoRef.current;
    if (vid) {
      vid.muted = false;
      vid.play();
      setIsMuted(false);
    }
  };

  return (
    <>
      {/* Single full-screen video — object-cover fills the screen completely */}
      <video
        ref={videoRef}
        src="/videos/LogoAnimation.mp4"
        className="absolute inset-0 w-full h-full object-cover z-10"
        playsInline
        tabIndex={-1}
        onEnded={() => window.dispatchEvent(new Event("intro-video-ended"))}
        onError={() => window.dispatchEvent(new Event("intro-video-ended"))}
      />

      {/* Unmute button — only visible if browser blocked sound */}
      {isMuted && (
        <button
          onClick={handleUnmute}
          className="absolute bottom-8 right-8 z-20 flex items-center gap-2.5 rounded-full border border-white/25 bg-black/50 px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/15 hover:scale-105 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M11 5 6 9H2v6h4l5 4V5Z" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
          Tap to unmute
        </button>
      )}
    </>
  );
}
