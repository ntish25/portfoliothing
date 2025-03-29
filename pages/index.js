// pages/index.js
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [showCreativePopup, setShowCreativePopup] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateProgress, setAnimateProgress] = useState(true);
  const creativeRef = useRef(null);
  
  // Project data
  const projects = [
    {
      id: 1,
      title: "Project One",
      image: "/images/project1.jpg",
      year: "2025"
    },
    {
      id: 2,
      title: "Project Two",
      image: "/images/project2.jpg",
      year: "2024"
    },
    {
      id: 3,
      title: "Project Three",
      image: "/images/project3.jpg",
      year: "2022-2025"
    }
  ];
  
  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateProgress(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
        setAnimateProgress(true);
      }, 300);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [projects.length]);
  
  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (creativeRef.current && !creativeRef.current.contains(event.target)) {
        setShowCreativePopup(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Gradient background div that's always present but hidden behind the monochromatic overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#1a2a50] via-[#2b5797] via-[#5b9bd5] to-[#f5a9b8] z-0"></div>
      
      {/* Monochromatic overlay */}
      <div className="fixed inset-0 bg-[#121212] z-10"></div>
      
      <div className="relative z-20">
        <Head>
          <title>tishgarten</title>
          <meta name="description" content="look at some cool stuff. maybe even work with me." />
          <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✧</text></svg>" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Overpass+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        
        {/* Navigation Bar - With gradient reveal on hover */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-30 backdrop-blur-xl border-b border-white border-opacity-10">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
            <svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo">
              <g clip-path="url(#clip0_22_74)">
              <path d="M8.79646 23.5421C7.91722 26.2176 7.46102 29.0611 7.41854 31.7537C7.42028 32.8548 7.40865 34.0473 7.802 35.064C8.02836 35.6496 8.50318 36.3094 9.20611 35.8426C9.62042 35.5849 10.0923 34.7178 10.3321 34.0396C10.6352 33.2272 10.8953 32.3714 11.1496 31.5405C11.9346 28.9464 12.6707 26.2443 13.9671 23.75C16.7015 18.2934 21.3519 16.6727 27.4275 14.6499C27.9692 14.4521 28.4906 14.2425 28.9194 14.0234C29.8953 13.5459 30.6116 12.8106 29.2395 12.2904C27.7009 11.7731 25.7115 11.8242 24.0094 11.9852C16.6287 12.7168 10.74 17.1555 8.80169 23.5279L8.79646 23.5427V23.5421Z" fill="white"/>
              <path d="M21.1428 4.39425C21.9133 0.353468 20.6826 -2.281 17.6236 2.79789C15.8343 5.5933 13.5591 9.15006 10.2574 11.0606C8.55421 12.0708 6.58858 12.8036 4.71082 13.464C3.87929 13.7538 3.08443 14.0128 2.35823 14.2646C1.85198 14.4433 1.34515 14.6334 0.890697 14.9078C-0.11132 15.4933 -0.367353 16.3806 0.634083 16.9477C1.06061 17.1924 1.56045 17.3136 2.12838 17.3949C11.2647 18.1729 19.4874 12.6272 21.1394 4.41028L21.1423 4.39484L21.1428 4.39425Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_22_74">
                  <rect width="30" height="36" fill="white"/>
                </clipPath>
              </defs>
            </svg>

            </Link>
            
            <div className="flex items-center space-x-8 font-['Overpass_Mono']">
              <Link href="/work" className="text-white text-sm tracking-wider opacity-70 hover:opacity-100 transition-opacity">
                <span className="hover-reveal">WORK</span>
              </Link>
              <Link href="/about" className="text-white text-sm tracking-wider opacity-70 hover:opacity-100 transition-opacity">
                <span className="hover-reveal">ABOUT</span>
              </Link>
              <Link href="/contact" className="text-white text-sm tracking-wider opacity-70 hover:opacity-100 transition-opacity">
                <span className="hover-reveal">CONTACT</span>
              </Link>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white opacity-70 hover:opacity-100 transition-opacity">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" fill="white" />
                  <path d="M6 9H2V21H6V9Z" fill="white" />
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" fill="white" />
                </svg>
              </a>
            </div>
          </div>
        </nav>
        
        {/* Main Content */}
        <main className="container mx-auto px-6 pt-32 pb-16">
          {/* Project Showcase Card - Aspect video for correct ratio */}
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-lg bg-black bg-opacity-20 backdrop-blur-xl border border-white border-opacity-20 aspect-video shadow-xl">
              {/* Project Slides */}
              <div className="h-full">
                {projects.map((project, index) => (
                  <div 
                    key={project.id} 
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute top-5 right-5 text-white opacity-70 font-['Overpass_Mono'] text-sm">
                      {project.year}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Full-width Animated Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 flex space-x-0 px-0">
                {projects.map((_, index) => (
                  <div 
                    key={index} 
                    className="relative h-1.5 w-full overflow-hidden bg-white bg-opacity-20"
                  >
                    {index === currentSlide && animateProgress && (
                      <div 
                        className="absolute top-0 left-0 h-full bg-white transition-all duration-300 progress-animate"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Name and Description Section - With gradient reveal hover */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            <div>
              <h1 className="text-7xl font-['Instrument_Sans'] font-semibold tracking-tight text-white">
                <span className="hover-reveal">Nathan Tishgarten.</span>
              </h1>
            </div>
            
            <div className="flex flex-col justify-end">
              <div className="font-['Overpass_Mono'] text-white opacity-80 text-right">
                <p className="mb-4">
                  <span className="hover-reveal">ATLANTA-BORN DESIGNER, MARKETER, AND</span>
                  <span 
                    className="relative cursor-pointer hover-reveal"
                    onClick={() => setShowCreativePopup(true)}
                  > CREATIVE?</span>
                </p>
                <p className="mb-4"><span className="hover-reveal">FIGMA TRUTHER TIL' THE END.</span></p>
                <p><span className="hover-reveal">CHRONIC MK.GEE LISTENER.</span></p>
              </div>
            </div>
          </div>
          
          {/* Creative Popup */}
          <AnimatePresence>
            {showCreativePopup && (
              <motion.div
                ref={creativeRef}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mr-6 mt-2 p-4 w-72 backdrop-blur-xl bg-black bg-opacity-20 border border-white border-opacity-20 rounded-lg shadow-xl z-50"
              >
                <p className="text-white font-['Overpass_Mono'] text-sm">
                  "can someone genuinely define this."
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}