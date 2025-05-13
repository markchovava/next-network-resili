"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong, FaArrowRightLong, FaEye } from 'react-icons/fa6';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import RoleAddModal from './RoleAddModal';
import { IoSearch } from 'react-icons/io5';
import { toast } from 'react-toastify';



export default function RoleList() {
    const [isModal, setIsModal] = useState(false)

    

    

  return (
    <>
    <section className='w-[100%] pt-4'>
        {/* FORM */}
        <div className='mx-auto w-[90%] flex items-center justify-between pb-2'>
            <form 
                className='border lg:w-[50%] w-[80%] flex items-center justify-start'>
                <input 
                    type='text'
                    placeholder='Search' 
                    className='outline-none border-r border-gray-300 px-4 py-3 w-[85%]' />
                <button 
                    type='submit' 
                    className='hover:scale-125 ease-linear transition-all h-[100%] lg:w-[15%] px-4 py-3 text-center flex items-center justify-center'>
                        <span className='animate-pulse w-[15px] h-[15px] rounded-full bg-slate-900'></span>
                        <IoSearch className='text-lg' />
                </button>
            </form>
            <div>
                <button onClick={() => setIsModal(true)}
                    className='px-5 py-3 border border-gray-300 hover:bg-gray-900 hover:text-white transition-color ease-linear duration-200'>
                    Add
                </button>
            </div>
        </div>

        {/* TABLE */}
        <section className="mx-auto w-[90%] lg:overflow-hidden overflow-scroll pb-[2rem]">
            <section className='lg:w-[100%] w-[70rem]'>
                {/* HEADER */}
                <div className='mx-auto w-[100%] text-lg py-2 flex items-center justify-start font-bold font-white bg-gray-200 '>
                    <div className='w-[35%] border-r border-white px-3 py-2'>NAME</div>
                    <div className='w-[25%] border-r border-white px-3 py-2'>LEVEL</div>
                    <div className='w-[25%] border-r border-white px-3 py-2'>AUTHOR</div>
                    <div className='w-[15%] px-3 py-2 text-end'>ACTION</div>
                </div>

                {/* COLUMN */}
             
                    <div className='mx-auto w-[100%] py-2 flex items-center justify-start border-b border-x border-gray-300'>
                        <div className='w-[35%] border-r border-gray-300 px-3 py-2'>name</div>
                        <div className='w-[25%] border-r border-gray-300 px-3 py-2'>level</div>
                        <div className='w-[25%] border-r border-gray-300 px-3 py-2'>
                            jjj
                        </div>
                        <div className='w-[15%] px-3 py-2 text-end flex items-center justify-end gap-3 text-xl'>
                            <Link title='View' href={`/admin/role/1`}> 
                            <FaEye className='hover:text-blue-500 duration-150 hover:scale-110 transition-all ease-in'/> 
                            </Link> 
                            <button title='Delete'> 
                                <MdDeleteForever
                                className='hover:text-red-500 duration-150 hover:scale-110 transition-all ease-in' /> 
                            </button> 
                        </div>
                    </div>
             
                    <section className='w-[100%] py-6'>
                        <h3 className='text-[3rem] font-light'>No Data Available at the moment.</h3>
                        <p>Click 
                            <span className='cursor-pointer underline hover:no-underline mx-1'>
                                Edit
                            </span> 
                            to add.
                        </p>
                    </section>

               
            </section>
        </section>

        {/* PAGINATION */}
        <section className='w-[90%] mx-auto pb-[4rem] flex items-center justify-end gap-3'>
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

    </section>

    <RoleAddModal isModal={isModal} setIsModal={setIsModal} />
    </>
  )
}
