import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import SectionContact from '../_components/SectionContact'

export default function page() {
  return (
    <>
    {/* TITLE */}
    <section 
      className="w-[100%] h-[16rem] relative bg-fixed bg-cover text-white bg-blue-800" 
      style={{backgroundImage: `url('/assets/img/05.jpg')`}}>
        <div className='absolute w-[100%] h-[100%] z-10 bg-black opacity-10'></div>
        <div className='absolute w-full z-20 mx-auto h-[100%] flex flex-col items-center justify-center'>
            <h2 className="text-center uppercase text-[2.5rem] font-extrabold mb-4">About Us</h2>
            <hr className="w-[10rem] border-b border-[0.4rem]" />
        </div>
      </section>


    <section className="w-full py-[5rem]">
        <div className="w-[70%] mx-auto flex flex-col items-center justify-center">
            <p className="text-center text-[1.6rem] mt-4 mb-6 font-light">
            At Network Resilience, we specialize in delivering
            cutting-edge Information Communication
            Technology (ICT) and networking solutions. Our
            mission is to empower businesses and residences
            with robust, reliable, and secure connectivity that
            drives efficiency, productivity, and growth.
            </p>
        </div>
    </section>

     {/*  */}
   <section className="w-[100%] pb-[5rem]">
    <div className="mx-auto w-[100%] grid lg:grid-cols-2 grid-cols-1 gap-4">
      <div className="pl-[8%] w-[100%] flex flex-col items-start justify-center lg:py-4 lg:pb-8 pb-16">
        <h1 className="mb-10 px-2 leading-[3rem] text-blue-800 text-[2.6rem]">
            Our Expertise</h1>
        <p className="mb-12 pl-2 pr-8 font-light text-xl">
            We offer a comprehensive range of ICT products and services, including Networking products and 
            installations, Turnkey solutions for business and residential IT needs, Customized networking solutions, 
            Network design, implementation, and management, and IT consulting and network audits.
        </p>
      </div>
      <div className="w-[100%] overflow-hidden lg:rounded-l-3xl lg:aspect-[4/3] aspect-[5/3] bg-gray-400">
          <div className="relative w-[100%] h-[100%]">
              <Image
                src='/assets/img/03.png'
                alt="Full Cover Image"
                layout="fill"
                objectFit="cover"
              />
              </div>
      </div>
    </div>
   </section>

    {/*  */}
    <section className="w-[100%] lg:pb-[5rem]">
        <div className="mx-auto w-[100%] grid lg:grid-cols-2 grid-col-reverse grid-cols-1 gap-3 ">
        <div className="relative drop-shadow-lg lg:order-1 order-2 w-[100%] overflow-hidden lg:rounded-r-2xl lg:aspect-[4/3] aspect-[5/3] bg-gray-400">
            <div className="relative w-[100%] h-[100%]">
                <Image
                src="/assets/img/01.png"
                alt="Full Cover Image"
                layout="fill"
                objectFit="cover"
                />
            </div>
        </div>
        <div className="order-1 lg:order-2 pl-[8%] w-[100%] flex flex-col items-start justify-center lg:py-4 lg:pb-8 pb-16">
            <h1 className="mb-10 px-2 leading-[3rem] text-blue-800 text-[2.6rem]">Our Vision</h1>
            <p className="mb-12 pl-2 pr-12 font-light text-xl">
            Our goal is to become the trusted partner for all ICT
            and networking requirements, providing tailored
            solutions that meet the unique needs of our clients.
            We strive to stay at the forefront of technological
            advancements, ensuring our clients benefit from the
            latest innovations.
            </p>
        </div>
        </div>
    </section>



    <SectionContact />



    </>
  )
}
