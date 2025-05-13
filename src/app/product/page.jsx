import React from 'react'
import Link from 'next/link'
import ProductList from './_components/ProductList';
import SectionContact from '../_components/SectionContact'


export default function page() {
  return (
    <>
     {/* TITLE */}
    <section 
      className="w-[100%] h-[16rem] relative bg-fixed bg-cover text-white bg-blue-800" 
      style={{backgroundImage: `url('/assets/img/03.jpg')`}}>
      <div className='absolute w-[100%] h-[100%] z-10 bg-black opacity-10'></div>
      <div className='absolute z-20 mx-auto h-[100%] w-full flex flex-col items-center justify-center'>
        <h2 className="text-center uppercase text-[2.5rem] font-extrabold mb-4">Our Products</h2>
        <hr className="w-[10rem] border-b border-[0.4rem]" />
      </div>
    </section>

    <ProductList />

    <SectionContact />

    </>
  )
}
