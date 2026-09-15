import Image from "next/image";
import Link from "next/link";

interface ProgrammeCardProps {
  number: string;
  level: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export default function ProgrammeCard({
  number,
  level,
  title,
  description,
  image,
  href,
}: ProgrammeCardProps) {
  return (
    <Link
      href={href}
      className="
        group
        relative
        block
        h-[440px]
        overflow-hidden
        bg-[var(--ais-navy)]
        sm:h-[500px]
        lg:h-[560px]
      "
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="
          (max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          25vw
        "
        className="
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-110
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#061625]
          via-[#061625]/55
          to-transparent
          transition-all
          duration-500
          group-hover:via-[#061625]/40
        "
      />

      {/* Number */}
      <div
        className="
          absolute
          left-6
          top-6
          text-xs
          font-bold
          tracking-[0.2em]
          text-white/60
          sm:left-8
          sm:top-8
        "
      >
        {number}
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">

        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--ais-orange)]">
          {level}
        </p>

        <h3
          className="
            text-3xl
            font-medium
            tracking-tight
            text-white
            sm:text-4xl
          "
        >
          {title}
        </h3>

        <div
          className="
            grid
            grid-rows-[0fr]
            transition-all
            duration-500
            group-hover:grid-rows-[1fr]
          "
        >
          <div className="overflow-hidden">
            <p className="pt-4 text-sm leading-6 text-white/70 sm:text-base">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-3 text-sm font-bold text-white">
          <span
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-[var(--ais-orange)]
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>

          Explore
        </div>
      </div>
    </Link>
  );
}