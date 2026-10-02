export type SkillCategory = 'frontend' | 'backend' | 'design' | 'electronics' | 'tools';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level?: number;
  iconName?: string;
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'electronics' | 'ui/ux';
  completedAt?: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: string;
  organization: string;
  date: string;
  description: string;
  highlight?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  imageUrl: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
  technologies: string[];
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  iconName: string;
  label: string;
}
