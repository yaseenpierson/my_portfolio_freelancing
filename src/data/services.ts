import { Service } from '@/types';
import { ASSETS } from '@/lib/assets';

export const servicesData: Service[] = [
  {
    id: 'web-design',
    number: '01',
    title: 'WEB DESIGN',
    description: 'Designing modern, responsive and conversion-focused websites with bold visual hierarchy and editorial elegance.',
    capabilities: [
      'Responsive Web Layouts',
      'Design Systems & Style Guides',
      'Wireframing & Prototyping',
      'Conversion-Optimized Landing Pages',
    ],
    imageUrl: ASSETS.services.webDesign,
  },
  {
    id: 'frontend-dev',
    number: '02',
    title: 'FRONTEND DEVELOPMENT',
    description: 'Building polished interfaces using modern frontend technologies like React, TypeScript, and Tailwind CSS.',
    capabilities: [
      'React & TypeScript Architecture',
      'Tailwind CSS Styling & Design Tokens',
      'Framer Motion & Micro-Animations',
      'Performance & SEO Optimization',
    ],
    imageUrl: ASSETS.services.frontend,
  },
  {
    id: 'ui-ux',
    number: '03',
    title: 'UI / UX',
    description: 'Creating clear interfaces and user experiences with strong visual hierarchy, typography, and intuitive interaction flows.',
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
    number: '04',
    title: 'TECHNICAL / CREATIVE PROJECTS',
    description: 'Building experimental projects involving electronics, embedded systems, robotics, IoT devices, and software.',
    capabilities: [
      'Microcontroller & Sensor Integration',
      'IoT Web Dashboards & Control',
      'Hardware Prototype Assembly',
      'Creative Coding & Hardware Hacking',
    ],
    imageUrl: ASSETS.services.technical,
  },
];
