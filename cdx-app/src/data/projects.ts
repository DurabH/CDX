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

export const projects: PortfolioProject[] = [
  {
    id: "shahid-real-estate",
    title: "Shahid Real Estate",
    category: "Real estate website",
    description:
      "Finding the right property can mean sorting through scattered listings and unclear details. This site brings sale and rental options together so people can quickly compare properties and decide which ones fit their needs.",
    highlights: [
      "Browse properties for sale or rent in one place",
      "Compare location, price, size, and key property details",
      "Move from discovery to an enquiry with less friction",
    ],
    repositoryUrl: "https://github.com/RajaWaleed-101/shahid-real-estate",
    media: [],
    mediaNote:
      "This repository contains no local image or video files. Property photos in the source are remote URLs, so they were not copied into CDX.",
  },
  {
    id: "gym-website",
    title: "Muscle Up Gym",
    category: "Gym website",
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
];
