import type { SkillCategory } from "@/src/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Google Maps Platform & Location Services",
    icon: "🗺️",
    level: "Expert",
    skills: [
      { name: "Google Maps JavaScript API", level: 95, years: "5+" },
      { name: "Places API", level: 95, years: "5+" },
      { name: "Geocoding API", level: 90, years: "5+" },
      { name: "Directions API", level: 90, years: "5+" },
      { name: "Distance Matrix API", level: 85, years: "4+" },
    ],
    highlights: [
      "Built enterprise mapping solutions for banking sector (15K+ monthly users)",
      "Technical consultant for 3-4 major clients (K-Bank, NECTEC)",
      "Conducted workshops, training, and implementation guidance",
      "Speaker at annual Google Maps Platform events (30+ attendees)",
      "Delivered location-based services serving thousands of users",
    ],
  },
  {
    title: "Frontend Development",
    icon: "💻",
    level: "Expert",
    skills: [
      { name: "React / Next.js", level: 95, years: "5+" },
      { name: "TypeScript", level: 95, years: "5+" },
      { name: "JavaScript (ES6+)", level: 95, years: "5+" },
      { name: "HTML5 / CSS3", level: 90, years: "5+" },
      { name: "Tailwind CSS", level: 90, years: "3+" },
      { name: "State Management", level: 85, years: "5+" },
    ],
    highlights: [
      "Built 15+ production web applications",
      "Expert in performance optimization",
      "Responsive design and mobile-first approach",
    ],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    level: "Expert",
    skills: [
      { name: "Node.js", level: 90, years: "5+" },
      { name: "Express", level: 90, years: "5+" },
      { name: "Python", level: 80, years: "3+" },
      { name: "RESTful API Design", level: 95, years: "5+" },
      { name: "PHP / Laravel", level: 85, years: "4+" },
      { name: "API Integration", level: 90, years: "5+" },
      { name: "OAuth 2.0", level: 85, years: "3+" },
      { name: "ExcelJS", level: 80, years: "2+" },
    ],
    highlights: [
      "Built automation tool reducing workload by 70% (450+ reports/month)",
      "Xero API integration expert with OAuth 2.0",
      "API security and optimization",
      "Excel automation with ExcelJS",
    ],
  },
  {
    title: "Database & Caching",
    icon: "🗄️",
    level: "Advanced",
    skills: [
      { name: "PostgreSQL", level: 90, years: "5+" },
      { name: "Firestore", level: 85, years: "4+" },
      { name: "MySQL", level: 85, years: "4+" },
      { name: "Redis", level: 80, years: "3+" },
    ],
    highlights: [
      "Database design and optimization",
      "Query performance tuning",
      "Real-time data synchronization",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    level: "Advanced",
    skills: [
      { name: "Google Cloud Platform", level: 90, years: "4+" },
      { name: "Docker", level: 85, years: "3+" },
      { name: "CI/CD Pipelines", level: 80, years: "3+" },
      { name: "Cloud Run", level: 85, years: "3+" },
      { name: "Cloud Functions", level: 80, years: "3+" },
    ],
    highlights: [
      "GCP Professional Cloud Architect certified",
      "Deployed scalable cloud infrastructure",
      "Automated deployment workflows",
    ],
  },
  {
    title: "AI & Chatbot Development",
    icon: "🤖",
    level: "Intermediate",
    skills: [
      { name: "Dialogflow", level: 80, years: "2+" },
      { name: "Chatbot Integration", level: 85, years: "2+" },
      { name: "Natural Language Processing", level: 70, years: "2+" },
    ],
    highlights: [
      "Built customer service chatbots",
      "FAQ automation systems",
      "Serial number registration bots",
    ],
  },
  {
    title: "Methodologies & Tools",
    icon: "🛠️",
    level: "Expert",
    skills: [
      { name: "Agile / Scrum", level: 95, years: "5+" },
      { name: "Git / GitHub", level: 95, years: "5+" },
      { name: "Code Review", level: 90, years: "5+" },
      { name: "Technical Documentation", level: 85, years: "5+" },
      { name: "Team Leadership", level: 85, years: "2+" },
      { name: "Google Apps Script", level: 75, years: "2+" },
    ],
    highlights: [
      "Led Agile teams of 3 developers",
      "Sprint planning and facilitation",
      "Mentored junior developers",
      "Cross-functional collaboration",
    ],
  },
];
