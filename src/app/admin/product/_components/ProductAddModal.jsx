"use client";
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';
import generateUniqueId from '@/_utils/generateUniqueId';

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,
        transition: {
            type: 'spring',
            duration: 1, }},
}


export default function ProductAddModal({ isModal, setIsModal}) {
    const [data, setData] = useState({})
    const [errMsg, setErrMsg] = useState({})
    const [images, setImages] = useState({
        img1: null,
        img2: null,
        img3: null,
        img4: null,
    })
    const [dList, setDList] = useState([]);
    const [isSubmit, setIsSubmit] = useState(false)
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    /* Handle Details */
    const handleAddDList = () => {
        if(data?.spec_name?.trim() !== '' && data?.spec_value?.trim() !== '') {
            const obj = {
                id: generateUniqueId(),
                name: data?.spec_name, 
                value: data?.spec_value,
            }
            setDList([ obj, ...dList])
        }
        return
    }
    const handleDeleteDlist = (itemId) => {
        setDList((prevItems) => prevItems.filter((item) => item.id !== itemId));
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
                    Add Product
                    </h2>

                    

                    {/* NAME */}
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
                            <p className='text-red-600 text-sm'>{errMsg?.name}</p> }
                    </div>

                    {/* PRICE & QUANTITY */}
                    <div className='w-[100%] grid grid-cols-2 gap-6 mb-6'>
                        {/* PRICE */}
                        <div className='w-[100%] mb-6'>
                            <p className='mb-2 leading-none text-sm font-light'>Price:</p>
                            <input 
                                type='number' 
                                name='price'
                                onChange={handleInput}
                                value={data?.price}
                                placeholder='Enter Price' 
                                className='w-[100%] border border-gray-300 outline-none p-3' />
                            {errMsg?.price &&
                            <p className='text-red-600 text-sm'>{errMsg?.price}</p>}
                        </div>
                        {/* QUANTITY */}
                        <div className='w-[100%] mb-6'>
                            <p className='mb-2 leading-none text-sm font-light'>Quantity:</p>
                            <input 
                                type='number' 
                                name='quantity'
                                onChange={handleInput}
                                value={data?.quantity}
                                placeholder='Enter Quantity' 
                                className='w-[100%] border border-gray-300 outline-none p-3' />
                            {errMsg?.quantity &&
                            <p className='text-red-600 text-sm'>{errMsg?.quantity}</p>}
                        </div>
                    </div>

                     {/* DESCRIPTION */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-light'>Description:</p>
                        <input 
                            type='text' 
                            name='description'
                            onChange={handleInput}
                            value={data?.description}
                            placeholder='Name' 
                            className='w-[100%] border border-gray-300 outline-none p-3' />
                        {errMsg?.description &&
                            <p className='text-red-600 text-sm'>{errMsg?.description}</p> }
                    </div>

                    {/*  IMAGE  */}
                    <div className='w-[100%] grid grid-cols-4 gap-6 mb-6'>
                        {/*  */}
                        <div>
                            <p className='mb-2 leading-none text-sm font-light'>Image:</p>
                            <input 
                                type='file' 
                                name='image'
                                onChange={ (e) => {
                                    setData({ ...data, image1: e.target.files[0],  })
                                    setImages({...images, img1: URL.createObjectURL(e.target.files[0])})
                                }}
                                className=' w-[100%] rounded-lg p-3 border border-gray-300 mb-3' />
                            {/*  */}
                            <div className='w-[100%] drop-shadow-lg relative aspect-[7/5] bg-gray-200 rounded-lg overflow-hidden'>
                                <div className='absolute z-10 w-[100%] h-[100%] flex items-center justify-center'>No Image</div>
                                <div className='w-[100%] h-[100%] absolute z-20 '>
                                    { images?.img1 &&
                                    <img 
                                        src={images?.img1} 
                                        alt='Image' 
                                        className='w-[100%] h-[100%] object-cover' />
                                    }
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div>
                            <p className='mb-2 leading-none text-sm font-light'>Image:</p>
                            <input 
                                type='file' 
                                name='image'
                                onChange={ (e) => {
                                    setData({ ...data, image2: e.target.files[0],  })
                                    setImages({...images, img2: URL.createObjectURL(e.target.files[0])})
                                }}
                                className=' w-[100%] rounded-lg p-3 border border-gray-300 mb-3' />
                            {/*  */}
                            <div className='w-[100%] drop-shadow-lg relative aspect-[7/5] bg-gray-200 rounded-lg overflow-hidden'>
                                <div className='absolute z-10 w-[100%] h-[100%] flex items-center justify-center'>No Image</div>
                                <div className='w-[100%] h-[100%] absolute z-20 '>
                                    { images?.img2 &&
                                    <img 
                                        src={images?.img2} 
                                        alt='Image' 
                                        className='w-[100%] h-[100%] object-cover' />
                                    }
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div>
                            <p className='mb-2 leading-none text-sm font-light'>Image:</p>
                            <input 
                                type='file' 
                                name='image'
                                onChange={ (e) => {
                                    setData({ ...data, image3: e.target.files[0],  })
                                    setImages({...images, img3: URL.createObjectURL(e.target.files[0])})
                                }}
                                className=' w-[100%] rounded-lg p-3 border border-gray-300 mb-3' />
                            {/*  */}
                            <div className='w-[100%] drop-shadow-lg relative aspect-[7/5] bg-gray-200 rounded-lg overflow-hidden'>
                                <div className='absolute z-10 w-[100%] h-[100%] flex items-center justify-center'>No Image</div>
                                <div className='w-[100%] h-[100%] absolute z-20 '>
                                    {images?.img3 && 
                                    <img 
                                        src={images?.img3} 
                                        alt='Image' 
                                        className='w-[100%] h-[100%] object-cover' />
                                    }
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div>
                            <p className='mb-2 leading-none text-sm font-light'>Image:</p>
                            <input 
                                type='file' 
                                name='image'
                                onChange={ (e) => {
                                    setData({ ...data, image4: e.target.files[0],  })
                                    setImages({...images, img4: URL.createObjectURL(e.target.files[0])})
                                }}
                                className=' w-[100%] rounded-lg p-3 border border-gray-300 mb-3' />
                            {/*  */}
                            <div className='w-[100%] drop-shadow-lg relative aspect-[7/5] bg-gray-200 rounded-lg overflow-hidden'>
                                <div className='absolute z-10 w-[100%] h-[100%] flex items-center justify-center'>No Image</div>
                                <div className='w-[100%] h-[100%] absolute z-20 '>
                                    {images?.img4 &&
                                    <img 
                                        src={images?.img4} 
                                        alt='Image' 
                                        className='w-[100%] h-[100%] object-cover' />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                     {/* SPECIFICATION */}
                    <div className='w-[100%] grid grid-cols-9 gap-4'>
                        <div className='col-span-4'>
                            <p className='mb-2 leading-none text-sm font-semibold'>Specification Name:</p>
                            <input 
                                type='text' 
                                name='spec_name'
                                onChange={handleInput}
                                value={data?.spec_name}
                                placeholder='Specification Name' 
                                className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                        </div>
                        <div className='col-span-4'>
                            <p className='mb-2 leading-none text-sm font-semibold'>Specification Value:</p>
                            <input 
                                type='text' 
                                name='spec_value'
                                value={data?.spec_value}
                                onChange={handleInput}
                                placeholder='Specification Value' 
                                className='w-[100%] rounded-xl border border-gray-300 outline-none p-3' />
                        </div>
                        <div className='col-span-1 flex items-end justify-center'>
                            <button type='button'
                                onClick={handleAddDList}
                                className='py-3'>
                                <IoMdAddCircleOutline className='text-3xl hover:scale-110 transition-all ease-linear duration-150' />
                            </button>
                        </div>
                    </div>
                    {/*  */}
                    <div className=' mt-3'>
                        {dList && dList.map((i, key) => (
                            <div key={i.id} className='w-[100%] grid grid-cols-9 gap-4 border border-gray-300'>
                                <div className='w-[100%] col-span-4 px-3 py-2 border-r border-gray-300'>{i.name}</div>
                                <div className='w-[100%] col-span-4 px-3 py-2 border-r border-gray-300'> {i.value}</div>
                                <div className='col-span-1 flex items-center justify-center'>
                                    <button type='button'
                                        onClick={() => handleDeleteDlist(i.id)}
                                        className='py-1 flex items-center justify-center'>
                                        <MdDeleteForever className='text-xl hover:scale-110 transition-all ease-linear duration-150' />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>



                    {/*  */}
                    <div className='w-[100%] mt-6'>
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
