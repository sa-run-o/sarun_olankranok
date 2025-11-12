export interface Challenge {
  challenge: string;
  solution: string;
  result: string;
}

export interface TechStack {
  frontend: {
    core: string[];
    [key: string]: string[];
  };
  backend: {
    [key: string]: string[];
  };
  database: {
    [key: string]: string[];
  };
  infrastructure: {
    [key: string]: string[];
  };
}

export interface ProjectImpact {
  users?: string;
  performance?: string;
  business?: string;
  technical?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  featured: boolean;
  tagline: string;
  thumbnail: string;
  screenshots?: string[];
  demoUrl?: string;
  githubUrl?: string;
  overview: string;
  problem?: string;
  solution?: string;
  role: string;
  teamSize: number;
  duration?: string;
  year: number;
  responsibilities: string[];
  challenges?: Challenge[];
  techStack: TechStack;
  impact: ProjectImpact;
  keyFeatures?: string[];
  learnings?: string[];
}
