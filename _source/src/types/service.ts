export interface ServiceHighlight {
  icon: string;
  text: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  techStack: string[];
  highlights: string[];
  ctaLabel: string;
  vertical: 'engineering' | 'creative';
  /** Detail-level sub-services shown when user expands/visits details */
  subServices?: string[];
}
