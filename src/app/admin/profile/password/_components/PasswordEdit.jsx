"use client";
import React, { useState } from 'react';






export default function PasswordEdit() {
  const [data, setData] = useState({})
  const [errMsg, setErrMsg] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const handleInput = (e) => {
      setData({...data, [e.target.name]: e.target.value});
  }

  return (
    <>
    <section className='w-full pt-[4rem] pb-[5rem]'>
      

      <form className='mx-auto w-[70%]' onSubmit={() => setIsSubmit(true)}>
  
          <h3 className='text-[2.5rem] font-light mb-1'>Password</h3>
          <hr className='border-b border-gray-200' />
   
          {/*  */}
          <div className='grid grid-cols-2 gap-6 py-6'>
            <div className='w-[100%]'>
                <p className='mb-2 leading-none text-sm font-light'>Password:</p>
                <input 
                    type='text' 
                    name='password'
                    onChange={handleInput}
                    value={data?.password}
                    placeholder='Password' 
                    className='w-[100%] border border-gray-300 outline-none p-3' />
                {errMsg?.password &&
                <p className='text-red-600 text-sm'>{errMsg?.password}</p>}
            </div>
            <div className='w-[100%]'>
                <p className='mb-2 leading-none text-sm font-light'>Confirm Password:</p>
                <input 
                    type='text' 
                    name='confirm_password'
                    onChange={handleInput}
                    value={data?.confirm_password}
                    placeholder='Confirm Password' 
                    className='w-[100%] border border-gray-300 outline-none p-3' />
                {errMsg?.confirm_password &&
                <p className='text-red-600 text-sm'>{errMsg?.confirm_password}</p>}
            </div>

          </div>
          {/*  */}
          <div className='w-[100%]'>
              <button type='submit' className='w-[100%] rounded-xl bg-gray-800 hover:bg-gray-900 hover:drop-shadow-lg ease-linear transition-all duration-150 text-white py-4'>
                  { isSubmit 
                  ? 'Processing' 
                  : 'Submit' }
              </button>
          </div>
      </form>

       
    </section>


  


    </>
  )
}
