export type LeadershipPerson = {
  name: string;
  designation: string;
  committees: {
    name: string;
    role: "Chairperson" | "Member";
  }[];
};

export type LeadershipCommittee = {
  name: string;
  chairperson?: string;
  members: string[];
};

export const managementBoard: LeadershipPerson[] = [
  {
    name: "Alhaji Ahmad Kwame Boakye",
    designation: "Board Chairman",
    committees: [],
  },
  {
    name: "Nana Yiadom Boakye Kanto",
    designation: "Board Member & Special Assistant to the Board",
    committees: [
      { name: "Marketing and Public Relations Committee", role: "Member" },
      { name: "Security Committee", role: "Member" },
      { name: "Legal and Governance Committee", role: "Member" },
      {
        name: "Projects Development and Beautification Committee",
        role: "Member",
      },
      { name: "Academic Committee", role: "Member" },
      { name: "Finance Committee", role: "Member" },
    ],
  },
  {
    name: "Madam Henrietta Adjei",
    designation: "Board Secretary",
    committees: [
      { name: "Security Committee", role: "Member" },
      { name: "Legal and Governance Committee", role: "Member" },
      {
        name: "Projects Development and Beautification Committee",
        role: "Member",
      },
    ],
  },
  {
    name: "Nana Yaa Akyere Bruwaa (Corp. Nana Sarpong)",
    designation: "Board Member",
    committees: [
      { name: "Security Committee", role: "Chairperson" },
      {
        name: "Projects Development and Beautification Committee",
        role: "Member",
      },
    ],
  },
  {
    name: "Hajia Ayesha Nyantakyewaa Boakye",
    designation: "Board Member",
    committees: [
      { name: "Academic Committee", role: "Chairperson" },
    ],
  },
  {
    name: "Madam Rachemet Boamah Boakye",
    designation: "Board Member",
    committees: [
      { name: "Marketing and PR Committee", role: "Chairperson" },
    ],
  },
  {
    name: "Rahmat Boamah Boakye",
    designation: "Board Member",
    committees: [
      { name: "Finance Committee", role: "Chairperson" },
      { name: "Audit Committee", role: "Chairperson" },
    ],
  },
  {
    name: "Maulvi Hafiz Ismail Adusei",
    designation: "Board Member",
    committees: [
      { name: "Security Committee", role: "Member" },
      { name: "Audit Committee", role: "Member" },
    ],
  },
  {
    name: "Mr Abdul Samad Issah",
    designation: "Independent Board Member",
    committees: [
      { name: "Security Committee", role: "Member" },
      { name: "Finance Committee", role: "Member" },
    ],
  },
  {
    name: "Madam Nana Ama Ghina Boakye",
    designation: "Board Member",
    committees: [
      { name: "Legal and Governance Committee", role: "Chairperson" },
    ],
  },
  {
    name: "Madam Maryam Boakyewaa Boateng",
    designation: "Board Member",
    committees: [
      {
        name: "Projects Development and Beautification Committee",
        role: "Chairperson",
      },
      { name: "Academic Committee", role: "Member" },
    ],
  },
  {
    name: "Madam Rahmat Ekua Ansah",
    designation: "Ag. Head Mistress",
    committees: [
      { name: "Academic Committee", role: "Member" },
      { name: "Marketing and PR Committee", role: "Member" },
    ],
  },
  {
    name: "Representative of the Ahmadiyya Muslim Mission",
    designation: "Board Member",
    committees: [
      { name: "Academic Committee", role: "Member" },
    ],
  },
];

export const leadershipCommittees: LeadershipCommittee[] = [
  {
    name: "Academic Committee",
    chairperson: "Hajia Ayesha Nyantakyewaa Boakye",
    members: [
      "Nana Yiadom Boakye Kanto",
      "Madam Maryam Boakyewaa Boateng",
      "Madam Rahmat Ekua Ansah",
      "Representative of the Ahmadiyya Muslim Mission",
    ],
  },
  {
    name: "Security Committee",
    chairperson: "Nana Yaa Akyere Bruwaa (Corp. Nana Sarpong)",
    members: [
      "Nana Yiadom Boakye Kanto",
      "Madam Henrietta Adjei",
      "Maulvi Hafiz Ismail Adusei",
      "Mr Abdul Samad Issah",
    ],
  },
  {
    name: "Marketing and PR Committee",
    chairperson: "Madam Rachemet Boamah Boakye",
    members: [
      "Nana Yiadom Boakye Kanto",
      "Madam Rahmat Ekua Ansah",
    ],
  },
  {
    name: "Legal and Governance Committee",
    chairperson: "Madam Nana Ama Ghina Boakye",
    members: [
      "Nana Yiadom Boakye Kanto",
      "Madam Henrietta Adjei",
    ],
  },
  {
    name: "Projects Development and Beautification Committee",
    chairperson: "Madam Maryam Boakyewaa Boateng",
    members: [
      "Nana Yiadom Boakye Kanto",
      "Madam Henrietta Adjei",
      "Nana Yaa Akyere Bruwaa (Corp. Nana Sarpong)",
    ],
  },
  {
    name: "Finance Committee",
    chairperson: "Rahmat Boamah Boakye",
    members: [
      "Nana Yiadom Boakye Kanto",
      "Mr Abdul Samad Issah",
    ],
  },
  {
    name: "Audit Committee",
    chairperson: "Rahmat Boamah Boakye",
    members: [
      "Maulvi Hafiz Ismail Adusei",
    ],
  },
];