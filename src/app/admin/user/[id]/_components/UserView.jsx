"use client"
import React, { useState } from 'react'
import UserEditModal from './UserEditModal';
import { _userViewAction } from '@/actions/UserActions';


export default function UserView({ id, dbData }) {
    const [isModal, setIsModal] = useState(false);
    const [data, setData] = useState(dbData?.data);

    async function getData() {
        const res = await _userViewAction(id);
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

            <div className=''>
                <h3 className='text-[2.5rem] font-light mb-1'>View User</h3>
                <hr className='border-b border-gray-200' />
            </div>

            <section className='p-6 bg-white drop-shadow-lg mt-4'>
                {/* NAME */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Name:</p>
                    <p className='text-lg'>{data?.name ?? 'Not Added'}</p>
                </div>
                {/* EMAIL */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Email:</p>
                    <p className='text-lg'>{data?.email ?? 'Not Added'}</p>
                </div>
                {/* PHONE */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Phone:</p>
                    <p className='text-lg'>
                        {data?.phone ?? 'Not Added'}
                    </p>
                </div>
                {/* ADDRESS */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Address:</p>
                    <p className='text-lg'>
                        {data?.address ?? 'Not Added'}
                    </p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Assign Admin:</p>
                    <p className='text-lg'>
                        {data?.is_admin == 'Yes' && 'Is Admin'}
                        {data?.is_admin == 'No' && 'Not Admin'}
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
                <div className='mb-4'>
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
        getData={getData}
        domData={data}
        isModal={isModal} 
        setIsModal={setIsModal} />

    </>
  )
}
