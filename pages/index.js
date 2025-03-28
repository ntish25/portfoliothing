// pages/index.js
import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Updated Header Component with Gradient Hover Effect
const InteractiveText = ({ text }) => {
  return (
    <motion.span 
      className="inline-block text-left text-zinc-300 transition-all duration-300"
      whileHover={{
        background: "linear-gradient(135deg, #6ab7ff 0%, #ffc8a2 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        textFillColor: "transparent",
        textShadow: "inset 0px 1px 1px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3 }
      }}
    >
      {text}
    </motion.span>
  );
};

export default function Home() {
  return (
    <div className="bg-zinc-900 min-h-screen font-instrument selection:bg-blue-600 selection:text-zinc-100">
      <Head>
        <title>nathan t | portfolio</title>
        <meta name="description" content="Portfolio of Nathan Tishgarten" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✧</text></svg>" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>
      
      {/* Navigation */}
      <nav className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
        <Link href="/" className="font-gowun text-zinc-300 font-light tracking-widest text-lg">
          n<span className="text-blue-500">.</span>t
        </Link>
        
        <div className="flex space-x-8 font-departure text-sm">
          <Link href="/work" className="text-zinc-400 hover:text-zinc-200 transition-colors">
            WORK
          </Link>
          <Link href="/about" className="text-zinc-400 hover:text-zinc-200 transition-colors">
            ABOUT
          </Link>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-200 transition-colors">
            TWITTER
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-200 transition-colors">
            GITHUB
          </a>
        </div>
      </nav>
      
      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-16">
          {/* Title Block - Now Interactive with Gradient Hover */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-gowun text-zinc-300 leading-tight">
            <InteractiveText text={"Figma truther from Atlanta."} />
            </h1>
            <p className="text-lg mt-8 max-w-2xl text-zinc-500 font-instrument">
              please don't call me a "creative" though :)
            </p>
          </div>
          
          {/* Currently Block */}
          <div className="max-w-xl">
            <h2 className="text-sm font-departure uppercase tracking-wider text-zinc-600 mb-4">CURRENTLY</h2>
            <div className="space-y-4 font-instrument">
              <p className="text-zinc-400 text-lg">
                Helping students like me get into their dream school @ <a href="https://www.esslo.org" target="_blank">Esslo</a>.
              </p>
              <p className="text-zinc-400 text-lg">
                Learning how to vibe code like a true YC founder.
              </p>
              <p className="text-zinc-400 text-lg">
                Choosing a dorm at Georgia Tech.
              </p>
            </div>
          </div>
          
          {/* Featured Projects */}
          <div className="mt-16">
            <h2 className="text-sm font-departure uppercase tracking-wider text-zinc-600 mb-8">SELECTED WORK</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-instrument">
              {/* Project 1 */}
              <div className="group">
                <div className="bg-zinc-800 aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-700 group-hover:text-zinc-600 transition-colors">
                    PROJECT IMAGE
                  </div>
                  <div className="absolute top-4 right-4 text-xs font-departure text-zinc-600">2024</div>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-zinc-900 to-transparent">
                    <h3 className="text-zinc-300 group-hover:text-blue-500 transition-colors">Project Name</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs px-2 py-1 font-departure bg-zinc-900 text-zinc-500">WEB</span>
                      <span className="text-xs px-2 py-1 font-departure bg-zinc-900 text-zinc-500">DESIGN</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project 2 */}
              <div className="group">
                <div className="bg-zinc-800 aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-700 group-hover:text-zinc-600 transition-colors">
                    PROJECT IMAGE
                  </div>
                  <div className="absolute top-4 right-4 text-xs font-departure text-zinc-600">2024</div>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-zinc-900 to-transparent">
                    <h3 className="text-zinc-300 group-hover:text-blue-500 transition-colors">Project Name</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs px-2 py-1 font-departure bg-zinc-900 text-zinc-500">INTERACTIVE</span>
                      <span className="text-xs px-2 py-1 font-departure bg-zinc-900 text-zinc-500">DEVELOPMENT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link href="/work" className="inline-block px-4 py-2 border border-zinc-700 font-departure text-sm text-zinc-400 hover:border-blue-500 hover:text-blue-500 transition-colors">
                VIEW ALL PROJECTS →
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-8 mt-16 border-t border-zinc-800 text-zinc-600 font-instrument">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            © 2025 Nathan Tishgarten. All rights reserved.
          </div>
          <div className="flex space-x-4 font-departure text-sm">
            <a href="mailto:hello@yourdomain.com" className="hover:text-zinc-400 transition-colors">EMAIL</a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">TWITTER</a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">GITHUB</a>
          </div>
        </div>
      </footer>
    </div>
  );
}