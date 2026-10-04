import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ASSETS } from '@/lib/assets';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0D0733]">
      {/* Background Graphic with Dark Purple Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.hero.bg}
          alt=""
          role="presentation"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0733]/80 via-[#0D0733]/90 to-[#0D0733]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Small Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-950/80 border border-violet-500/30 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-xs uppercase tracking-widest font-semibold text-violet-300">
            DESIGN × DEVELOPMENT
          </span>
        </motion.div>

        {/* Editorial Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.95] max-w-5xl"
        >
          I DESIGN IT I BUILD IT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-violet-400">
            I MAKE IT WORK
          </span>
        </motion.h1>

        {/* Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed"
        >
          Designing and engineering modern websites, dynamic user interfaces, and creative web applications for people, startups, and innovative businesses.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button
            asAnchor
            href="#contact"
            variant="primary"
            size="lg"
            icon={<ArrowUpRight size={20} />}
          >
            Let's Work Together
          </Button>

          <Button
            asAnchor
            href="#work"
            variant="secondary"
            size="lg"
          >
            View My Work
          </Button>
        </motion.div>

        {/* Subtle Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 md:mt-24 inline-flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-slate-400 hover:text-violet-300 transition-colors cursor-pointer group"
        >
          <span>Scroll Down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} className="text-violet-400 group-hover:text-violet-300" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};
