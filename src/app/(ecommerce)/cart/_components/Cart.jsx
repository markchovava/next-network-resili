"use client";
import Link from 'next/link';
import React from 'react';



export default function Cart() {

  return (
    <>
    
    <section className='w-full py-[5rem]'>
      <div className='w-[92%] mx-auto'>
        <h3 className='text-[1.8rem] font-light mb-3'>Your Cart</h3>
        {/*  */}
        <div className='w-[100%] border border-gray-300 flex items-center justify-start font-bold'>
          <div className='w-[40%] py-2 px-3 border-r border-gray-300'>Details</div>
          <div className='w-[30%] py-2 px-3 border-r border-gray-300'>Quantity</div>
          <div className='w-[30%] py-2 px-3'>Total</div>
        </div>
        {/*  */}
        <div className='w-[100%] border border-gray-300 flex items-center justify-start'>
          <div className='w-[40%] py-2 px-3 border-r border-gray-300'>Details</div>
          <div className='w-[30%] py-2 px-3 border-r border-gray-300'>Quantity</div>
          <div className='w-[30%] py-2 px-3'>Total</div>
        </div>
        {/*  */}
        <div className='w-[100%] border border-gray-300 flex items-center justify-start'>
          <div className='w-[40%] py-2 px-3 border-r border-gray-300'>Details</div>
          <div className='w-[30%] py-2 px-3 border-r border-gray-300'>Quantity</div>
          <div className='w-[30%] py-2 px-3'>Total</div>
        </div>
        {/*  */}
        <div className='w-[100%] flex items-center justify-start font-bold text-lg'>
          <div className='w-[40%] py-2 px-3 '></div>
          <div className='w-[30%] py-2 px-3 border-b border-l border-gray-300 text-end'>TOTAL</div>
          <div className='w-[30%] py-2 px-3 border border-gray-300 bg-blue-800 text-white'>
            $23.00
          </div>
        </div>

        <section className='flex items-center justify-end mt-[2rem]'>
          <Link href='/checkout' className='cursor-pointer flex justify-center items-center w-[30%] rounded-full px-12 py-3 text-white bg-gradient-to-br from-green-500 to-blue-900 hover:drop-shadow-lg hover:bg-gradient-to-br hover:from-green-500 hover:to-green-900'>
            Proceed to Checkout
          </Link>
        </section>

        <section className='flex items-center justify-end mt-[2rem]'>
          <Link href='/login' className='cursor-pointer flex justify-center items-center w-[30%] rounded-full px-12 py-3 text-white bg-gradient-to-br from-green-500 to-blue-900 hover:drop-shadow-lg hover:bg-gradient-to-br hover:from-green-500 hover:to-green-900'>
            Login to Proceed
          </Link>
        </section>

      </div>
    </section>

    </>
  )
}
