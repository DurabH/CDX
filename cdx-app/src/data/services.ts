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
      "Responsive websites and web applications shaped around your business needs, from clear service sites to interactive products.",
    fullDescription:
      "We work with modern web tools to build responsive sites and applications. Project scope can range from a business website to a more interactive web product, depending on your needs.",
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
      "Cross-platform mobile app development using React Native and Expo, planned around the features your product needs.",
    fullDescription:
      "We can help shape and build cross-platform mobile applications with React Native and Expo, from early product decisions through implementation.",
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
      "AI and machine-learning prototypes, integrations, and data-driven features scoped to a clear use case.",
    fullDescription:
      "We explore practical AI and machine-learning applications, from integrating language models to building prototypes around a defined dataset or workflow.",
    icon: "Brain",
    subServices: [
      "LLM Integration (OpenAI, Claude, Gemini)",
      "Custom Model Training from Scratch",
      "RAG Pipelines",
      "Computer Vision & Image Recognition",
      "Natural Language Processing (NLP)",
      "AI Automation & Workflow Intelligence",
      "Model Deployment & MLOps",
    ],
    techStack: ["Python", "PyTorch", "TensorFlow", "LangChain", "OpenAI API", "Hugging Face", "FastAPI", "Docker"],
    highlights: [
      "Prototype or fine-tune models where project data supports it",
      "Build and test workflows before planning production use",
      "Connect AI features to an existing product when appropriate",
      "Discuss limitations and responsible use up front",
    ],
    ctaLabel: "Add AI to Your Product",
  },
  {
    id: "design",
    vertical: "creative",
    title: "Graphic Design & UI/UX",
    shortDescription:
      "Graphic design and interface work for businesses that need a clear, consistent visual presence.",
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
      "Video editing and motion graphics for social channels, product explainers, and brand communication.",
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
