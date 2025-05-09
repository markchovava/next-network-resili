"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { AiOutlineAudit } from "react-icons/ai";
import { GrHostMaintenance } from "react-icons/gr";
import { FaTools } from "react-icons/fa";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';



export default function CarouselService() {
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
        className="mb-6" >

       
        <SwiperSlide className='py-4'>
            <div className="w-[100%] h-[10rem] flex items-center justify-between gap-2 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl drop-shadow-lg p-6">
                <div className="w-[30%] flex items-center justify-center">
                    <GiNetworkBars className="text-[5rem]"/>
                </div>
                <div className="w-[70%]">
                    <p className="text-[1.1rem] leading-tight mb-3">Network design, installation, and configuration</p>
                    <Link href="#">
                    <button className="mt-2 cursor-pointer px-5 py-2 rounded-xl drop-shadow-md bg__one">
                        View More
                    </button>
                    </Link>
                </div>
            </div>
        </SwiperSlide>

         <SwiperSlide className='py-4'>
            <div className="w-[100%] h-[10rem] flex items-center justify-between gap-2 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl drop-shadow-lg p-6">
                <div className="w-[30%] flex items-center justify-center">
                <AiOutlineAudit className="text-[5rem]"/>
                </div>
                <div className="w-[70%]">
                <p className="text-[1.1rem] leading-tight mb-3">Network audits and optimization</p>
                <Link href="#">
                    <button className="mt-2 cursor-pointer px-5 py-2 rounded-xl drop-shadow-md bg__one">
                    View More
                    </button>
                </Link>
                </div>
            </div>
         </SwiperSlide>

        <SwiperSlide className='py-4'>
            <div className="w-[100%] h-[10rem] flex items-center justify-between gap-2 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl drop-shadow-lg p-6">
                <div className="w-[30%] flex items-center justify-center">
                <GrHostMaintenance className="text-[5rem]"/>
                </div>
                <div className="w-[70%]">
                <p className="text-[1.1rem] leading-tight mb-3">Ongoing maintenance and support</p>
                <Link href="#">
                    <button className="mt-2 cursor-pointer px-5 py-2 rounded-xl drop-shadow-md bg__one">
                    View More
                    </button>
                </Link>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='py-4'>
            <div className="w-[100%] h-[10rem] flex items-center justify-between gap-2 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl drop-shadow-lg p-6">
                <div className="w-[30%] flex items-center justify-center">
                <FaTools className="text-[5rem]"/>
                </div>
                <div className="w-[70%]">
                <p className="text-[1.1rem] leading-tight mb-3">Networking equipment</p>
                <Link href="#">
                    <button className="mt-2 cursor-pointer px-5 py-2 rounded-xl drop-shadow-md bg__one">
                    View More
                    </button>
                </Link>
                </div>
            </div>
        </SwiperSlide>
    
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
            className="carousel-button-prev p-2 rounded-full bg__one drop-shadow-lg text-white hover:scale-110 duration-300 transition-all ease-in-out" >
            <FaAngleLeft className="text-[1rem]" />
          </button>

          <button 
            onClick={() => swiperRef.current?.swiper?.slideNext()} 
            className="carousel-button-next p-2 rounded-full bg__one drop-shadow-lg text-white hover:scale-110 duration-300 transition-all ease-in-out" >
            <FaAngleRight className="text-[1rem]" />
          </button>
        </div>

      </div>
    </div>
  );
};
