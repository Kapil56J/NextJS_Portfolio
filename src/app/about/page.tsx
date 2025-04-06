import React from 'react';

export default function About() {
  return (
    <div 
      className="bg-white rounded-lg p-8 mb-16"
      style={{
        border: '1px solid #a0a0a04d'
      }}
    >
      <section>
        <h1 
          className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase mb-6"
          style={{ 
            fontSize: '1.2em', 
            letterSpacing: '0.15em' 
          }}
        >
          ABOUT ME
        </h1>
        <div className="space-y-6">
          <p className="text-gray-700 uppercase font-raleway"
             style={{
               fontFamily: 'Raleway, Helvetica, sans-serif',
               fontSize: '0.7em',
               fontWeight: 400,
               letterSpacing: '0.2em',
               lineHeight: 2.5,
               marginTop: '-1em'
             }}>
            I am a passionate Software Developer with expertise in building modern web applications and mobile solutions. My journey in software development has been driven by a deep interest in creating efficient, user-friendly, and scalable applications.
          </p>
          
          <h2 
            className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase mb-4 mt-8"
            style={{ 
              fontSize: '0.9em', 
              letterSpacing: '0.15em' 
            }}
          >
            WHAT I DO
          </h2>
          
          <p className="text-gray-700 uppercase font-raleway"
             style={{
               fontFamily: 'Raleway, Helvetica, sans-serif',
               fontSize: '0.7em',
               fontWeight: 400,
               letterSpacing: '0.2em',
               lineHeight: 2.5,
               marginTop: '-1em'
             }}>
            I specialize in developing responsive web applications using Next.js, React.js, and mobile applications using React Native. My work involves creating intuitive user interfaces, implementing complex functionalities, and ensuring optimal performance across different devices and platforms.
          </p>
          
          <h2 
            className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase mb-4 mt-8"
            style={{ 
              fontSize: '0.9em', 
              letterSpacing: '0.15em' 
            }}
          >
            SKILLS & EXPERTISE
          </h2>
          
          <p className="text-gray-700 uppercase font-raleway"
             style={{
               fontFamily: 'Raleway, Helvetica, sans-serif',
               fontSize: '0.7em',
               fontWeight: 400,
               letterSpacing: '0.2em',
               lineHeight: 2.5,
               marginTop: '-1em'
             }}>
            Frontend Development: React.js, Next.js, TypeScript, HTML5, CSS3, Tailwind CSS
            Mobile Development: React Native, iOS & Android Development
            Backend Integration: RESTful APIs, Node.js, Express.js
            Version Control: Git, GitHub
            Development Tools: VS Code, Chrome DevTools, Postman
          </p>
          
          <h2 
            className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase mb-4 mt-8"
            style={{ 
              fontSize: '0.9em', 
              letterSpacing: '0.15em' 
            }}
          >
            WORK APPROACH
          </h2>
          
          <p className="text-gray-700 uppercase font-raleway"
             style={{
               fontFamily: 'Raleway, Helvetica, sans-serif',
               fontSize: '0.7em',
               fontWeight: 400,
               letterSpacing: '0.2em',
               lineHeight: 2.5,
               marginTop: '-1em'
             }}>
            I believe in writing clean, maintainable code and following best practices. My approach involves understanding project requirements thoroughly, planning effectively, and implementing solutions that are both efficient and scalable. I'm passionate about staying updated with the latest technologies and continuously improving my skills.
          </p>
        </div>
      </section>
    </div>
  );
} 