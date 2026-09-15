"use client";

import { ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StaggerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
}

export default function Stagger({
  children,
  className = "",
  delay = 0,
  stagger = 0.12,
  duration = 0.8,
}: StaggerProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const items = container.current.children;

      if (reducedMotion) {
        gsap.set(items, {
          opacity: 1,
          y: 0,
          clearProps: "all",
        });

        return;
      }

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    {
      scope: container,
      dependencies: [
        delay,
        stagger,
        duration,
      ],
    }
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}