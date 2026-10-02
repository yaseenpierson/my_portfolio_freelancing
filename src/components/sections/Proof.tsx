import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { achievementsData } from '@/data/achievements';
import { Award, Trophy, Code2, Cpu } from 'lucide-react';

export const Proof: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Hackathon')) return <Trophy className="text-amber-400" size={24} />;
    if (category.includes('IEDC') || category.includes('Grant')) return <Award className="text-violet-400" size={24} />;
    if (category.includes('Electronics')) return <Cpu className="text-emerald-400" size={24} />;
    return <Code2 className="text-cyan-400" size={24} />;
  };

  return (
    <section className="py-24 bg-[#0B0629] border-t border-violet-900/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="MILESTONES & RECOGNITION"
          title="BUILT, SHIPPED & PRESENTED"
          subtitle="Honest achievements across hackathons, innovation grants, hardware expos, and technical certifications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievementsData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-[#140C44] border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#0D0733] border border-violet-500/20">
                    {getCategoryIcon(item.category)}
                  </div>
                  {item.highlight && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-950/80 border border-violet-500/30 text-violet-300">
                      {item.highlight}
                    </span>
                  )}
                </div>

                <span className="text-xs uppercase tracking-widest font-semibold text-violet-400 mb-1 block">
                  {item.category} • {item.date}
                </span>

                <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                  {item.title}
                </h3>

                <p className="text-xs font-medium text-slate-400 mb-4">
                  {item.organization}
                </p>

                <p className="text-slate-300 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
