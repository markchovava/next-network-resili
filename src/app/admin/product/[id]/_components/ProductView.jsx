"use client"
import React, { useState } from 'react'
import ProductEditModal from './ProductEditModal';


export default function ProductView({ id }) {
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

             <div className=''>
                <h3 className='text-[2.5rem] font-light mb-1'>View User</h3>
                <hr className='border-b border-gray-200' />
            </div>

            <section className='bg-white drop-shadow-lg p-6 mt-4'>
                {/* IMAGES */}
                <div className='mb-6'>
                    <p className='text-sm font-light mb-2'>Images:</p>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>
                        <div className='w-[100%] aspect-[7/5] drop-shadow bg-gray-100 rounded-lg overflow-hidden'></div>
                        <div className='w-[100%] aspect-[7/5] drop-shadow bg-gray-100 rounded-lg overflow-hidden'></div>
                        <div className='w-[100%] aspect-[7/5] drop-shadow bg-gray-100 rounded-lg overflow-hidden'></div>
                        <div className='w-[100%] aspect-[7/5] drop-shadow bg-gray-100 rounded-lg overflow-hidden'></div>
                    </div>
                </div>
                {/* NAME */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Name:</p>
                    <p className='text-lg'>data?.name</p>
                </div>
                {/* PRICE */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Price:</p>
                    <p className='text-lg'>$2.30</p>
                </div>
                {/* BRAND */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Brand:</p>
                    <p className='text-lg'>Dell</p>
                </div>
                {/* PRICE */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Quantity:</p>
                    <p className='text-lg'>200</p>
                </div>
                {/* DESCRIPTION */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Description:</p>
                    <p className='text-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt distinctio 
                        rerum corporis nam expedita. Ea quaerat quos numquam soluta quidem eligendi 
                        distinctio repudiandae, nisi maxime, accusamus aut doloribus nesciunt, voluptatum 
                        eveniet. Quo alias suscipit quam, aliquid eius labore repudiandae dolorum dolores 
                        aut velit recusandae. Expedita voluptates ad cupiditate sunt reiciendis.
                    </p>
                </div>

                 {/* SPECIFICATIONS */}
                <div className='mb-6'>
                    <p className='text-sm font-light mb-2'>Specification:</p>
                    <div className='lg:w-[50%] md:w-[80%] w-[100%]'>
                        <div className='flex items-center justify-start border border-gray-300'>
                            <div className='w-[50%] p-2 border-r border-gray-300'>name</div>
                            <div className='w-[50%] p-2'>value</div>
                        </div>
                        <div className='flex items-center justify-start border border-gray-300'>
                            <div className='w-[50%] p-2 border-r border-gray-300'>name</div>
                            <div className='w-[50%] p-2'>value</div>
                        </div>
                    </div>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Created :</p>
                    <p className='text-lg'>
                        02 April 2023
                    </p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Author:</p>
                    <p className='text-lg'>
                        user?.name
                    </p>
                </div>
            </section>

        </div>
    </section>
   

    <ProductEditModal 
        id={id}
        isModal={isModal} 
        setIsModal={setIsModal} />

    </>
  )
}
