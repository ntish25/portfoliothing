// pages/index.js
import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Updated Header Component with Gradient Hover Effect and proper text display
const InteractiveText = ({ text }) => {
  return (
    <motion.span 
      className="inline-block text-left text-white transition-all duration-300 overflow-visible"
      style={{
        display: 'inline-block',
        width: 'auto',
        whiteSpace: 'nowrap',
        paddingBottom: '0.1em', // Add slight padding to avoid clipping descenders
        textShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
      whileHover={{
        background: "linear-gradient(135deg, #6ab7ff 0%, #ffc8a2 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        textFillColor: "transparent",
        textShadow: 'none',
        transition: { duration: 0.3 }
      }}
    >
      {text}
    </motion.span>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen font-instrument selection:bg-blue-600 selection:text-white">
      <Head>
        <title>nathan t | portfolio</title>
        <meta name="description" content="Portfolio of Nathan Tishgarten" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✧</text></svg>" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>
      
      {/* Navigation */}
      <nav className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center backdrop-blur-sm bg-opacity-10 bg-indigo-900 rounded-b-lg">
        <Link href="/" className="font-gowun text-white font-light tracking-widest text-lg">
          n<span className="text-pink-300">.</span>t
        </Link>
        
        <div className="flex space-x-8 font-departure text-sm">
          <Link href="/work" className="text-white hover:text-pink-200 transition-colors relative group">
            WORK
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="text-white hover:text-pink-200 transition-colors relative group">
            ABOUT
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-200 transition-colors relative group">
            TWITTER
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-300 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-200 transition-colors relative group">
            GITHUB
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-300 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </nav>
      
      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-16">
          {/* Title Block - Now Interactive with Gradient Hover */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-gowun text-white leading-tight drop-shadow-md">
            <InteractiveText text={"Figma truther from Atlanta."} />
            </h1>
            <p className="text-lg mt-8 max-w-2xl text-blue-50 font-instrument">
              please don't call me a "creative" though :)
            </p>
          </div>
          
          {/* Currently Block */}
          <div className="max-w-xl">
            <h2 className="text-sm font-departure uppercase tracking-wider text-blue-200 mb-4">CURRENTLY</h2>
            <div className="space-y-4 font-instrument">
              <p className="text-white text-lg">
                Helping students like me get into their dream school @ <a href="https://www.esslo.org" target="_blank" className="text-pink-200 hover:text-pink-300 transition-colors">Esslo</a>.
              </p>
              <p className="text-white text-lg">
                Learning how to vibe code like a true YC founder.
              </p>
              <p className="text-white text-lg">
                Choosing a dorm at Georgia Tech.
              </p>
            </div>
          </div>
          
          {/* Featured Projects */}
          <div className="mt-16">
            <h2 className="text-sm font-departure uppercase tracking-wider text-blue-200 mb-8">SELECTED WORK</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-instrument">
              {/* Project 1 */}
              <div className="group">
                <div className="bg-indigo-900 bg-opacity-30 backdrop-blur-sm aspect-video overflow-hidden relative rounded-lg shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center text-blue-300 group-hover:text-pink-200 transition-colors">
                    PROJECT IMAGE
                  </div>
                  <div className="absolute top-4 right-4 text-xs font-departure text-blue-200">2024</div>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-indigo-900 to-transparent">
                    <h3 className="text-white group-hover:text-pink-200 transition-colors">Project Name</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs px-2 py-1 font-departure bg-indigo-800 bg-opacity-50 text-blue-200">WEB</span>
                      <span className="text-xs px-2 py-1 font-departure bg-indigo-800 bg-opacity-50 text-blue-200">DESIGN</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project 2 */}
              <div className="group">
                <div className="bg-indigo-900 bg-opacity-30 backdrop-blur-sm aspect-video overflow-hidden relative rounded-lg shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center text-blue-300 group-hover:text-pink-200 transition-colors">
                    PROJECT IMAGE
                  </div>
                  <div className="absolute top-4 right-4 text-xs font-departure text-blue-200">2024</div>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-indigo-900 to-transparent">
                    <h3 className="text-white group-hover:text-pink-200 transition-colors">Project Name</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs px-2 py-1 font-departure bg-indigo-800 bg-opacity-50 text-blue-200">INTERACTIVE</span>
                      <span className="text-xs px-2 py-1 font-departure bg-indigo-800 bg-opacity-50 text-blue-200">DEVELOPMENT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link href="/work" className="inline-block px-4 py-2 border border-blue-400 font-departure text-sm text-white hover:border-pink-300 hover:text-pink-200 transition-colors rounded-md backdrop-blur-sm bg-indigo-900 bg-opacity-10">
                VIEW ALL PROJECTS →
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-8 mt-16 border-t border-blue-300 border-opacity-20 text-blue-100 font-instrument backdrop-blur-sm bg-indigo-900 bg-opacity-10 rounded-t-lg">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            © 2025 Nathan Tishgarten. All rights reserved.
          </div>
          <div className="flex space-x-4 font-departure text-sm">
            <a href="mailto:hello@yourdomain.com" className="text-blue-200 hover:text-pink-200 transition-colors">EMAIL</a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-pink-200 transition-colors">TWITTER</a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-pink-200 transition-colors">GITHUB</a>
          </div>
        </div>
      </footer>
    </div>
  );
}