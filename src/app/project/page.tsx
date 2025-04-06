import React from 'react';
import ProjectCard from '@/components/ProjectCard';

export default function Project() {
  const projects = [
    {
      id: 1,
      title: 'CountryInfo App',
      description: 'A comprehensive mobile application that provides detailed information about countries worldwide. Users can search for countries, view detailed information including population, capital, languages, currencies, and more. The app features a clean, intuitive interface with smooth navigation and responsive design.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'REST API', 'Vercel'],
      liveDemoUrl: 'https://country-info-eight.vercel.app/',
      sourceCodeUrl: 'https://github.com/Kapil56J/CountryInfo-MobileApp'
    },
    {
      id: 2,
      title: 'Wellness360 App',
      description: 'A comprehensive health and wellness application that aggregates data from various health apps and devices. The app provides personalized health challenges, habit tracking, and a detailed health journey visualization. Users can monitor their progress, set goals, and receive insights to improve their overall well-being through an intuitive and engaging interface.',
      technologies: ['React Native', 'JavaScript', 'TypeScript', 'Redux', 'REST API', 'Firebase'],
      liveDemoUrl: 'https://play.google.com/store/apps/details?id=com.wellness360.app&hl=en_IN',
      sourceCodeUrl: '#'
    },
    {
      id: 3,
      title: 'healthier 901 App',
      description: 'A comprehensive health and wellness application that aggregates data from various health apps and devices. The app provides personalized health challenges, habit tracking, and a detailed health journey visualization. Users can monitor their progress, set goals, and receive insights to improve their overall well-being through an intuitive and engaging interface.',
      technologies: ['React Native', 'JavaScript', 'TypeScript', 'Redux', 'REST API', 'Firebase'],
      liveDemoUrl: 'https://play.google.com/store/apps/details?id=com.healthier901.app&hl=en_IN',
      sourceCodeUrl: '#'
    }
  ];

  return (
    <div 
      className="bg-white rounded-lg p-8 mb-16"
      style={{
        border: '1px solid #a0a0a04d'
      }}
    >
      <h1 
        className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase mb-6"
        style={{ 
          fontSize: '1.2em', 
          letterSpacing: '0.15em' 
        }}
      >
        Projects
      </h1>
      
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            images={[]}
            liveDemoUrl={project.liveDemoUrl}
            sourceCodeUrl={project.sourceCodeUrl}
          />
        ))}
      </div>
    </div>
  );
} 