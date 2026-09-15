"use client";

import { ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export interface ParallaxProps {
  children: ReactNode;
  y?: number;
  x?: number;
  amount?: number;
  speed?: number;
  className?: string;
}

export default function Parallax({
  children,
  y,
  x = 0,
  amount,
  speed,
  className = "",
}: ParallaxProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      /*
       * Support the different ways the component is currently
       * being used throughout the AIS site.
       *
       * Priority:
       * amount → y → speed → default
       */
      const movement =
        amount !== undefined
          ? amount
          : y !== undefined
            ? y
            : speed !== undefined
              ? speed * 100
              : 80;

      gsap.to(container.current, {
        y: movement,
        x,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}