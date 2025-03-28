// pages/index.js
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Interactive pixel grid component
const PixelGrid = () => {
  const [pixels, setPixels] = useState([]);
  const gridSize = 15;
  
  useEffect(() => {
    // Initialize grid
    const initialGrid = [];
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        initialGrid.push({
          id: `${i}-${j}`,
          x: i,
          y: j,
          color: 'bg-zinc-800',
          active: false
        });
      }
    }
    setPixels(initialGrid);
  }, []);
  
  const handleMouseOver = (id) => {
    setPixels(prevPixels => 
      prevPixels.map(pixel => 
        pixel.id === id 
          ? { 
              ...pixel, 
              color: `bg-blue-${Math.floor(Math.random() * 3) + 5}00`, 
              active: true 
            } 
          : pixel
      )
    );
    
    // Reset after delay
    setTimeout(() => {
      setPixels(prevPixels => 
        prevPixels.map(pixel => 
          pixel.id === id 
            ? { ...pixel, color: 'bg-zinc-800', active: false } 
            : pixel
        )
      );
    }, 1500);
  };
  
  return (
    <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto grid grid-cols-15 gap-1">
      {pixels.map((pixel) => (
        <motion.div
          key={pixel.id}
          className={`w-4 h-4 ${pixel.color} hover:bg-blue-600 transition-colors duration-300`}
          whileHover={{ scale: 1.2 }}
          onMouseOver={() => handleMouseOver(pixel.id)}
        />
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-zinc-900 min-h-screen text-zinc-400 font-mono selection:bg-blue-600 selection:text-zinc-100">
      <Head>
        <title>nathan t | creative technologist</title>
        <meta name="description" content="Portfolio of Nathan Tishgarten - Creative Technologist" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✧</text></svg>" />
      </Head>
      
      {/* Navigation */}
      <nav className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
        <Link href="/" className="text-zinc-300 font-light tracking-widest text-lg">
          n<span className="text-blue-500">.</span>t
        </Link>
        
        <div className="flex space-x-8">
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
          {/* Title Block */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-zinc-300 leading-tight">
              <span>digital</span>
              <span className="inline-block mx-3 px-4 py-1 bg-blue-600 text-zinc-100">designer</span>
              <span>&</span><br />
              <span className="inline-block mt-2">creative</span>
              <span className="inline-block mx-3 px-4 py-1 bg-blue-600 text-zinc-100">developer</span>
            </h1>
            <p className="text-lg mt-8 max-w-2xl mx-auto text-zinc-500">
              crafting pixel-perfect experiences at the intersection of design and technology
            </p>
          </div>
          
          {/* Interactive Element */}
          <div className="py-8">
            <PixelGrid />
            <p className="text-center text-zinc-600 mt-4 text-sm">
              // hover over the pixels
            </p>
          </div>
          
          {/* Currently Block */}
          <div className="max-w-xl mx-auto">
            <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-600 mb-4">CURRENTLY</h2>
            <div className="space-y-4">
              <p className="text-zinc-400 text-lg">
                Building digital experiences for forward-thinking brands and startups.
              </p>
              <p className="text-zinc-400 text-lg">
                Exploring the boundaries of interactive design and creative coding.
              </p>
              <p className="text-zinc-400 text-lg">
                Available for select freelance projects starting May 2025.
              </p>
            </div>
          </div>
          
          {/* Featured Projects */}
          <div className="mt-16">
            <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-600 mb-8 text-center">SELECTED WORK</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="group">
                <div className="bg-zinc-800 aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-700 group-hover:text-zinc-600 transition-colors">
                    PROJECT IMAGE
                  </div>
                  <div className="absolute top-4 right-4 text-xs text-zinc-600">2024</div>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-zinc-900 to-transparent">
                    <h3 className="text-zinc-300 group-hover:text-blue-500 transition-colors">Project Name</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs px-2 py-1 bg-zinc-900 text-zinc-500">WEB</span>
                      <span className="text-xs px-2 py-1 bg-zinc-900 text-zinc-500">DESIGN</span>
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
                  <div className="absolute top-4 right-4 text-xs text-zinc-600">2024</div>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-zinc-900 to-transparent">
                    <h3 className="text-zinc-300 group-hover:text-blue-500 transition-colors">Project Name</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs px-2 py-1 bg-zinc-900 text-zinc-500">INTERACTIVE</span>
                      <span className="text-xs px-2 py-1 bg-zinc-900 text-zinc-500">DEVELOPMENT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link href="/work" className="inline-block px-4 py-2 border border-zinc-700 text-zinc-400 hover:border-blue-500 hover:text-blue-500 transition-colors">
                VIEW ALL PROJECTS →
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-8 mt-16 border-t border-zinc-800 text-zinc-600">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            © 2025 Nathan Tishgarten. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="mailto:hello@yourdomain.com" className="hover:text-zinc-400 transition-colors">Email</a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">Twitter</a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}