"use client"

import { reactToastifyDark } from '@/_utils/reactToastify'
import { _orderStoreAction } from '@/actions/OrderActions'
import { removeCartCookie } from '@/cookies/CookieCartClient'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function CheckoutEdit({cartData, dbData}) {
  const router = useRouter()
  const [data, setData] = useState(dbData?.data)
  const [isAgree, setIsAgree] = useState(false)
  const [cart, setCart] = useState(cartData?.cart)
  const [cartitems, setCartItems] = useState(cartData?.cartitems)
  const [errMsg, setErrMsg] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const handleInput = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  console.log('cartData', cartData)

  async function postData(){
    if(!data?.name) {
      const message = 'Full Name is required.'
      toast.warn(message, reactToastifyDark)
      setErrMsg({name: message})
      setIsSubmit(false)
      return
    }
    if(!data?.address){
      const message = 'Address is required.'
      toast.warn(message, reactToastifyDark)
      setErrMsg({address: message})
      setIsSubmit(false)
      return
    }
    if(!data?.email){
      const message = 'Email is required.'
      toast.warn(message, reactToastifyDark)
      setErrMsg({email: message})
      setIsSubmit(false)
      return
    }
    if(!data?.phone){
      const message = 'Phone Number is required.'
      toast.warn(message, reactToastifyDark)
      setErrMsg({phone: message})
      setIsSubmit(false)
      return
    }
    if(!isAgree){
      const message = 'Please confirm above.'
      toast.warn(message, reactToastifyDark)
      setErrMsg({is_agree: message})
      setIsSubmit(false)
      return
    }

    const formData = {
      cart_id: cart?.id,
      name: data?.name,
      address: data?.address,
      email: data?.email,
      phone: data?.phone,
      notes: data?.notes ?? '',
      is_agree: isAgree && 'Yes',
      total: cart?.total,
      quantity: cart?.quantity,
      cartitems: cartitems,
    }

    console.log('formData', formData)
    try{
        const res = await _orderStoreAction(formData)
        if(res?.status == 1) {
            toast.success(res?.message, reactToastifyDark);
            setIsSubmit(false);
            removeCartCookie()
            router.push('/order-track')
            return
        }
        const message = "Something went wrong, try again.";
        toast.warn(message, reactToastifyDark);
        setIsSubmit(false);
  
    } catch (error) {
        console.error(`Error: ${error}`);
        setIsSubmit(false); 
    }

  }



  return (
    <>
     <section className='w-full py-[5rem]'>
      <div className='mx-auto w-[92%] flex lg:flex-row flex-col items-start justify-start gap-8'>
        <div className='lg:w-[65%] w-[100%]'>
          <h2 className='font-light text-[2.5rem] mb-1'>Customer Information</h2>
          <hr className='border-b border-gray-300' />
          {/* FULL NAME */}
          <div className='w-[100%] mb-4 mt-3'>
            <p className='font-light mb-1'>Full Name:</p>
            <input 
            type='text' 
            name='name'
            placeholder='Full Name'
            value={data?.name}
            onChange={handleInput} 
            className='w-[100%] p-3 outline-none border border-gray-300' />
            {errMsg?.name &&
            <p className='text-sm text-red-600'>{errMsg?.name}</p>}
          </div>
          {/* ADDRESS */}
          <div className='w-[100%] mb-4'>
            <p className='font-light mb-1'>Address:</p>
            <input 
              type='text' 
              name='address'
              value={data?.address}
              onChange={handleInput}
              placeholder='Enter Address' 
              className='w-[100%] p-3 outline-none border border-gray-300' />
            {errMsg?.address &&
              <p className='text-sm text-red-600'>{errMsg?.address}</p>}
          </div>
          {/*  */}
           <div className='w-[100%] mb-4 grid lg:grid-cols-2 grid-cols-1 gap-4'>
              <div className='w-[100%]'>
                <p className='font-light mb-1'>Email:</p>
                <input 
                  type='text' 
                  name='email'
                  value={data?.email}
                  onChange={handleInput}
                  placeholder='Enter Email' 
                  className='w-[100%] p-3 outline-none border border-gray-300' />
                  {errMsg?.email &&
                    <p className='text-sm text-red-600'>{errMsg?.email}</p>}
              </div>
              <div className='w-[100%]'>
                <p className='font-light mb-1'>Phone:</p>
                <input 
                  type='text' 
                  name='phone'
                  value={data?.phone}
                  onChange={handleInput}
                  placeholder='Enter Phone' 
                  className='w-[100%] p-3 outline-none border border-gray-300' />
                {errMsg?.phone &&
                    <p className='text-sm text-red-600'>{errMsg?.phone}</p>}
              </div>
           </div>
           {/* NOTES */}
          <div className='w-[100%] mb-4'>
            <p className='font-light mb-1'>Notes:</p>
            <textarea
              type='text' 
              name='notes'
              value={data?.notes}
              onChange={handleInput}
              placeholder='Enter Notes' 
              className='w-[100%] h-[10rem] p-3 outline-none border border-gray-300'></textarea>
          </div>
        </div>
        <div className='lg:w-[35%] w-[100%] bg-gray-100 drop-shadow-md py-8 px-6'>
          <h2 className='font-light text-[1.8rem] mb-1'>Transaction Details</h2>
          <hr className='border-b border-gray-300' />
          <section className='w-[100%] border border-gray-300 flex justify-start items-center mt-2 font-bold'>
            <div className='w-[55%] p-2 border-r border-gray-300'>Details</div>
            <div className='w-[45%] p-2'>Total</div>
          </section>

          { cartitems ?
          <>
          {
            cartitems.map((i, key) => (
            <section key={key} className='w-[100%] border border-gray-300 flex justify-start items-center font-light'>
              <div className='w-[55%] p-2 border-r border-gray-300'>
                <p>{i?.product?.name}</p>
                <p className='text-sm'>Quantity: {i?.quantity}</p>
              </div>
              <div className='w-[45%] p-2'>{i?.total ? '$' + i?.total : 0}</div>
            </section>
            ))
          }
          <section className='w-[100%] flex justify-start items-center'>
            <div className='w-[55%] p-2 '>
              <p className='text-end font-semibold'>Quantity</p>
            </div>
            <div className='w-[45%] font-semibold p-2 border border-gray-300'>
              {cart?.quantity ? cart?.quantity : 0}</div>
          </section>
           <section className='w-[100%] flex justify-start items-center mb-4'>
            <div className='w-[55%] p-2 '>
              <p className='text-end font-semibold'>Total</p>
            </div>
            <div className='w-[45%] font-semibold p-2 border border-gray-300 bg-blue-800 text-white'>
              {cart?.total ? '$' + cart?.total : 0}</div>
          </section>
          {/*  */}
          <div className='w-[100%]  font-light mb-4'>
            <p className='flex items-center justify-start gap-2'>
              <input 
                type='radio' 
                checked={isAgree} 
                onChange={() => setIsAgree(true)} 
                name='is_agree' 
                value='Yes' 
                className='' />
              I accept the terms and conditions outlined by site.
            </p>
            {errMsg?.isAgree &&
              <p className='text-sm text-red-600'>{errMsg?.isAgree}</p>}
          </div>
          {/*  */}
          <form action={postData} onSubmit={() => setIsSubmit(true)} className=''>
            <button className='mx-auto w-[100%] ease-in-out duration-300 transition-all cursor-pointer rounded-full py-4 text-white bg-gradient-to-br from-green-500 to-blue-900 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-900'>
              Submit
            </button>
          </form>
          </>
            :
            <section className='py-6'>
              <h2 className='font-light text-4xl'>Data No available</h2>
            </section>
          }


          
         

          

        </div>
      </div>
    </section>
    </>
  )
}
