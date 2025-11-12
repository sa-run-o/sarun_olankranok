import { TimelineEvent } from "@/src/types/timeline";

export const timelineEvents: TimelineEvent[] = [
  // ============ 2025 ============
  {
    id: "work-2025-1",
    year: 2025,
    month: 11,
    type: "work",
    title: "Senior Full Stack Developer",
    organization: "GoPomelo Co., Ltd",
    location: "Bangkok, Thailand",
    startDate: "Nov 2023",
    endDate: "Present",
    current: true,
    description: "Leading development team and architecting scalable solutions",
    details: {
      position: "Senior Full Stack Developer",
      achievements: [
        "Led team of 3 developers in building scalable Google Maps-based applications",
        "Built internal automation tool that reduced accounting team workload by 70% (450+ reports/month)",
        "Developed chatbot and AI-powered features for client applications (8,000-10,000 registrations/month)",
        "Technical consultant for 3-4 major clients including K-Bank and NECTEC",
        "Conducted workshops, training sessions, and implementation guidance for Google Maps Platform",
        "Speaker at annual Google Maps Platform events hosted by company",
        "Implemented CI/CD pipeline and best practices",
        "Mentored junior developers in code reviews and best practices",
        "Architected and deployed location-based services using Google Maps Platform",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Node.js",
        "Python",
        "PostgreSQL",
        "Firestore",
        "Google Maps API",
        "Docker",
        "Redis",
        "GCP",
      ],
      responsibilities: [
        "Sprint planning and Agile team facilitation",
        "Architecture design and technical decision making",
        "Code review and quality assurance",
        "Cross-functional collaboration with Product and Design teams",
        "Technical mentorship and team leadership",
      ],
    },
  },

  // ============ 2023 ============
  {
    id: "cert-2023-1",
    year: 2023,
    month: 12,
    type: "certification",
    title: "Google Cloud Professional Cloud Architect",
    organization: "Google Cloud",
    startDate: "Dec 2023",
    description:
      "Professional certification for designing and managing Google Cloud solutions",
    details: {
      issuer: "Google Cloud",
      credentialId: "",
      expiryDate: "Oct 2025",
      skills: [
        "Cloud Architecture",
        "GCP Services",
        "Scalability",
        "Security",
        "Infrastructure Design",
      ],
    },
  },
  {
    id: "work-2023-1",
    year: 2023,
    month: 11,
    type: "work",
    title: "Full Stack Developer",
    organization: "GoPomelo Co., Ltd",
    location: "Bangkok, Thailand",
    startDate: "May 2021",
    endDate: "Nov 2023",
    description:
      "Developed and maintained web applications and client projects",
    details: {
      position: "Full Stack Developer",
      achievements: [
        "Built responsive web applications with Google Maps integration for various clients",
        "Developed real-time features and interactive user interfaces",
        "Implemented chatbot and AI features for client projects",
        "Optimized database queries and API performance",
        "Collaborated with team using Agile methodology",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Node.js",
        "Python",
        "Laravel",
        "PHP",
        "MySQL",
        "PostgreSQL",
        "Firestore",
        "Google Maps API",
        "Redis",
        "Git",
      ],
      responsibilities: [
        "Full-stack development from design to deployment",
        "Database design and optimization",
        "Client communication and requirement gathering",
        "Daily standups and sprint retrospectives",
      ],
    },
  },

  // ============ 2021 ============
  {
    id: "work-2021-1",
    year: 2021,
    month: 5,
    type: "work",
    title: "Junior Full Stack Developer",
    organization: "GoPomelo Co., Ltd",
    location: "Bangkok, Thailand",
    startDate: "May 2020",
    endDate: "May 2021",
    description: "Developed client projects and internal tools",
    details: {
      position: "Junior Full Stack Developer",
      achievements: [
        "Built responsive web applications for various clients",
        "Developed task logging web application using React TypeScript",
        "Collaborated with design team using Agile methodology",
        "Participated in code reviews and team meetings",
      ],
      technologies: [
        "Vue.js",
        "React",
        "TypeScript",
        "Laravel",
        "PHP",
        "MySQL",
        "Redis",
        "Git",
      ],
      responsibilities: [
        "Full-stack development from design to deployment",
        "Database design and optimization",
        "Client communication and requirement gathering",
        "Daily standups and sprint retrospectives",
      ],
    },
  },

  // ============ 2020 ============
  {
    id: "edu-2020-1",
    year: 2020,
    month: 6,
    type: "education",
    title: "Bachelor of Engineering",
    organization: "Mae Fah Luang University",
    location: "Chiang Rai, Thailand",
    startDate: "Nov 2016",
    endDate: "Jun 2020",
    description: "Graduated with Bachelor of Engineering degree",
    details: {
      degree: "Bachelor of Engineering",
      field: "Information Communication Engineering",
      honors: "Faculty President (2018-2019)",
    },
  },
  {
    id: "achievement-2020-1",
    year: 2020,
    month: 6,
    type: "achievement",
    title:
      "Published Research Paper at AJCC 2020 (Academic Journal Naresuan University)",
    organization: "Naresuan University",
    startDate: "Jun 2020",
    description:
      "Published academic research paper on IoT and traffic warning systems",
    url: "https://www.sci.nu.ac.th/sciencejournal/index.php/sci/article/view/ID461",
    details: {
      title:
        "Development of warning traffic system using IoT and machine learning",
      type: "Conference Publication",
      description:
        "Research focused on developing intelligent traffic warning systems using IoT sensors and machine learning algorithms for real-time traffic prediction and alert systems.",
    },
  },
  {
    id: "work-2020-1",
    year: 2020,
    month: 1,
    type: "work",
    title: "Junior Developer (Internship)",
    organization: "GoPomelo Co., Ltd",
    location: "Bangkok, Thailand",
    startDate: "Jan 2020",
    endDate: "Apr 2020",
    description: "Internship during semester",
    details: {
      position: "Junior Developer (Intern)",
      achievements: [
        "Developed RESTful APIs for web application",
        "Created task logging web application using React TypeScript",
        "Participated in code reviews and team meetings",
      ],
      technologies: ["TypeScript", "Node.js", "Express", "React", "PostgreSQL"],
      responsibilities: [
        "Design user interface and user experience for web application",
        "Feature development under senior developer guidance",
        "Bug fixes and testing",
        "Documentation writing",
      ],
    },
  },

  // ============ 2018 ============
  {
    id: "achievement-2018-1",
    year: 2018,
    month: 5,
    type: "achievement",
    title: "RDC 2018",
    organization: "Mae Fah Luang University",
    startDate: "May 2018",
    description:
      "Participated in the Robot Design Contest 2018 (RDC 2018), Thailand's national robotics engineering competition organized by MTEC–NSTDA and Chulalongkorn University. Collaborated in a multidisciplinary team to design, build, and test a competition-ready robot under strict rules and time constraints. Contributed to mechanical design, electronics integration, and control software, including on-site debugging. Strengthened skills in teamwork, rapid prototyping, and problem-solving in a high-pressure environment.",
  },
];

