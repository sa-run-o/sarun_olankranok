export interface Skill {
  name: string;
  level: number; // 0-100
  years: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  level: "Expert" | "Advanced" | "Intermediate";
  skills: Skill[];
  highlights?: string[];
}
