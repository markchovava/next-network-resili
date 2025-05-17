import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import BrandView from './_components/BrandView'
import { _brandViewAction } from '@/actions/BrandActions'



export default async function page({ params: {id} }) {
  const [brandData, ] = await Promise.all([ _brandViewAction(id), ])

  return (
    <>
    {/* BREADCRUMBS */}
    <section className='w-full border-y border-gray-200 py-1'>
      <ul className='mx-auto w-[92%] flex items-center justify-start gap-2 text-sm'>
        <Link href='/'> <li>Home</li> </Link>
        <li><FaAngleRight /></li>
        <Link href='/admin'> <li>Admin</li> </Link>
        <li><FaAngleRight /></li>
        <Link href='/admin/brand'><li>Brand</li> </Link>
        <li><FaAngleRight /></li>
        <Link href={`/admin/brand/${id}`}> <li>View Brand</li> </Link>
      </ul>
    </section>

    <BrandView id={id} dbData={brandData} />
    </>
  )
}
