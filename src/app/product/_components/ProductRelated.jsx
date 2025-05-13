"use client"
import { ProductData } from '@/data/ProductData'
import Link from 'next/link'
import React, { useState } from 'react'

export default function ProductRelated() {
    const [data, setData] = useState(ProductData)
    console.log(data)
    
  return (
    <>
    <section className='w-full pb-[5rem]'>
        <div className='mx-auto w-[92%]'>
            <h2 className='text-2xl'>Related Products</h2>
        </div>
        <div className='mx-auto w-[92%] grid grid-cols-4'> 
            { data.map(i => (
                i < 4 &&
                <div key={i.id} className='group w-[100%] rounded-xl bg-white drop-shadow-md p-4'>
                    {i}
                    <div className='w-[100%] aspect-[7/5] bg-gray-100 rounded-xl mb-3'>
                        <Image 
                        src={i?.img} 
                        width={350} 
                        height={250} 
                        className="group-hover:scale-110 ease-in-out duration-200" alt="Image" />
                    </div>
                    {/* TEXT */}
                    <Link href="/product/1" className='hover:underline hover:text-blue-800'> 
                    <h3 className='font-light mb-1'>
                        {i.name}
                    </h3></Link>
                    <p className='text-xl font-bold mb-2'>{'$' + (0).toFixed(2)}</p>
                    <div className='flex items-center justify-start'>
                        <button 
                        className='rounded-lg text-sm text-white cursor-pointer py-2 px-3 bg-gradient-to-br from-blue-600 to-blue-900 hover:bg-gradient-to-br hover:from-green-600 hover:to-green-900'>
                        Add to Cart
                        </button>
                    </div>
                </div>
            ))
            }
        </div>
    </section>
    </>
  )
}
