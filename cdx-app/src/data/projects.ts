import type { PortfolioProject, ProjectMedia } from "@/types/project";

const gymImage = (file: string, title: string): ProjectMedia => ({
  type: "image",
  src: `/images/portfolio/gym-website/${file}`,
  title,
  alt: title,
});

const eventImage = (file: string, title: string): ProjectMedia => ({
  type: "image",
  src: `/images/portfolio/eventbooking-website/${file}`,
  title,
  alt: title,
});

const logoImage = (file: string, title: string): ProjectMedia => ({
  type: "image",
  src: `/images/portfolio/logo-designs/${file}`,
  title,
  alt: title,
});

const posterImage = (file: string, title: string): ProjectMedia => ({
  type: "image",
  src: `/images/portfolio/poster-designs/${file}`,
  title,
  alt: title,
});

export const projects: PortfolioProject[] = [
  {
    id: "gym-website",
    title: "Muscle Up Gym",
    category: "Gym website",
    vertical: "web",
    description:
      "People choosing a gym need to know what is available, who can help them, and how to get started. This site brings membership, training, and trainer information together to help prospective members make that decision.",
    highlights: [
      "Review membership options, training services, and trainers",
      "Preview the facilities and training experience in the gallery",
      "Move directly from exploring the gym to joining",
    ],
    repositoryUrl: "https://github.com/RajaWaleed-101/Gym-website",
    liveUrl: "https://rajawaleed-101.github.io/Gym-website/",
    coverImage: "/images/portfolio/gym-website/website-preview.png",
    coverAlt: "Screenshot of the Muscle Up Gym website",
    media: [
      gymImage("website-preview.png", "Muscle Up Gym website preview"),
      gymImage("ahmed.jpeg", "Trainer portrait"),
      gymImage("ali-raza.jpeg", "Trainer portrait"),
      gymImage("building-programs.jpeg", "Training program"),
      gymImage("cardio-training.jpeg", "Cardio training"),
      gymImage("cardio.jpeg", "Cardio workout"),
      gymImage("class.jpeg", "Group fitness class"),
      gymImage("equipment.jpeg", "Gym equipment"),
      gymImage("flex.jpeg", "Flex training area"),
      gymImage("group-classes.jpeg", "Group training"),
      gymImage("gym.jpeg", "Gym interior"),
      gymImage("hassan.jpeg", "Trainer portrait"),
      gymImage("injury-rehab.jpeg", "Injury rehabilitation"),
      gymImage("luxury.jpeg", "Gym interior"),
      gymImage("maria.jpeg", "Trainer portrait"),
      gymImage("motivation.jpeg", "Gym motivation area"),
      gymImage("nutrition.jpeg", "Nutrition service"),
      gymImage("personal-trainer.jpeg", "Personal training"),
      gymImage("ropes.jpeg", "Rope training"),
      gymImage("sana.jpeg", "Trainer portrait"),
      gymImage("strength.jpeg", "Strength training"),
      gymImage("tire.jpeg", "Tire training"),
      gymImage("training.jpeg", "Gym training"),
      gymImage("weight.jpeg", "Weight training"),
      gymImage("workout.jpeg", "Workout area"),
      gymImage("zara.jpeg", "Trainer portrait"),
    ],
  },
  {
    id: "eventbooking-website",
    title: "EventSphere",
    category: "Event booking website",
    vertical: "web",
    description:
      "Discovering an event often means checking multiple sources for dates, venues, and ticket details. EventSphere brings upcoming events and their key information together, helping visitors find an experience and take the next step toward booking.",
    highlights: [
      "Find events across music, art, technology, and more",
      "Review dates, venues, and event details while browsing",
      "Follow a clear path from discovering an event to reserving tickets",
    ],
    repositoryUrl: "https://github.com/RajaWaleed-101/EventBooking-Website",
    liveUrl: "https://rajawaleed-101.github.io/EventBooking-Website/",
    coverImage:
      "/images/portfolio/eventbooking-website/website-preview.png",
    coverAlt: "Screenshot of the EventSphere event booking website",
    media: [
      eventImage("website-preview.png", "EventSphere website preview"),
      eventImage("art-event.jpeg", "Art event"),
      eventImage("emmy.jpeg", "Event speaker portrait"),
      eventImage("global-health-summit.jpeg", "Global health summit"),
      eventImage("hero.jpeg", "EventSphere hero image"),
      eventImage("logo.png", "EventSphere logo"),
      eventImage("music-event.jpeg", "Music event"),
      eventImage("startup.jpeg", "Startup event"),
      eventImage("tech-fest.jpeg", "Technology festival"),
    ],
  },
  {
    id: "my-portfolio-2",
    title: "Creative Developer & 3D Portfolio",
    category: "Creative portfolio website",
    vertical: "web",
    description:
      "An interactive portfolio showcasing digital craftsmanship, motion graphics, and graphic design with smooth page transitions and bespoke UI.",
    highlights: [
      "Showcase of digital illustration, branding, and video work",
      "Modern responsive interactive design with custom animations",
      "Direct GitHub open-source repository and live demo",
    ],
    repositoryUrl: "https://github.com/RajaWaleed-101/My-Portfolio-2",
    liveUrl: "https://rajawaleed-101.github.io/My-Portfolio-2/",
    coverImage: "/images/portfolio/my-portfolio-2/website-preview.png",
    coverAlt: "Preview of creative portfolio website",
    media: [
      {
        type: "image",
        src: "/images/portfolio/my-portfolio-2/website-preview.png",
        title: "Portfolio website preview",
        alt: "Portfolio website preview",
      },
      {
        type: "image",
        src: "/images/founders/waleed-bin-naeem/hero.png",
        title: "Hero visual & creative direction",
        alt: "Hero visual & creative direction",
      },
      {
        type: "image",
        src: "/images/founders/waleed-bin-naeem/art.jpg",
        title: "Digital illustration art",
        alt: "Digital illustration art",
      },
      {
        type: "image",
        src: "/images/founders/waleed-bin-naeem/leapord.jpg",
        title: "Vector character illustration",
        alt: "Vector character illustration",
      },
    ],
  },
  {
    id: "yaseen-engineering-consultancy",
    title: "Yaseen Engineering Consultancy",
    category: "Client website",
    vertical: "web",
    description:
      "A website for Yaseen Engineering Consultancy, presenting its architectural and engineering services, including 2D and 3D design, structural work, MEP, and cost estimation.",
    highlights: [
      "Introduces the consultancy and its engineering services",
      "Presents architectural, structural, MEP, and estimation work",
      "Provides business and contact information for prospective clients",
    ],
    repositoryUrl: "https://github.com/DurabH/YEC_Website.git",
    liveUrl: "https://www.yaseeneng.com",
    clientFeedback: {
      attribution: "Mir Afzal Khan Turi · Yaseen Engineering Consultancy",
      summary:
        "We’re very happy with the website. It presents our engineering services clearly and gives the consultancy a more polished, professional presence online.",
    },
    media: [],
    mediaNote: "Additional project visuals will be added later.",
  },
  {
    id: "cad-sketch-by-ashir",
    title: "CAD Sketch by Ashir",
    category: "Local client website",
    vertical: "web",
    description:
      "A focused portfolio website for a local AutoCAD designer, created to present architectural drafting services and make it easier for prospective clients to get in touch.",
    highlights: [
      "Presents 2D plans, 3D renders, and drafting services",
      "Introduces the designer and the work he offers",
      "Includes direct inquiry and contact paths",
    ],
    repositoryUrl: "https://github.com/DurabH/CAD_Sketch_By_Ashir.git",
    liveUrl: "https://cad-sketch-by-ashir.vercel.app/",
    clientFeedback: {
      attribution: "Ali Ashir · CAD Sketch by Ashir",
      summary:
        "I’m really happy with the website. It presents my CAD and design services clearly, and the finished result feels polished and professional.",
    },
    media: [],
    mediaNote: "Additional project visuals will be added later.",
  },
  {
    id: "alzheimer-disease-detection",
    title: "Alzheimer’s Disease Detection System",
    category: "Student FYP project",
    vertical: "web",
    description:
      "An academic final-year project developed with a student team to explore a multimodal Alzheimer’s disease detection concept using brain MRI images and cognitive assessment data. This prototype is for educational purposes and is not a medical diagnostic tool.",
    highlights: [
      "Combines an MRI image workflow with cognitive assessment",
      "Presents an academic machine-learning project in a web interface",
      "Clearly distinguishes a student prototype from clinical diagnosis",
    ],
    repositoryUrl: "https://github.com/DurabH/Alzheimer_Disease_Detection.git",
    liveUrl: "https://alzheimer-disease-detection-three.vercel.app/",
    clientFeedback: {
      attribution: "Student FYP team",
      summary:
        "The student team reported being happy with the project and satisfied with the collaboration.",
    },
    media: [],
    mediaNote: "Additional project visuals will be added later.",
  },
  {
    id: "brand-identity-suite",
    title: "Brand Identity & Logo Suite",
    category: "Brand & identity design",
    vertical: "design",
    description:
      "A collection of logo and identity work for businesses, dining, technology, and education.",
    highlights: [
      "Custom vector logo marks, typography pairings, and color palettes",
      "Full identity design for The Bulls, Q-Tech, PEP Inc., Tsunami, and Academia",
      "Vector and raster artwork prepared for use across common formats",
    ],
    coverImage: "/images/portfolio/logo-designs/complete-projects.png",
    coverAlt: "CDX Brand Identity & Logo Suite collection",
    media: [
      logoImage("complete-projects.png", "Complete Logo & Brand Mark Collection"),
      logoImage("the-bulls.png", "The Bulls — Emblem & Athletic Identity"),
      logoImage("the-bull-restaurant.jpg", "The Bull Restaurant — Premium Hospitality Branding"),
      logoImage("qtech.png", "Q-Tech — Minimalist Technology Brand Mark"),
      logoImage("pep-inc-logo.jpg", "PEP Inc. — Corporate Identity Design"),
      logoImage("tsunami.jpg", "Tsunami — Dynamic Lifestyle & Apparel Identity"),
      logoImage("universities.jpg", "Universities — Academic Institution Identity"),
      logoImage("w-logo.jpg", "W Monogram — Geometric Vector Lettermark"),
    ],
  },
  {
    id: "poster-editorial-collection",
    title: "Poster & Visual Arts Collection",
    category: "Poster & print design",
    vertical: "design",
    description:
      "A striking collection of commercial, conceptual cinema, and editorial posters balancing bold typography, color grading, and evocative storytelling.",
    highlights: [
      "Conceptual narrative posters exploring dramatic themes ('Greed', 'Hopeless')",
      "Commercial and corporate advertising campaigns for business and transit",
      "Hospitality, fashion, and lifestyle print collateral with high visual impact",
    ],
    coverImage: "/images/portfolio/poster-designs/sunset-poster.jpg",
    coverAlt: "Poster & Visual Arts Collection",
    media: [
      posterImage("sunset-poster.jpg", "Sunset Silhouette — Expressive Art Poster"),
      posterImage("greed-poster.jpg", "Greed — Conceptual Cinema Poster"),
      posterImage("hopeless-poster.jpg", "Hopeless — Cinematic Narrative Poster"),
      posterImage("boy-poster.jpg", "Urban Expression — Character Portrait Poster"),
      posterImage("girl-poster.jpg", "Editorial Portrait — High-Fashion Poster"),
      posterImage("business-growth-1.jpeg", "Market Velocity — Corporate Strategy Campaign"),
      posterImage("business-growth-2.jpeg", "Enterprise Analytics — Business Growth Poster"),
      posterImage("cab-transit-poster.jpeg", "Metropolitan Transit — Cab Service Campaign"),
      posterImage("restaurant-brand-1.jpeg", "Gourmet Experience — Artisan Dining Poster"),
      posterImage("restaurant-brand-2.jpeg", "Bistro & Culinary — Restaurant Showcase Poster"),
    ],
  },
  {
    id: "cinematic-reels-motion",
    title: "Cinematic Reels & Motion Graphics",
    category: "Video & motion production",
    vertical: "video",
    description:
      "A collection of short-form video edits, motion graphics, and event highlights, with attention to pacing, color, and sound.",
    highlights: [
      "Vertical edits prepared for social media channels",
      "Dynamic 2D/3D brand motion graphics and kinetic typography",
      "Event highlights and promotional edits with considered color and sound",
    ],
    coverImage: "/images/portfolio/reels/cinematic-reels-cover.jpg",
    coverAlt: "CDX video editing and motion graphics collection",
    media: [
      {
        type: "video",
        src: "/videos/portfolio/reel-1.mp4",
        poster: "/images/portfolio/reels/reel-1-poster.jpg",
        title: "CDX Creative Showreel — Reel 01",
        alt: "Creative Showreel Reel 01",
      },
      {
        type: "video",
        src: "/videos/portfolio/reel-2.mp4",
        poster: "/images/portfolio/reels/reel-2-poster.jpg",
        title: "Visual Dynamics Reel — Reel 02",
        alt: "Visual Dynamics Reel 02",
      },
      {
        type: "video",
        src: "/videos/portfolio/event.mp4",
        poster: "/images/portfolio/reels/event-poster.jpg",
        title: "Global Conference & Event Highlights",
        alt: "Event Highlights Reel",
      },
      {
        type: "video",
        src: "/videos/portfolio/motion.mp4",
        poster: "/images/portfolio/reels/motion-poster.jpg",
        title: "Dynamic Kinetic Brand Motion",
        alt: "Brand Motion Graphics",
      },
      {
        type: "video",
        src: "/videos/portfolio/pro.mp4",
        poster: "/images/portfolio/reels/pro-poster.jpg",
        title: "Next-Gen Product Promo Feature",
        alt: "Product Promo Video",
      },
    ],
  },
];
