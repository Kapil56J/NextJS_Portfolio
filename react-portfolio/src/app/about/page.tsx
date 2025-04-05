import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-raleway font-semibold mb-6 tracking-widest uppercase">About Me</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-raleway font-medium mb-4 tracking-widest">Who I Am</h2>
        <p className="text-gray-700 mb-4">
          I am a passionate software developer with a strong foundation in web technologies. 
          My journey in the tech world began with a curiosity for creating things that live on the internet.
        </p>
        <p className="text-gray-700 mb-4">
          I specialize in building exceptional digital experiences with a focus on responsive design, 
          clean code, and optimal performance.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-raleway font-medium mb-4 tracking-widest">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-raleway font-medium mb-2 tracking-widest">Frontend</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>React.js / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </div>
          <div>
            <h3 className="font-raleway font-medium mb-2 tracking-widest">Backend</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-raleway font-medium mb-4 tracking-widest">Education</h2>
        <div className="mb-4">
          <h3 className="font-raleway font-medium">Bachelor of Science in Computer Science</h3>
          <p className="text-gray-600">University Name, 2018-2022</p>
        </div>
      </div>
    </div>
  );
} 