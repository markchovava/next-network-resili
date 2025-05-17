import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import UserList from './_components/UserList'
import { _userListAction } from '@/actions/UserActions'
import { cookies } from 'next/headers'
import ClientRedirect from '@/app/_components/ClientRedirect'



export default async function page() {
  const [userData, ] = await Promise.all([_userListAction()])

  const cookieStore = await cookies();
  const adminToken = await cookieStore.get('NETWORK_RESILIENCE_ADMIN_COOKIE');
    
  if(adminToken?.value != "Yes") {
    return( <ClientRedirect /> )
  }

  return (
    <>
    {/* BREADCRUMBS */}
    <section className='w-full border-y border-gray-200 py-1'>
      <ul className='mx-auto w-[92%] flex items-center justify-start gap-2 text-sm'>
        <Link href='/'> <li>Home</li> </Link>
        <li><FaAngleRight /></li>
        <Link href='/admin'><li>Admin</li> </Link>
        <li><FaAngleRight /></li>
        <Link href='/admin/user'><li className='font-semibold'>User</li> </Link>
      </ul>
    </section>

    <UserList dbData={userData} />

    </>
  )
}
