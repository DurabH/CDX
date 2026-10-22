import type { ProjectMedia } from "@/types/project";

export interface Founder {
  id: string;
  name: string;
  role: string;
  portfolioUrl: string;
  portfolioLabel: string;
  portfolioDescription: string;
  portfolioCover?: string;
  portfolioCoverAlt?: string;
  portfolioMedia?: ProjectMedia[];
}
