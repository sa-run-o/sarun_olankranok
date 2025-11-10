export interface PersonalInfo {
  fullName: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  yearsOfExperience: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  website: string;
  tagline: string;
  summary: string;
  availability: string;
  resumeUrl: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "mail" | "phone" | "twitter" | "website";
  value: string;
}
