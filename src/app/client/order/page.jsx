import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import OrderList from './_components/OrderList'
import { _orderListByUserAction } from '@/actions/OrderActions'



export default async function page() {
  const [orderData, ] = await Promise.all([_orderListByUserAction(), ])
  return (
    <>
    {/* BREADCRUMBS */}
    <section className='w-full border-y border-gray-200 py-1'>
      <ul className='mx-auto w-[92%] flex items-center justify-start gap-2 text-sm'>
        <Link href='/'><li>Home</li></Link>
        <li><FaAngleRight /></li>
        <Link href='/client'><li>Client</li></Link>
        <li><FaAngleRight /></li>
        <Link href='/admin/order'><li>Orders</li></Link>
      </ul>
    </section>

    <OrderList dbData={orderData} />
    </>
  )
}
