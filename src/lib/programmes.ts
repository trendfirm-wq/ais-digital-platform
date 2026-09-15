import { ProgrammeData } from "@/components/academics/ProgrammePage";

export const programmes: Record<string, ProgrammeData> = {
  nursery: {
    level: "Nursery",
    title: "Early Years",
    intro:
      "A nurturing beginning to the AIS learning journey.",
    description:
      "This page will provide approved information about the Nursery programme, including its learning environment, approach, curriculum and development priorities.",
    ageRange: "To be confirmed",
    focus: [
      "Early Development",
      "Discovery",
      "Communication",
      "Confidence",
    ],
    href: "/academics/nursery",
    next: {
      label: "Kindergarten",
      href: "/academics/kg",
    },
  },

  kg: {
    level: "KG",
    title: "Kindergarten",
    intro:
      "Building strong foundations through curiosity and discovery.",
    description:
      "This page will provide approved information about the Kindergarten programme, including learning experiences, curriculum and developmental priorities.",
    ageRange: "To be confirmed",
    focus: [
      "Foundations",
      "Exploration",
      "Communication",
      "Independence",
    ],
    href: "/academics/kg",
    previous: {
      label: "Nursery",
      href: "/academics/nursery",
    },
    next: {
      label: "Primary",
      href: "/academics/primary",
    },
  },

  primary: {
    level: "Primary",
    title: "Primary School",
    intro:
      "Developing knowledge, skills and confidence for the years ahead.",
    description:
      "This page will provide approved information about the Primary programme, including curriculum structure, subjects, learning experiences and development priorities.",
    ageRange: "To be confirmed",
    focus: [
      "Knowledge",
      "Skills",
      "Creativity",
      "Independence",
    ],
    href: "/academics/primary",
    previous: {
      label: "Kindergarten",
      href: "/academics/kg",
    },
    next: {
      label: "Junior High School",
      href: "/academics/jhs",
    },
  },

  jhs: {
    level: "JHS",
    title: "Junior High School",
    intro:
      "Preparing students for their next chapter with purpose and confidence.",
    description:
      "This page will provide approved information about the Junior High School programme, including curriculum, subjects, learning priorities and preparation for the next stage of education.",
    ageRange: "To be confirmed",
    focus: [
      "Deeper Learning",
      "Critical Thinking",
      "Responsibility",
      "Leadership",
    ],
    href: "/academics/jhs",
    previous: {
      label: "Primary",
      href: "/academics/primary",
    },
  },
};