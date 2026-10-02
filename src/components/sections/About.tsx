import React from 'react';
import { motion } from 'framer-motion';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { ASSETS } from '@/lib/assets';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0D0733] border-t border-violet-900/20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Profile Card Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-violet-500/30 bg-[#140C44] shadow-2xl p-3 group">
              <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
                <img
                  src={ASSETS.profile.avatar}
                  alt="Yaseen - Web Developer & ECE Student Profile"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0733] via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-4 flex items-center justify-between text-xs text-slate-300">
                <span className="font-semibold tracking-wider text-violet-400 uppercase">Yaseen</span>
                <span className="text-slate-400">ECE &amp; Web Developer</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="text-xs uppercase tracking-widest font-semibold text-violet-400 mb-3">
              ABOUT ME
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase leading-tight tracking-tight mb-6">
              I'M YASEEN. <br />
              <span className="text-violet-400">I DESIGN, BUILD</span> <br />
              AND EXPERIMENT.
            </h2>

            <div className="space-y-4 text-slate-300 text-base md:text-lg font-light leading-relaxed">
              <p>
                I am an Electronics and Communication Engineering (ECE) student passionate about creating modern digital experiences and building functional web applications.
              </p>
              <p>
                My work spans frontend web development, user interface design, and embedded hardware projects. I enjoy bridging the gap between physical electronics and digital software—turning ideas into reliable, working products.
              </p>
              <p>
                Whether crafting responsive user interfaces with React and Tailwind CSS or programming microcontrollers for IoT devices, I focus on clean code, strong visual hierarchy, and thoughtful execution.
              </p>
            </div>

            {/* Social Channels */}
            <div className="mt-8 pt-6 border-t border-violet-900/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Connect With Me:
              </span>
              <SocialLinks />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
