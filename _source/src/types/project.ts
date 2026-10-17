export type ProjectCategory = 'web' | 'mobile' | 'ai' | 'design' | 'video' | 'all';

export interface Project {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'all'>;
  tags: string[];
  thumbnail: string;
  images: string[];
  videoUrl?: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  techStack: string[];
  featured: boolean;
  client?: string;
  year: number;
}
