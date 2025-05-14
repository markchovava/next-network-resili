"use client"
import React, { useState } from 'react'
import CategoryEditModal from './MessageEditModal';


export default function MessageView({ id }) {
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
                    Status
                </button>
            </div>

            <div className='mb-4'>
                <h3 className='text-[2.5rem] font-light mb-1'>View Message</h3>
                <hr className='border-b border-gray-200' />
            </div>


            <section className='bg-white drop-shadow-lg p-6'>
                {/* STATUS */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Status:</p>
                    <p className='text-lg'>Status</p>
                </div>
                {/* NAME */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Title:</p>
                    <p className='text-lg'>title</p>
                </div>
                {/* LEVEL */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Phone:</p>
                    <p className='text-lg'>email / phone</p>
                </div>
                {/*  */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Email:</p>
                    <p className='text-lg'>email</p>
                </div>
                {/*  */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Created:</p>
                    <p className='text-lg'>Created</p>
                </div>
                {/* */}
                <div className='mb-5'>
                    <p className='text-sm font-light'>Content:</p>
                    <p className='text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deserunt 
                        temporibus ipsam quaerat adipisci. Adipisci numquam iusto quae. Illo tenetur 
                        aliquid magnam maxime perferendis enim iure voluptates maiores cupiditate vel.
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
