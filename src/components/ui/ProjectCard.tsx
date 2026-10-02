import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  isFeaturedDominant?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isFeaturedDominant = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`group rounded-2xl bg-[#140C44] border border-violet-500/20 overflow-hidden transition-all duration-500 hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-900/30 ${
        isFeaturedDominant ? 'lg:col-span-12' : 'lg:col-span-6'
      }`}
    >
      <div className={`grid grid-cols-1 ${isFeaturedDominant ? 'lg:grid-cols-12' : ''} gap-0 items-center`}>
        {/* Visual Media Area */}
        <div className={`relative overflow-hidden ${
          isFeaturedDominant ? 'lg:col-span-7 aspect-[16/10]' : 'aspect-[16/10]'
        } bg-[#0D0733]`}>
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0733]/90 via-[#0D0733]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

          {/* Category Tag */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0D0733]/80 border border-violet-500/40 text-violet-300 backdrop-blur-sm">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content Details Area */}
        <div className={`p-8 lg:p-10 flex flex-col justify-between ${
          isFeaturedDominant ? 'lg:col-span-5' : ''
        }`}>
          <div>
            {project.subtitle && (
              <span className="text-xs uppercase tracking-widest font-semibold text-violet-400 mb-2 block">
                {project.subtitle}
              </span>
            )}

            <h3 className="text-2xl lg:text-3xl font-extrabold text-white uppercase tracking-tight group-hover:text-violet-300 transition-colors duration-300 mb-3 flex items-center justify-between">
              <span>{project.title}</span>
              <motion.span
                className="inline-block text-violet-400"
                whileHover={{ x: 3, y: -3 }}
              >
                <ArrowUpRight size={24} />
              </motion.span>
            </h3>

            <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-violet-950/60 border border-violet-500/20 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-violet-900/30">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-white transition-colors"
              >
                <span>Live Preview</span>
                <ExternalLink size={16} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
              >
                <Github size={16} />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
