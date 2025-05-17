import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import ProductCategoryEdit from './_components/ProductCategoryEdit'
import { _categoryListAllAction } from '@/actions/CategoryActions'
import { _productViewAction } from '@/actions/ProductActions'
import { _categoryByProductListAction } from '@/actions/ProductCategoryActions'




export default async function page({ params: {id} }) {
    const [productData, categoryData, productCategoryData] = await Promise.all([
        _productViewAction(id), 
        _categoryListAllAction(),
        _categoryByProductListAction(id)
    ]);

  return (
    <>
    {/* BREADCRUMBS */}
    <section className='w-full border-y border-gray-200 py-1'>
      <ul className='mx-auto w-[92%] flex items-center justify-start gap-2 text-sm'>
        <Link href='/'> <li>Home</li> </Link>
        <li><FaAngleRight /></li>
        <Link href='/admin'><li>Admin</li> </Link>
        <li><FaAngleRight /></li>
        <Link href='/admin/product'><li>Product</li> </Link>
        <li><FaAngleRight /></li>
        <Link href={`/admin/product/${id}`}><li className='font-semibold'>Product Categories</li> </Link>
      </ul>
    </section>

    <ProductCategoryEdit 
        id={id}
        dbData={productData} 
        productCategoryData={productCategoryData}
        categoryData={categoryData} />
    </> 
  )
}
