import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import OrderView from './_components/OrderView'
import { _orderViewAction } from '@/actions/OrderActions'



export default async function page({ params: {id} }) {
  const [orderData, ] = await Promise.all([_orderViewAction(id), ])


  return (
    <>
    {/* BREADCRUMBS */}
    <section className='w-full border-y border-gray-200 py-1'>
      <ul className='mx-auto w-[92%] flex items-center justify-start gap-2 text-sm'>
        <Link href='/'> <li>Home</li> </Link>
        <li><FaAngleRight /></li>
        <Link href='/client'> <li>Client</li> </Link>
        <li><FaAngleRight /></li>
        <Link href='/client/order'><li>Order</li> </Link>
        <li><FaAngleRight /></li>
        <Link href={`/client/order/${id}`}> <li className='font-semibold'>View Order</li> </Link>
      </ul>
    </section>

    <OrderView id={id} dbData={orderData} />
    </>
  )
}
