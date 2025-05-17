import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import UserView from './_components/UserView'
import { _userViewAction } from '@/actions/UserActions'



export default async function page({params: {id} }) {
  const [userData, ] = await Promise.all([ _userViewAction(id), ])

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
        <Link href={`/admin/user/${id}`}> <li className='font-semibold'>View User</li> </Link>
      </ul>
    </section>

    <UserView id={id} dbData={userData} />
    </>
  )
}
