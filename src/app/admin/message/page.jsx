import Link from 'next/link';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import MessageList from './_components/MessageList';
import { _messageListAction } from '@/actions/MessageActions';


export default async function page() {
  const [messageData, ] = await Promise.all([_messageListAction(), ])

  return (
    <>
    {/* BREADCRUMBS */}
    <section className='w-full border-y border-gray-200 py-1'>
      <ul className='mx-auto w-[92%] flex items-center justify-start gap-2 text-sm'>
        <Link href='/'> <li>Home</li> </Link>
        <li><FaAngleRight /></li>
        <Link href='/admin'><li>Admin</li> </Link>
        <li><FaAngleRight /></li>
        <Link href='/admin/message'><li className='font-semibold'>Message List</li> </Link>
      </ul>
    </section>

    <MessageList dbData={messageData} />
    </>
  )
}
