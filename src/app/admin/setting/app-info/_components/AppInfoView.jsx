"use client"
import React, { useState } from 'react'
import AppInfoEditModal from './AppInfoEditModal';


export default function AppInfoView({ id }) {
    const [isModal, setIsModal] = useState(false);
    const [data, setData] = useState();

  return (
    <>
   <section className='w-[100%] mt-4 pb-[5rem]'>
        <div className='mx-auto w-[92%]'>
            <div className='flex items-center justify-end mb-4'>
                <button 
                    onClick={() => setIsModal(!isModal)}
                    className='drop-shadow bg-white duration-100 ease-linear transition-all border border-gray-300 hover:bg-gray-800 hover:text-white hover:drop-shadow-md px-4 py-3'>
                    Edit
                </button>
            </div>

            <section className='p-6 bg-white drop-shadow-lg'>
                {/* NAME */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Name:</p>
                    <p className='text-lg'>N/A</p>
                </div>
                {/* LEVEL */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Email:</p>
                    <p className='text-lg'>N/A</p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Phone:</p>
                    <p className='text-lg'>
                        N/A
                    </p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Address:</p>
                    <p className='text-lg'>
                        N/A
                    </p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Facebook:</p>
                    <p className='text-lg'>
                       N/A
                    </p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>WhatsApp:</p>
                    <p className='text-lg'>
                       N/A
                    </p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>LinkedIn:</p>
                    <p className='text-lg'>
                        N/A
                    </p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Twitter:</p>
                    <p className='text-lg'>
                        N/A
                    </p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Instagram:</p>
                    <p className='text-lg'>
                        N/A
                    </p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Description:</p>
                    <p className='text-lg'>
                        N/A
                    </p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Created At:</p>
                    <p className='text-lg'>
                        N/A
                    </p>
                </div>
                {/* */}
                <div className='mb-4'>
                    <p className='text-sm font-light'>Updated At:</p>
                    <p className='text-lg'>
                        N/A
                    </p>
                </div>
            </section>
            
        </div>
    </section>
   

    <AppInfoEditModal 
        id={id}
        isModal={isModal} 
        setIsModal={setIsModal} />

    </>
  )
}
