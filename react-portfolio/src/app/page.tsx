import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-raleway font-semibold mb-4 tracking-widest">
            Hi, I'm <span className="text-blue-600">Kapil Jadhav</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-raleway font-medium mb-6 tracking-widest text-gray-700">
            Software Developer
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            I create beautiful, responsive, and user-friendly web applications with a focus on clean code and optimal performance.
          </p>
          <div className="flex space-x-4">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </Link>
            <Link 
              href="/project" 
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded hover:bg-gray-300 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-500">Profile Image</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-16">
        <h2 className="text-2xl font-raleway font-semibold mb-6 tracking-widest uppercase">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="font-raleway font-medium mb-2 tracking-widest">Web Development</h3>
            <p className="text-gray-700">
              Building responsive and interactive websites using modern technologies like React, Next.js, and TypeScript.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="font-raleway font-medium mb-2 tracking-widest">UI/UX Design</h3>
            <p className="text-gray-700">
              Creating intuitive and visually appealing user interfaces with a focus on user experience and accessibility.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="font-raleway font-medium mb-2 tracking-widest">Performance Optimization</h3>
            <p className="text-gray-700">
              Optimizing web applications for speed, efficiency, and better user experience across all devices.
            </p>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <h2 className="text-2xl font-raleway font-semibold mb-6 tracking-widest uppercase">Let's Work Together</h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <Link 
          href="/contact" 
          className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors inline-block"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
}
