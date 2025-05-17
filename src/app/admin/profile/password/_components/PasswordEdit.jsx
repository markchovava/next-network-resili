"use client";
import { reactToastifyDark } from '@/_utils/reactToastify';
import { _passwordAction } from '@/actions/AuthActions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';






export default function PasswordEdit() {
    const router = useRouter()
    const [data, setData] = useState({})
    const [errMsg, setErrMsg] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }
 
    async function postData() {
      if(!data?.password){
        const message = "Password is required."
        setErrMsg({password: message})
        toast.warn(message, reactToastifyDark)
        setIsSubmit(false);
        return;
      }
      if(!data?.confirm_password){
        const message = "Confirm Password is required.";
        setErrMsg({confirm_password: message});
        toast.warn(message, reactToastifyDark);
        setIsSubmit(false);
        return;
      }
      if(data?.password != data?.confirm_password){
        const message = "Password do not match.";
        setErrMsg({confirm_password: message});
        toast.warn(message, reactToastifyDark);
        setIsSubmit(false);
        return;
      }
      const formData = {
        password: data?.password,
      }
      try{
          const res = await _passwordAction(formData)
          if(res?.status == 1) {
              toast.success(res?.message, reactToastifyDark);
              setErrMsg({});
              router.push('/admin/profile')
              setIsSubmit(false);
          }
          if(res?.status == 0) {
              toast.warn(res?.message, reactToastifyDark);
              setErrMsg({});
              setIsSubmit(false);
          }
      } catch (error) {
          console.error(`Error: ${error}`);
          setIsSubmit(false); 
      }
    }


  return (
    <>
    <section className='w-full pt-[4rem] pb-[5rem]'>
      

      <form className='mx-auto w-[70%]' action={postData} onSubmit={() => setIsSubmit(true)}>

        <div className='flex items-center justify-end gap-3 mb-4'>
          <Link href='/admin/profile' 
              className='drop-shadow bg-white duration-100 ease-linear transition-all border border-gray-300 hover:bg-blue-800 hover:text-white hover:drop-shadow-md px-4 py-3'>
              View Profile
          </Link>
        </div>
  
          <h3 className='text-[2.5rem] font-light mb-1'>Password</h3>
          <hr className='border-b border-gray-200' />
   
          {/*  */}
          <div className='grid grid-cols-2 gap-6 py-6'>
            <div className='w-[100%]'>
                <p className='mb-2 leading-none text-sm font-light'>Password:</p>
                <input 
                    type='password' 
                    name='password'
                    onChange={handleInput}
                    value={data?.password}
                    placeholder='Password' 
                    className='w-[100%] border border-gray-300 outline-none p-3' />
                { errMsg?.password &&
                  <p className='text-red-600 text-sm'>{errMsg?.password}</p> }
            </div>
            <div className='w-[100%]'>
                <p className='mb-2 leading-none text-sm font-light'>Confirm Password:</p>
                <input 
                    type='password' 
                    name='confirm_password'
                    onChange={handleInput}
                    value={data?.confirm_password}
                    placeholder='Confirm Password' 
                    className='w-[100%] border border-gray-300 outline-none p-3' />
                { errMsg?.confirm_password &&
                  <p className='text-red-600 text-sm'>{errMsg?.confirm_password}</p> }
            </div>
          </div>
          {/*  */}
          <div className='w-[100%]'>
              <button type='submit' className='w-[100%] rounded-xl bg-gray-800 hover:bg-gray-900 hover:drop-shadow-lg ease-linear transition-all duration-150 text-white py-4'>
                  { isSubmit ? 'Processing' : 'Submit' }
              </button>
          </div>

      </form>

       
    </section>


  


    </>
  )
}
