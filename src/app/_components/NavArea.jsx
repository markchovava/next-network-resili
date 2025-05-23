"use client"
import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link'
import NavAreaResponsive from './NavAreaResponsive';


const variants = {
    hidden: { opacity: 0},
    visible: {
        opacity: 1,
        transition: {type: 'spring', duration: 1} },
}


export default function NavArea() {
    const [isActive, setIsActive] = useState({
        one: false,
        two: false,
    })

  return (
    <>
    {/* LOW AREA */}
    <section className='w-full hidden lg:block relative z-[100]'>
        <div className='w-[92%] mx-auto py-4 flex  items-center justify-between'>
            <ul className='flex items-center justify-start gap-5 font-medium'>
                <li>
                    <Link 
                    href="/" 
                    className='hover:text-green-800 ease-in-out duration-200 transition-all'>
                        Home</Link></li>
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
                         Services
                    </Link>
                </li>
                 <li>
                    <Link 
                    href="/product" 
                    className='hover:text-green-800 ease-in-out duration-200 transition-all'>
                         Products
                    </Link>
                </li>
                <li>
                    <Link 
                    href="/partner" 
                    className='hover:text-green-800 ease-in-out duration-200 transition-all'>
                         Partners
                    </Link>
                </li>
                <li>
                    <Link 
                    href="/contact" 
                    className='hover:text-green-800 ease-in-out duration-200 transition-all'>
                        Contact Us
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
                    {/* SEARCH */}
                    <AnimatePresence>
                        { isActive?.one && 
                        <div className='text-sm top-[110%] right-[-20%] font-normal absolute w-[500%] p-2 z-[200] bg-white drop-shadow-lg rounded-lg'>
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
                </motion.li>
                <motion.li className='relative'>
                    <Link href='/cart'>
                    <button
                        className='px-3 cursor-pointer'>
                        <FaCartArrowDown className='text-[1.2rem] text-blue-700' />
                    </button>
                    </Link>
                   {/*  <button 
                        className='px-3 cursor-pointer' 
                        onClick={() => setIsActive({two: !isActive?.two})} >
                        <FaCartArrowDown className='text-[1.2rem] text-blue-700' />
                    </button> */}
                    {/*  */}
                    {/* <AnimatePresence>
                        { isActive?.two && 
                        <motion.ul 
                            variants={variants} 
                            initial='hidden'
                            animate='visible'
                            exit="hidden" 
                            className='flex-col gap-1 text-sm top-[110%] right-[-20%] font-normal absolute w-[350%] p-2 z-[200] bg-white drop-shadow-lg rounded-lg'>
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
                            <li className='py-2'>
                                <Link href='/cart'>
                                <button className='w-[100%] rounded-full text-white py-2 ease-in-out transition-all duration-200 bg-gradient-to-br from-green-500 to-blue-900 hover:bg-gradient-to-br hover:from-blue-500 hover:to-green-900'>
                                    Go to Cart
                                </button>
                                </Link>
                            </li>
                        </motion.ul>
                        }
                    </AnimatePresence> */}
                </motion.li>
            </ul>
        </div>
    </section>

    <NavAreaResponsive />
    </>
  )
}
