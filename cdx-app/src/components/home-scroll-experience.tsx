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

    let revertShowcase: (() => void) | undefined;

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

      const section = root.querySelector<HTMLElement>(
        ".work-showcase-section--cinematic"
      );
      if (!section) return;

      const cards = gsap.utils.toArray<HTMLElement>(
        ".work-showcase-card",
        section
      );

      const showcaseMedia = gsap.matchMedia();
      revertShowcase = () => showcaseMedia.revert();

      showcaseMedia.add("(min-width: 901px) and (min-height: 480px)", () => {
        if (cards.length === 0) return;

        section.classList.add("is-pinned");
        gsap.set(cards, { autoAlpha: 0, y: 18 });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top+=72",
            end: () => `+=${window.innerHeight * cards.length}`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        cards.forEach((card, index) => {
          const enterAt = index;
          const poster = card.querySelector<HTMLElement>(
            ".work-showcase-card__image"
          );

          if (poster) gsap.set(poster, { scale: 0.9 });

          const copies = gsap.utils.toArray<HTMLElement>(
            ".work-showcase-copy",
            card
          );
          copies.forEach((copy, copyIndex) => {
            gsap.set(copy, {
              autoAlpha: 0,
              x: copyIndex === 0 ? -24 : 24,
              y: 12,
            });
          });

          timeline.to(
            card,
            { autoAlpha: 1, y: 0, duration: 0.18, ease: "none" },
            enterAt
          );

          if (poster) {
            timeline
              .to(
                poster,
                  { scale: 1.14, duration: 0.42, ease: "none" },
                enterAt + 0.12
              )
              .to(
                poster,
                { scale: 0.94, duration: 0.38, ease: "none" },
                enterAt + 0.54
              );
          }

          copies.forEach((copy) => {
            timeline.to(
              copy,
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                duration: 0.32,
                ease: "none",
              },
              enterAt + 0.14
            );
          });

          if (index < cards.length - 1) {
            timeline.to(
              card,
              { autoAlpha: 0, y: -16, duration: 0.16, ease: "none" },
              enterAt + 0.84
            );
          } else {
            timeline.to(
              card,
              { autoAlpha: 1, duration: 0.08, ease: "none" },
              enterAt + 0.92
            );
          }
        });

        return () => section.classList.remove("is-pinned");
      });

      showcaseMedia.add("(max-width: 900px), (max-height: 479px)", () => {
        cards.forEach((card) => {
          const poster = card.querySelector<HTMLElement>(
            ".work-showcase-card__image"
          );
          if (poster) {
            const posterTimeline = gsap.timeline({
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            });
            posterTimeline
              .fromTo(
                poster,
                { scale: 0.9 },
                { scale: 1.05, duration: 0.5, ease: "none" }
              )
              .to(poster, { scale: 0.9, duration: 0.5, ease: "none" });
          }

          gsap.utils
            .toArray<HTMLElement>(".work-showcase-copy", card)
            .forEach((copy, index) => {
              gsap.fromTo(
                copy,
                { autoAlpha: 0, x: index === 0 ? -18 : 18, y: 16 },
                {
                  autoAlpha: 1,
                  x: 0,
                  y: 0,
                  ease: "none",
                  scrollTrigger: {
                    trigger: copy,
                    start: "top 88%",
                    end: "top 62%",
                    scrub: 0.7,
                  },
                }
              );
            });
        });
      });
    }, root);

    return () => {
      revertShowcase?.();
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
