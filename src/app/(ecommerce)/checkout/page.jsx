import React from 'react'
import CheckoutEdit from './_components/CheckoutEdit'
import { cartViewAction } from '@/actions/CartActions'
import { _profileViewAction } from '@/actions/AuthActions'




export default async function page() {
  const [cartData, userData] = await Promise.all([cartViewAction(), _profileViewAction()])

  return (
    <>
    {/* TITLE */}
    <section 
      className="w-[100%] h-[16rem] relative bg-fixed bg-cover text-white bg-blue-800" 
      style={{backgroundImage: `url('/assets/img/04.jpg')`}}>
        <div className='absolute w-[100%] h-[100%] z-10 bg-black opacity-10'></div>
        <div className='absolute w-full z-20 mx-auto h-[100%] flex flex-col items-center justify-center'>
            <h2 className="text-center uppercase text-[2.5rem] font-extrabold mb-4">Checkout</h2>
            <hr className="w-[10rem] border-b border-[0.4rem]" />
        </div>
    </section>


   <CheckoutEdit cartData={cartData} dbData={userData} />
    </>
  )
}
