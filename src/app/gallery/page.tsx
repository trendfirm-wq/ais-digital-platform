import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const galleryItems = [
  {
    title: "Campus",
    category: "Campus Life",
    image: "/images/hero/ais-campus.jpg",
    size: "large",
  },
  {
    title: "Learning",
    category: "Academics",
    image: "/images/home/ais-learning.jpg",
    size: "normal",
  },
  {
    title: "Students",
    category: "Student Life",
    image: "/images/hero/ais-students.jpg",
    size: "normal",
  },
  {
    title: "Community",
    category: "Community",
    image: "/images/hero/ais-community.jpg",
    size: "tall",
  },
  {
    title: "Sports",
    category: "Student Life",
    image: "/images/school-life/sports.jpg",
    size: "normal",
  },
  {
    title: "Arts & Culture",
    category: "Student Life",
    image: "/images/school-life/arts.jpg",
    size: "large",
  },
  {
    title: "Leadership",
    category: "Student Life",
    image: "/images/school-life/leadership.jpg",
    size: "normal",
  },
  {
    title: "Learning Spaces",
    category: "Facilities",
    image: "/images/facilities/learning-space.jpg",
    size: "normal",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Header />

      <main className="bg-[#f7f5f1] text-[#17212b]">

        {/* HERO */}
        <section className="bg-[#0d2238] text-white">
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8 lg:pb-32 lg:pt-40">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.28em] text-[#e8752b]">
              AIS Gallery
            </p>

            <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-[92px]">
              See AIS
              <br />
              in motion.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 md:text-xl">
              A visual collection of learning, community, campus life and the
              moments that make AIS special.
            </p>
          </div>
        </section>

        {/* FILTER BAR */}
        <section className="sticky top-0 z-20 border-b border-[#dfe4e8] bg-[#f7f5f1]/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-6 py-5 lg:px-8">
            {[
              "All",
              "Academics",
              "Student Life",
              "Campus",
              "Community",
              "Facilities",
            ].map((filter, index) => (
              <button
                key={filter}
                className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition ${
                  index === 0
                    ? "bg-[#0d2238] text-white"
                    : "border border-[#0d2238]/10 text-[#68737d] hover:border-[#e8752b] hover:text-[#e8752b]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid auto-rows-[260px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item, index) => (
              <article
                key={item.title}
                className={`group relative overflow-hidden ${
                  item.size === "large"
                    ? "sm:col-span-2 sm:row-span-2"
                    : item.size === "tall"
                      ? "sm:row-span-2"
                      : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  priority={index < 3}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081827]/80 via-[#081827]/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e8752b]">
                    {item.category}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold tracking-tight">
                    {item.title}
                  </h2>
                </div>

                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100">
                  ↗
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CMS NOTE / FUTURE */}
        <section className="bg-[#0d2238] text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e8752b]">
                  More to come
                </p>

                <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                  Every moment has a story.
                </h2>
              </div>

              <p className="max-w-2xl text-lg leading-8 text-white/50">
                This gallery is structured to eventually connect to the AIS
                content management system, allowing authorised school staff to
                publish and organise new photographs, albums and media without
                changing the website code.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}