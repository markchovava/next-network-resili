import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import ProductView from './_components/ProductView'
import { _productViewAction } from '@/actions/ProductActions'
import { _brandListAllAction } from '@/actions/BrandActions'
import { _categoryByProductListAction } from '@/actions/ProductCategoryActions'



export default async function page({ params: {id} }) {
  const [productData, brandData, productCategoryData] = await Promise.all([
    _productViewAction(id),
    _brandListAllAction(), 
    _categoryByProductListAction(id) 
  ])

  return (
    <>
    {/* BREADCRUMBS */}
    <section className='w-full border-y border-gray-200 py-1'>
      <ul className='mx-auto w-[92%] flex items-center justify-start gap-2 text-sm'>
        <Link href='/'> <li>Home</li> </Link>
        <li><FaAngleRight /></li>
        <Link href='/admin'> <li>Admin</li> </Link>
        <li><FaAngleRight /></li>
        <Link href='/admin/product'><li>Product</li> </Link>
        <li><FaAngleRight /></li>
        <Link href={`/admin/product/${id}`}> <li>View Product</li> </Link>
      </ul>
    </section>

    <ProductView 
      id={id} 
      dbData={productData} 
      brandData={brandData}  
      productCategoryData={productCategoryData} />
    </>
  )
}
