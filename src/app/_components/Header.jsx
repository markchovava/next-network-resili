import React from 'react'
import { FaMapLocationDot, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import NavArea from './NavArea';
import NavAreaResponsive from './NavAreaResponsive';
import Image from 'next/image';
import { IoCall } from "react-icons/io5";



export default function Header() {
  return (
    <>
    {/* TOP AREA */}
    <section className='w-full bg-gray-50 drop-shadow md:py-3 py-4'>
        <div className=' w-[92%] mx-auto flex md:flex-row flex-col items-center justify-center md:justify-between gap-2'>
            {/*  */}
            <div className='flex md:w-auto w-full md:flex-row flex-col items-center md:justify-start justify-center md:gap-3 gap-1 text-sm'>
                <div className='flex items-center justify-start gap-1'>
                    <FaMapLocationDot className='text-blue-900' />
                    <span>163 Samora Machel Avenue Cnr 7th Street Harare</span>
                </div>
                <div className='flex items-center justify-start gap-1'>
                    <MdEmail className='text-blue-900' />
                    <span>info@networkresilience.co.zw</span>
                </div>
            </div>
            {/*  */}
            <div className='flex items-center md:justify-between gap-2'>
                <Link href="#" className='bg-blue-900 p-1 rounded-full hover:scale-110 transition-all ease-in-out duration-200'>
                    <FaFacebookF className='text-white text-sm' />
                </Link>
                <Link href="#" className='bg-black p-1 rounded-full hover:scale-110 transition-all ease-in-out duration-200'>
                    <FaXTwitter className='text-white text-sm' />
                </Link>
                <Link href="#" className='bg-pink-500 p-1 rounded-full hover:scale-110 transition-all ease-in-out duration-200'>
                    <FaInstagram className='text-white text-sm' />
                </Link>
            </div>
        </div>
    </section>
    {/*MID AREA */}
    <section className='w-full py-6'>
        <div className='w-[92%] mx-auto flex md:flex-row flex-col items-center justify-between gap-3 '>
            <div className=''>
                {/* <h1 className='font-bold font-serif lg:text-[1.6rem] text-[1.4rem] text-green-800'>
                    NETWORK<span className='text-blue-800'>RESILIENCE</span>
                </h1> */}
                <Image 
                    src="/assets/img/logo.png" 
                    className='object-fit' 
                    width={90} 
                    height={90} 
                    alt="Logo" />
            </div>
            <div className='flex justify-end items-center lg:gap-5 gap-3'>
                <h2 className='lg:text-[1.6rem] flex items-center justify-end gap-2 text-[1.3rem] leading-none'>
                    <span className='text-[1.2rem] text-gray-600 p-1 border border-gray-600 rounded-full'>
                    <IoCall /> 
                    </span>
                    <span className=' text-green-700 font-bold'>
                        +263 868 800 8486
                    </span>
                </h2>
                <Link href="#" className='py-4 lg:px-5 px-4 text-gray-50 duration-300 ease-in-out transition-all hover:bg-gradient-to-br hover:from-green-500 hover:to-green-900 hover:drop-shadow-lg bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg'>
                    REQUEST A QUOTE
                </Link>
            </div> 
        </div>
    </section>

    <div className='hidden lg:block'>
        <NavArea />
    </div>
    <div className='lg:hidden'>
        <NavAreaResponsive />
    </div>
    

    </>
  )
}
