"use client";
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';
import generateUniqueId from '@/_utils/generateUniqueId';
import { baseURL } from '@/api/BaseURL';
import { _productImageDeleteAction } from '@/actions/ProductImageActions';
import { reactToastifyDark } from '@/_utils/reactToastify';
import { _productUpdateAction } from '@/actions/ProductActions';
import { generateNumbers } from '@/_utils/formatNumber';
import Image from 'next/image';

const variants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1, 
        }
    },
}

export default function ProductEditModal({id, isModal, setIsModal, getData, imagesData, specsData, domData, brands}) {
    const currData = {
        ...domData, 
        product_images: [],
        spec_name: '',
        spec_value: ''
    }
    const [data, setData] = useState(currData)
    const [errMsg, setErrMsg] = useState({})
    const [images, setImages] = useState({
        img0: imagesData[0]?.image ? baseURL + imagesData[0]?.image : null,
        img1: imagesData[1]?.image ? baseURL + imagesData[1]?.image : null,
        img2: imagesData[2]?.image ? baseURL + imagesData[2]?.image : null,
        img3: imagesData[3]?.image ? baseURL + imagesData[3]?.image : null,
    })
    const [dList, setDList] = useState(specsData || []);
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
            setDList([obj, ...dList])
            // Clear spec fields after adding
            setData({...data, spec_name: '', spec_value: ''})
        }
    }
    
    const handleDeleteDlist = (itemId) => {
        setDList((prevItems) => prevItems.filter((item) => item.id !== itemId));
    }

    async function deleteData(img_id) {
        try{
            const res = await _productImageDeleteAction(img_id, id);
            if(res?.status == 1) {
                toast.success(res?.message, reactToastifyDark);
                await getData(); // Refresh data after deletion
                return;
            }
        } catch (error) {
            console.error(`Error: ${error}`); 
        }
    }

    async function postData() {
        if(!data?.name){
            const message = "Name is required."
            toast.warn(message, reactToastifyDark)
            setErrMsg({name: message})
            setIsSubmit(false)
            return
        }
        
        const formData = new FormData()
        formData.append('name', data?.name)
        formData.append('price', data?.price)
        formData.append('status', data?.status)
        formData.append('priority', data?.priority)
        formData.append('quantity', data?.quantity)
        formData.append('brand_id', data?.brand_id)
        formData.append('description', data?.description)
        formData.append('product_specs', JSON.stringify(dList));
        
        data?.product_images.forEach((file, index) => {
            formData.append('product_images[]', file);
        });
        
        try{
            const res = await _productUpdateAction(formData, id);
            if(res?.status == 0){
                const message = res?.message;
                toast.warn(message, reactToastifyDark);
                setErrMsg({general: message});
                setIsSubmit(false);
                return;
            }
            if(res?.status == 1) {
                await getData();
                toast.success(res?.message, reactToastifyDark);
                setErrMsg({});
                setIsSubmit(false)
                setIsModal(false);
                return;
            }
        } catch (error) {
            console.error(`Error: ${error}`);
            toast.error('An error occurred while updating the product', reactToastifyDark);
            setIsSubmit(false)
            return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true);
        postData();
    }

    const handleImageChange = (e, imageKey, imageIndex) => {
        if(e.target.files[0]) {
            setData({ 
                ...data, 
                product_images: [...data.product_images, e.target.files[0]]  
            })
            setImages({...images, [imageKey]: URL.createObjectURL(e.target.files[0])})
            
            if(imagesData[imageIndex]?.id) {
                const confirm = window.confirm('Do you want to delete the previous image?')
                if(confirm) {
                    deleteData(imagesData[imageIndex]?.id)
                }
            }
        }
    }

  return (
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
            <section className='mx-auto lg:w-[60%] w-[92%] bg-white text-black p-6 rounded-2xl'>
                <div className='flex items-center justify-end'>
                    <button 
                        type='button'
                        onClick={() => setIsModal(false)} 
                        className='hover:text-red-600 transition-all ease-in-out duration-200'>
                        <IoClose className='text-2xl' />
                    </button>
                </div>
                
                <div>
                   <h2 className='text-[2.5rem] font-light mb-6 text-center border-b border-gray-300'>
                    Edit Product
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
                    
                    {/* PRIORITY */}
                    <div className='w-[100%] mb-6'>
                        <p className='mb-2 leading-none text-sm font-light'>Priority:</p>
                        <select 
                            name='priority'
                            onChange={handleInput}
                            value={data?.priority} 
                            className='w-[100%] border border-gray-300 outline-none p-3'>
                            <option value="">Select a Priority</option>
                            {generateNumbers(8).map((i, key) => (
                                <option key={key} value={i}>
                                    {i}
                                </option>
                            ))}
                        </select>
                        {errMsg?.priority &&
                            <p className='text-red-600 text-sm'>{errMsg?.priority}</p> }
                    </div>
                  
                    {/* BRANDS & STATUS */}
                    <div className='w-[100%] grid grid-cols-2 gap-6 mb-6'>
                        {/* BRAND */}
                        {brands &&
                        <div className='w-[100%]'>
                            <p className='mb-2 leading-none text-sm font-light'>Brand:</p>
                            <select 
                                name='brand_id'
                                onChange={handleInput}
                                value={data?.brand_id} 
                                className='w-[100%] border border-gray-300 outline-none p-3'>
                                <option value="">Select a Brand</option>
                                {brands.map((i, key) => (
                                    <option key={key} value={i?.brand_id}>{i?.name}</option>
                                ))}
                            </select>
                            {errMsg?.brand_id &&
                                <p className='text-red-600 text-sm'>{errMsg?.brand_id}</p> }
                        </div>
                        }
                        {/* STATUS */}
                        <div className='w-[100%]'>
                            <p className='mb-2 leading-none text-sm font-light'>Status:</p>
                            <select 
                                name='status'
                                onChange={handleInput}
                                value={data?.status}
                                className='w-[100%] border border-gray-300 outline-none p-3'>
                                <option value=''>Select a Status</option>
                                <option value='OUT-OF-STOCK'>OUT-OF-STOCK</option>
                                <option value='IN-STOCK'>IN-STOCK</option>
                            </select>
                            {errMsg?.status &&
                                <p className='text-red-600 text-sm'>{errMsg?.status}</p>}
                        </div>
                    </div>
                    
                    {/* PRICE & QUANTITY */}
                    <div className='w-[100%] grid grid-cols-2 gap-6 mb-6'>
                        {/* PRICE */}
                        <div className='w-[100%]'>
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
                        <div className='w-[100%]'>
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
                        <textarea
                            name='description'
                            onChange={handleInput}
                            value={data?.description}
                            placeholder='Description' 
                            rows={4}
                            className='w-[100%] border border-gray-300 outline-none p-3' />
                        {errMsg?.description &&
                            <p className='text-red-600 text-sm'>{errMsg?.description}</p> }
                    </div>
                    
                    {/*  IMAGE  */}
                    <div className='w-[100%] grid lg:grid-cols-4 grid-cols-2 gap-6 mb-6'>
                        {/* IMAGE 0 */}
                        <div>
                            <p className='mb-2 leading-none text-sm font-light'>Image:</p>
                            <input 
                                type='file' 
                                name='image'
                                accept='image/*'
                                onChange={(e) => handleImageChange(e, 'img0', 0)}
                                className='w-[100%] rounded-lg p-3 border border-gray-300 mb-3' />
                            <div className='w-[100%] drop-shadow-lg relative aspect-[7/5] bg-gray-200 rounded-lg overflow-hidden'>
                                <div className='absolute z-10 w-[100%] h-[100%] flex items-center justify-center'>No Image</div>
                                <div className='w-[100%] h-[100%] absolute z-20 '>
                                    {images?.img0 &&
                                    <img 
                                        src={images?.img0} 
                                        alt='Image' 
                                        className='w-[100%] h-[100%] object-cover' />
                                    }
                                </div>
                            </div>
                        </div>
                        {/* IMAGE 1 */}
                        <div>
                            <p className='mb-2 leading-none text-sm font-light'>Image:</p>
                            <input 
                                type='file' 
                                name='image'
                                accept='image/*'
                                onChange={(e) => handleImageChange(e, 'img1', 1)}
                                className='w-[100%] rounded-lg p-3 border border-gray-300 mb-3' />
                            <div className='w-[100%] drop-shadow-lg relative aspect-[7/5] bg-gray-200 rounded-lg overflow-hidden'>
                                <div className='absolute z-10 w-[100%] h-[100%] flex items-center justify-center'>No Image</div>
                                <div className='w-[100%] h-[100%] absolute z-20 '>
                                    {images?.img1 &&
                                    <Image
                                        width={350}
                                        height={250}
                                        src={images?.img1} 
                                        alt='Image' 
                                        className='w-[100%] h-[100%] object-cover' />
                                    }
                                </div>
                            </div>
                        </div>
                        {/* IMAGE 2 */}
                        <div>
                            <p className='mb-2 leading-none text-sm font-light'>Image:</p>
                            <input 
                                type='file' 
                                name='image'
                                accept='image/*'
                                onChange={(e) => handleImageChange(e, 'img2', 2)}
                                className='w-[100%] rounded-lg p-3 border border-gray-300 mb-3' />
                            <div className='w-[100%] drop-shadow-lg relative aspect-[7/5] bg-gray-200 rounded-lg overflow-hidden'>
                                <div className='absolute z-10 w-[100%] h-[100%] flex items-center justify-center'>No Image</div>
                                <div className='w-[100%] h-[100%] absolute z-20 '>
                                    {images?.img2 && 
                                    <img 
                                        src={images?.img2} 
                                        alt='Image' 
                                        className='w-[100%] h-[100%] object-cover' />
                                    }
                                </div>
                            </div>
                        </div>
                        {/* IMAGE 3 */}
                        <div>
                            <p className='mb-2 leading-none text-sm font-light'>Image:</p>
                            <input 
                                type='file' 
                                name='image'
                                accept='image/*'
                                onChange={(e) => handleImageChange(e, 'img3', 3)}
                                className='w-[100%] rounded-lg p-3 border border-gray-300 mb-3' />
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
                    </div>

                     {/* SPECIFICATION */}
                    <div className='w-[100%] grid grid-cols-9 gap-4 mb-3'>
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
                            <button 
                                type='button'
                                onClick={handleAddDList}
                                className='py-3'>
                                <IoMdAddCircleOutline className='text-3xl hover:scale-110 transition-all ease-linear duration-150' />
                            </button>
                        </div>
                    </div>
                    
                    {/* Specification List */}
                    {dList.length > 0 && (
                        <div className='mt-3 mb-6'>
                            {dList.map((i) => (
                                <div key={i.id} className='w-[100%] grid grid-cols-9 gap-4 border border-gray-300 mb-2'>
                                    <div className='w-[100%] col-span-4 px-3 py-2 border-r border-gray-300'>{i.name}</div>
                                    <div className='w-[100%] col-span-4 px-3 py-2 border-r border-gray-300'>{i.value}</div>
                                    <div className='col-span-1 flex items-center justify-center'>
                                        <button 
                                            type='button'
                                            onClick={() => handleDeleteDlist(i.id)}
                                            className='py-1 flex items-center justify-center hover:text-red-600'>
                                            <MdDeleteForever className='text-xl hover:scale-110 transition-all ease-linear duration-150' />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Submit Button */}
                    <div className='w-[100%] mt-6'>
                        <button 
                            type='button'
                            onClick={handleSubmit}
                            disabled={isSubmit}
                            className='w-[100%] rounded-xl bg-gray-800 hover:bg-gray-900 hover:drop-shadow-lg ease-linear transition-all duration-150 text-white py-4 disabled:opacity-50 disabled:cursor-not-allowed'>
                           {isSubmit ? 'Processing...' : 'Submit'}
                        </button>
                    </div>
                </div>

            </section>
            </div>
        </motion.section>
        }
    </AnimatePresence>
  )
}