import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projectsData } from '@/data/projects';

export const FeaturedWork: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-[#0D0733] border-t border-violet-900/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="PORTFOLIO & CASE STUDIES"
          title="SELECTED WORK"
          subtitle="A showcase of web applications, landing experiences, and technical hardware projects engineered for high performance and usability."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isFeaturedDominant={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
