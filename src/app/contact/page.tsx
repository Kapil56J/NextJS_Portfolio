'use client';

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import SocialIcons from '@/components/SocialIcons';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace these with your actual EmailJS service ID, template ID, and public key
      const result = await emailjs.sendForm(
        'service_rtvq3kd', 
        'template_4l1cuhj', 
        form.current as HTMLFormElement,
        'kqLS0WvnBR-puiLVR' 
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          success: true,
          message: 'Thank you for your message! I will get back to you soon.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          success: false,
          message: 'There was an error sending your message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        success: false,
        message: 'There was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          CONTACT
        </h1>
        
        <div className="border-b border-dotted border-gray-300 mb-8"></div>
        
        <p className="text-gray-700 uppercase font-raleway mb-6"
           style={{
             fontFamily: 'Raleway, Helvetica, sans-serif',
             fontSize: '0.7em',
             fontWeight: 400,
             letterSpacing: '0.2em',
             lineHeight: 2.5,
             marginTop: '-1em'
           }}>
          I'M ALWAYS OPEN TO DISCUSSING NEW PROJECTS, CREATIVE IDEAS, OR OPPORTUNITIES TO BE PART OF YOUR VISIONS.
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
            href="mailto:kapiljadhav5656@gmail.com" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            KAPILJADHAV5656@GMAIL.COM
          </a>
        </p>

        <div className="mb-8">
          <SocialIcons 
            className="justify-center" 
            iconSize={22} 
            iconColor="#4B5563" 
          />
        </div>

        <div className="mt-12">
          <div className="border-b border-dotted border-gray-300 mb-8"></div>
          
          <h2 
            className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase mb-6"
            style={{ 
              fontSize: '0.9em', 
              letterSpacing: '0.15em' 
            }}
          >
            GET IN TOUCH
          </h2>
          
          {submitStatus && (
            <div 
              className={`p-4 mb-6 rounded ${
                submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              {submitStatus.message}
            </div>
          )}
          
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="name" 
                className="block text-gray-700 uppercase font-raleway mb-2"
                style={{
                  fontSize: '0.7em',
                  letterSpacing: '0.1em'
                }}
              >
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                required
                style={{
                  fontFamily: 'Raleway, Helvetica, sans-serif',
                  fontSize: '0.8em',
                  color: '#333333'
                }}
              />
            </div>
            
            <div>
              <label 
                htmlFor="email" 
                className="block text-gray-700 uppercase font-raleway mb-2"
                style={{
                  fontSize: '0.7em',
                  letterSpacing: '0.1em'
                }}
              >
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                required
                style={{
                  fontFamily: 'Raleway, Helvetica, sans-serif',
                  fontSize: '0.8em',
                  color: '#333333'
                }}
              />
            </div>
            
            <div>
              <label 
                htmlFor="subject" 
                className="block text-gray-700 uppercase font-raleway mb-2"
                style={{
                  fontSize: '0.7em',
                  letterSpacing: '0.1em'
                }}
              >
                SUBJECT
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                required
                style={{
                  fontFamily: 'Raleway, Helvetica, sans-serif',
                  fontSize: '0.8em',
                  color: '#333333'
                }}
              />
            </div>
            
            <div>
              <label 
                htmlFor="message" 
                className="block text-gray-700 uppercase font-raleway mb-2"
                style={{
                  fontSize: '0.7em',
                  letterSpacing: '0.1em'
                }}
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                required
                style={{
                  fontFamily: 'Raleway, Helvetica, sans-serif',
                  fontSize: '0.8em',
                  color: '#333333'
                }}
              ></textarea>
            </div>
            
            <button
              type="submit"
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
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
} 