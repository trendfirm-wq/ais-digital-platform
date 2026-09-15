"use client";

interface CarouselControlsProps {
  current: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}

export default function CarouselControls({
  current,
  total,
  onPrevious,
  onNext,
  onSelect,
}: CarouselControlsProps) {
  return (
    <>
      {/* Previous */}
      <button
        type="button"
        onClick={onPrevious}
        aria-label="Previous slide"
        className="
          absolute
          left-5
          top-1/2
          z-30
          flex
          h-11
          w-11
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/40
          bg-black/10
          text-2xl
          text-white
          backdrop-blur-sm
          transition-all
          hover:bg-white
          hover:text-[var(--ais-navy)]
          sm:left-8
          lg:left-10
        "
      >
        ‹
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={onNext}
        aria-label="Next slide"
        className="
          absolute
          right-5
          top-1/2
          z-30
          flex
          h-11
          w-11
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/40
          bg-black/10
          text-2xl
          text-white
          backdrop-blur-sm
          transition-all
          hover:bg-white
          hover:text-[var(--ais-navy)]
          sm:right-8
          lg:right-10
        "
      >
        ›
      </button>

      {/* Slide indicators */}
      <div
        className="
          absolute
          bottom-10
          left-6
          z-30
          flex
          items-center
          gap-5
          lg:left-10
        "
      >
        {Array.from({ length: total }).map((_, index) => {
          const active = index === current;

          return (
            <button
              key={index}
              type="button"
              onClick={() => onSelect(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="group flex flex-col gap-2"
            >
              <span
                className={`
                  text-xs
                  font-medium
                  transition-colors
                  ${
                    active
                      ? "text-white"
                      : "text-white/45 group-hover:text-white"
                  }
                `}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span
                className={`
                  h-[3px]
                  transition-all
                  duration-500
                  ${
                    active
                      ? "w-11 bg-[var(--ais-orange)]"
                      : "w-6 bg-white/30"
                  }
                `}
              />
            </button>
          );
        })}
      </div>
    </>
  );
}