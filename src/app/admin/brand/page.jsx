import Link from 'next/link';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import BrandList from './_components/BrandList';
import { _brandListAction } from '@/actions/BrandActions';
import ClientRedirect from '@/app/_components/ClientRedirect';
import { cookies } from 'next/headers';


export default async function page() {
  const [brandData, ] = await Promise.all([_brandListAction()])
  
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
        <Link href='/admin/brand'><li className='font-semibold'>Brand List</li> </Link>
      </ul>
    </section>

    <BrandList dbData={brandData} />
    </>
  )
}
