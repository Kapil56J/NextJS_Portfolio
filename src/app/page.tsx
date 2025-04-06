import React from 'react';
import Link from 'next/link';

export default function Home() {
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
          ABOUT THIS SITE
        </h1>
        <div className="space-y-4">
          <p className="text-gray-700 uppercase font-raleway"
             style={{
               fontFamily: 'Raleway, Helvetica, sans-serif',
               fontSize: '0.7em',
               fontWeight: 400,
               letterSpacing: '0.2em',
               lineHeight: 2.5,
               marginTop: '-1em'
             }}>
            Welcome to my digital space — a modern, responsive portfolio crafted with Next.js  and TypeScript. This site represents not just my work, but also my commitment to clean, efficient, and maintainable code.
          </p>
          <p className="text-gray-700 uppercase font-raleway"
             style={{
               fontFamily: 'Raleway, Helvetica, sans-serif',
               fontSize: '0.7em',
               fontWeight: 400,
               letterSpacing: '0.2em',
               lineHeight: 2.5,
               marginTop: '-1em'
             }}>
            Built with cutting-edge technologies including Next.js for optimal performance, TypeScript for type safety, and Tailwind CSS for beautiful, responsive design, this portfolio showcases my dedication to modern web development practices.
          </p>
          <p className="text-gray-700 uppercase font-raleway"
             style={{
               fontFamily: 'Raleway, Helvetica, sans-serif',
               fontSize: '0.7em',
               fontWeight: 400,
               letterSpacing: '0.2em',
               lineHeight: 2.5,
               marginTop: '-1em'
             }}>
            Every component is thoughtfully crafted, ensuring a seamless user experience across all devices. The site features server-side rendering for lightning-fast page loads, static generation for optimal performance, and a clean, minimalist design that puts the focus on content.
          </p>
        </div>
      </section>
    </div>
  );
}
