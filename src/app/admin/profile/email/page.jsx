import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import EmailEdit from './_components/EmailEdit'
import { _profileViewAction } from '@/actions/AuthActions'



export default async function page() {
  const [authData, ] = await Promise.all([_profileViewAction(), ])

  return (
    <>
    {/* BREADCRUMBS */}
    <section className='w-full border-y border-gray-200 py-1'>
      <ul className='mx-auto w-[92%] flex items-center justify-start gap-2 text-sm'>
        <Link href='/'> <li>Home</li> </Link>
        <li><FaAngleRight /></li>
        <Link href='/admin'> <li>Admin</li> </Link>
        <li><FaAngleRight /></li>
        <Link href='/admin/profile'> <li>Profile</li> </Link>
        <li><FaAngleRight /></li>
        <Link href='/admin/profile/email'> <li>Email</li> </Link>
      </ul>
    </section>

    <EmailEdit dbData={authData} />
    </>
  )
}
