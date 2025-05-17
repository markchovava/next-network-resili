"use client"
import React, { useState } from 'react'
import BrandEditModal from './BrandEditModal';
import { formatDate } from '@/_utils/formatDate';
import { _brandViewAction } from '@/actions/BrandActions';


export default function BrandView({ id, dbData }) {
    const [isModal, setIsModal] = useState(false);
    const [data, setData] = useState(dbData?.data);

    async function getData() {
        const res = await _brandViewAction(id);
        setData(res?.data);
    }

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

            <section className='bg-white drop-shadow-lg px-6 py-8'>
                {/* NAME */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Name:</p>
                    <p className='text-lg'>{data?.name ?? 'Not Added'}</p>
                </div>
                {/* CREATED */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Created at:</p>
                    <p className='text-lg'>
                        {data?.created_at ? formatDate(data?.created_at) : 'Not Added'}
                    </p>
                </div>
                {/* USER */}
                <div className='mb-4'>
                    <p className='text-sm font-light'>Author:</p>
                    <p className='text-lg'>
                        { data?.user?.email ?? "Not Added" }
                    </p>
                </div>
            </section>

        </div>
    </section>
   

    <BrandEditModal 
        id={id}
        getData={getData}
        domData={data}
        isModal={isModal} 
        setIsModal={setIsModal} />

    </>
  )
}
