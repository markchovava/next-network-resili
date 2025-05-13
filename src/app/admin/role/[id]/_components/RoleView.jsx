"use client"
import React, { useState } from 'react'
import RoleEditModal from './RoleEditModal';



export default function RoleView({ id }) {
  const [isModal, setIsModal] = useState(false);
  const [data, setData] = useState();


  
  return (
    <>
    <section className='w-[100%] mt-4'>
        <div className='mx-auto w-[90%]'>
            <div className='flex items-center justify-end'>
                <button 
                    onClick={() => setIsModal(!isModal)}
                    className='duration-100 ease-linear transition-all border border-gray-800 hover:bg-gray-800 hover:text-white hover:drop-shadow-md rounded-xl px-4 py-2'>
                    Edit
                </button>
            </div>
            {/* NAME */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Name:</p>
                <p className='text-lg'>data?.name</p>
            </div>
            {/* LEVEL */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Level:</p>
                <p className='text-lg'>data?.leve</p>
            </div>
            {/* */}
            <div className='mb-6'>
                <p className='text-sm font-semibold'>Author:</p>
                <p className='text-lg'>
                    user?.name
                </p>
            </div>
        </div>
    </section>


    <RoleEditModal 
        id={id}
        isModal={isModal} 
        setIsModal={setIsModal} 
    />

    </>
  )
}
