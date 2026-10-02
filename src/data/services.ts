import { Service } from '@/types';
import { ASSETS } from '@/lib/assets';

export const servicesData: Service[] = [
  {
    id: 'web-design',
    number: '01',
    title: 'WEB DESIGN',
    description: 'Designing modern, responsive websites with strong visual hierarchy and user-focused layouts.',
    capabilities: [
      'Responsive Web Layouts',
      'Design Systems & Style Guides',
      'Wireframing & Prototyping',
      'User-Focused Layouts',
    ],
    imageUrl: ASSETS.services.webDesign,
  },
  {
    id: 'frontend-dev',
    number: '02',
    title: 'FRONTEND DEVELOPMENT',
    description: 'Building responsive, interactive interfaces using modern frontend technologies.',
    capabilities: [
      'React & TypeScript Architecture',
      'Tailwind CSS & Utility Styling',
      'Framer Motion & Interactive UI',
      'Performance & SEO Optimization',
    ],
    imageUrl: ASSETS.services.frontend,
  },
  {
    id: 'backend-dev',
    number: '03',
    title: 'BACKEND DEVELOPMENT',
    description: 'Building application logic, APIs, databases, authentication, and server-side functionality.',
    capabilities: [
      'RESTful APIs & Database Integration',
      'Authentication & Authorization',
      'Server-Side Application Logic',
      'Database & Data Management',
    ],
    imageUrl: ASSETS.services.backend,
  },
  {
    id: 'ui-ux',
    number: '04',
    title: 'UI / UX',
    description: 'Designing clear, accessible interfaces and user experiences with thoughtful interaction and visual hierarchy.',
    capabilities: [
      'User Flow & Information Architecture',
      'Interactive Micro-Interactions',
      'Design System Components',
      'Usability & Accessibility (WCAG)',
    ],
    imageUrl: ASSETS.services.uiux,
  },
  {
    id: 'technical-projects',
    number: '05',
    title: 'TECHNICAL / CREATIVE PROJECTS',
    description: 'Building experimental projects across electronics, embedded systems, robotics, AI, and software.',
    capabilities: [
      'Microcontroller & Sensor Integration',
      'IoT Dashboards & Telemetry',
      'Hardware & Embedded Systems',
      'AI Integration & Creative Software',
    ],
    imageUrl: ASSETS.services.technical,
  },
];
