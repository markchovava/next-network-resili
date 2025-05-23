import React from 'react'
import ProductView from './_components/ProductView'
import ProductRelated from '../_components/ProductRelated'
import { _brandListAllAction } from '@/actions/BrandActions';
import { productListPriorityAction, productViewAction } from '@/actions/ProductActions';
import { categoryByProductListAction } from '@/actions/ProductCategoryActions';
import CarouselProduct from '../_components/CarouselProduct';
import { cookies } from 'next/headers';



export default async function page({ params: {id} }) {
   const [productData, productCategoryData, productPriorityData] = await Promise.all([
      productViewAction(id),
      categoryByProductListAction(id),
      productListPriorityAction() 
    ]);

    const cookieStore = await cookies();
    const cartToken = await cookieStore.get('NETWORK_RESILIENCE_CART_COOKIE');

  return (
    <>
    {/* TITLE */}
    <section 
      className="w-[100%] h-[16rem] relative bg-fixed bg-cover text-white bg-blue-800" 
      style={{backgroundImage: `url('/assets/img/01.jpg')`}}>
      <div className='absolute w-[100%] h-[100%] z-10 bg-black opacity-10'></div>
      <div className='absolute z-20 mx-auto h-[100%] w-full flex flex-col items-center justify-center'>
        <h2 className="text-center uppercase text-[2.5rem] font-extrabold mb-4">Product</h2>
        <hr className="w-[10rem] border-b border-[0.4rem]" />
      </div>
    </section>

    <ProductView 
      id={id}
      cartToken={cartToken}
      dbData={productData} 
      productCategoryData={productCategoryData} />


    <CarouselProduct dbData={productPriorityData} />


    </>
  )
}
