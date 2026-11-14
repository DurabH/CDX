export interface ProjectMedia {
  type: "image" | "video";
  src: string;
  title: string;
  alt: string;
  poster?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  vertical?: "web" | "design" | "video";
  description: string;
  highlights: string[];
  repositoryUrl?: string;
  liveUrl?: string;
  coverImage?: string;
  coverAlt?: string;
  media: ProjectMedia[];
  mediaNote?: string;
}
