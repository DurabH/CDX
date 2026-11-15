"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect, useRef, type ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HomeScrollExperience({
  children,
}: {
  children: ReactNode;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({ autoRaf: false, anchors: true });
    const updateScrollTrigger = () => ScrollTrigger.update();
    const tick = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", updateScrollTrigger);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    let revertMedia: (() => void) | undefined;

    const context = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>("[data-scroll-reveal]", root)
        .forEach((element) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 28 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            }
          );
        });

      const hero = root.querySelector(".scroll-scene");
      const heroHud = root.querySelector(".scroll-scene__hud");
      if (hero && heroHud) {
        gsap.fromTo(
          heroHud,
          { autoAlpha: 0, y: 14 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: hero,
              start: "top 55%",
              once: true,
            },
          }
        );
      }

      const section = root.querySelector<HTMLElement>(
        ".deliverables-section--cinematic"
      );
      const viewport = section?.querySelector<HTMLElement>(
        ".deliverables-track-viewport"
      );
      const track = section?.querySelector<HTMLElement>(".deliverables-track");

      if (!section || !viewport || !track) return;

      const media = gsap.matchMedia();
      revertMedia = () => media.revert();
      media.add("(min-width: 901px) and (min-height: 680px)", () => {
        const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
        const huds = gsap.utils.toArray<HTMLElement>(
          ".deliverable-card__hud",
          section
        );

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top+=72",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        timeline.to(track, { x: () => -distance(), ease: "none", duration: 1 });
        huds.forEach((hud, index) => {
          timeline.fromTo(
            hud,
            { autoAlpha: 0, y: 10 },
            { autoAlpha: 1, y: 0, duration: 0.16, ease: "none" },
            huds.length > 1 ? (index / (huds.length - 1)) * 0.82 : 0
          );
        });
      });
    }, root);

    return () => {
      revertMedia?.();
      context.revert();
      gsap.ticker.remove(tick);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.off("scroll", updateScrollTrigger);
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={rootRef} className="home-scroll-experience">
      {children}
    </div>
  );
}
