import { Project } from '@/types';
import { ASSETS } from '@/lib/assets';

export const projectsData: Project[] = [
  {
    id: 'saha-ai',
    title: 'SahaAI',
    slug: 'saha-ai',
    subtitle: 'Accessibility-First AI Companion',
    description: 'An accessibility-first AI companion combining personalised accessibility settings, multimodal AI, voice interaction, camera-assisted tools, and multilingual support in a mobile-first web application.',
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Gemini', 'OpenAI'],
    imageUrl: ASSETS.projects.sahaAi,
    featured: true,
    category: 'web',
    demoUrl: 'https://saha-ai-wheat.vercel.app/',
    githubUrl: 'https://github.com/MaxonXOXO/SahaAI',
  },
  {
    id: 'tata-mobile',
    title: 'Tata Mobiles Launch Platform',
    slug: 'tata-mobiles-launch',
    subtitle: 'High-Impact Product Launch Experience',
    description: 'An interactive product landing experience designed for a mobile device launch, featuring dynamic product viewports and smooth animations.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: ASSETS.projects.tataMobile,
    featured: false,
    category: 'web',
    demoUrl: '',
    githubUrl: '',
  },
  {
    id: 'robo-bin',
    title: 'ROBO-BIN Autonomous Smart Bin',
    slug: 'robo-bin-smart-sorting',
    subtitle: 'IoT Hardware & Robotics Integration',
    description: 'An automated waste-segregation bin combining ultrasonic sensing, microcontroller processing, and a companion web monitoring dashboard.',
    tags: ['Embedded Systems', 'IoT', 'C++', 'React', 'Tailwind CSS'],
    imageUrl: ASSETS.projects.roboBin,
    featured: false,
    category: 'electronics',
    demoUrl: '',
    githubUrl: '',
  },
];
