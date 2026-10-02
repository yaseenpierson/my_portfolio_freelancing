import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { ASSETS } from '@/lib/assets';
import { SITE_CONFIG } from '@/data/config';

export const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="relative py-28 bg-[#0D0733] border-t border-violet-900/30 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.hero.bg}
          alt=""
          role="presentation"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0733] via-[#0D0733]/80 to-[#0D0733]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs uppercase tracking-widest font-semibold text-violet-400 mb-4"
        >
          START A PROJECT
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-[0.95] max-w-5xl"
        >
          LET'S BUILD <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-300 to-violet-500">
            SOMETHING GREAT.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-xl font-light leading-relaxed"
        >
          Have a project, website, custom dashboard, or technical hardware idea in mind? Let's talk about turning your vision into reality.
        </motion.p>

        {/* Primary Contact Email Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#140C44] border border-violet-500/30 text-violet-200"
        >
          <Mail size={18} className="text-violet-400" />
          <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm md:text-base font-medium hover:text-white transition-colors">
            {SITE_CONFIG.email}
          </a>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10"
        >
          <Button
            asAnchor
            href={`mailto:${SITE_CONFIG.email}`}
            variant="primary"
            size="lg"
            icon={<ArrowUpRight size={22} />}
          >
            Start a Conversation
          </Button>
        </motion.div>

        {/* Social Links Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-violet-900/30"
        >
          <SocialLinks />
        </motion.div>
      </div>
    </section>
  );
};
