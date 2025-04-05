import React from 'react';

export default function Resume() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-raleway font-semibold mb-6 tracking-widest uppercase">Resume</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-raleway font-medium mb-4 tracking-widest">Work Experience</h2>
        
        <div className="mb-6">
          <h3 className="font-raleway font-medium">Senior Frontend Developer</h3>
          <p className="text-gray-600 mb-2">Tech Company Inc. | 2021 - Present</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Led the development of a responsive web application using React and TypeScript</li>
            <li>Implemented state management with Redux and optimized performance</li>
            <li>Collaborated with UX designers to create intuitive user interfaces</li>
            <li>Mentored junior developers and conducted code reviews</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="font-raleway font-medium">Frontend Developer</h3>
          <p className="text-gray-600 mb-2">Digital Solutions Ltd. | 2019 - 2021</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Developed and maintained multiple client websites using React and Next.js</li>
            <li>Implemented responsive designs using CSS frameworks like Tailwind</li>
            <li>Integrated third-party APIs and services</li>
            <li>Participated in agile development processes</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-raleway font-medium">Junior Web Developer</h3>
          <p className="text-gray-600 mb-2">Web Creations | 2018 - 2019</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Built and maintained websites using HTML, CSS, and JavaScript</li>
            <li>Collaborated with senior developers on larger projects</li>
            <li>Assisted with content management and updates</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-raleway font-medium mb-4 tracking-widest">Education</h2>
        
        <div className="mb-4">
          <h3 className="font-raleway font-medium">Bachelor of Science in Computer Science</h3>
          <p className="text-gray-600">University Name, 2014 - 2018</p>
          <p className="text-gray-700">GPA: 3.8/4.0</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-raleway font-medium mb-4 tracking-widest">Certifications</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>AWS Certified Developer - Associate</li>
          <li>Google Professional Web Developer</li>
          <li>MongoDB Certified Developer</li>
        </ul>
      </div>
    </div>
  );
} 