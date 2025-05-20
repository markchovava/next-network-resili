import Link from 'next/link'
import React from 'react'
import Cart from './_components/Cart'
import { cartViewAction } from '@/actions/CartActions';
import { cookies } from 'next/headers';



export default async function page() {
  const [cartData] = await Promise.all([cartViewAction()]);
  const cookieStore = await cookies();
  const authToken = await cookieStore.get('NETWORK_RESILIENCE_AUTH_COOKIE');


  return (
    <>
    {/* TITLE */}
    <section 
      className="w-[100%] h-[16rem] relative bg-fixed bg-cover text-white bg-blue-800" 
      style={{backgroundImage: `url('/assets/img/02.jpg')`}}>
        <div className='absolute w-[100%] h-[100%] z-10 bg-black opacity-10'></div>
        <div className='absolute w-full z-20 mx-auto h-[100%] flex flex-col items-center justify-center'>
            <h2 className="text-center uppercase text-[2.5rem] font-extrabold mb-4">Shopping Cart</h2>
            <hr className="w-[10rem] border-b border-[0.4rem]" />
        </div>
    </section>

    <Cart dbData={cartData} authToken={authToken} />
    </>
  )
}
