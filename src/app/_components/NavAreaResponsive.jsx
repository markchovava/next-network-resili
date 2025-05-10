"use client"
import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";



const variants = {
    hidden: { opacity: 0},
    visible: {
        opacity: 1,
        transition: {type: 'spring', duration: 1} },
}


export default function NavAreaResponsive() {
    const [isToggle, setIsToggle] = useState(false)
    const [isActive, setIsActive] = useState({
        zero: false,
        one: false,
        two: false,
    })

  return (
    <>
    {/* LOW AREA */}
    <section className='w-full relative'>
        <div className='w-[92%] mx-auto py-4 flex items-center justify-end'>
            <button 
                onClick={() => setIsToggle(!isToggle)} >
                { isToggle ?
                <IoClose className='text-[1.3rem]' />
                :
                <GiHamburgerMenu className='text-[1.3rem]' />
                }
            </button>
        </div>
        {isToggle &&
        <>
            <div className='w-[92%] mx-auto py-4 flex flex-col items-center justify-between gap-4'>
                <ul className='w-[100%] flex flex-col items-center justify-center gap-5 font-medium'>
                    <li>
                        <Link 
                        href="/" 
                        className='hover:text-green-800 ease-in-out duration-200 transition-all'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                        href="/about" 
                        className='hover:text-green-800 ease-in-out duration-200 transition-all'>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link 
                        href="/service" 
                        className='hover:text-green-800 ease-in-out duration-200 transition-all'>
                            Our Services
                        </Link>
                    </li>
                     <li>
                        <Link 
                        href="/product" 
                        className='hover:text-green-800 ease-in-out duration-200 transition-all'>
                            Our Products
                        </Link>
                    </li>
                    <li>
                        <Link 
                        href="/partner" 
                        className='hover:text-green-800 ease-in-out duration-200 transition-all'>
                            Our Partners
                        </Link>
                    </li>
                   
                </ul>
            
                <ul className='flex items-center justify-start gap-5 font-semibold'>
                    <motion.li className='relative'>
                        <button 
                            className='px-3 cursor-pointer' 
                            onClick={() => setIsActive({one: !isActive?.one})} >
                            <IoSearchOutline className='text-[1.2rem] text-green-700' />
                        </button>
                    </motion.li>
                    <motion.li className='relative'>
                        <button 
                            className='px-3 cursor-pointer' 
                            onClick={() => setIsActive({two: !isActive?.two})} >
                            <FaCartArrowDown className='text-[1.2rem] text-blue-700' />
                        </button>
                       
                    </motion.li>
                </ul>
            </div>
          
            {/* SEARCH */}
            <AnimatePresence>
                { isActive?.one && 
                <div className='w-[92%] mx-auto mb-3 text-sm font-normal  p-2 bg-white drop-shadow-lg rounded-lg'>
                    <div className='w-[100%] flex items-center justify-start border border-gray-400 rounded-lg overflow-hidden'>
                        <input 
                            type='text' 
                            placeholder='Search'
                            className='border-r border-gray-400 outline-none w-[85%] p-2 overflow-hidden' />
                        <button className='w-[15%] flex items-center justify-center p-2 cursor-pointer'>
                            <IoSearchOutline className='text-[1.2rem]' />
                        </button>

                    </div>
                </div>
                }
            </AnimatePresence>

            <AnimatePresence>
                { isActive?.two && 
                <motion.ul 
                    variants={variants} 
                    initial='hidden'
                    animate='visible'
                    exit="hidden" 
                    className='w-[92%] mb-4 mx-auto gap-1 text-sm top-[110%] right-[-40rem] font-normal p-2 bg-white drop-shadow-lg rounded-lg'>
                    <li className='flex items-center justify-between gap-2 cursor-pointer border-b border-gray-300 pb-1'>
                        <div className=''>
                            <p>Product 1 </p>
                            <p className='italic'>Qty: 100</p>
                        </div> 
                        <div className='font-medium text-green-800 italic'>$12.30</div>
                    </li>
                    <li className='flex items-center justify-between gap-2 cursor-pointer border-b border-gray-300 pb-1'>
                        <div className=''>
                            <p>Product 1 </p>
                            <p className='italic'>Qty: 100</p>
                        </div> 
                        <div className='font-medium text-green-800 italic'>$12.30</div>
                    </li>
                    <li className='flex items-center justify-between gap-2 cursor-pointer border-b border-gray-300 pb-1'>
                        <div className=''>
                            <p>Product 1 </p>
                            <p className='italic'>Qty: 100</p>
                        </div> 
                        <div className='font-medium text-green-800 italic'>$12.30</div>
                    </li>
                </motion.ul>
                }
            </AnimatePresence>
       
        </>
        }
    </section>
    </>
  )
}
