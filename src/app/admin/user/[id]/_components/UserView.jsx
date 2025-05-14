"use client"
import React, { useState } from 'react'
import UserEditModal from './UserEditModal';


export default function UserView({ id }) {
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
                    <p className='text-lg'>data?.name</p>
                </div>
                {/* LEVEL */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Email:</p>
                    <p className='text-lg'>data?.leve</p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Phone:</p>
                    <p className='text-lg'>
                        000987
                    </p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Address:</p>
                    <p className='text-lg'>
                        000987
                    </p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Assign Admin:</p>
                    <p className='text-lg'>
                        No
                    </p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Created At:</p>
                    <p className='text-lg'>
                        13 May 2025
                    </p>
                </div>
                {/* */}
                <div className=''>
                    <p className='text-sm font-light'>Updated At:</p>
                    <p className='text-lg'>
                        13 May 2025
                    </p>
                </div>
            </section>
            
        </div>
    </section>
   

    <UserEditModal 
        id={id}
        isModal={isModal} 
        setIsModal={setIsModal} />

    </>
  )
}
