import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import RoleList from './_components/RoleList'


export default async function page() {
  
  return (
    <>
     {/* BREADCRUMBS */}
    <section className='w-full border-y border-gray-200 py-1'>
      <ul className='mx-auto w-[92%] flex items-center justify-start gap-2 text-sm'>
        <Link href='/'>
        <li>Home</li>
        </Link>
        <li><FaAngleRight /></li>
        <Link href='/admin'>
        <li>Admin</li>
        </Link>
      </ul>
    </section>

    <section className='w-[100%] pt-[2rem]'>
        <div className='mx-auto w-[90%]'>
        <h1 className='font-serif text-[3rem] leading-tight border-b border-gray-300'>
          Role List
        </h1>
        </div>
    </section>

    <RoleList  />
    </>
  )
}
