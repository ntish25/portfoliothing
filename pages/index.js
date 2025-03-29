// pages/index.js
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [showCreativePopup, setShowCreativePopup] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const creativeRef = useRef(null);
  
  // Project data
  const projects = [
    {
      id: 1,
      title: "Project One",
      image: "/images/project1.jpg",
      year: "2024"
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
      year: "2023"
    }
  ];
  
  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
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
    <div className="min-h-screen bg-gradient-to-b from-[#1a2a50] via-[#2b5797] via-[#5b9bd5] to-[#f5a9b8] bg-fixed">
      <Head>
        <title>Nathan Tishgarten | Portfolio</title>
        <meta name="description" content="tishgarten" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✧</text></svg>" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Overpass+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      {/* Navigation Bar - Glass Effect */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black bg-opacity-10 border-b border-white border-opacity-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" />
            </svg>
          </Link>
          
          <div className="flex items-center space-x-8 font-['Overpass_Mono']">
            <Link href="/work" className="text-white text-sm tracking-wider opacity-70 hover:opacity-100 transition-opacity hover:bg-gradient-to-r hover:from-[#f5a9b8] hover:to-[#5b9bd5] hover:bg-clip-text hover:text-transparent">
              WORK
            </Link>
            <Link href="/about" className="text-white text-sm tracking-wider opacity-70 hover:opacity-100 transition-opacity hover:bg-gradient-to-r hover:from-[#f5a9b8] hover:to-[#5b9bd5] hover:bg-clip-text hover:text-transparent">
              ABOUT
            </Link>
            <Link href="/contact" className="text-white text-sm tracking-wider opacity-70 hover:opacity-100 transition-opacity hover:bg-gradient-to-r hover:from-[#f5a9b8] hover:to-[#5b9bd5] hover:bg-clip-text hover:text-transparent">
              CONTACT
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
        {/* Project Showcase Card */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-lg backdrop-blur-lg bg-black bg-opacity-10 border border-white border-opacity-10 aspect-video">
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
            
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 flex">
              {projects.map((_, index) => (
                <div 
                  key={index} 
                  className="h-1 flex-1 mx-px transition-all duration-300"
                  style={{
                    backgroundColor: index === currentSlide ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Name and Description Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1 className="text-7xl font-['Instrument_Sans'] font-light tracking-tight text-white">
              Nathan Tishgarten.
            </h1>
          </div>
          
          <div className="flex flex-col justify-end">
            <div className="font-['Instrument_Sans'] text-white opacity-80 text-right">
              <p className="mb-2">ATLANTA-BORN DESIGNER, MARKETER, AND 
                <span 
                  className="relative cursor-pointer hover:bg-gradient-to-r hover:from-[#f5a9b8] hover:to-[#5b9bd5] hover:bg-clip-text hover:text-transparent"
                  onClick={() => setShowCreativePopup(true)}
                > CREATIVE?</span>
              </p>
              <p className="mb-2">FIGMA TRUTHER TIL' THE END.</p>
              <p>CHRONIC MK.GEE LISTENER.</p>
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
              className="absolute right-0 mr-6 mt-2 p-4 w-72 backdrop-blur-lg bg-black bg-opacity-20 border border-white border-opacity-10 rounded-lg shadow-xl z-50"
            >
              <p className="text-white font-['Instrument_Sans'] text-sm">
                I hate being called a "creative" because it reduces the technical and strategic aspects of design to just making things look pretty. I prefer to be seen as a problem-solver who happens to use visual tools.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}