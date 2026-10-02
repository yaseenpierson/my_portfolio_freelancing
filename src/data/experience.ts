import { Experience, SocialLink } from '@/types';

export const experienceData: Experience[] = [
  {
    id: 'exp-1',
    role: 'Freelance Web Designer & Developer',
    company: 'Self-Employed',
    location: 'Remote',
    startDate: '2023-01',
    current: true,
    description: [
      'Design and build high-performance web applications and landing pages for clients and startups.',
      'Craft responsive UI components in React, TypeScript, and Tailwind CSS with custom Framer Motion animations.',
      'Bridge hardware logic and software by connecting IoT sensors to web dashboards.',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion', 'C++ / IoT'],
  },
];

export const socialLinksData: SocialLink[] = [
  {
    id: 'github',
    platform: 'GitHub',
    url: 'https://github.com',
    iconName: 'Github',
    label: 'GitHub Profile',
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    url: 'https://linkedin.com',
    iconName: 'Linkedin',
    label: 'LinkedIn Profile',
  },
  {
    id: 'email',
    platform: 'Email',
    url: 'mailto:yaseen@example.com',
    iconName: 'Mail',
    label: 'Email Yaseen',
  },
];
