import type { Project } from "@/src/types";

export const projects: Project[] = [
  {
    id: "kbank-branch-locator",
    title: "K-Bank Branch Locator",
    slug: "kbank-branch-locator",
    category: "Full Stack",
    featured: true,
    tagline:
      "Enterprise mapping solution for banking sector with Google Maps Platform",
    thumbnail: "/projects/kbank-locator.png",
    screenshots: [
      "/projects/kbank-1.png",
      "/projects/kbank-2.png",
      "/projects/kbank-3.png",
    ],
    demoUrl: "https://mapservice.kasikornbank.com/th/app",

    overview:
      "Developed a comprehensive Google Maps-based application for locating K-Bank branches and ATMs with advanced filtering by transaction types. The public web application includes an admin portal for bank staff to manage branch data, serving 15,000+ users monthly.",

    problem:
      "Bank customers struggled to find nearby branches and ATMs that support specific transaction types (deposit, withdrawal, exchange, etc.), leading to wasted trips and customer dissatisfaction.",

    solution:
      "Built a full-stack mapping application using Google Maps JavaScript API with Places API integration, custom markers, and real-time filtering. Implemented admin portal for bank staff to update locations and services.",

    role: "Lead Full Stack Developer",
    teamSize: 3,
    duration: "4 months",
    year: 2024,

    responsibilities: [
      "Designed and implemented Google Maps integration architecture",
      "Built public-facing branch locator with advanced filtering",
      "Developed admin portal for bank staff to manage branch data",
      "Implemented geolocation and directions features",
      "Optimized map performance for thousands of markers",
    ],

    challenges: [
      {
        challenge:
          "Rendering 500+ branch markers without performance degradation",
        solution:
          "Implemented marker clustering and viewport-based loading using Google Maps JavaScript API",
        result:
          "Achieved smooth map interactions with <100ms marker rendering time",
      },
      {
        challenge: "Complex transaction-based filtering for branches",
        solution:
          "Built dynamic filtering system with PostgreSQL full-text search and Google Places API",
        result: "Users find exact branch types in <2 seconds with 99% accuracy",
      },
      {
        challenge: "Real-time distance calculation for multiple branches",
        solution:
          "Integrated Distance Matrix API with caching layer using Redis",
        result: "Reduced API calls by 80% while maintaining real-time accuracy",
      },
    ],

    techStack: {
      frontend: {
        core: ["React 18", "TypeScript", "Next.js 14"],
        stateManagement: ["Zustand", "React Query"],
        ui: ["Tailwind CSS", "Shadcn/ui"],
        maps: [
          "Google Maps JavaScript API",
          "Places API",
          "Geocoding API",
          "Distance Matrix API",
        ],
        testing: ["Jest", "React Testing Library"],
      },
      backend: {
        runtime: ["Node.js 20"],
        framework: ["Express"],
        api: ["REST API"],
        testing: ["Jest", "Supertest"],
      },
      database: {
        primary: ["PostgreSQL 15"],
        cache: ["Redis 7"],
      },
      infrastructure: {
        cloud: ["Google Cloud Platform (Cloud Run, Cloud SQL)"],
        containers: ["Docker"],
        cicd: ["Cloud Build"],
        monitoring: ["Google Cloud Monitoring"],
      },
    },

    impact: {
      users: "15,000+ monthly users",
      performance: "99.9% uptime, <2s search results",
      business: "Reduced customer support calls by 40%",
      technical: "Handles 15K+ searches monthly with map API optimization",
    },

    keyFeatures: [
      "Interactive Google Maps with branch/ATM markers",
      "Transaction-based filtering (deposit, withdrawal, exchange)",
      "Real-time distance calculation and directions",
      "Search by address with autocomplete",
      "Branch details with hours and contact info",
      "Admin portal for data management",
      "Mobile responsive design",
      "Marker clustering for performance",
    ],

    learnings: [
      "Google Maps API optimization for large datasets",
      "Importance of caching strategies for geolocation APIs",
      "Balancing real-time accuracy with API cost optimization",
    ],
  },

  {
    id: "nectec-agri-maps",
    title: "NECTEC Agricultural Mapping System",
    slug: "nectec-agri-maps",
    category: "Full Stack",
    featured: true,
    tagline:
      "Agricultural data visualization platform for NSTDA using Google Maps Platform",
    thumbnail: "/projects/nectec-agri.png",
    screenshots: [
      "/projects/nectec-1.png",
      "/projects/nectec-2.png",
      "/projects/nectec-3.png",
    ],

    overview:
      "Developed a comprehensive agricultural mapping system for NECTEC (National Electronics and Computer Technology Center) under NSTDA to visualize crop cultivation data on Google Maps Platform. The public web application enables citizens to easily access and understand agricultural information through interactive map visualization.",

    problem:
      "Agricultural cultivation data was scattered across multiple sources and difficult for the public to access and understand, limiting transparency and data-driven decision making in the agricultural sector.",

    solution:
      "Built a full-stack mapping application using Google Maps JavaScript API to aggregate and display agricultural cultivation data with interactive visualizations, making complex agricultural information accessible to the general public.",

    role: "Full Stack Developer",
    teamSize: 2,
    year: 2022,

    responsibilities: [
      "Designed and implemented Google Maps integration for agricultural data visualization",
      "Built data aggregation system for multiple agricultural data sources",
      "Developed interactive map features with custom markers and overlays",
      "Implemented filtering and search functionality for crop types and regions",
      "Optimized map performance for large agricultural datasets",
    ],

    challenges: [
      {
        challenge:
          "Visualizing large agricultural datasets across multiple provinces without performance issues",
        solution:
          "Implemented data clustering, viewport-based loading, and polygon simplification for efficient rendering",
        result:
          "Achieved smooth map interactions with thousands of agricultural zones displayed",
      },
      {
        challenge:
          "Making complex agricultural data understandable for general public",
        solution:
          "Created intuitive data layers, color-coded zones, and informative tooltips with clear legends",
        result:
          "Improved data accessibility with user-friendly visualization interface",
      },
      {
        challenge: "Integrating data from multiple agricultural databases",
        solution:
          "Built data transformation pipeline to normalize and aggregate data from various sources",
        result:
          "Successfully unified diverse agricultural data into single platform",
      },
    ],

    techStack: {
      frontend: {
        core: ["React 18", "TypeScript", "Next.js 14"],
        ui: ["Tailwind CSS", "Shadcn/ui"],
        maps: ["Google Maps JavaScript API", "Geocoding API", "Data Layer API"],
        stateManagement: ["React Query"],
      },
      backend: {
        runtime: ["Node.js"],
        framework: ["Express"],
        api: ["RESTful API"],
      },
      database: {
        primary: ["PostgreSQL"],
        cache: ["Redis"],
      },
      infrastructure: {
        cloud: ["Google Cloud Platform (Cloud Run, Cloud SQL)"],
        containers: ["Docker"],
      },
    },

    impact: {
      users: "Public access for citizens and researchers",
      performance: "Efficient rendering of large agricultural datasets",
      business:
        "Improved agricultural data transparency and accessibility for NSTDA",
      technical: "Unified agricultural data visualization platform",
    },

    keyFeatures: [
      "Interactive Google Maps with agricultural zone visualization",
      "Crop type filtering and search functionality",
      "Regional cultivation data display",
      "Custom data layers and overlays",
      "Color-coded visualization by crop types",
      "Informative tooltips and legends",
      "Mobile responsive design",
      "Data aggregation from multiple sources",
    ],

    learnings: [
      "Data visualization techniques for complex agricultural information",
      "Google Maps Data Layer API for polygon rendering",
      "Performance optimization for large geospatial datasets",
      "Importance of user-friendly data presentation for public platforms",
    ],
  },

  {
    id: "ktc-chatbot",
    title: "KTC Bank Chatbot & Voice Bot",
    slug: "ktc-chatbot",
    category: "AI/Chatbot",
    featured: true,
    tagline:
      "Intelligent chatbot and voice bot for credit card services and transactions",
    thumbnail: "/projects/ktc-chatbot.png",

    overview:
      "Developed comprehensive chatbot and voice bot solution for KTC Bank to provide credit card information, recommendations, and enable transaction processing. Built using Dialogflow with Python fulfillment to handle customer inquiries and automate banking services through conversational AI.",

    problem:
      "KTC Bank customers needed convenient access to credit card information and services without calling customer service or visiting branches, while the bank needed to reduce operational costs and improve service availability.",

    solution:
      "Created intelligent conversational AI system using Dialogflow for natural language understanding with Python-based fulfillment for business logic, supporting both text-based chatbot and voice bot interfaces for credit card services and transaction processing.",

    role: "Full Stack Developer & AI Integration Specialist",
    teamSize: 6,
    year: 2021,

    responsibilities: [
      "Designed Dialogflow conversation flows for credit card services",
      "Built Python-based fulfillment backend for transaction processing",
      "Integrated with KTC banking systems for real-time data",
      "Developed both chatbot and voice bot interfaces",
      "Implemented security measures for transaction authentication",
      "Created admin dashboard for bot management and analytics",
    ],

    challenges: [
      {
        challenge:
          "Handling complex banking transactions through conversational interface",
        solution:
          "Designed multi-step conversation flows with validation and confirmation steps using Dialogflow contexts",
        result:
          "Successfully enabled secure transaction processing through natural conversation",
      },
      {
        challenge: "Integrating with legacy banking systems securely",
        solution:
          "Built secure API gateway with Python fulfillment for authentication and data validation",
        result:
          "Zero security incidents with seamless banking system integration",
      },
      {
        challenge:
          "Supporting both text chatbot and voice bot with consistent experience",
        solution:
          "Implemented unified conversation logic with optimized responses for both modalities",
        result: "Consistent user experience across text and voice interactions",
      },
    ],

    techStack: {
      frontend: {
        core: ["React", "TypeScript"],
        ui: ["Tailwind CSS"],
      },
      backend: {
        runtime: ["Python"],
        framework: ["Flask"],
        ai: ["Dialogflow CX", "Natural Language Processing"],
        fulfillment: ["Python Webhooks"],
      },
      database: {
        primary: ["PostgreSQL"],
      },
      infrastructure: {
        cloud: ["Google Cloud Platform (Cloud Functions, Cloud Run)"],
      },
    },

    impact: {
      users: "Credit card customers via website interface",
      performance: "Real-time response with secure transaction processing",
      business:
        "Reduced customer service costs and improved service availability",
      technical:
        "Unified conversational AI for both text and voice interactions",
    },

    keyFeatures: [
      "Credit card information and recommendations",
      "Transaction processing through conversation",
      "Both chatbot and voice bot interfaces",
      "Credit card application guidance",
      "Account inquiry and balance checking",
      "Payment reminders and notifications",
      "Multi-intent conversation handling",
      "Secure authentication and authorization",
      "Admin dashboard for bot management",
    ],

    learnings: [
      "Dialogflow CX for complex conversation flows",
      "Python fulfillment development for banking integrations",
      "Security best practices for conversational banking",
      "Voice bot optimization for natural speech interactions",
      "Balancing automation with human escalation",
    ],
  },

  {
    id: "accounting-portal",
    title: "Accounting Portal - Xero API Automation",
    slug: "accounting-portal",
    category: "Full Stack",
    featured: true,
    tagline: "Automated accounting system reducing workload by 70%",
    thumbnail: "/projects/accounting-portal.png",

    overview:
      "Built an automation tool integrating Xero API to generate Excel reports and store them in Google Drive, dramatically reducing manual accounting work for 5-person team. Achieved 70% workload reduction by automating 450+ reports monthly.",

    problem:
      "Accounting team spent hours manually exporting Xero data, formatting Excel reports, and organizing files in Google Drive, processing 450+ documents monthly with errors and inefficiency.",

    solution:
      "Developed automated portal that fetches Xero data via API, generates formatted Excel reports using ExcelJS templates, and automatically organizes files in Google Drive with proper folder structure (SharedDrive/{document_type}/{file}).",

    role: "Full Stack Developer",
    teamSize: 2,
    duration: "2 months",
    year: 2023,

    responsibilities: [
      "Integrated Xero API with OAuth 2.0 authentication for financial data extraction",
      "Built Excel generation system with ExcelJS and custom templates",
      "Implemented Google Drive API for automated file storage and organization",
      "Created user-friendly portal for report management",
      "Set up scheduled jobs for automated report generation",
    ],

    challenges: [
      {
        challenge: "Complex Xero API authentication and token refresh",
        solution:
          "Implemented OAuth 2.0 flow with automatic token refresh and secure credential storage",
        result: "Zero authentication failures, seamless user experience",
      },
      {
        challenge: "Generating complex Excel reports with dynamic formatting",
        solution:
          "Built template system using ExcelJS with conditional formatting and formulas",
        result: "Pixel-perfect reports matching accountant requirements",
      },
      {
        challenge:
          "Manual process taking 10+ hours per week for 450+ reports monthly",
        solution:
          "Automated entire workflow from data fetch to Drive upload with folder structure organization",
        result: "70% workload reduction, reports generated in <5 minutes",
      },
    ],

    techStack: {
      frontend: {
        core: ["React 18", "TypeScript", "Next.js 14"],
        ui: ["Tailwind CSS", "Shadcn/ui"],
        stateManagement: ["React Query"],
      },
      backend: {
        runtime: ["Node.js"],
        framework: ["Express"],
        api: ["Xero API", "Google Drive API"],
      },
      database: {
        primary: ["PostgreSQL"],
      },
      infrastructure: {
        cloud: ["GCP Cloud Run"],
        containers: ["Docker"],
      },
    },

    impact: {
      users: "5-person accounting team",
      performance: "Reports generated in <5 minutes",
      business:
        "70% workload reduction, 10+ hours saved weekly, 450+ reports automated monthly",
      technical: "450+ reports generated monthly with zero errors",
    },

    keyFeatures: [
      "Xero API integration with OAuth 2.0",
      "Automated Excel report generation using ExcelJS",
      "Google Drive automatic file organization (SharedDrive structure)",
      "Scheduled report generation",
      "Custom report templates",
      "User-friendly admin interface",
    ],

    learnings: [
      "Third-party API integration best practices",
      "Excel automation at scale",
      "Importance of error handling in automated workflows",
    ],
  },

  {
    id: "mahajak-chatbot",
    title: "MAHAJAK Customer Service Chatbot",
    slug: "mahajak-chatbot",
    category: "AI/Chatbot",
    featured: true,
    tagline: "Dialogflow-powered chatbot for customer service automation",
    thumbnail: "/projects/mahajak-chatbot.png",

    overview:
      "Built an intelligent chatbot using Dialogflow for MAHAJAK customer service, FAQ automation, and product serial number registration. Handles customer inquiries 24/7 with natural language understanding in Thai and English, processing 8,000-10,000 customer and serial number registrations monthly across multiple platforms.",

    problem:
      "Customer service team overwhelmed with repetitive inquiries about products, FAQs, and serial number registration across multiple channels, leading to long response times and high support costs.",

    solution:
      "Developed Dialogflow-based chatbot with bilingual natural language processing (Thai/English) integrated across LINE, website widget, and Facebook Messenger to handle common queries, FAQ lookups, and automated customer and serial number registration workflows.",

    role: "Full Stack Developer & AI Integration Specialist",
    teamSize: 2,
    duration: "3 months",
    year: 2023,

    responsibilities: [
      "Designed Dialogflow intents and conversation flows for Thai and English",
      "Built webhook backend for custom logic and database integration",
      "Integrated with product database for serial number validation",
      "Developed FAQ management system",
      "Implemented chat widget for LINE, website, and Facebook Messenger",
    ],

    challenges: [
      {
        challenge: "Understanding diverse customer query variations",
        solution:
          "Trained Dialogflow with 500+ intent variations and implemented fallback flows",
        result: "Achieved 85% intent recognition accuracy",
      },
      {
        challenge: "Serial number validation and registration workflow",
        solution:
          "Built custom webhook with PostgreSQL integration for validation and storage",
        result:
          "Automated 90% of customer and serial number registration requests with <2 second response",
      },
    ],

    techStack: {
      frontend: {
        core: ["React", "TypeScript"],
        ui: ["Tailwind CSS"],
      },
      backend: {
        runtime: ["Node.js"],
        framework: ["Express"],
        ai: ["Dialogflow ES", "Natural Language Processing"],
      },
      database: {
        primary: ["PostgreSQL"],
      },
      infrastructure: {
        cloud: ["GCP Cloud Functions"],
      },
    },

    impact: {
      users: "1,000+ monthly conversations across 3 platforms",
      performance: "85% intent recognition, <2s response time",
      business: "Reduced support tickets by 60%",
      technical:
        "8,000-10,000 customer and serial number registrations automated monthly",
    },

    keyFeatures: [
      "Natural language understanding with Dialogflow",
      "Bilingual support (Thai and English)",
      "Multi-platform deployment (LINE, Website Widget, Facebook Messenger)",
      "FAQ automation with context awareness",
      "Customer registration and onboarding",
      "Product serial number validation and registration",
      "Automated registration workflows (8K-10K monthly)",
      "Fallback to human agent",
      "Chat history and analytics",
    ],

    learnings: [
      "Dialogflow intent design and training best practices",
      "Balancing automation with human escalation",
      "Importance of continuous training with real user queries",
    ],
  },

  {
    id: "clta-asana-automation",
    title: "CLTA - Calendar to Asana Automation",
    slug: "clta-asana-automation",
    category: "Automation",
    featured: false,
    tagline:
      "Personal productivity tool automating task creation from Google Calendar",
    thumbnail: "/projects/clta.png",
    githubUrl: "https://github.com/sa-run-o/clta",

    overview:
      "Personal project using Google Apps Script to automatically create Asana tasks by reading Google Calendar events, eliminating manual task entry and ensuring calendar-task synchronization.",

    problem:
      "Manually duplicating calendar events into Asana tasks was time-consuming and error-prone, often leading to missed tasks.",

    solution:
      "Developed Apps Script that monitors Google Calendar, parses event details, and automatically creates corresponding Asana tasks with proper formatting and due dates.",

    role: "Solo Developer",
    teamSize: 1,
    duration: "1 month",
    year: 2022,

    responsibilities: [
      "Built Google Apps Script automation",
      "Integrated Asana API for task creation",
      "Implemented event parsing logic",
      "Set up time-driven triggers for automation",
    ],

    challenges: [
      {
        challenge: "Parsing diverse calendar event formats",
        solution:
          "Implemented regex patterns and custom parsing logic for consistent extraction",
        result: "Successfully parses 95% of event formats",
      },
      {
        challenge: "Avoiding duplicate task creation",
        solution:
          "Built tracking system using Script Properties to monitor processed events",
        result: "Zero duplicate tasks created",
      },
    ],

    techStack: {
      frontend: {
        core: [],
      },
      backend: {
        runtime: ["Google Apps Script"],
        api: ["Google Calendar API", "Asana API"],
      },
      database: {
        primary: [],
      },
      infrastructure: {
        cloud: ["Google Apps Script Platform"],
      },
    },

    impact: {
      users: "Personal use",
      performance: "Processes events in <5 seconds",
      business: "Saves 30+ minutes weekly on manual task entry",
      technical: "100+ tasks automated monthly",
    },

    keyFeatures: [
      "Automatic Google Calendar monitoring",
      "Asana task creation with proper formatting",
      "Event parsing and data extraction",
      "Time-driven automation triggers",
      "Duplicate prevention",
    ],

    learnings: [
      "Google Apps Script capabilities and limitations",
      "API integration patterns",
      "Importance of idempotency in automation",
    ],
  },
];

// Helper function to get featured projects
export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

// Helper function to get project by slug
export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
