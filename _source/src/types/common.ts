export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'icon';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type Alignment = 'left' | 'center' | 'right';

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  socials: {
    linkedin?: string;
    github?: string;
    behance?: string;
    instagram?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}
