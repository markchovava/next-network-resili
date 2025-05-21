"use client"
import React, { useState } from 'react'
import { _messageViewAction } from '@/actions/MessageActions';
import { formatDate } from '@/_utils/formatDate';
import MessageStatusEditModal from './MessageStatusEditModal';


export default function MessageView({ id, dbData }) {
    const [isModal, setIsModal] = useState(false);
    const [data, setData] = useState(dbData?.data);

    async function getData() {
        const res = await _messageViewAction(id);
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
                    Status
                </button>
            </div>

            <div className='mb-4'>
                <h3 className='text-[2.5rem] font-light mb-1'>View Message</h3>
                <hr className='border-b border-gray-200' />
            </div>


            <section className='bg-white drop-shadow-lg p-6'>
                {/* STATUS */}
                {data?.status &&
                <div className='mb-6'>
                    <p className='text-sm font-light mb-1'>Status:</p>
                    <p className='text-lg'>
                        <span className='px-2 py-1 bg-blue-700 text-white rounded-lg'>
                            {data?.status}</span>
                    </p>
                </div>
                }
                {/* NAME */}
                {data?.title &&
                <div className='mb-6'>
                    <p className='text-sm font-light'>Title:</p>
                    <p className='text-lg'>{data?.title}</p>
                </div>
                }
                {/* LEVEL */}
                {data?.phone &&
                <div className='mb-6'>
                    <p className='text-sm font-light'>Phone:</p>
                    <p className='text-lg'>{data?.phone}</p>
                </div>
                }
                {/*  */}
                {data?.email &&
                <div className='mb-6'>
                    <p className='text-sm font-light'>Email:</p>
                    <p className='text-lg'>{data?.email}</p>
                </div>
                }
                {/*  */}
                {data?.created_at &&
                <div className='mb-6'>
                    <p className='text-sm font-light'>Created:</p>
                    <p className='text-lg'>{formatDate(data?.created_at)}</p>
                </div>
                }
                {/* */}
                {data?.message &&
                <div className='mb-5'>
                    <p className='text-sm font-light'>Message:</p>
                    <p className='text-lg'>
                    {data?.message}
                    </p>
                </div>
                }
            </section>

        </div>
    </section>
   

    <MessageStatusEditModal
        id={id}
        domData={data}
        getData={getData}
        isModal={isModal} 
        setIsModal={setIsModal} />

    </>
  )
}
