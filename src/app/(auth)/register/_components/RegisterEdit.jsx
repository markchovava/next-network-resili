"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { toast } from 'react-toastify';
import { reactToastifyDark } from '@/_utils/reactToastify';
import { useRouter } from 'next/navigation';
import { registerAction } from '@/actions/AuthActions';


export default function RegisterEdit() {
  const router = useRouter();
  const [isSubmit, setIsSubmit] = useState(false)
  const [data, setData] = useState({
    email: null,
    password: null,
    confirm_password: null,
  });
  const [errMsg, setErrMsg] = useState({});
  const handleInput = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  async function postData() {
    if(!data?.email) {
      const message = "Email is required."
      setErrMsg({email: message})
      toast.warn(message, reactToastifyDark)
      setIsSubmit(false)
      return;
    }
    if(!data?.password) {
      const message = "Password is required."
      setErrMsg({password: message})
      toast.warn(message, reactToastifyDark)
      setIsSubmit(false)
      return;
    }
    if(!data?.confirm_password) {
      const message = "Confirm Password is required."
      setErrMsg({confirm_password: message})
      toast.warn(message, reactToastifyDark)
      setIsSubmit(false)
      return;
    }
    if(data?.password != data?.confirm_password) {
      const message = "Confirm Password is required."
      setErrMsg({confirm_password: message})
      toast.warn(message, reactToastifyDark)
      setIsSubmit(false)
      return;
    }

    const formData = {
      email: data?.email,
      password: data?.password,
    }

    try{
        const res = await registerAction(formData)
        if(res?.status == 1) {
            toast.success(res?.message, reactToastifyDark);
            setIsSubmit(false);
            setErrMsg({});
            router.push('/login');
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
        <h3 className='text-center text-[1.5rem] mb-8'>Register</h3>
        
        <form action={postData} onSubmit={() => setIsSubmit(true)}>
          {/* EMAIL */}
          <div className='mb-4'>
            <p className='mb-1 font-light'>Email:</p>
            <input 
              type='text' 
              name='email'
              value={data?.email}
              onChange={handleInput}
              placeholder='Enter Email' 
              className='px-3 py-3 w-[100%] outline-none border border-gray-300' />
              { errMsg?.email &&
                <p className='text-sm text-red-600'>{errMsg?.email}</p> }
          </div>
          {/* PASSWORD */}
          <div className='mb-4'>
            <p className='mb-1 font-light'>Password:</p>
            <input 
              type='password' 
              name='password'
              value={data?.password}
              onChange={handleInput}
              placeholder='Enter Password' 
              className='px-3 py-3 w-[100%] outline-none border border-gray-300' />
              { errMsg?.password &&
                <p className='text-sm text-red-600'>{errMsg?.password}</p> }
          </div>
          {/* CONFIRM PASSWORD */}
          <div className='mb-4'>
            <p className='mb-1 font-light'>Confirm Password:</p>
            <input 
              type='password'
              name='confirm_password'
              value={data?.confirm_password}
              onChange={handleInput} 
              placeholder='Enter Confirm Password' 
              className='px-3 py-3 w-[100%] outline-none border border-gray-300' />
              { errMsg?.confirm_password &&
                <p className='text-sm text-red-600'>{errMsg?.confirm_password}</p> }
          </div>
          {/* BUTTON */}
          <div className='flex items-center justify-center mb-6'>
            <button type='submit' className='cursor-pointer text-white bg__one rounded-full px-12 py-4'>
            {isSubmit ? 'Processing' : 'Submit'}
            </button>
          </div>
        </form>

        <p className='text-center flex items-center justify-center mb-6'>Already have an account? 
          <Link 
          href='/login' 
          className='px-1 underline text-blue-800 hover:no-underline'>
            Login
          </Link>
        </p>

      </div>
    </section>
    </>
  )
}
