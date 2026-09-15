"use client";

import { ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export interface ImageRevealProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ImageReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 1,
  className = "",
}: ImageRevealProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const distances = {
        left: { x: -60, y: 0 },
        right: { x: 60, y: 0 },
        up: { x: 0, y: 60 },
        down: { x: 0, y: -60 },
      };

      const distance = distances[direction];

      gsap.fromTo(
        container.current,
        {
          opacity: 0,
          x: distance.x,
          y: distance.y,
          clipPath: "inset(0 0 100% 0)",
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}