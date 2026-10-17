import type { Service } from '@/types/service';

export const services: Service[] = [
  // ─── Engineering Vertical ──────────────────────────────────────────────────
  {
    id: 'web-development',
    vertical: 'engineering',
    title: 'Web Development',
    shortDescription:
      'Blazing-fast, scalable web applications built with cutting-edge stacks — from sleek marketing sites to full enterprise platforms.',
    fullDescription:
      'We architect and deliver production-grade web applications end-to-end. Whether you need a pixel-perfect marketing site, a complex SaaS dashboard, or a high-traffic e-commerce platform, our team brings together frontend finesse and backend muscle to ship products that perform.',
    icon: 'Monitor',
    subServices: [
      'Frontend Web Applications (React, Next.js, Vue)',
      'Full-Stack Platforms (Node.js, PostgreSQL, REST/GraphQL APIs)',
      'E-Commerce & CMS Solutions (Shopify, Sanity, Contentful)',
      'Progressive Web Apps (PWA)',
      'Performance & Core Web Vitals Optimization',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Vercel'],
    highlights: [
      'Sub-2s page loads, 95+ Lighthouse scores',
      'Mobile-first, fully responsive at every breakpoint',
      'SEO-optimized architecture out of the box',
      'Scalable from MVP to enterprise grade',
    ],
    ctaLabel: 'Build Your Web App',
  },
  {
    id: 'mobile-development',
    vertical: 'engineering',
    title: 'Mobile App Development',
    shortDescription:
      'Native-quality iOS & Android apps that users love — built with React Native for cross-platform reach without compromise.',
    fullDescription:
      'From concept to App Store, we build polished mobile experiences that feel at home on every device. Using React Native and Expo, we deliver cross-platform apps with native performance, smooth animations, and deep OS integration — camera, biometrics, push notifications, and beyond.',
    icon: 'Smartphone',
    subServices: [
      'iOS App Development (Swift, React Native)',
      'Android App Development (Kotlin, React Native)',
      'Cross-Platform Apps (React Native / Expo)',
      'App Store & Play Store Publishing',
      'Push Notifications & Real-time Features',
      'Offline-first Architecture',
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Redux Toolkit', 'Swift', 'Kotlin'],
    highlights: [
      'Single codebase, dual-platform delivery',
      'Native animations locked at 60fps',
      'Full App Store & Play Store submission support',
      'Integrated analytics, crash reporting, and A/B testing',
    ],
    ctaLabel: 'Build Your Mobile App',
  },
  {
    id: 'ai-ml',
    vertical: 'engineering',
    title: 'AI & Machine Learning',
    shortDescription:
      'From GPT-4 integrations to custom-trained models — we bring AI into your product in ways that actually move the needle.',
    fullDescription:
      'We bridge the gap between state-of-the-art AI research and real-world product value. Whether you need to embed a powerful LLM into your workflow, build a recommendation engine, train a custom image classifier, or automate complex pipelines, our ML engineers deliver solutions that scale.',
    icon: 'Brain',
    subServices: [
      'LLM Integration (OpenAI GPT-4, Claude, Gemini)',
      'Custom Model Training from Scratch',
      'RAG (Retrieval-Augmented Generation) Pipelines',
      'Computer Vision & Image Recognition',
      'Natural Language Processing (NLP)',
      'AI-Powered Automation & Workflow Intelligence',
      'Model Deployment & MLOps',
    ],
    techStack: ['Python', 'PyTorch', 'TensorFlow', 'LangChain', 'OpenAI API', 'Hugging Face', 'FastAPI', 'Docker'],
    highlights: [
      'Custom model training from scratch or fine-tuning',
      'Production-ready MLOps & continuous retraining',
      'Seamless integration into existing products',
      'Responsible AI — bias auditing & explainability',
    ],
    ctaLabel: 'Add AI to Your Product',
  },

  // ─── Creative Vertical ─────────────────────────────────────────────────────
  {
    id: 'design',
    vertical: 'creative',
    title: 'Graphic Design & UI/UX',
    shortDescription:
      'Stunning visual identities and intuitive digital interfaces that convert visitors into customers.',
    fullDescription:
      'Design is strategy made visible. We craft brand identities, UI systems, and user experiences grounded in research and refined through iteration. From logo and brand guidelines to high-fidelity Figma prototypes ready for dev handoff — our design team makes your product unforgettable.',
    icon: 'Palette',
    subServices: [
      'Brand Identity & Logo Design',
      'UI/UX Design for Web & Mobile',
      'Design Systems & Component Libraries',
      'Wireframing & Interactive Prototyping (Figma)',
      'Social Media Graphics & Marketing Collateral',
      'Packaging & Print Design',
    ],
    techStack: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'After Effects', 'Framer', 'Spline'],
    highlights: [
      'User research-driven design decisions',
      'Pixel-perfect Figma files with dev-ready specs',
      'Full brand systems — logo to icon to color to type',
      'A/B-testable UI variants for conversion optimization',
    ],
    ctaLabel: 'Design My Brand',
  },
  {
    id: 'video-media',
    vertical: 'creative',
    title: 'Video Editing & Media',
    shortDescription:
      'High-end video production and editing that makes your brand unforgettable — from social reels to cinematic brand films.',
    fullDescription:
      'In a scroll-heavy world, video is the sharpest weapon in your marketing arsenal. We produce and edit compelling video content — from fast-cut social reels and product explainers to full cinematic brand films and motion-graphics-rich corporate presentations.',
    icon: 'Video',
    subServices: [
      'Brand Films & Cinematic Storytelling',
      'Social Media Reels & Short-Form Content',
      'Product Demo & Explainer Videos',
      'Motion Graphics & 2D/3D Animation',
      'Podcast & Interview Video Production',
      'Color Grading & Sound Design',
    ],
    techStack: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Cinema 4D', 'Audition', 'Capcut Pro'],
    highlights: [
      'Cinema-grade color grading on every delivery',
      'Platform-optimized exports (YouTube, Instagram, TikTok, LinkedIn)',
      'Fast turnaround without quality compromise',
      'Royalty-free music licensing included',
    ],
    ctaLabel: 'Create My Video',
  },
];

export const engineeringServices = services.filter((s) => s.vertical === 'engineering');
export const creativeServices = services.filter((s) => s.vertical === 'creative');
