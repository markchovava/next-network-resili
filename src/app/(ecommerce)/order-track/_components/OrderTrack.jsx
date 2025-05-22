"use client";
import { formatDate } from '@/_utils/formatDate';
import { orderTrackSearchAction } from '@/actions/OrderActions';
import { MainContextState } from '@/contexts/MainContext';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { MdDeleteForever } from 'react-icons/md';

export default function OrderTrack() {
  const [isSearch, setIsSearch] = useState(false)
  const [search, setSearch] = useState('');
  const {orderState, orderDispatch } = MainContextState()


  async function getSearchData() { 
    try{
    const res = await orderTrackSearchAction(search);
    console.log('res', res)
    orderDispatch({type: 'ADD_DATA', payload: {
        items: res?.data,
        prevURL: res?.links?.prev,
        nextURL: res?.links?.next,
    }});
    setIsSearch(false);
    } catch (error) {
        console.error(`Error: ${error}`); 
        setIsSearch(false)
    }
  }

  return (
    <>
    <section className='w-full pt-[5rem] mb-[1rem]'>
      <form action={getSearchData} onSubmit={() => setIsSearch(true) } className='mx-auto w-[92%]'>
        <h3 className='text-[2.5rem] font-light mb-1'>
          Enter Your Order Number Below:
        </h3>
        <hr className='border-b border-gray-200' />
        <div className='w-[100%] flex items-center justify-start pt-3'>
          <input 
            type='text' 
            name='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Enter Order Ref' 
            className='w-[90%] h-[4rem] py-3 px-4 outline-none border border-gray-300'/>
          <button 
            type='submit' 
            className='w-[10%] h-[4rem] py-3 px-4 flex items-center justify-center border-y border-r border-gray-300'>
            { isSearch
              ? <span className='animate-pulse w-[15px] h-[15px] rounded-full bg-slate-900'></span>
              : <IoSearch className='text-2xl text-gray-500' />
            }
          </button>
        </div>

      </form>
    </section>


    {/* TABLE */}
    <section className="mx-auto w-[92%] lg:overflow-hidden overflow-scroll pb-[2rem]">
        <section className='lg:w-[100%] w-[70rem]'>
            {/* HEADER */}
            <div className='mx-auto w-[100%] text-lg py-2 flex items-center justify-start font-bold bg-gray-200 '>
                <div className='w-[25%] border-r border-white px-3 py-2'>REF NO.</div>
                <div className='w-[25%] border-r border-white px-3 py-2'>TOTALS</div>
                <div className='w-[20%] border-r border-white px-3 py-2'>CREATED</div>
                <div className='w-[20%] border-r border-white px-3 py-2'>STATUS</div>
                <div className='w-[10%] px-3 py-2 text-end'>ACTION</div>
            </div>

            {/* COLUMN */}
            { orderState?.items?.length > 0 ?
              orderState?.items?.map((i, key) => (
              <div key={key} className='mx-auto w-[100%] py-2 flex items-center justify-start border-b border-x border-gray-300'>
                <div className='w-[25%] border-r border-gray-300 px-3 py-2'>{i?.ref_no}</div>
                <div className='w-[25%] border-r border-gray-300 px-3 py-2'>
                  <p>Quantity: {i?.quantity ? '$' + i?.quantity : 'Not Added'} </p>
                  <p>Total: <span className='font-bold'>{i?.total ? '$' + i?.total : 'Not Added'}</span> </p>
                </div>
                <div className='w-[20%] border-r border-gray-300 px-3 py-2'>
                {i?.created_at ? formatDate(i?.created_at) : 'Not Added'}
                </div>
                <div className='w-[20%] border-r border-gray-300 px-3 py-2'>
                  {i?.status &&
                    <span className='bg-blue-500 text-white rounded-xl px-4 py-1'>{i?.status}</span>
                  }
                </div>
                <div className='w-[10%] px-3 py-2 text-end flex items-center justify-end gap-3 text-xl'>
                    <Link title='View' href={`/order-track/${i?.id}`}> 
                    <FaEye className='hover:text-blue-500 duration-150 hover:scale-110 transition-all ease-in'/> 
                    </Link> 
                </div>
              </div>
            ))
            :
            <section className='w-[100%] py-6'>
                <h3 className='text-[3rem] text-center font-light'>No Data Available at the moment.</h3>
            </section>
            }


        </section>
    </section>
    </>
  )
}
