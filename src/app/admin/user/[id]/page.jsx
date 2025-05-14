import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import UserView from './_components/UserView'

export default function page() {
  return (
    <>
    {/* BREADCRUMBS */}
    <section className='w-full border-y border-gray-200 py-1'>
      <ul className='mx-auto w-[92%] flex items-center justify-start gap-2 text-sm'>
        <Link href='/'> <li>Home</li> </Link>
        <li><FaAngleRight /></li>
        <Link href='/admin'> <li>Admin</li> </Link>
        <li><FaAngleRight /></li>
        <Link href='/admin/user'><li>User</li> </Link>
        <li><FaAngleRight /></li>
        <Link href='/admin/user'> <li>View User</li> </Link>
      </ul>
    </section>

    <UserView />
    </>
  )
}
