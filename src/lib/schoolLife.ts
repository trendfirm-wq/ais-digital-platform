import { ExperienceData } from "@/components/school-life/ExperiencePage";

export const schoolLife: Record<string, ExperienceData> = {
  "student-life": {
    category: "School Life",
    title: "Student Life",
    intro: "A community where students can learn, participate and belong.",
    description:
      "This section will showcase the day-to-day experiences, activities, traditions and opportunities that form student life at AIS.",
    image: "/images/school-life/student-life.jpg",
    highlights: [
      "Student Activities",
      "Clubs & Societies",
      "Community",
      "Student Wellbeing",
      "School Events",
      "Student Stories",
    ],
    next: {
      label: "Sports",
      href: "/school-life/sports",
    },
  },

  sports: {
    category: "School Life",
    title: "Sports",
    intro: "Developing teamwork, discipline and confidence through sport.",
    description:
      "This section will showcase the approved AIS sports programmes, activities, competitions and opportunities for student participation.",
    image: "/images/school-life/sports.jpg",
    highlights: [
      "Sports Programmes",
      "Teams & Competitions",
      "Physical Development",
      "Teamwork",
      "Training",
      "Events",
    ],
    previous: {
      label: "Student Life",
      href: "/school-life/student-life",
    },
    next: {
      label: "Arts & Culture",
      href: "/school-life/arts-culture",
    },
  },

  "arts-culture": {
    category: "School Life",
    title: "Arts & Culture",
    intro: "Creating space for expression, creativity and culture.",
    description:
      "This section will showcase the approved AIS arts, cultural activities, performances, creative programmes and student work.",
    image: "/images/school-life/arts.jpg",
    highlights: [
      "Creative Arts",
      "Performances",
      "Cultural Activities",
      "Student Expression",
      "Exhibitions",
      "Events",
    ],
    previous: {
      label: "Sports",
      href: "/school-life/sports",
    },
    next: {
      label: "Leadership",
      href: "/school-life/leadership",
    },
  },

 leadership: {
  category: "School Life",
  title: "Student Leadership",
  intro: "Preparing students to take responsibility and make a difference.",
  description:
    "AIS provides opportunities for students to develop leadership, responsibility, initiative and a spirit of service through participation in school and community activities.",
  image: "/images/school-life/leadership.jpg",
  highlights: [
    "Student Leadership",
    "Responsibility",
    "Service",
    "Initiative",
    "Collaboration",
    "Community Impact",
  ],
  previous: {
    label: "Arts & Culture",
    href: "/school-life/arts-culture",
  },
