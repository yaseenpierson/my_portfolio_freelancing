import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { servicesData } from '@/data/services';
import { CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0B0629] border-t border-violet-900/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="CAPABILITIES & SERVICES"
          title="WHAT I DO"
          subtitle="Combining web development, UI design, and embedded systems engineering to craft complete digital products."
        />

        <div className="space-y-20 md:space-y-28">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className="pt-12 border-t border-violet-900/30 first:border-t-0 first:pt-0"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}>
                  {/* Service Text Information */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="inline-block text-4xl md:text-5xl font-black text-violet-500/80 mb-2 font-mono">
                      {service.number}
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight mb-4">
                      {service.title}
                    </h3>

                    <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-sm text-slate-200">
                          <CheckCircle2 size={16} className="text-violet-400 shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Service Visual Preview */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="rounded-2xl overflow-hidden relative aspect-[16/10] shadow-2xl group border border-violet-500/20">
                      <img
                        src={service.imageUrl}
                        alt={`${service.title} capability preview`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
