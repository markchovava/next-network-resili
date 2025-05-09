'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const AdvancedImageSlider = () => {
  const slides = [
    {
      image: '/assets/img/a.jpg',
      title: 'Beautiful Scenery',
      description: 'Explore the wonders of nature with our guided tours',
      cta: 'Book Now',
    },
    {
      image: '/assets/img/b.jpg',
      title: 'Mountain Adventures',
      description: 'Experience thrilling mountain expeditions',
      cta: 'Learn More',
    },
    {
      image: '/assets/img/c.jpg',
      title: 'Ocean Getaways',
      description: 'Relax at our premium beachfront resorts',
      cta: 'View Packages',
    },
  ];

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative w-full h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect={'fade'}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          renderBullet: (index, className) => {
            return `<span class="${className}">${index + 1}</span>`;
          },
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30" />
              
              {/* Content with animations */}
              <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 text-white">
                <motion.h2
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  className="text-4xl md:text-6xl font-bold mb-4"
                >
                  {slide.title}
                </motion.h2>
                
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  transition={{ delay: 0.2 }}
                  className="text-xl md:text-2xl mb-8 max-w-2xl"
                >
                  {slide.description}
                </motion.p>
                
                <motion.button
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  transition={{ delay: 0.4 }}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-medium w-fit transition-colors"
                >
                  {slide.cta}
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev after:hidden absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/30 hover:bg-white/50 rounded-full flex items-center justify-center transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div className="swiper-button-next after:hidden absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/30 hover:bg-white/50 rounded-full flex items-center justify-center transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Custom Pagination */}
      <div className="swiper-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2" />
    </div>
  );
};

export default AdvancedImageSlider;