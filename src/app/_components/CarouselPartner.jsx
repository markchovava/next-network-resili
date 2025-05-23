"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { baseURL } from '@/api/BaseURL';
import { noImage } from '@/data/ImagesData';



export default function CarouselPartner({ dbData }) {
  console.log('Partner Data', dbData)
  const [data, setData] = useState(dbData?.data)
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 8; // Update this based on your actual slide count

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  // Handle direct pagination click with React components
  const handlePaginationClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    // This code will only run on the client-side
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup
    };
  }, []); 

  return (
    <div className="carousel-container w-full mx-auto">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onSlideChange={handleSlideChange}
        navigation={false}
        pagination={false} // Disable default pagination
        className="mb-6"
      >
        {/* Sample slides */}
        {data?.map((i, key) => (
          <SwiperSlide key={key} className='py-4'>
            <div title={i?.name} className="bg-gray-200 drop-shadow-lg rounded-2xl overflow-hidden aspect-[8/3] flex items-center justify-center">
              <Image 
                src={i?.image ? baseURL + i?.image : baseURL + noImage} 
                alt={i?.name} 
                width={800} 
                height={300} 
                className='hover:scale-110 transition-all duration-300 ease-in-out' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom controls container */}
      <div className="carousel-controls flex items-center gap-4">
        {/* Custom React-based pagination dots */}
        <div className="hidden custom-pagination items-center justify-center gap-3 mb-4">
          {Array.from({ length: Math.ceil(totalSlides / (windowWidth >= 1024 ? 3 : windowWidth >= 640 ? 2 : 1)) }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePaginationClick(index * (windowWidth >= 1024 ? 3 : windowWidth >= 640 ? 2 : 1))}
              className="pagination-dot focus:outline-none"
              aria-label={`Go to slide group ${index + 1}`}
            >
              {index === Math.floor(activeIndex / (windowWidth >= 1024 ? 3 : windowWidth >= 640 ? 2 : 1)) ? (
                <FaDotCircle className="w-5 h-5 text-blue-500" />
              ) : (
                <FaRegCircle className="w-5 h-5 text-gray-300" />
              )}
            </button>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="navigation-buttons mt-[-1rem] flex items-center justify-start gap-4">
          <button 
            onClick={() => swiperRef.current?.swiper?.slidePrev()} 
            className="cursor-pointer carousel-button-prev p-2 rounded-full drop-shadow-lg text-white hover:scale-110 duration-300 transition-all ease-in-out bg-gradient-to-br from-green-500 to-blue-900" >
            <FaAngleLeft className="text-[1rem]" />
          </button>

          <button 
            onClick={() => swiperRef.current?.swiper?.slideNext()} 
            className="cursor-pointer carousel-button-next p-2 rounded-full drop-shadow-lg text-white hover:scale-110 duration-300 transition-all ease-in-out bg-gradient-to-br from-green-500 to-blue-900">
            <FaAngleRight className="text-[1rem]" />
          </button>
        </div>

      </div>
      
    </div>
  );
};
