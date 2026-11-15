"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const projects = [
  {
    className: "scroll-showcase__screen--portfolio",
    src: "/images/portfolio/my-portfolio-2/website-preview.png",
    alt: "Laptop presentation of Waleed's creative portfolio",
    title: "Creative portfolio",
  },
  {
    className: "scroll-showcase__screen--event",
    src: "/images/portfolio/eventbooking-website/website-preview.png",
    alt: "Laptop presentation of the EventSphere event booking website",
    title: "EventSphere",
  },
  {
    className: "scroll-showcase__screen--gym",
    src: "/images/portfolio/gym-website/website-preview.png",
    alt: "Laptop presentation of the Muscle Up Gym website",
    title: "Muscle Up Gym",
  },
];

export default function Scroll3DShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const portfolioX = useTransform(scrollYProgress, [0, 0.62], [-150, 0]);
  const portfolioY = useTransform(scrollYProgress, [0, 0.62], [-80, 16]);
  const portfolioRotateX = useTransform(scrollYProgress, [0, 0.62], [32, 9]);
  const portfolioRotateY = useTransform(scrollYProgress, [0, 0.62], [55, 24]);
  const portfolioScale = useTransform(scrollYProgress, [0, 0.62], [0.56, 0.68]);
  const portfolioOpacity = useTransform(scrollYProgress, [0, 0.34], [0.35, 1]);

  const eventY = useTransform(scrollYProgress, [0, 0.62], [150, 0]);
  const eventRotateX = useTransform(scrollYProgress, [0, 0.62], [34, 9]);
  const eventRotateY = useTransform(scrollYProgress, [0, 0.62], [-18, -8]);
  const eventScale = useTransform(scrollYProgress, [0, 0.62], [0.62, 0.82]);
  const eventOpacity = useTransform(scrollYProgress, [0, 0.3], [0.45, 1]);

  const gymX = useTransform(scrollYProgress, [0, 0.62], [170, 0]);
  const gymY = useTransform(scrollYProgress, [0, 0.62], [145, 20]);
  const gymRotateX = useTransform(scrollYProgress, [0, 0.62], [38, 10]);
  const gymRotateY = useTransform(scrollYProgress, [0, 0.62], [-58, -25]);
  const gymScale = useTransform(scrollYProgress, [0, 0.62], [0.54, 0.68]);
  const gymOpacity = useTransform(scrollYProgress, [0, 0.34], [0.3, 1]);

  const transforms = [
    {
      x: portfolioX,
      y: portfolioY,
      rotateX: portfolioRotateX,
      rotateY: portfolioRotateY,
      scale: portfolioScale,
      opacity: portfolioOpacity,
    },
    {
      y: eventY,
      rotateX: eventRotateX,
      rotateY: eventRotateY,
      scale: eventScale,
      opacity: eventOpacity,
    },
    {
      x: gymX,
      y: gymY,
      rotateX: gymRotateX,
      rotateY: gymRotateY,
      scale: gymScale,
      opacity: gymOpacity,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="scroll-showcase"
      aria-labelledby="scroll-showcase-title"
    >
      <div className="scroll-showcase__pin">
        <div className="scroll-showcase__copy">
          <p className="scroll-showcase__eyebrow">Scroll to explore</p>
          <h2 id="scroll-showcase-title">
            Good work has <span className="text-gradient-brand">more than one layer.</span>
          </h2>
          <p>
            A closer look at the websites and creative work we bring together.
          </p>
        </div>

        <div className="scroll-showcase__stage">
          <div className="scroll-showcase__halo" aria-hidden="true" />
          <div className="scroll-showcase__floor" aria-hidden="true" />
          {projects.map((project, index) => (
            <motion.figure
              key={project.title}
              className={`scroll-showcase__screen ${project.className}`}
              style={
                reduceMotion
                  ? undefined
                  : {
                      ...transforms[index],
                      transformPerspective: 1100,
                    }
              }
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 640px) 84vw, (max-width: 1024px) 60vw, 520px"
                className="object-contain"
              />
              <figcaption>{project.title}</figcaption>
            </motion.figure>
          ))}
        </div>
        <p className="scroll-showcase__hint" aria-hidden="true">
          Keep scrolling
          <span />
        </p>
      </div>
    </section>
  );
}
