import React from 'react';

export default function Resume() {
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
          KAPIL JADHAV
        </h1>
        <p className="text-gray-700 uppercase font-raleway mb-2"
           style={{
             fontFamily: 'Raleway, Helvetica, sans-serif',
             fontSize: '0.7em',
             fontWeight: 400,
             letterSpacing: '0.2em',
             lineHeight: 2.5,
             marginTop: '-1em'
           }}>
          SOFTWARE DEVELOPER
        </p>
        <p className="text-gray-700 uppercase font-raleway mb-4"
           style={{
             fontFamily: 'Raleway, Helvetica, sans-serif',
             fontSize: '0.7em',
             fontWeight: 400,
             letterSpacing: '0.2em',
             lineHeight: 2.5,
             marginTop: '-1em'
           }}>
          KAPILJADHAV5656@GMAIL.COM | 7083487227 | TEMGHAR-LAWASA RD, URAWADE, PUNE, 422115
        </p>
        <p className="text-gray-700 uppercase font-raleway mb-8"
           style={{
             fontFamily: 'Raleway, Helvetica, sans-serif',
             fontSize: '0.7em',
             fontWeight: 400,
             letterSpacing: '0.2em',
             lineHeight: 2.5,
             marginTop: '-1em'
           }}>
          <a 
            href="https://github.com/kapiljadhav5656" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            GITHUB
          </a> | <a 
            href="https://www.linkedin.com/in/kapil-jadhav-5656/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            LINKEDIN
          </a> | <a 
            href="https://www.hackerrank.com/kapiljadhav5656" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            HACKERRANK
          </a>
        </p>
      </section>

      <section className="mt-12">
        <h1 
          className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase mb-6"
          style={{ 
            fontSize: '1.2em', 
            letterSpacing: '0.15em' 
          }}
        >
          EDUCATION
        </h1>
        <div className="space-y-6">
          <div className="mb-8">
            <h2 
              className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase mb-4"
              style={{ 
                fontSize: '0.9em', 
                letterSpacing: '0.15em' 
              }}
            >
              SAVITRIBAI PHULE PUNE UNIVERSITY
            </h2>
            <p className="text-gray-700 uppercase font-raleway mb-2"
               style={{
                 fontFamily: 'Raleway, Helvetica, sans-serif',
                 fontSize: '0.7em',
                 fontWeight: 400,
                 letterSpacing: '0.2em',
                 lineHeight: 2.5,
                 marginTop: '-1em'
               }}>
              PUNE
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
              MASTER OF SCIENCE
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h1 
          className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase mb-6"
          style={{ 
            fontSize: '1.2em', 
            letterSpacing: '0.15em' 
          }}
        >
          EXPERIENCE
        </h1>
        <div className="space-y-6">
          <div className="mb-8">
            <h2 
              className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase mb-4"
              style={{ 
                fontSize: '0.9em', 
                letterSpacing: '0.15em' 
              }}
            >
              WELLNESS360 TECHNOLOGIES INC | SOFTWARE DEVELOPER
            </h2>
            <p className="text-gray-700 uppercase font-raleway mb-2"
               style={{
                 fontFamily: 'Raleway, Helvetica, sans-serif',
                 fontSize: '0.7em',
                 fontWeight: 400,
                 letterSpacing: '0.2em',
                 lineHeight: 2.5,
                 marginTop: '-1em'
               }}>
              HYDERABAD | JAN 2023 - PRESENT
            </p>
            <ul className="list-disc list-inside text-gray-700 uppercase font-raleway ml-4"
                style={{
                  fontFamily: 'Raleway, Helvetica, sans-serif',
                  fontSize: '0.7em',
                  fontWeight: 400,
                  letterSpacing: '0.2em',
                  lineHeight: 2.5,
                  marginTop: '-1em'
                }}>
              <li>Developed a dynamic web application using Next.js with a responsive UI built using HTML, CSS, and Material UI</li>
              <li>Integrated third-party libraries and APIs to enhance app functionality with Google Fit, Samsung Health, and Fitbit</li>
              <li>Designed and implemented personalized health dashboards for actionable insights</li>
              <li>Experienced in state management using Redux and Context API</li>
              <li>Implemented Push Notifications for user engagement</li>
              <li>Worked with cross-functional teams for UX/UI and performance optimization</li>
              <li>Integrated RESTful APIs with JWT authentication</li>
              <li>Fostered a collaborative and inclusive work environment</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h1 
          className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase mb-6"
          style={{ 
            fontSize: '1.2em', 
            letterSpacing: '0.15em' 
          }}
        >
          SKILLS
        </h1>
        <div className="space-y-6">
          <div className="mb-8">
            <h2 
              className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase mb-4"
              style={{ 
                fontSize: '0.9em', 
                letterSpacing: '0.15em' 
              }}
            >
              PROGRAMMING LANGUAGES
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
              REACT.JS, REACT NATIVE, TYPESCRIPT, JAVASCRIPT, HTML, CSS, NODE.JS
            </p>
          </div>

          <div className="mb-8">
            <h2 
              className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase mb-4"
              style={{ 
                fontSize: '0.9em', 
                letterSpacing: '0.15em' 
              }}
            >
              LIBRARIES / FRAMEWORKS
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
              MATERIAL UI, REDUX, CONTEXT API, EXPRESS.JS
            </p>
          </div>

          <div className="mb-8">
            <h2 
              className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase mb-4"
              style={{ 
                fontSize: '0.9em', 
                letterSpacing: '0.15em' 
              }}
            >
              TOOLS / PLATFORM
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
              WEBPACK, BABEL, CHROME DEVTOOLS, GIT, TROUBLESHOOTING AND DEBUGGING, DATA STRUCTURE & ALGORITHM
            </p>
          </div>

          <div className="mb-8">
            <h2 
              className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase mb-4"
              style={{ 
                fontSize: '0.9em', 
                letterSpacing: '0.15em' 
              }}
            >
              DATABASES
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
              MONGODB, SQL
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h1 
          className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase mb-6"
          style={{ 
            fontSize: '1.2em', 
            letterSpacing: '0.15em' 
          }}
        >
          PROJECTS / OPEN-SOURCE
        </h1>
        <div className="space-y-6">
          <div className="mb-8">
            <h2 
              className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase mb-4"
              style={{ 
                fontSize: '0.9em', 
                letterSpacing: '0.15em' 
              }}
            >
              WELLNESS360 APP | <a 
                href="https://play.google.com/store/apps/details?id=com.wellness360.app&hl=en_IN&pli=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className=" hover:text-blue-500 underline"
              >
                LINK
              </a>
            </h2>
            <p className="text-gray-700 uppercase font-raleway mb-2"
               style={{
                 fontFamily: 'Raleway, Helvetica, sans-serif',
                 fontSize: '0.7em',
                 fontWeight: 400,
                 letterSpacing: '0.2em',
                 lineHeight: 2.5,
                 marginTop: '-1em'
               }}>
              REACT NATIVE, TYPESCRIPT
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
              Health Tracker App – Developed a cross-platform health and fitness app using React Native, integrating features like activity tracking, meal logging, and personalized health insights. Implemented secure authentication, API integrations for real-time health data, and optimized performance for a seamless user experience.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h1 
          className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase mb-6"
          style={{ 
            fontSize: '1.2em', 
            letterSpacing: '0.15em' 
          }}
        >
          CERTIFICATIONS
        </h1>
        <div className="space-y-6">
          <div className="mb-8">
            <h2 
              className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase mb-4"
              style={{ 
                fontSize: '0.9em', 
                letterSpacing: '0.15em' 
              }}
            >
              NEWTON SCHOOL — FULL STACK WEB DEVELOPER
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
              JAVASCRIPT (INTERMEDIATE) - HACKERRANK
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 