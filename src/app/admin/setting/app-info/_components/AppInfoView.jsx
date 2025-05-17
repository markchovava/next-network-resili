"use client"
import React, { useState } from 'react'
import AppInfoEditModal from './AppInfoEditModal';
import { formatDate } from '@/_utils/formatDate';
import { _appInfoViewAction } from '@/actions/AppInfoActions';


export default function AppInfoView({ dbData }) {
    const [isModal, setIsModal] = useState(false);
    const [data, setData] = useState(dbData?.data);
    console.log('dbData', dbData?.data)

    async function getData() {
        const res = await _appInfoViewAction();
        setData(res?.data);
    }

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
                    <p className='text-lg'>{data?.name ?? 'Not Added'}</p>
                </div>
                {/* LEVEL */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Email:</p>
                    <p className='text-lg'>{data?.email ?? 'Not Added'}</p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Phone:</p>
                    <p className='text-lg'>{data?.phone ?? 'Not Added'}</p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Address:</p>
                    <p className='text-lg'> {data?.address ?? 'Not Added'}</p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Facebook:</p>
                    <p className='text-lg'> {data?.facebook ?? 'Not Added'}</p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>WhatsApp:</p>
                    <p className='text-lg'> {data?.whatsapp ?? 'Not Added'} </p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>LinkedIn:</p>
                    <p className='text-lg'>{data?.linkedin ?? 'Not Added'}</p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Twitter:</p>
                    <p className='text-lg'>{data?.twitter ?? 'Not Added'}</p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Instagram:</p>
                    <p className='text-lg'>{data?.instagram ?? 'Not Added'}</p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Description:</p>
                    <p className='text-lg'>{data?.description ?? 'Not Added'}</p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Created At:</p>
                    <p className='text-lg'>{data?.created_at ? formatDate(data?.created_at) : 'Not Added'} </p>
                </div>
                {/* */}
                <div className='mb-4'>
                    <p className='text-sm font-light'>Updated At:</p>
                    <p className='text-lg'>{data?.updated_at ? formatDate(data?.updated_at) : 'Not Added'}</p>
                </div>
            </section>
            
        </div>
    </section>
   

    <AppInfoEditModal 
        domData={data}
        getData={getData}
        isModal={isModal} 
        setIsModal={setIsModal} />

    </>
  )
}
