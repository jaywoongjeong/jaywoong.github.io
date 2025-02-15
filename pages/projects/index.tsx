import { getAllProjects } from '@/utils/mdx';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { useState } from 'react';

export default function Projects({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex justify-center gap-4 mb-8">
        {['all', 'research', 'personal', 'competition'].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded ${
              selectedCategory === category 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </div>
  );
} 