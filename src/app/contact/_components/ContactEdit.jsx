"use client";
import React, { useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
import { toast } from 'react-toastify';
import { reactToastifyDark } from '@/_utils/reactToastify';
import { messageStoreAction } from '@/actions/MessageActions';



export default function ContactEdit() {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [result, setResult] = useState(0)
    const [errMsg, setErrMsg] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    async function postData(){
        if(!data?.email){
            const message = 'Email is required.'
            setErrMsg({email: message})
            toast.warn(message, reactToastifyDark)
            setIsSubmit(false)
            return
        }
        if(!data?.phone){
            const message = 'Phone is required.'
            setErrMsg({phone: message})
            toast.warn(message, reactToastifyDark)
            setIsSubmit(false)
            return
        }
        if(!data?.message){
            const message = 'Message is required.'
            setErrMsg({message: message})
            toast.warn(message, reactToastifyDark)
            setIsSubmit(false)
            return
        }
        const formData = {
            title: 'FROM CONTACT FORM',
            name: data?.name,
            email: data?.email,
            phone: data?.phone,
            message: data?.message,
        }
        try{
            const res = await messageStoreAction(formData);
            if(res?.status == 1) {
                toast.success(res?.message, reactToastifyDark);
                setErrMsg({});
                setResult(res?.status)
                setIsSubmit(false)
                return;
            }
            toast.success('Something went wrong, please try again.', reactToastifyDark);
            setIsSubmit(false)
            return
        } catch (error) {
            console.error(`Error: ${error}`);
            setIsSubmit(false)
            return;
        }


    }

  return (
    <>
    <section className='w-[100%] pt-[5rem] pb-[5rem]'>
        <div className='mx-auto w-[92%] grid lg:grid-cols-2 grid-cols-1 gap-8 bg-white drop-shadow-lg p-6'>
            <div className='w-[100%]'>
                <form action={postData} onSubmit={() => setIsSubmit(true)}>
                    <h2 className='text-[2.5rem] font-light'>Write to us</h2>
                    <hr className='border-b border-gray-200 mb-6' />
                    {/* Name */}
                    <div className='mb-4'>
                        <p className='font-light'>Name:</p>
                        <input 
                        type='text'
                        name='name' 
                        onChange={handleInput}
                        value={data?.name}
                        placeholder='Enter Name' 
                        className='outline-none border border-gray-300 w-[100%] px-4 py-3' />
                        { errMsg?.name &&
                            <p className='text-red-600 text-sm'>{errMsg?.name}</p> }
                    </div>
                    {/* EMAIL */}
                    <div className='mb-4'>
                        <p className='font-light'>Email:</p>
                        <input 
                        type='text'
                        name='email' 
                        onChange={handleInput}
                        value={data?.email}
                        placeholder='Enter Email' 
                        className='outline-none border border-gray-300 w-[100%] px-4 py-3' />
                        { errMsg?.email &&
                            <p className='text-red-600 text-sm'>{errMsg?.email}</p> }
                    </div>
                    {/* PHONE */}
                    <div className='mb-4'>
                        <p className='font-light'>Phone:</p>
                        <input 
                        type='text'
                        name='phone' 
                        onChange={handleInput}
                        value={data?.phone}
                        placeholder='Enter Phone'
                        className='outline-none border border-gray-300 w-[100%] px-4 py-3' />
                        { errMsg?.phone &&
                            <p className='text-red-600 text-sm'>{errMsg?.phone}</p> }
                    </div>
                    {/* MESSAGE */}
                    <div className='mb-4'>
                        <p className='font-light'>Message:</p>
                        <textarea 
                            type='text'
                            name='message'
                            onChange={handleInput}
                            value={data?.message}
                            placeholder='Enter Message' 
                            className='outline-none h-[9rem] border border-gray-300 w-[100%] px-4 py-3'></textarea>
                        { errMsg?.message &&
                            <p className='text-red-600 text-sm'>{errMsg?.message}</p> }
                    </div>
                    <div className='mb-4'>
                       
                        {result == 1 ?
                        <p className='text-[2rem] font-light'>
                            Message sent successfully
                        </p>
                        :
                        <button 
                            type='submit' 
                            className='cursor-pointer px-[4rem] py-4 rounded-full text-white bg__one hover:drop-shadow-lg'>
                            { isSubmit ? 'Processing' : 'Submit' }
                        </button>
                        }
                    </div>
                </form>
            </div>
            <div className='w-[100%]'>
                <h2 className='text-[2.5rem] font-light'>Our Contact Details</h2>
                <hr className='border-b border-gray-200 mb-6' />
                <div className='pl-4'>
                    {/*  */}
                    <div className='flex items-center justify-start gap-4 mb-4'>
                        <div className='p-2 border border-gray-800 rounded-full'>
                            <FaPhoneAlt className='text-[1.2rem] text-gray-800' />
                        </div>
                        <p className='text-[1.2rem] font-light'>+263 868 800 8486</p>
                    </div>
                    {/*  */}
                    <div className='flex items-center justify-start gap-4 mb-4'>
                        <div className='p-2 border border-gray-800 rounded-full'>
                            <MdOutlineMail className='text-[1.2rem] text-gray-800' />
                        </div>
                        <p className='text-[1.2rem] font-light'>
                            info@networkresilience.co.zw
                        </p>
                    </div>
                    {/*  */}
                    <div className='flex items-center justify-start gap-4 mb-4'>
                        <div className='p-2 border border-gray-800 rounded-full'>
                            <FaMapLocationDot className='text-[1.2rem] text-gray-800' />
                        </div>
                        <p className='text-[1.2rem] font-light'>
                            Office 604 6th Floor, Regal Star House, 25 G. Silundika Ave., CBD, Harare
                        </p>
                    </div>
                    {/*  */}
                    <div className='flex items-center justify-start gap-4 mb-4'>
                        <div className='p-2 border border-gray-800 rounded-full'>
                            <FaWhatsapp className='text-[1.2rem] text-gray-800' />
                        </div>
                        <Link href='https://wa.me/263787852826'>
                            <p className='text-[1.2rem] font-light'>
                                WhatsApp
                            </p>
                        </Link>
                    </div>
                    {/*  */}
                    <div className='flex items-center justify-start gap-4 mb-4'>
                        <div className='p-2 border border-gray-800 rounded-full'>
                            <FaFacebookF className='text-[1.2rem] text-gray-800' />
                        </div>
                        <Link href='https://www.facebook.com/networkresilience' target="_blank">
                            <p className='text-[1.2rem] font-light'>
                                Facebook
                            </p>
                        </Link>
                    </div>
                    {/*  */}
                    <div className='flex items-center justify-start gap-4 mb-4'>
                        <div className='p-2 border border-gray-800 rounded-full'>
                            <FaInstagram className='text-[1.2rem] text-gray-800' />
                        </div>
                        <Link href='https://www.instagram.com/networkresilience' target="_blank">
                            <p className='text-[1.2rem] font-light'>
                                Instagram
                            </p>
                        </Link>
                    </div>
                    {/*  */}
                    <div className='flex items-center justify-start gap-4 mb-4'>
                        <div className='p-2 border border-gray-800 rounded-full'>
                            <FaLinkedinIn className='text-[1.2rem] text-gray-800' />
                        </div>
                        <Link href='https://www.linkedin.com/company/networkresilience' target="_blank">
                            <p className='text-[1.2rem] font-light'>
                                LinkedIn
                            </p>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    </section>
    </>
  )
}
