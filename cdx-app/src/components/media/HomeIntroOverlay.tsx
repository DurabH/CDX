"use client";

import { useEffect, useRef, useState } from "react";
import LogoAnimationVideo from "./LogoAnimationVideo";

let introCheckedThisDocument = false;

export default function HomeIntroOverlay() {
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
    const frame = window.requestAnimationFrame(() => setShowIntro(true));

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(fallback);
      window.removeEventListener("intro-video-ended", onVideoEnd);
    };
  }, []);

  return showIntro ? (
    <div className="brand-intro" aria-hidden="true">
      <div className="intro-video-stage">
        <LogoAnimationVideo />
      </div>
    </div>
  ) : null;
}
