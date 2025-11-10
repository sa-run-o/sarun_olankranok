import type { PersonalInfo, Stat, SocialLink } from "@/src/types";

export const personalInfo: PersonalInfo = {
  fullName: "Sarun Olankranok",
  firstName: "Sarun",
  lastName: "Olankranok",
  jobTitle: "Full Stack Developer",
  yearsOfExperience: "5+",
  location: "Bangkok, Thailand",
  email: "sarun.olan@gmail.com",
  phone: "+66 66948622778",
  linkedin: "https://www.linkedin.com/in/sarun-olankranok-754080342",
  github: "https://github.com/sa-run-o",
  website: "",

  tagline:
    "Senior Full Stack Developer specializing in React, Node.js, and scalable cloud solutions",

  summary:
    "Senior Full Stack Developer with 5 years of experience, delivering 15+ production web applications. Expertise in React, TypeScript, Node.js, PostgreSQL, and GCP. Strong collaborator with proven track record in team environments, focusing on building high-quality, maintainable code and user-centric solutions.",

  availability: "Open to opportunities",

  resumeUrl: "",
};

export const stats: Stat[] = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Team Projects", value: "100%" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/sa-run-o",
    icon: "github",
    value: "sa-run-o",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sarun-olankranok-754080342",
    icon: "linkedin",
    value: "sarun-olankranok",
  },
  {
    name: "Email",
    url: "mailto:sarun.olan@gmail.com",
    icon: "mail",
    value: "sarun.olan@gmail.com",
  },
  {
    name: "Phone",
    url: "tel:+66948622778",
    icon: "phone",
    value: "+66948622778",
  },
];

export const keywords: string[] = [
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Firestore",
  "GCP",
  "Full Stack Developer",
  "Senior Developer",
  "Bangkok",
  "Thailand",
];
