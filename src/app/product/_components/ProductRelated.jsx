"use client"
import { baseURL } from '@/api/BaseURL'
import { noImage } from '@/data/ImagesData'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


const productData = [
  {id: 1, name: "Communication Product", img: '/assets/img/7by5/01coms.jpg', price: 0},
  {id: 2, name: "Network Product", img: '/assets/img/7by5/02net.jpg', price: 0},
  {id: 3, name: "Security Product", img: '/assets/img/7by5/03secu.jpg',  price: 0},
  {id: 4, name: "Solar Product", img: '/assets/img/7by5/04solar.jpg', price: 0}
]

export default function ProductRelated({ dbData }) {
  const [data, setData] = useState(dbData?.data);
  
    
  return (
    <>
    {data &&
    <section className='w-full pb-[5rem]'>
        <div className='mx-auto w-[92%]'>
            <h2 className='text-3xl'>Related Products</h2>

            <div className='w-[100%] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>
                {/* COL */}
                { data.map(i => (
                <div key={i.id} className='group bg-white rounded-lg drop-shadow-md hover:drop-shadow-xl p-4'>
                    {/* IMAGE */}
                    <div className='w-[100%] aspect-[7/5] bg-gray-100 overflow-hidden rounded-lg mb-3'>
                    <Image 
                    src={ i?.product_images?.length > 0 
                        ? baseURL + i?.product_images[0]?.image 
                        : baseURL + noImage }
                    width={700} 
                    height={500} 
                    className="group-hover:scale-110 transition-all ease-in-out duration-200 object-cover"
                    alt='Image' />
                    </div>
                    {/* TEXT */}
                    <Link href={`/product/${i?.id}`} className='hover:underline hover:text-blue-800'> 
                    <h3 className='font-light mb-1'>
                    {i.name}
                    </h3></Link>
                    <p className='text-xl font-bold mb-2'>
                      {i?.price ? '$' + i?.price : 'Not Added'}
                    </p>
                    <div className='flex items-center justify-start'>
                    <Link href={`/product/${i?.id}`}
                      className='rounded-lg text-sm text-white cursor-pointer py-2 px-3 bg-gradient-to-br from-blue-600 to-blue-900 hover:bg-gradient-to-br hover:from-green-600 hover:to-green-900'>
                      View More
                    </Link>
                    </div>
                </div>
                )) }
            </div>

        </div>
        

    </section>
    }
    </>
  )
}
