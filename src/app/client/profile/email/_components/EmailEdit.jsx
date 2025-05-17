"use client"
import { reactToastifyDark } from '@/_utils/reactToastify'
import { _emailAction } from '@/actions/AuthActions'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'






export default function EmailEdit({dbData}) {
  const router = useRouter();
  const [data, setData] = useState(dbData?.data)
  const [errMsg, setErrMsg] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const handleInput = (e) => {
      setData({...data, [e.target.name]: e.target.value});
  }

  async function postData() {
      if(!data?.email){
        const message = "Email is required."
        setErrMsg({email: message})
        toast.warn(message, reactToastifyDark)
        return;
      }
      const formData = {
        email: data?.email,
      }
      try{
          const res = await _emailAction(formData)
          if(res?.status == 1) {
              toast.success(res?.message, reactToastifyDark);
              setErrMsg({});
              router.push('/client/profile')
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
          <Link href='/client/profile' 
              className='drop-shadow bg-white duration-100 ease-linear transition-all border border-gray-300 hover:bg-blue-800 hover:text-white hover:drop-shadow-md px-4 py-3'>
              View Profile
          </Link>
        </div>
  
        <h3 className='text-[2.5rem] font-light mb-1'>Email</h3>
        <hr className='border-b border-gray-200' />
   
        {/* EMAIL */}
        <div className='w-[100%] py-6'>
            <p className='mb-2 leading-none text-sm font-light'>Email:</p>
            <input 
                type='text' 
                name='email'
                onChange={handleInput}
                value={data?.email}
                placeholder='Enter Email' 
                className='w-[100%] border border-gray-300 outline-none p-3' />
            { errMsg?.email &&
              <p className='text-red-600 text-sm'>{errMsg?.email}</p> }
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
