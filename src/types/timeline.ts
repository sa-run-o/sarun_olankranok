export type TimelineEventType =
  | "work"
  | "education"
  | "certification"
  | "course"
  | "achievement";

export interface WorkDetails {
  position: string;
  achievements: string[];
  technologies: string[];
  responsibilities?: string[];
}

export interface EducationDetails {
  degree: string;
  field: string;
  gpa?: string;
  honors?: string;
  relevantCourses?: string[];
}

export interface CertificationDetails {
  issuer: string;
  credentialId?: string;
  expiryDate?: string;
  skills?: string[];
}

export interface CourseDetails {
  platform: string;
  instructor?: string;
  duration?: string;
  skills?: string[];
  certificate?: boolean;
}

export interface AchievementDetails {
  title: string;
  type: string;
  description: string;
}

export interface TimelineEvent {
  id: string;
  year: number;
  month?: number; // 1-12, optional for more precision
  type: TimelineEventType;
  title: string;
  organization: string;
  description?: string;
  location?: string;
  current?: boolean; // for ongoing work/education
  startDate?: string; // "Jan 2020" format for display
  endDate?: string; // "Dec 2022" or "Present"
  url?: string; // Optional URL for achievements, certifications, etc.
  details?:
    | WorkDetails
    | EducationDetails
    | CertificationDetails
    | CourseDetails
    | AchievementDetails;
}

export interface TimelineStats {
  totalYearsOfExperience: number;
  totalCompanies: number;
  totalDegrees: number;
  totalCertifications: number;
}
