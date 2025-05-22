"use client";
import { reactToastifyDark } from '@/_utils/reactToastify';
import { cartStoreAllAction } from '@/actions/CartActions';
import { MainContextState } from '@/contexts/MainContext';
import { setCartCookie } from '@/cookies/CookieCartClient';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';



export default function Cart({ dbData, authToken }) {
  const router = useRouter();
  const {cartState, cartDispatch } = MainContextState()
  const [isSubmit, setIsSubmit] = useState(false)
  useEffect(() => {
      cartDispatch({type: 'ADD_DATA', payload: {
          cartitems: dbData?.cartitems,
          cart: dbData?.cart,
      }});
  }, []);

  // Calculate total price
  const totalPrice = cartState.cartitems ? cartState.cartitems.reduce(
    (total, item) => total + item.price * item.quantity, 0) : 0;
  // Calculate total price
  const totalQuantity = cartState.cartitems ? cartState.cartitems.reduce(
    (total, item) => Number(total) + Number(item.quantity), 0) : 0;

  async function postData(){
    const formData = {
      cart_id: cartState.cart?.id,
      total: totalPrice,
      quantity: totalQuantity,
      cartitems: cartState.cartitems,
    }
    //console.log('formData', formData)

    try{
        const res = await cartStoreAllAction(formData)
        if(res?.status == 1) {
            toast.success(res?.message, reactToastifyDark);
            setIsSubmit(false);
            setCartCookie(res?.data?.id)
            router.push('/checkout')
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
    
    <section className='w-full pt-[4rem] pb-[5rem]'>
      <div className='w-[92%] mx-auto'>
        <div className='w-[100%] mb-4 px-6 py-8 drop-shadow bg-gray-50 flex items-center justify-end'>
          <Link href='/product'>
          <button className='text-white py-3 px-6 cursor-pointer ease-in-out duration-200 bg-gradient-to-br rounded-xl from-blue-500 to-green-900 hover:bg-gradient-to-br hover:from-blue-600 hover:to-green-900'>
            Continue Shopping
          </button>
          </Link>
        </div>
        <h3 className='text-[2.5rem] font-light mb-3'>Your Cart</h3>
        {/*  */}
        <div className='w-[100%] border border-gray-300 flex items-center justify-start font-bold'>
          <div className='w-[40%] py-2 px-3 border-r border-gray-300'>Details</div>
          <div className='w-[30%] py-2 px-3 border-r border-gray-300'>Quantity</div>
          <div className='w-[30%] py-2 px-3'>Total</div>
        </div>
        {/*  */}
        { cartState?.cartitems && cartState?.cartitems.length > 0 &&
        <>
          {cartState?.cartitems?.map((i, key) => (
            <div key={key} className='w-[100%] border border-gray-300 flex items-center justify-start'>
              <div className='w-[40%] py-2 px-3 border-r border-gray-300'>
                <Link href={`/product/${i?.product?.id}`}>{i?.product?.name ? i?.product?.name : ''}</Link>
                </div>
              <div className='w-[30%] py-2 px-3 border-r border-gray-300'>
                <input type='number' 
                value={i?.quantity} 
                onChange={(e) => {
                  cartDispatch({type: 'ADD_QUANTITY', payload: {id: i?.id, quantity: e.target.value}})
                }}
                className='outline-none border border-gray-300 p-2'/>
              </div>
              <div className='w-[30%] py-2 px-3'>{i?.total ? '$' + parseFloat(i?.total) : 0}</div>
            </div>
          ))}

          {/*  */}
          <div className='w-[100%] flex items-center justify-start font-bold text-lg'>
            <div className='w-[40%] py-2 px-3 '></div>
            <div className='w-[30%] py-2 px-3 border-b border-l border-gray-300 text-start'>{totalQuantity}</div>
            <div className='w-[30%] py-2 px-3 border border-gray-300 bg-blue-800 text-white'>
              {totalPrice ? '$' + totalPrice.toFixed(2) : 0}
            </div>
          </div>

        </>
        }
        
        {cartState?.cartitems?.length > 0 &&
        <>
          { authToken?.value ? 
            <form action={postData} onSubmit={() =>setIsSubmit(true)} className='flex items-center justify-end mt-[2rem]'>
              <button type='submit' className='cursor-pointer flex justify-center items-center w-[30%] rounded-full px-12 py-3 text-white bg-gradient-to-br from-green-500 to-blue-900 hover:drop-shadow-lg hover:bg-gradient-to-br hover:from-green-500 hover:to-green-900'>
                Proceed to Checkout
              </button>
            </form>
            :
            <section className='flex items-center justify-end mt-[2rem]'>
              <Link href='/login' className='cursor-pointer flex justify-center items-center w-[30%] rounded-full px-12 py-3 text-white bg-gradient-to-br from-green-500 to-blue-900 hover:drop-shadow-lg hover:bg-gradient-to-br hover:from-green-500 hover:to-green-900'>
                Login to Proceed
              </Link>
            </section>
          }
        </>
        }



      </div>
    </section>

    </>
  )
}
