import React from 'react';
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="relative">
      {/* Gradient background div that's always present but hidden behind the monochromatic overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#1a2a50] via-[#2b5797] via-[#5b9bd5] to-[#f5a9b8] z-0"></div>
      
      {/* Monochromatic overlay */}
      <div className="fixed inset-0 bg-[#121212] z-10"></div>
      
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
