import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import ProductList from './_components/ProductList'
import { _productListAction } from '@/actions/ProductActions';
import { _brandListAllAction } from '@/actions/BrandActions';



export default async function page() {
  const [productData, brandData, ] = await Promise.all([
    _productListAction(), _brandListAllAction()]);

  return (
    <>
    {/* BREADCRUMBS */}
    <section className='w-full border-y border-gray-200 py-1'>
      <ul className='mx-auto w-[92%] flex items-center justify-start gap-2 text-sm'>
        <Link href='/'> <li>Home</li> </Link>
        <li><FaAngleRight /></li>
        <Link href='/admin'><li>Admin</li> </Link>
        <li><FaAngleRight /></li>
        <Link href='/admin/product'><li className='font-semibold'>Product</li> </Link>
      </ul>
    </section>

    <ProductList 
      dbData={productData} 
      brandData={brandData} />


    </>
  )
}
