"use client"
import React, { useState } from 'react'
import ProfileEditModal from './ProfileEditModal';
import { formatDate } from '@/_utils/formatDate';
import Link from 'next/link';


export default function ProfileView({ dbData }) {
    const [isModal, setIsModal] = useState(false);
    const [data, setData] = useState(dbData?.data);

  return (
    <>
   <section className='w-[100%] mt-4 pb-[5rem]'>
        <div className='mx-auto w-[92%]'>
            {/*  */}
            <div className='flex items-center justify-end gap-3 mb-4'>
                <Link href='/client/profile/password'
                    className='drop-shadow bg-white duration-100 ease-linear transition-all border border-gray-300 hover:bg-green-800 hover:text-white hover:drop-shadow-md px-4 py-3'>
                    Password
                </Link>
                <Link href='/client/profile/email' 
                    className='drop-shadow bg-white duration-100 ease-linear transition-all border border-gray-300 hover:bg-blue-800 hover:text-white hover:drop-shadow-md px-4 py-3'>
                    Email
                </Link>
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
                    <p className='text-lg'>{ data?.name ?? 'Not Added' }</p>
                </div>
                {/* LEVEL */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Email:</p>
                    <p className='text-lg'>{ data?.email ?? 'Not Added' }</p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Phone:</p>
                    <p className='text-lg'>
                        { data?.phone ?? 'Not Added' }
                    </p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Address:</p>
                    <p className='text-lg'>
                        { data?.address ?? 'Not Added' }
                    </p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Assign Admin:</p>
                    <p className='text-lg'>
                        { data?.is_admin ?? 'Not Added' }
                    </p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Code:</p>
                    <p className='text-lg'>
                        { data?.code ?? 'Not Added' }
                    </p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Created At:</p>
                    <p className='text-lg'>
                        { data?.created_at ? formatDate(data?.created_at) : 'Not Added' }
                    </p>
                </div>
                {/* */}
                <div className='mb-4'>
                    <p className='text-sm font-light'>Updated At:</p>
                    <p className='text-lg'>
                        { data?.updated_at ? formatDate(data?.updated_at) : 'Not Added' }
                    </p>
                </div>
            </section>
            
        </div>
    </section>
   

    <ProfileEditModal 
        domData={data}
        isModal={isModal} 
        setIsModal={setIsModal} />

    </>
  )
}
