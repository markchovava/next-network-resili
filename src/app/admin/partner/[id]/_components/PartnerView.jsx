"use client"
import React, { useState } from 'react'
import PartnerEditModal from './PartnerEditModal';


export default function PartnerView({ id }) {
    const [isModal, setIsModal] = useState(false);
    const [data, setData] = useState();

  return (
    <>
   <section className='w-[100%] mt-4 pb-[5rem]'>
        <div className='mx-auto w-[92%]'>
            <div className='flex items-center justify-end mb-4'>
                <button 
                    onClick={() => setIsModal(!isModal)}
                    className='bg-white drop-shadow-md duration-100 ease-linear transition-all border border-gray-800 hover:bg-gray-800 hover:text-white hover:drop-shadow-md px-4 py-3'>
                    Edit
                </button>
            </div>

            <section className='bg-white drop-shadow-lg p-6'>
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
                <div className=''>
                    <p className='text-sm font-semibold'>Author:</p>
                    <p className='text-lg'>
                        user?.name
                    </p>
                </div>
            </section>

        </div>
    </section>
   

    <PartnerEditModal 
        id={id}
        isModal={isModal} 
        setIsModal={setIsModal} />

    </>
  )
}
