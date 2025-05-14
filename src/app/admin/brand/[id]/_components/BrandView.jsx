"use client"
import React, { useState } from 'react'
import CategoryEditModal from './BrandEditModal';


export default function BrandView({ id }) {
    const [isModal, setIsModal] = useState(false);
    const [data, setData] = useState();

  return (
    <>
   <section className='w-[100%] mt-4 pb-[5rem]'>
        <div className='mx-auto w-[92%]'>
            <div className='flex items-center justify-end mb-4'>
                <button 
                    onClick={() => setIsModal(!isModal)}
                    className='bg-white drop-shadow duration-100 ease-linear transition-all border border-gray-800 hover:bg-gray-800 hover:text-white hover:drop-shadow-md px-4 py-3'>
                    Edit
                </button>
            </div>

            <div className='mb-4'>
                <h3 className='text-[2.5rem] font-light mb-1'>View Brand</h3>
                <hr className='border-b border-gray-200' />
            </div>


            <section className='bg-white drop-shadow-lg p-6'>
                {/* NAME */}
                <div className='mb-6'>
                    <p className='text-sm font-semibold'>Name:</p>
                    <p className='text-lg'>data?.name</p>
                </div>
                {/* LEVEL */}
                <div className='mb-6'>
                    <p className='text-sm font-semibold'>Created at:</p>
                    <p className='text-lg'>data?.leve</p>
                </div>
                {/* */}
                <div className=''>
                    <p className='text-sm font-semibold'>Author:</p>
                    <p className='text-lg'>
                        user?.name
                    </p>
                </div>
            </section>

        </div>
    </section>
   

    <CategoryEditModal 
        id={id}
        isModal={isModal} 
        setIsModal={setIsModal} />

    </>
  )
}
