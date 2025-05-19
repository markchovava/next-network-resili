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
import { noImage } from '@/data/ImagesData';
import { baseURL } from '@/api/BaseURL';
import Link from 'next/link';
import Image from 'next/image';



export default function CarouselProduct({ dbData }) {
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

     <section className='w-full pb-[5rem]'>
        <div className='mx-auto w-[92%]'>
          <h2 className='text-3xl'>Other Products</h2>

          <div className="carousel-container w-full mx-auto">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={4}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 1.5 },
                640: { slidesPerView: 2.5 },
                1024: { slidesPerView: 4 },
              }}
              onSlideChange={handleSlideChange}
              navigation={false}
              pagination={false} // Disable default pagination
              className="mb-6"
            >
              {/* Sample slides */}
              {data.map((i, index) => (
                <SwiperSlide key={index} className='py-4'>
                  <div key={i.id} className='group bg-white rounded-lg drop-shadow-md hover:drop-shadow-xl p-4'>
                          {/* IMAGE */}
                          <div className='w-[100%] aspect-[7/5] bg-gray-100 overflow-hidden rounded-lg mb-3'>
                          <Image 
                          src={ i?.product_images?.length > 0 
                              ? baseURL + i?.product_images[0]?.image 
                              : baseURL + noImage }
                          width={700} 
                          height={500} 
                          className="group-hover:scale-110 transition-all ease-in-out duration-200 object-cover"
                          alt='Image' />
                          </div>
                          {/* TEXT */}
                          <Link href={`/product/${i?.id}`} className='hover:underline hover:text-blue-800'> 
                          <h3 className='font-light mb-1'>
                          {i.name}
                          </h3></Link>
                          <p className='text-xl font-bold mb-2'>
                            {i?.price ? '$' + i?.price : 'Not Added'}
                          </p>
                          <div className='flex items-center justify-start'>
                          <Link href={`/product/${i?.id}`}
                            className='rounded-lg text-sm text-white cursor-pointer py-2 px-3 bg-gradient-to-br from-blue-600 to-blue-900 hover:bg-gradient-to-br hover:from-green-600 hover:to-green-900'>
                            View More
                          </Link>
                          </div>
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
                  className="carousel-button-prev p-2 rounded-full bg__two drop-shadow-lg text-white hover:scale-110 duration-300 transition-all ease-in-out" >
                  <FaAngleLeft className="text-[1rem]" />
                </button>

                <button 
                  onClick={() => swiperRef.current?.swiper?.slideNext()} 
                  className="carousel-button-next p-2 rounded-full bg__two drop-shadow-lg text-white hover:scale-110 duration-300 transition-all ease-in-out" >
                  <FaAngleRight className="text-[1rem]" />
                </button>
              </div>

            </div>
          </div>
          </div>
    </section>
  );
};
