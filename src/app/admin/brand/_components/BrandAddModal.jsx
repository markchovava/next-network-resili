"use client";
import { reactToastifyDark } from '@/_utils/reactToastify';
import { _brandStoreAction } from '@/actions/BrandActions';
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


export default function BrandAddModal({getData, isModal, setIsModal}) {
    const [data, setData] = useState({})
    const [errMsg, setErrMsg] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    async function postData() {
            if(!data?.name){
                const message = "Name is required."
                toast.warn(message, reactToastifyDark)
                setErrMsg({name: message})
                setIsSubmit(false)
                return
            }
            const formData = {
                name: data?.name,
            }
            try{
                const res = await _brandStoreAction(formData);
                console.log('res', res)
                if(res?.status == 0){
                    const message = res?.message;
                    toast.success(message, reactToastifyDark);
                    setErrMsg({email: message});
                    setIsSubmit(false);
                    return;
                }
                if(res?.status == 1) {
                    await getData();
                    toast.success(res?.message, reactToastifyDark);
                    setData({});
                    setErrMsg({});
                    setIsSubmit(false)
                    setIsModal(false);
                    return;
                }
            } catch (error) {
                console.error(`Error: ${error}`);
                setIsSubmit(false)
                return;
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
                    Add Brand
                    </h2>
                    {/*  */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-light'>Name:</p>
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
                    {/*  */}
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