// Helper function: Group events by year
export const getEventsByYear = (): Record<number, TimelineEvent[]> => {
  const grouped: Record<number, TimelineEvent[]> = {};

  timelineEvents.forEach((event) => {
    if (!grouped[event.year]) {
      grouped[event.year] = [];
    }
    grouped[event.year].push(event);
  });

  // Sort events within each year by month (descending)
  Object.keys(grouped).forEach((year) => {
    grouped[Number(year)].sort((a, b) => (b.month || 12) - (a.month || 12));
  });

  return grouped;
};

// Helper function: Get all unique years
export const getYears = (): number[] => {
  const years = [...new Set(timelineEvents.map((e) => e.year))];
  return years.sort((a, b) => b - a); // Descending (newest first)
};

// Helper function: Get events by type
export const getEventsByType = (
  type: TimelineEvent["type"]
): TimelineEvent[] => {
  return timelineEvents.filter((e) => e.type === type);
};

// Helper function: Get timeline statistics
export const getTimelineStats = () => {
  const workEvents = getEventsByType("work");
  const educationEvents = getEventsByType("education");
  const certificationEvents = getEventsByType("certification");

  // Calculate years of experience (from first work to now)
  const workYears = workEvents.map((e) => e.year);
  const totalYearsOfExperience =
    workYears.length > 0
      ? new Date().getFullYear() - Math.min(...workYears)
      : 0;

  return {
    totalYearsOfExperience,
    totalCompanies: new Set(workEvents.map((e) => e.organization)).size,
    totalDegrees: educationEvents.length,
    totalCertifications: certificationEvents.length,
  };
};
