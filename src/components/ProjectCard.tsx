"use client";

import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  liveDemoUrl: string;
  sourceCodeUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  liveDemoUrl,
  sourceCodeUrl
}) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      style={{
        border: '1px solid #a0a0a04d'
      }}
    >
      <div className="p-6">
        <h1   className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase mb-6"
          style={{ 
            fontSize: '1.2em', 
            letterSpacing: '0.15em' 
          }}>{title}</h1>
        <p 
          className="text-gray-700 font-raleway mb-4"
          style={{
            fontFamily: 'Raleway, Helvetica, sans-serif',
            fontSize: '0.9em',
            fontWeight: 400,
            letterSpacing: '0.16em',
            lineHeight: 2.5
          }}
        >
          {description}
        </p>
        
        <div className="mb-6">
          <h3 className="text-sm font-raleway uppercase font-semibold text-gray-700 mb-2">Technologies Used:</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-raleway"
                style={{
                    fontFamily: 'Raleway, Helvetica, sans-serif',
                    fontSize: '0.7em',
                    fontWeight: 400,
                    letterSpacing: '0.2em'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <a
            href={liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-transparent border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-400 hover:text-white transition-colors duration-300 font-raleway text-sm uppercase tracking-wider"
            style={{
              fontFamily: 'Raleway, Helvetica, sans-serif',
              fontSize: '0.8em',
              fontWeight: 400,
              letterSpacing: '0.2em'
            }}
          >
            Live Demo
          </a>
          <a
            href={sourceCodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-transparent border border-gray-800 text-gray-800 px-4 py-2 rounded hover:bg-gray-800 hover:text-white transition-colors duration-300 font-raleway text-sm uppercase tracking-wider"
            style={{
              fontFamily: 'Raleway, Helvetica, sans-serif',
              fontSize: '0.8em',
              fontWeight: 400,
              letterSpacing: '0.2em'
            }}
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 