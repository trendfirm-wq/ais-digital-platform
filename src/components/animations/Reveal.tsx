"use client";

import { ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

export default function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.9,
  distance = 50,
  once = true,
}: RevealProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) {
        gsap.set(container.current, {
          opacity: 1,
          clearProps: "all",
        });
        return;
      }

      const movement = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
      };

      gsap.fromTo(
        container.current,
        {
          opacity: 0,
          ...movement[direction],
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 85%",
            toggleActions: once
              ? "play none none none"
              : "play reverse play reverse",
          },
        }
      );
    },
    {
      scope: container,
      dependencies: [
        direction,
        delay,
        duration,
        distance,
        once,
      ],
    }
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}