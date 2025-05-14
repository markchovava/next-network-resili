import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import AppInfoView from './_components/AppInfoView'



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
        <Link href='/admin/setting'> <li>Settings</li> </Link>
        <li><FaAngleRight /></li>
        <Link href='/admin/setting/app-info'><li className='font-semibold'>AppInfo View</li> </Link>
      </ul>
    </section>

    <AppInfoView />
    </>
  )
}
