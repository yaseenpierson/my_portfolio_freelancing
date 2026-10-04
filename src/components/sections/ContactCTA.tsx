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

        {/* Primary Contact Method Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center items-center gap-4"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#140C44] border border-violet-500/30 text-violet-200">
            <Mail size={18} className="text-violet-400" />
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm md:text-base font-medium hover:text-white transition-colors">
              {SITE_CONFIG.email}
            </a>
          </div>

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#140C44] border border-emerald-500/30 text-emerald-300">
            <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" className="text-emerald-400">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm md:text-base font-medium hover:text-white transition-colors">
              {SITE_CONFIG.phone}
            </a>
          </div>
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
