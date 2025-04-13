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
        <div className="flex items-center justify-between mb-4">
          <h1 
            className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase"
            style={{ 
              fontSize: '1.2em', 
              letterSpacing: '0.15em' 
            }}
          >
            KAPIL JADHAV
          </h1>
          <a 
            href="https://drive.google.com/file/d/1c-P5W-66j4UraASXIbHLRyTpGfE22lyD/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-gray-800 rounded-md transition-colors duration-300 font-raleway hover:bg-[#5cd8e4]"
            style={{
              fontSize: '0.7em',
              letterSpacing: '0.2em',
              backgroundColor: '#6decf9',
              border: '1px solid #6decf9'
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
              />
            </svg>
            DOWNLOAD RESUME
          </a>
        </div>
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
            href="https://github.com/Kapil56J" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            GITHUB
          </a> | <a 
            href="https://www.linkedin.com/in/kapil-jadhav5656/" 
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
              WELLNESS360 MOBILE APP | <a 
                href="https://play.google.com/store/apps/details?id=com.wellness360.app&hl=en_IN" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-blue-600"
              >
                APP LINK
              </a>
            </h2>
            <ul className="list-disc list-inside text-gray-700 uppercase font-raleway ml-4"
                style={{
                  fontFamily: 'Raleway, Helvetica, sans-serif',
                  fontSize: '0.7em',
                  fontWeight: 400,
                  letterSpacing: '0.2em',
                  lineHeight: 2.5,
                  marginTop: '-1em'
                }}>
              <li>Developed and maintained high-quality cross-platform mobile applications for Android and iOS with features like activity tracking, nutrition management, challenges, and personalized journeys — enhancing user engagement and retention.</li>
              <li>Integrated Health Connect for real-time tracking of steps, calories, and workouts — boosting user accountability and motivation.</li>
              <li>Implemented Firebase Push Notifications for personalized health tips and reminders — improved user engagement.</li>
              <li>Integrated third-party SDK for behavior-driven messaging — boosted user retention and session length through personalized communication.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 
              className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase mb-4"
              style={{ 
                fontSize: '0.9em', 
                letterSpacing: '0.15em' 
              }}
            >
              HEALTHIER 901 MOBILE APP | <a 
                href="https://play.google.com/store/apps/details?id=com.healthier901.app&hl=en_IN" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-blue-600"
              >
                APP LINK
              </a>
            </h2>
            <ul className="list-disc list-inside text-gray-700 uppercase font-raleway ml-4"
                style={{
                  fontFamily: 'Raleway, Helvetica, sans-serif',
                  fontSize: '0.7em',
                  fontWeight: 400,
                  letterSpacing: '0.2em',
                  lineHeight: 2.5,
                  marginTop: '-1em'
                }}>
              <li>Developed and maintained high-quality cross-platform mobile applications for Android and iOS using React Native, leveraging tools like Android Studio and Xcode for debugging and build management.</li>
              <li>Built personalized health dashboards using user inputs and health data to provide insights and recommendations for improved health and fitness.</li>
              <li>Integrated RESTful APIs with secure authentication mechanisms like JWT, and used Redux for efficient and predictable state management — enabling smooth data exchange and user authorization.</li>
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
          TECHNICAL SKILLS
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
              LANGUAGES & FRAMEWORKS
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
              React.js, React Native, TypeScript, JavaScript (ES6+), Node.js, HTML5, CSS3
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
              TOOLS & LIBRARIES
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
              Redux, RTK Query, Context API, Webpack, Babel, Chrome DevTools, Git
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
              BACK-END & DATABASES
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
              MongoDB, Express.js, RESTful APIs
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
              OTHERS
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
              Health Connect, Firebase, JWT, Push Notifications, Debugging, Performance Optimization, DSA
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
              Wellness360 APP | <a 
                href="https://play.google.com/store/apps/details?id=com.wellness360.app&hl=en_IN&pli=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className=" hover:text-blue-500 underline"
              >
                LINK
              </a>
            </h2>
            <p className="text-gray-900 uppercase font-raleway mb-2"
               style={{
                 fontFamily: 'Raleway, Helvetica, sans-serif',
                 fontSize: '0.7em',
                 fontWeight: 400,
                 letterSpacing: '0.2em',
                 lineHeight: 2.5,
                 marginTop: '-1em'
               }}>
              REACT NATIVE, TYPESCRIPT, REDUX, REST API, FIREBASE, Push Notifications
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
        <div className="space-y-6">
          <div className="mb-8">
            <h2 
              className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase mb-4"
              style={{ 
                fontSize: '0.9em', 
                letterSpacing: '0.15em' 
              }}
            >
              Healthier 901 APP | <a 
                href="https://play.google.com/store/apps/details?id=com.healthier901.app&hl=en_IN&pli=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className=" hover:text-blue-500 underline"
              >
                LINK
              </a>
            </h2>
            <p className="text-gray-900 uppercase font-raleway mb-2"
               style={{
                 fontFamily: 'Raleway, Helvetica, sans-serif',
                 fontSize: '0.7em',
                 fontWeight: 400,
                 letterSpacing: '0.2em',
                 lineHeight: 2.5,
                 marginTop: '-1em'
               }}>
              REACT NATIVE, TYPESCRIPT, REDUX, REST API
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
              JAVASCRIPT (INTERMEDIATE) - <a 
                href="https://www.hackerrank.com/certificates/iframe/d7f938515eed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-blue-600"
              >
                HACKERRANK
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 