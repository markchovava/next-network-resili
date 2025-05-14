"use client"
import React, { useState } from 'react'
import CategoryEditModal from './CategoryEditModal';


export default function CategoryView({ id }) {
    const [isModal, setIsModal] = useState(false);
    const [data, setData] = useState();

  return (
    <>
   <section className='w-[100%] mt-4 pb-[5rem]'>
        <div className='mx-auto w-[92%]'>
            <div className='flex items-center justify-end'>
                <button 
                    onClick={() => setIsModal(!isModal)}
                    className='duration-100 ease-linear transition-all border border-gray-800 hover:bg-gray-800 hover:text-white hover:drop-shadow-md px-4 py-3'>
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
   

    <CategoryEditModal 
        id={id}
        isModal={isModal} 
        setIsModal={setIsModal} />

    </>
  )
}
