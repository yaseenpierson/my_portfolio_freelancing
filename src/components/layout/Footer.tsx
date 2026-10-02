import React from 'react';
import { ArrowUp } from 'lucide-react';
import { socialLinksData } from '@/data/experience';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-violet-900/30 bg-[#0A0527] py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-400">
        {/* Left Copyright */}
        <div>
          <p>© 2026 Yaseen. All rights reserved.</p>
        </div>

        {/* Center Social Links */}
        <div className="flex items-center gap-6">
          {socialLinksData.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition-colors"
            >
              {social.platform}
            </a>
          ))}
        </div>

        {/* Right Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
        >
          <span>Back to top</span>
          <ArrowUp size={16} className="text-violet-400" />
        </button>
      </div>
    </footer>
  );
};
