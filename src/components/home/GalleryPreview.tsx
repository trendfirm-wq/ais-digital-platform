"use client";

import Image from "next/image";
import Link from "next/link";

const galleryItems = [
  {
    image: "/images/home/ais-students.jpg",
    title: "Learning & Discovery",
    category: "Academics",
    size: "large",
  },
  {
    image: "/images/school-life/sports.jpg",
    title: "Sport & Teamwork",
    category: "School Life",
    size: "small",
  },
  {
    image: "/images/school-life/arts.jpg",
    title: "Arts & Culture",
    category: "Creativity",
    size: "small",
  },
  {
    image: "/images/facilities/campus.jpg",
    title: "Our Campus",
    category: "Facilities",
    size: "wide",
  },
  {
    image: "/images/school-life/leadership.jpg",
    title: "Leadership & Community",
    category: "Student Life",
    size: "small",
  },
];

export default function GalleryPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.25em] text-[#f2a07a]">
              Gallery
            </span>

            <h2 className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-[#174a70] md:text-5xl lg:text-6xl">
              Moments worth remembering.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#5f6367] md:text-lg">
              Take a glimpse into learning, discovery, community and everyday
              life at T.I. Ahmadiyya International School.
            </p>
          </div>

          <Link
            href="/gallery"
            className="group inline-flex w-fit items-center gap-4 text-sm font-bold uppercase tracking-[0.15em] text-[#174a70]"
          >
            View full gallery

            <span className="text-[#f2a07a] transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>

        {/* GALLERY */}
        <div className="grid auto-rows-[220px] gap-4 md:grid-cols-4 md:auto-rows-[240px]">

          {/* LARGE */}
          <GalleryItem
            item={galleryItems[0]}
            className="md:col-span-2 md:row-span-2"
          />

          {/* SMALL */}
          <GalleryItem
            item={galleryItems[1]}
            className="md:col-span-1 md:row-span-1"
          />

          <GalleryItem
            item={galleryItems[2]}
            className="md:col-span-1 md:row-span-1"
          />

          {/* WIDE */}
          <GalleryItem
            item={galleryItems[3]}
            className="md:col-span-2 md:row-span-1"
          />

          <GalleryItem
            item={galleryItems[4]}
            className="md:col-span-1 md:row-span-1"
          />
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-10 flex flex-col gap-5 border-t border-[#e2e2e2] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#5f6367]">
            Explore more photographs, events and school moments.
          </p>

          <Link
            href="/gallery"
            className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.15em] text-[#174a70]"
          >
            Explore AIS Gallery
            <span className="text-[#f2a07a] transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function GalleryItem({
  item,
  className,
}: {
  item: (typeof galleryItems)[number];
  className?: string;
}) {
  return (
    <Link
      href="/gallery"
      className={`group relative overflow-hidden ${className ?? ""}`}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d2f4a]/80 via-[#0d2f4a]/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#f2a07a]">
          {item.category}
        </span>

        <h3 className="text-lg font-bold text-white md:text-xl">
          {item.title}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-white/0 transition-all duration-300 group-hover:text-white/70">
          View gallery
          <span className="text-[#f2a07a]">→</span>
        </div>
      </div>
    </Link>
  );
}