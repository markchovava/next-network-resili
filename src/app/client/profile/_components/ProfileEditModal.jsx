"use client";
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-toastify';


const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,
        transition: {
            type: 'spring',
            duration: 1, }},
}


export default function ProfileEditModal({id, isModal, setIsModal}) {
    const [data, setData] = useState({})
    const [errMsg, setErrMsg] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    
  return (
    <>
    <AnimatePresence>
        {isModal &&
        <motion.section
            variants={variants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            className='w-[100vw] h-[100vh] fixed top-0 left-0 z-[200] overflow-y-auto' >
            <div className='absolute z-0 top-0 left-0 w-[100%] h-[100%] bg-black opacity-40'></div>
            <div className='w-[100%] h-[100%] absolute z-10 overflow-auto scroll__width py-[6rem]'>
            <section className='mx-auto lg:w-[50%] w-[90%] bg-white text-black p-6 rounded-2xl'>
                <div className='flex items-center justify-end'>
                <button onClick={() => setIsModal(false)} className='hover:text-red-600 transition-all ease-in-out duration-200'>
                    <IoClose className='text-2xl' />
                </button>
                </div>
                <form onSubmit={() => setIsSubmit(true)}>
                   <h2 className='text-[2.5rem] font-light mb-6 text-center border-b border-gray-300'>
                    Edit Profile
                    </h2>
                    
                     {/*  */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none font-light'>Name:</p>
                        <input 
                            type='text' 
                            name='name'
                            onChange={handleInput}
                            value={data?.name}
                            placeholder='Name' 
                            className='w-[100%] border border-gray-300 outline-none p-3' />
                        {errMsg?.name &&
                        <p className='text-red-600 text-sm'>{errMsg?.name}</p>}
                    </div>

                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none font-light'>Email:</p>
                        <input 
                            type='text' 
                            name='email'
                            onChange={handleInput}
                            value={data?.email}
                            placeholder='Enter Name' 
                            className='w-[100%] border border-gray-300 outline-none p-3' />
                        {errMsg?.email &&
                        <p className='text-red-600 text-sm'>{errMsg?.email}</p>}
                    </div>

                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none font-light'>Phone:</p>
                        <input 
                            type='text' 
                            name='phone'
                            onChange={handleInput}
                            value={data?.phone}
                            placeholder='Enter Phone' 
                            className='w-[100%] border border-gray-300 outline-none p-3' />
                        { errMsg?.phone &&
                            <p className='text-red-600 text-sm'>{errMsg?.phone}</p> }
                    </div>

                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none font-light'>Address:</p>
                        <input 
                            type='text' 
                            name='address'
                            onChange={handleInput}
                            value={data?.address}
                            placeholder='Enter Address' 
                            className='w-[100%] border border-gray-300 outline-none p-3' />
                        { errMsg?.address &&
                            <p className='text-red-600 text-sm'>{errMsg?.address}</p> }
                    </div>

                    {/*  */}
                    <div className='w-[100%]'>
                        <button type='submit' className='w-[100%] rounded-xl bg-gray-800 hover:bg-gray-900 hover:drop-shadow-lg ease-linear transition-all duration-150 text-white py-4'>
                           { isSubmit 
                           ? 'Processing' 
                           : 'Submit' }
                        </button>
                    </div>

                </form>

            </section>
            </div>
        </motion.section>
        }
    </AnimatePresence>
    </>
  )
}
