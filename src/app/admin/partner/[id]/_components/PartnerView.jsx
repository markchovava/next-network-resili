"use client"
import React, { useState } from 'react'
import PartnerEditModal from './PartnerEditModal';
import { formatDate } from '@/_utils/formatDate';
import Image from 'next/image';
import { baseURL } from '@/api/BaseURL';
import { _partnerViewAction } from '@/actions/PartnerActions';



export default function PartnerView({ id, dbData }) {
    const [isModal, setIsModal] = useState(false);
    const [data, setData] = useState(dbData?.data);

    async function getData() {
        const res = await _partnerViewAction(id);
        setData(res?.data);
    }

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

            <section className='bg-white drop-shadow-lg py-8 px-8 '>
                {/* IMAGE */}
                {data?.image &&
                <div className='mb-6'>
                    <p className='text-sm font-light mb-2'>Image:</p>
                    <div className='overflow-hidden lg:w-[25%] w-[50%] aspect-[7/5] bg-gray-100 rounded-xl'>
                    <Image 
                        className='w-[100%] h-[100%]' 
                        src={baseURL + data?.image} 
                        height={500} 
                        width={700} 
                        alt='Image' />
                    </div>
                </div>
                }
                {/* NAME */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Name:</p>
                    <p className='text-lg'>{data?.name ?? 'Not Added'}</p>
                </div>
                {/* Created */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Created:</p>
                    <p className='text-lg'>{data?.created_at ? formatDate(data?.created_at) : 'Not Added'}</p>
                </div>
                {/* */}
                <div className='mb-4'>
                    <p className='text-sm font-light'>Author:</p>
                    <p className='text-lg'>
                        {data?.user.email ? data?.user?.email : 'Not Added'}
                    </p>
                </div>
            </section>

        </div>
    </section>
   

    <PartnerEditModal 
        id={id}
        domData={data}
        getData={getData}
        isModal={isModal} 
        setIsModal={setIsModal} />

    </>
  )
}
