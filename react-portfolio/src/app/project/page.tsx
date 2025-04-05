import React from 'react';

export default function Project() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment processing.',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Stripe'],
      image: '/images/ecommerce.jpg',
      link: 'https://github.com/username/ecommerce'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A task management application that allows users to create, organize, and track their tasks. Built with React, Redux, and Firebase for real-time updates.',
      technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
      image: '/images/taskmanager.jpg',
      link: 'https://github.com/username/taskmanager'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current and forecasted weather data for any location. Uses the OpenWeather API and Chart.js for data visualization.',
      technologies: ['React', 'API Integration', 'Chart.js', 'CSS'],
      image: '/images/weather.jpg',
      link: 'https://github.com/username/weather'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with Next.js and Tailwind CSS. Features a responsive design, dark mode, and smooth animations.',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      image: '/images/portfolio.jpg',
      link: 'https://github.com/username/portfolio'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-raleway font-semibold mb-6 tracking-widest uppercase">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Project Image</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-raleway font-medium mb-2 tracking-widest">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="mb-4">
                <h3 className="font-raleway font-medium mb-2 tracking-widest text-sm">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 