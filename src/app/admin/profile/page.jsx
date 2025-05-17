import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import ProfileView from './_components/ProfileView'
import { _profileViewAction } from '@/actions/AuthActions';

export default async function page() {
  const [authData] = await Promise.all([_profileViewAction()]);

  return (
    <>
    {/* BREADCRUMBS */}
    <section className='w-full border-y border-gray-200 py-1'>
      <ul className='mx-auto w-[92%] flex items-center justify-start gap-2 text-sm'>
        <Link href='/'> <li>Home</li> </Link>
        <li><FaAngleRight /></li>
        <Link href='/admin'> <li>Admin</li> </Link>
        <li><FaAngleRight /></li>
        <Link href='/admin/profile'><li className='font-semibold'>Profile</li> </Link>
      </ul>
    </section>

    <ProfileView dbData={authData} />
    </>
  )
}
