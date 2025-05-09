"use client"
import { useEffect, useState } from 'react';

export default function ParallaxContact() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background image layer - moves slower */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          transform: `translateY(${scrollY * 0.1}px)`,
          backgroundImage: `url('/assets/img/01.png')`,
          height: '120%', /* Make image taller than viewport to avoid empty spaces during parallax */
          top: '-10%'    /* Position slightly above viewport */
        }}
      />
      
      {/* Middle layer with stars - moves at medium speed */}
      <div 
        className="absolute inset-0 opacity-70"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      {/* Foreground content - moves at normal speed */}
      <div className="relative min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-white mb-8 text-center">Parallax Background</h1>
        <p className="text-xl text-white text-center max-w-lg mb-12">
          Scroll down to see the parallax effect in action. The background moves slower than the content.
        </p>
        
        {/* Content sections */}
        <div className="w-full max-w-4xl mx-auto">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-8 mb-12 mx-4"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Section {i + 1}</h2>
              <p className="text-white">
                This is content section {i + 1}. As you scroll, notice how the background moves at a different rate
                than this content, creating a sense of depth and dimension.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}