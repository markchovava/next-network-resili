"use client"
import React, { useState } from 'react'

import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';


export default function OrderView({ id }) {
    const [isModal, setIsModal] = useState(false);
    const [data, setData] = useState();

  return (
    <>
   <section className='w-[100%] mt-4 pb-[5rem]'>
        <div className='mx-auto w-[92%] pt-[2rem]'>
           
            <div className=''>
                <h3 className='text-[2.5rem] font-light mb-1'>View Order</h3>
                <hr className='border-b border-gray-200' />
            </div>

            <section className='bg-white drop-shadow-md p-6 mt-4 grid md:grid-cols-2 grid-cols-1 gap-6'>
                {/* PERSONAL */}
                <div className='w-[100%] '>
                    <h3 className='text-[1.8rem] font-light mb-2'>Personal Info</h3>
                    {/* NAME */}
                    <div className='mb-4'>
                        <p className='text-sm font-light'>Name:</p>
                        <p className='text-lg'>data?.name</p>
                    </div>
                    {/*  */}
                    <div className='mb-4'>
                        <p className='text-sm font-light'>Phone:</p>
                        <p className='text-lg'>N/A</p>
                    </div>
                    {/* EMAIL */}
                    <div className='mb-4'>
                        <p className='text-sm font-light'>Email:</p>
                        <p className='text-lg'>
                            N/A </p>
                    </div>
                    {/* EMAIL */}
                    <div className='mb-4'>
                        <p className='text-sm font-light'>Address:</p>
                        <p className='text-lg'>
                            N/A </p>
                    </div>
                    {/* EMAIL */}
                    <div className='mb-4'>
                        <p className='text-sm font-light'>Notes:</p>
                        <p className='text-lg'>
                            N/A </p>
                    </div>
                </div>
                {/* ORDER */}
                <div className='w-[100%] '>
                    <h3 className='text-[1.8rem] font-light mb-2'>Order Info</h3>
                    {/* NAME */}
                    <div className='mb-4'>
                        <p className='text-sm font-light'>Ref:</p>
                        <p className='text-lg'>N/A</p>
                    </div>
                    {/*  */}
                    <div className='mb-4'>
                        <p className='text-sm font-light'>Total:</p>
                        <p className='text-lg'>$20.00</p>
                    </div>
                    {/* EMAIL */}
                    <div className='mb-4'>
                        <p className='text-sm font-light'>Status:</p>
                        <p className='text-lg'>
                            N/A </p>
                    </div>
                    {/* EMAIL */}
                    <div className='mb-4'>
                        <p className='text-sm font-light'>Quantity:</p>
                        <p className='text-lg'>
                            N/A </p>
                    </div>
                    {/* EMAIL */}
                    <div className='mb-4'>
                        <p className='text-sm font-light'>Notes:</p>
                        <p className='text-lg'>
                            N/A </p>
                    </div>
                </div>
            </section>

            {/* TABLE */}
            <section className="bg-white drop-shadow-md w-[100%] lg:overflow-hidden overflow-scroll mt-[2rem] pb-[2rem]">
                <section className='lg:w-[100%] w-[70rem]'>
                    {/* HEADER */}
                    <div className='mx-auto w-[100%] text-lg py-2 flex items-center justify-start font-bold font-white bg-gray-200 '>
                        <div className='w-[30%] border-r border-white px-3 py-2'>NAME</div>
                        <div className='w-[15%] border-r border-white px-3 py-2'>QUANTITY</div>
                        <div className='w-[25%] border-r border-white px-3 py-2'>PRICE</div>
                        <div className='w-[30%] px-3 py-2 text-end'>TOTAL</div>
                    </div>
                    {/* COLUMN */}
                    <div className='mx-auto w-[100%] py-2 flex items-center justify-start border-b border-x border-gray-300'>
                    <div className='w-[30%] border-r border-gray-300 px-3 py-2'>name</div>
                    <div className='w-[15%] border-r border-gray-300 px-3 py-2'>
                        jjj </div>
                    <div className='w-[25%] border-r border-gray-300 px-3 py-2'>
                        jjj </div>
                    <div className='w-[30%] px-3 py-2 text-end flex items-center justify-end gap-3 text-xl'>
                       $20.00
                    </div>
                    </div>
                
                    <section className='w-[100%] py-6'>
                        <h3 className='text-[3rem] text-center font-light'>No Data Available at the moment.</h3>
                    </section>

                </section>
            </section>
            {/* PAGINATION */}
            <section className='mt-[2rem] w-[100%] mx-auto pb-[4rem] flex items-center justify-end gap-3'>
                {/* PREVIOUS */}
                <button
                    className='group px-4 py-2 flex items-center justify-center gap-2 border border-gray-700 text-gray-700'>
                    <FaArrowLeftLong className='transition-all ease-in-out duration-200 group-hover:-translate-x-1' />
                    Prev
                </button>
                {/* NEXT */}
                <button 
                    className='group px-4 py-2 flex items-center justify-center gap-2 border border-gray-700 text-gray-700'>
                    <span>Next</span>
                    <FaArrowRightLong className='transition-all ease-in-out duration-200 group-hover:translate-x-1' />
                </button>
            </section>

        </div>
    </section>
   

    </>
  )
}
