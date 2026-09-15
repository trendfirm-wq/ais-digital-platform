import HeroCarousel from "@/components/carousel/HeroCarousel";
import { HeroSlideData } from "@/types";

const heroSlides: HeroSlideData[] = [
  {
    id: 1,
    image: "/images/hero/ais-campus.jpg",
    eyebrow: "Best Among Equals",
    title: "Inspiring excellence for a brighter future.",
    description:
      "A values-driven education that prepares young people to learn, lead and make a meaningful difference.",
    primaryAction: {
      label: "Explore AIS",
      href: "/about",
    },
    secondaryAction: {
      label: "Admissions",
      href: "/admissions",
    },
  },

  {
    id: 2,
    image: "/images/hero/ais-students.jpg",
    eyebrow: "Learning & Discovery",
    title: "Where curiosity becomes opportunity.",
    description:
      "Discover an environment where students are encouraged to grow their knowledge, confidence and potential.",
    primaryAction: {
      label: "Explore Academics",
      href: "/academics",
    },
    secondaryAction: {
      label: "Our Programmes",
      href: "/academics/programmes",
    },
  },

  {
    id: 3,
    image: "/images/hero/ais-community.jpg",
    eyebrow: "Life at AIS",
    title: "A community where every student belongs.",
    description:
      "Experience learning beyond the classroom through activities, relationships, leadership, sport and community.",
    primaryAction: {
      label: "Discover School Life",
      href: "/school-life",
    },
    secondaryAction: {
      label: "Visit AIS",
      href: "/admissions/visit",
    },
  },
];

export default function Hero() {
  return (
    <HeroCarousel
      slides={heroSlides}
      interval={7000}
      autoPlay
    />
  );
}