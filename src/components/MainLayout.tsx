"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="px-4">
          <div className="flex items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-2">
                <Link 
                  href="/" 
                  className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase"
                  style={{ 
                    fontSize: '0.9em', 
                    letterSpacing: '0.15em' 
                  }}
                >
                  Kapil Jadhav
                </Link>
              </div>
              <div className="h-4 w-px bg-gray-300 mr-4 hidden md:block" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-0 ml-4">
              <Link
                href="/about"
                className="px-3 py-2 text-sm font-medium font-raleway tracking-widest uppercase text-gray-600 hover:text-blue-600"
                style={{ fontSize: '0.7em', letterSpacing: '0.25em' }}
              >
                About
              </Link>
              <div className="h-4 w-px bg-gray-300 mx-2" />
              <Link
                href="/resume"
                className="px-3 py-2 text-sm font-medium font-raleway tracking-widest uppercase text-gray-600 hover:text-blue-600"
                style={{ fontSize: '0.7em', letterSpacing: '0.25em' }}
              >
                Resume
              </Link>
              <div className="h-4 w-px bg-gray-300 mx-2" />
              <Link
                href="/project"
                className="px-3 py-2 text-sm font-medium font-raleway tracking-widest uppercase text-gray-600 hover:text-blue-600"
                style={{ fontSize: '0.7em', letterSpacing: '0.25em' }}
              >
                Project
              </Link>
              <div className="h-4 w-px bg-gray-300 mx-2" />
              <Link
                href="/contact"
                className="px-3 py-2 text-sm font-medium font-raleway tracking-widest uppercase text-gray-600 hover:text-blue-600"
                style={{ fontSize: '0.7em', letterSpacing: '0.25em' }}
              >
                Contact
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden ml-auto">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg text-left">
            <Link
              href="/about"
              className="block px-3 py-2 text-sm font-medium font-raleway tracking-widest uppercase text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              style={{ fontSize: '0.7em', letterSpacing: '0.25em' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/resume"
              className="block px-3 py-2 text-sm font-medium font-raleway tracking-widest uppercase text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              style={{ fontSize: '0.7em', letterSpacing: '0.25em' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resume
            </Link>
            <Link
              href="/project"
              className="block px-3 py-2 text-sm font-medium font-raleway tracking-widest uppercase text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              style={{ fontSize: '0.7em', letterSpacing: '0.25em' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Project
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-sm font-medium font-raleway tracking-widest uppercase text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              style={{ fontSize: '0.7em', letterSpacing: '0.25em' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row pt-16">
        {/* Left Sidebar - 30% */}
        <div className="w-full md:w-[35%] md:fixed md:left-0 md:top-16 md:h-[calc(100vh-4rem)] p-8 flex flex-col items-center md:items-start">
          <div className="flex flex-col h-full items-center md:items-start">
        <div className="text-center md:text-left mb-2">
          <div className="w-full flex justify-center md:justify-start mb-12">
            <Image
          src="/Profile.jpeg"
          alt="Kapil Jadhav"
          width={160}
          height={160}
          className="rounded-full object-cover"
          priority
            />
          </div>
          <h1 
            className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase mb-4"
            style={{ 
          fontSize: '0.9em', 
          letterSpacing: '0.15em' 
            }}
          >
            Kapil Jadhav
          </h1>
          <a 
            href="mailto:kapiljadhav5656@gmail.com?subject=Hello%20Kapil" 
            className="text-sm mb-4 block"
            style={{
          color: '#646464',
          textDecoration: 'none',
          transition: 'color .2s ease, border-bottom-color .2s ease',
          fontFamily: 'Raleway, Helvetica, sans-serif',
          fontSize: '0.7em',
          fontWeight: 400,
          letterSpacing: '0.25em',
          lineHeight: 2.5,
          textTransform: 'uppercase'
            }}
            title="Click to send me an email"
          >
            kapiljadhav5656@gmail.com
          </a>
          
          <div className="border-b border-dotted border-gray-300 my-6"></div>
          
          <h2 
            className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase mb-4 mt-8"
            style={{ 
          fontSize: '0.9em', 
          letterSpacing: '0.15em' 
            }}
          >
            ABOUT
          </h2>
          
          <p className="text-gray-700 uppercase font-raleway mb-6"
             style={{
           fontFamily: 'Raleway, Helvetica, sans-serif',
           fontSize: '0.7em',
           fontWeight: 400,
           letterSpacing: '0.2em',
           lineHeight: 2.5,
           marginTop: '-1em'
             }}>
            I&apos;m a software developer with knowledge of Next.js, React.js, and React Native, specializing in creating responsive web applications. 
            I have also built 2 native apps which are available on the Play Store.
          </p>
          
          <Link 
            href="/about" 
            className="inline-block text-center text-gray-800 uppercase whitespace-nowrap cursor-pointer"
            style={{
          appearance: 'none',
          backgroundColor: 'transparent',
          border: '0',
          boxShadow: 'inset 0 0 0 1px #a0a0a04d',
          color: '#3c3b3b !important',
          fontFamily: 'Raleway, Helvetica, sans-serif',
          fontSize: '0.6em',
          fontWeight: '800',
          height: '4.8125em',
          letterSpacing: '0.25em',
          lineHeight: '4.8125em',
          padding: '0 2.5em',
          textDecoration: 'none',
          textTransform: 'uppercase',
          transition: 'background-color .2s ease, box-shadow .2s ease, color .2s ease',
          marginBottom: '1.5rem'
            }}
          >
            Learn More
          </Link>
        </div>

        <div className="border-b border-dotted border-gray-300 my-2"></div>

        <div className="mt-2 mb-8">
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="https://github.com/Kapil56J" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
            </a>
            <a href="https://www.linkedin.com/in/kapil-jadhav5656/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
            </a>
            <a href="https://www.instagram.com/i_am_kapildj?igsh=MWc0dnIzZjZwNHl4MA==" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
            </a>
            <a href="https://www.hackerrank.com/profile/kapiljadhav5656" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
          <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="M16 0c1.714 0 13 6.516 13.854 8 0.859 1.484 0.859 14.516 0 16s-12.141 8-13.854 8c-1.714 0-13-6.516-13.859-8-0.854-1.484-0.854-14.516 0-16 0.859-1.484 12.146-8 13.859-8zM19.063 9.068c-0.193 0-0.349 0.151-0.349 0.344v5.167h-5.427v-5.37h0.932c0.188 0 0.339-0.151 0.339-0.344 0-0.125-0.068-0.234-0.161-0.292l-2.099-2.010c-0.063-0.089-0.188-0.146-0.302-0.146-0.109 0-0.214 0.057-0.276 0.141l-2.24 2.016c-0.094 0.063-0.161 0.167-0.161 0.292 0 0.188 0.151 0.344 0.344 0.344h0.938l0.010 13.38c0 0.193 0.146 0.344 0.339 0.344h1.99c0.188 0 0.344-0.151 0.344-0.344v-5.339h5.432v5.536h-0.932c-0.193 0-0.344 0.156-0.344 0.344 0 0.125 0.068 0.234 0.161 0.292l2.104 2.016c0.057 0.083 0.188 0.146 0.302 0.146s0.208-0.063 0.276-0.146l2.24-2.016c0.094-0.057 0.161-0.167 0.161-0.292 0-0.188-0.156-0.344-0.344-0.344h-0.938l-0.010-13.375c0-0.198-0.151-0.349-0.339-0.349h-1.99z"/>
          </svg>
            </a>
          </div>
        </div>
          </div>
        </div>

        {/* Right Content Area - 70% */}
        <div className="w-full md:w-[65%] md:ml-[35%] min-h-screen bg-[#e7eeef]">
          <main className="p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
} 