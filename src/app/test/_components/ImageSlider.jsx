'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    '/assets/img/a.jpg',
    '/assets/img/b.jpg',
    '/assets/img/c.jpg',
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img 
            src={images[currentIndex]} 
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
      >
        &lt;
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
      >
        &gt;
      </button>
    </div>
  );
};

