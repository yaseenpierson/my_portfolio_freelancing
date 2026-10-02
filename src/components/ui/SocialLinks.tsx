import React from 'react';
import { Github, Linkedin, Mail, Twitter, Globe } from 'lucide-react';
import { socialLinksData } from '@/data/experience';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  iconSize = 20,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <Github size={iconSize} />;
      case 'linkedin':
        return <Linkedin size={iconSize} />;
      case 'mail':
      case 'email':
        return <Mail size={iconSize} />;
      case 'twitter':
        return <Twitter size={iconSize} />;
      default:
        return <Globe size={iconSize} />;
    }
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinksData.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="p-3 rounded-full bg-violet-950/40 border border-violet-500/20 text-violet-300 hover:text-white hover:bg-violet-600/30 hover:border-violet-500/60 transition-all duration-300"
        >
          {getIcon(social.iconName)}
        </a>
      ))}
    </div>
  );
};
