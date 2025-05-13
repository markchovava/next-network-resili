"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


export default function Login() {
  return (
    <>
    <section className='w-full py-[5rem] border-t border-gray-300'>
      <div className='mx-auto lg:w-[50%] w-[80%] bg-white rounded-xl drop-shadow-lg p-8'>
        <div className='flex items-center justify-center mb-4'>
          <Image 
            src="/assets/img/logo.png" 
            className='object-fit' 
            width={120} 
            height={120} 
            alt="Logo" />
        </div>
        <h3 className='text-center text-[1.5rem] mb-8'>Login</h3>
        {/*  */}
        <div className='mb-4'>
          <p className='mb-1 font-light'>Email:</p>
          <input type='text' placeholder='Enter Email' className='px-3 py-3 w-[100%] outline-none border border-gray-300' />
        </div>
        {/*  */}
        <div className='mb-4'>
          <p className='mb-1 font-light'>Password:</p>
          <input type='password' placeholder='Enter Password' className='px-3 py-3 w-[100%] outline-none border border-gray-300' />
        </div>
        {/*  */}
        <div className='flex items-center justify-center mb-6'>
          <button type='submit' className='cursor-pointer text-white bg__one rounded-full px-12 py-4'>
            Submit
          </button>
        </div>

        <p className='text-center flex items-center justify-center mb-6'>Don't have an account? 
          <Link
          href='/register' 
          className='px-1 underline text-blue-800 hover:no-underline'>
            Register
          </Link>
        </p>

      </div>
    </section>
    </>
  )
}
