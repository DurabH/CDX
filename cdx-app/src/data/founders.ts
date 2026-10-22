import type { Founder } from "@/types/founder";
import type { ProjectMedia } from "@/types/project";

const waleedImage = (file: string, title: string): ProjectMedia => ({
  type: "image",
  src: `/images/founders/waleed-bin-naeem/${file}`,
  title,
  alt: title,
});

const waleedVideo = (
  file: string,
  poster: string,
  title: string
): ProjectMedia => ({
  type: "video",
  src: `/videos/founders/waleed-bin-naeem/${file}`,
  poster: `/images/founders/waleed-bin-naeem/${poster}`,
  title,
  alt: title,
});

export const founders: Founder[] = [
  {
    id: "waleed-bin-naeem",
    name: "Waleed Bin Naeem",
    role: "Co-Founder",
    portfolioUrl: "https://rajawaleed-101.github.io/My-Portfolio-2/",
    portfolioLabel: "View creative portfolio",
    portfolioDescription:
      "Explore Waleed's portfolio of website, graphic design, and video work.",
    portfolioCover: "/images/founders/waleed-bin-naeem/port-website.png",
    portfolioCoverAlt: "Preview of Waleed's creative portfolio website",
    portfolioMedia: [
      waleedImage("art.jpg", "Digital illustration"),
      waleedImage("babar-azam-poster.jpg", "Sports poster design"),
      waleedImage("cor.png", "Corporate video thumbnail"),
      waleedImage("event-website.png", "Event website project preview"),
      waleedImage("event.png", "Event video thumbnail"),
      waleedImage("girl-poster.jpg", "Poster design"),
      waleedImage("gym-website.png", "Gym website project preview"),
      waleedImage("hero.png", "Portfolio hero artwork"),
      waleedImage("leapord.jpg", "Leopard illustration"),
      waleedImage("logo.svg", "Portfolio logo"),
      waleedImage("motion.png", "Motion graphics thumbnail"),
      waleedImage("port-website.png", "Portfolio website screenshot"),
      waleedImage("pro.png", "Promotional video thumbnail"),
      waleedImage("profile.jpeg", "Portfolio profile image"),
      waleedImage("ra-styles.jpg", "Fashion poster design"),
      waleedImage("res-website.png", "Restaurant website project preview"),
      waleedImage("social.png", "Social media video thumbnail"),
      waleedImage("sunset-poster.jpg", "Poster artwork"),
      waleedImage("travel-website.png", "Travel website project preview"),
      waleedVideo("corporate.mp4", "cor.png", "Corporate Storytelling"),
      waleedVideo("event.mp4", "event.png", "Conference Highlights Reel"),
      waleedVideo("motion.mp4", "motion.png", "Dynamic Logo Motion Graphics"),
      waleedVideo("pro.mp4", "pro.png", "Tech Promo Video"),
      waleedVideo("social.mp4", "social.png", "Social Media Ad Campaign"),
    ],
  },
  {
    id: "durab-haider",
    name: "Durab Haider",
    role: "Co-Founder",
    portfolioUrl: "https://durabhaiderportfolio.vercel.app/",
    portfolioLabel: "View portfolio",
    portfolioDescription: "Explore Durab's portfolio.",
  },
];
