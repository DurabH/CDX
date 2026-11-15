"use client";

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, type ReactNode } from "react";

export interface SceneVisual {
  src: string;
  alt: string;
  label: string;
  position: "back-left" | "center" | "front-right";
  startX: number;
  startY: number;
  startRotateX: number;
  startRotateY: number;
  startScale: number;
  endX: number;
  endY: number;
  endRotateX: number;
  endRotateY: number;
  endScale: number;
}

interface ScrollSceneProps {
  id: string;
  number: string;
  eyebrow: string;
  title: ReactNode;
  titleTag?: "h1" | "h2";
  description: string;
  visuals?: SceneVisual[];
  details?: string[];
  actions?: { href: string; label: string }[];
  theme?: "blue" | "violet" | "warm";
  children?: ReactNode;
}

function SceneCard({
  visual,
  progress,
}: {
  visual: SceneVisual;
  progress: MotionValue<number>;
}) {
  const x = useTransform(
    progress,
    [0, 0.24, 0.72, 1],
    [visual.startX, visual.startX * 0.45, visual.endX, visual.endX]
  );
  const y = useTransform(
    progress,
    [0, 0.24, 0.72, 1],
    [visual.startY, visual.startY * 0.45, visual.endY, visual.endY]
  );
  const rotateX = useTransform(
    progress,
    [0, 0.24, 0.72, 1],
    [visual.startRotateX, visual.startRotateX * 0.45, visual.endRotateX, visual.endRotateX]
  );
  const rotateY = useTransform(
    progress,
    [0, 0.24, 0.72, 1],
    [visual.startRotateY, visual.startRotateY * 0.45, visual.endRotateY, visual.endRotateY]
  );
  const scale = useTransform(
    progress,
    [0, 0.24, 0.72, 1],
    [visual.startScale, (visual.startScale + visual.endScale) / 2, visual.endScale, visual.endScale]
  );
  const opacity = useTransform(progress, [0, 0.28, 0.72, 1], [0.72, 0.9, 1, 1]);

  return (
    <motion.figure
      className={`scene-visual scene-visual--${visual.position}`}
      style={{ x, y, rotateX, rotateY, scale, opacity, transformPerspective: 1100 }}
    >
      <Image
        src={visual.src}
        alt={visual.alt}
        fill
        sizes="(max-width: 640px) 82vw, (max-width: 1024px) 55vw, 600px"
        className="object-contain"
      />
      <figcaption>{visual.label}</figcaption>
    </motion.figure>
  );
}

export default function ScrollScene({
  id,
  number,
  eyebrow,
  title,
  titleTag = "h2",
  description,
  visuals = [],
  details = [],
  actions = [],
  theme = "blue",
  children,
}: ScrollSceneProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const Heading = titleTag;

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`scroll-scene scroll-scene--${theme}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="scroll-scene__sticky">
        <div className="scroll-scene__copy">
          <p className="scroll-scene__eyebrow">
            <span>{number}</span>
            {eyebrow}
          </p>
          <Heading id={`${id}-title`}>{title}</Heading>
          <p className="scroll-scene__description">{description}</p>
          {details.length > 0 && (
            <ul className="scroll-scene__details">
              {details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          )}
          {children}
          {actions.length > 0 && (
            <div className="scroll-scene__actions">
              {actions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className="scroll-scene__action"
                >
                  {action.label}
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {visuals.length > 0 && (
          <div
            className="scroll-scene__stage"
            aria-label="Selected digital project previews"
          >
            <div className="scroll-scene__glow" aria-hidden="true" />
            <div className="scroll-scene__grid" aria-hidden="true" />
            {visuals.map((visual) => (
              <SceneCard
                key={`${id}-${visual.label}`}
                visual={visual}
                progress={scrollYProgress}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
