"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/animations/Reveal";

interface FeatureCardProps {
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
  index?: number;
}

export default function FeatureCard({
  number,
  category,
  title,
  description,
  image,
  href,
  index = 0,
}: FeatureCardProps) {
  return (
    <Reveal
      direction={index % 2 === 0 ? "left" : "right"}
      delay={index * 0.08}
    >
      <Link
        href={href}
        className="group relative block h-[420px] overflow-hidden rounded-sm"
      >
        {/* IMAGE */}
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2f4a] via-[#0d2f4a]/35 to-transparent" />

        {/* NUMBER */}
        <div className="absolute left-6 top-6">
          <span className="text-sm font-bold tracking-[0.2em] text-white/70">
            {number}
          </span>
        </div>

        {/* CONTENT */}
        <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.22em] text-[#f2a07a]">
            {category}
          </span>

          <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
            {title}
          </h3>

          <p className="max-w-lg text-sm leading-6 text-white/75 md:text-base">
            {description}
          </p>

          <div className="mt-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.15em] text-white">
            <span>Discover</span>

            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}