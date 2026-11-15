export type ServiceVertical = "engineering" | "creative";

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  techStack: string[];
  highlights: string[];
  ctaLabel: string;
  vertical: ServiceVertical;
  subServices?: string[];
}

export const services: Service[] = [
  {
    id: "web-development",
    vertical: "engineering",
    title: "Web Development",
    shortDescription:
      "Responsive websites and web applications for personal projects, startups, and organizations—from a focused portfolio to an interactive product.",
    fullDescription:
      "We plan and build responsive websites and web applications for individuals, startups, and organizations. The scope can range from a personal portfolio or information site to a more interactive product, based on the people using it and the goal it needs to serve.",
    icon: "Monitor",
    subServices: [
      "Frontend Web Applications (React, Next.js, Vue)",
      "Full-Stack Platforms (Node.js, PostgreSQL, REST/GraphQL APIs)",
      "E-Commerce & CMS Solutions",
      "Progressive Web Apps (PWA)",
      "Performance & Core Web Vitals Optimization",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Vercel"],
    highlights: [
      "Responsive layouts for desktop and mobile",
      "Performance-conscious pages and assets",
      "Search-friendly structure and metadata",
      "Scope planned around your project needs",
    ],
    ctaLabel: "Build Your Web App",
  },
  {
    id: "mobile-development",
    vertical: "engineering",
    title: "Mobile App Development",
    shortDescription:
      "Cross-platform apps for personal ventures, startup products, and organizations, scoped around a clear user need and essential workflows.",
    fullDescription:
      "We help shape and build cross-platform applications with React Native and Expo, from early product decisions through implementation. We agree the essential user flows and platform requirements before expanding features.",
    icon: "Smartphone",
    subServices: [
      "iOS App Development (Swift, React Native)",
      "Android App Development (Kotlin, React Native)",
      "Cross-Platform Apps (React Native / Expo)",
      "App Store & Play Store Publishing",
      "Push Notifications & Real-time Features",
      "Offline-first Architecture",
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Firebase", "Redux Toolkit", "Swift", "Kotlin"],
    highlights: [
      "One shared codebase for iOS and Android",
      "Interfaces designed for mobile use",
      "Guidance through app publishing requirements",
      "Analytics and testing considered where appropriate",
    ],
    ctaLabel: "Build Your Mobile App",
  },
  {
    id: "ai-ml",
    vertical: "engineering",
    title: "AI & Machine Learning",
    shortDescription:
      "AI/ML prototypes for document search, image classification, or workflow automation—scoped to a real task and tested against available data before custom training.",
    fullDescription:
      "We start with the task, available data, and practical constraints—not an assumption that a model is needed. A project may use an existing model or API, a focused prototype, or custom training when the data and requirements justify it. We discuss evaluation, privacy, limitations, and running costs before recommending production work.",
    icon: "Brain",
    subServices: [
      "LLM Integration (OpenAI, Claude, Gemini)",
      "Document Search & Retrieval (RAG)",
      "Image Classification & Computer Vision Prototypes",
      "Custom Training or Fine-Tuning When Justified",
      "Natural Language Processing (NLP)",
      "Workflow Automation with Model/API Integrations",
      "Prototype Evaluation & Integration",
    ],
    techStack: ["Python", "PyTorch", "TensorFlow", "LangChain", "OpenAI API", "Hugging Face", "FastAPI", "Docker"],
    highlights: [
      "Define one concrete task and how success will be evaluated",
      "Check data quality, privacy, limitations, and cost before training",
      "Prototype before committing to a production model",
      "Recommend conventional software or automation when it is a better fit",
    ],
    ctaLabel: "Add AI to Your Product",
  },
  {
    id: "design",
    vertical: "creative",
    title: "Graphic Design & UI/UX",
    shortDescription:
      "Brand identity, interface design, and graphics for individuals, products, and organizations that need a coherent visual presence.",
    fullDescription:
      "We create visual identity, interface, and campaign design. Depending on the brief, this can include logo concepts, brand guidance, social graphics, and Figma layouts for development.",
    icon: "Palette",
    subServices: [
      "Brand Identity & Logo Design",
      "UI/UX Design for Web & Mobile",
      "Design Systems & Component Libraries",
      "Wireframing & Interactive Prototyping (Figma)",
      "Social Media Graphics & Marketing Collateral",
      "Packaging & Print Design",
    ],
    techStack: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "After Effects", "Framer", "Spline"],
    highlights: [
      "Logo and visual identity design",
      "Web and mobile interface layouts",
      "Design files prepared for development handoff",
      "Social graphics and campaign materials",
    ],
    ctaLabel: "Design My Brand",
  },
  {
    id: "video-media",
    vertical: "creative",
    title: "Video Editing & Media",
    shortDescription:
      "Video editing and motion graphics for creators, products, campaigns, and organizations.",
    fullDescription:
      "We edit video and motion content for social media, product explainers, and brand communication. The format and production scope are agreed around each project.",
    icon: "Video",
    subServices: [
      "Brand Films & Cinematic Storytelling",
      "Social Media Reels & Short-Form Content",
      "Product Demo & Explainer Videos",
      "Motion Graphics & 2D/3D Animation",
      "Podcast & Interview Video Production",
      "Color Grading & Sound Design",
    ],
    techStack: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D", "Audition", "Capcut Pro"],
    highlights: [
      "Short-form and longer-form video edits",
      "Motion graphics where they suit the brief",
      "Exports prepared for agreed platforms",
      "Music and asset licensing discussed per project",
    ],
    ctaLabel: "Create My Video",
  },
];

export const engineeringServices = services.filter(
  (service) => service.vertical === "engineering"
);

export const creativeServices = services.filter(
  (service) => service.vertical === "creative"
);
