"use client";
import { reactToastifyDark } from '@/_utils/reactToastify';
import { _appInfoStoreAction } from '@/actions/AppInfoActions';
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


export default function AppInfoEditModal({domData, getData, isModal, setIsModal}) {
    const [data, setData] = useState(domData)
    const [errMsg, setErrMsg] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    async function postData() {
        if(!data?.name){
            const message = "Name is required"
            setErrMsg({name: message})
            toast.warn(message, reactToastifyDark)
            return
        } 
        const formData = {
            name: data?.name,
            description: data?.description,
            email: data?.email,
            phone: data?.phone,
            address: data?.address,
            website: data?.website,
            whatsapp: data?.whatsapp,
            instagram: data?.instagram,
            twitter: data?.twitter,
            linkedin: data?.linkedin,
            facebook: data?.facebook,
        } 
        try{
            const res = await _appInfoStoreAction(formData)
            console.log('res', res)
            if(res?.status == 1) {
                await getData();
                toast.success(res?.message, reactToastifyDark);
                setErrMsg({});
                setIsModal(false)
                setIsSubmit(false);
            }
            if(res?.status == 0) {
                toast.warn(res?.message, reactToastifyDark);
                setErrMsg({name: res?.message});
                setIsSubmit(false);
            }
        } catch (error) {
            console.error(`Error: ${error}`);
            setIsSubmit(false); 
        }
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
                <form action={postData} onSubmit={() => setIsSubmit(true)}>
                   <h2 className='text-[2.5rem] font-light mb-6 text-center border-b border-gray-300'>
                    Edit AppInfo
                    </h2>
                    
                     {/* NAME */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none font-light'>Name:</p>
                        <input 
                            type='text' 
                            name='name'
                            onChange={handleInput}
                            value={data?.name}
                            placeholder='Enter Name' 
                            className='w-[100%] border border-gray-300 outline-none p-3' />
                        {errMsg?.name &&
                        <p className='text-red-600 text-sm'>{errMsg?.name}</p>}
                    </div>
                    {/* EMAIL */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none font-light'>Email:</p>
                        <input 
                            type='text' 
                            name='email'
                            onChange={handleInput}
                            value={data?.email}
                            placeholder='Enter Email' 
                            className='w-[100%] border border-gray-300 outline-none p-3' />
                        {errMsg?.email &&
                        <p className='text-red-600 text-sm'>{errMsg?.email}</p>}
                    </div>
                    {/* PHONE */}
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
                    {/* ADDRESS */}
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
                    {/* DESCRIPTION */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none font-light'>Description:</p>
                        <textarea
                            type='text' 
                            name='description'
                            onChange={handleInput}
                            value={data?.description}
                            placeholder='Enter Description' 
                            className='w-[100%] h-[8rem] border border-gray-300 outline-none p-3'></textarea>
                        { errMsg?.description &&
                            <p className='text-red-600 text-sm'>{errMsg?.description}</p> }
                    </div>
                    {/* WEBSITE */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none font-light'>Website:</p>
                        <input 
                            type='text' 
                            name='website'
                            onChange={handleInput}
                            value={data?.website}
                            placeholder='Enter Website' 
                            className='w-[100%] border border-gray-300 outline-none p-3' />
                        { errMsg?.website &&
                            <p className='text-red-600 text-sm'>{errMsg?.website}</p> }
                    </div>
                    {/* WHATSAPP */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none font-light'>WhatsApp:</p>
                        <input 
                            type='text' 
                            name='whatsapp'
                            onChange={handleInput}
                            value={data?.whatsapp}
                            placeholder='Enter Whatsapp' 
                            className='w-[100%] border border-gray-300 outline-none p-3' />
                        { errMsg?.whatsapp &&
                            <p className='text-red-600 text-sm'>{errMsg?.whatsapp}</p> }
                    </div>
                    {/* FACEBOOK */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none font-light'>Facebook:</p>
                        <input 
                            type='text' 
                            name='facebook'
                            onChange={handleInput}
                            value={data?.facebook}
                            placeholder='Enter Facebook' 
                            className='w-[100%] border border-gray-300 outline-none p-3' />
                        { errMsg?.facebook &&
                            <p className='text-red-600 text-sm'>{errMsg?.facebook}</p> }
                    </div>
                    {/* INSTAGRAM */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none font-light'>Instagram:</p>
                        <input 
                            type='text' 
                            name='instagram'
                            onChange={handleInput}
                            value={data?.instagram}
                            placeholder='Enter Instagram' 
                            className='w-[100%] border border-gray-300 outline-none p-3' />
                        { errMsg?.instagram &&
                            <p className='text-red-600 text-sm'>{errMsg?.instagram}</p> }
                    </div>
                    {/* LINKEDIN */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none font-light'>LinkedIn:</p>
                        <input 
                            type='text' 
                            name='linkedin'
                            onChange={handleInput}
                            value={data?.linkedin}
                            placeholder='Enter LinkedIn' 
                            className='w-[100%] border border-gray-300 outline-none p-3' />
                        { errMsg?.linkedin &&
                            <p className='text-red-600 text-sm'>{errMsg?.linkedin}</p> }
                    </div>
                    {/* TWITTER */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none font-light'>Twitter:</p>
                        <input 
                            type='text' 
                            name='twitter'
                            onChange={handleInput}
                            value={data?.twitter}
                            placeholder='Enter X (Twitter))' 
                            className='w-[100%] border border-gray-300 outline-none p-3' />
                        { errMsg?.twitter &&
                            <p className='text-red-600 text-sm'>{errMsg?.twitter}</p> }
                    </div>
                    {/* BUTTON */}
                    <div className='w-[100%]'>
                        <button type='submit' className='w-[100%] rounded-xl bg-gray-800 hover:bg-gray-900 hover:drop-shadow-lg ease-linear transition-all duration-150 text-white py-4'>
                           { isSubmit ? 'Processing' : 'Submit' }
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
