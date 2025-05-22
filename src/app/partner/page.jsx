import React from 'react'
import SectionContact from '../_components/SectionContact'
import Image from 'next/image'
import { baseURL } from '@/api/BaseURL'
import { partnerListAllAction } from '@/actions/PartnerActions'
import { noImage } from '@/data/ImagesData'



export default async function page() {
  const [partnerData, ] = await Promise.all([partnerListAllAction(), ])


  return (
    <>
    {/* TITLE */}
    <section 
      className="w-[100%] h-[15rem] relative bg-fixed bg-cover text-white bg-blue-800" 
      style={{backgroundImage: `url('/assets/img/01.jpg')`}}>
        <div className='absolute w-[100%] h-[100%] z-10 bg-black opacity-10'></div>
        <div className='absolute w-full z-20 mx-auto h-[100%] flex flex-col items-center justify-center'>
            <h2 className="text-center  text-[2.5rem] uppercase font-extrabold mb-4">Our Partners?</h2>
            <hr className="w-[10rem] border-b border-[0.4rem]" />
        </div>
    </section>

   {/* <ComingSoon /> */}

   <section className='w-full pt-[4rem] pb-[5rem]'>
    <div className='mx-auto w-[92%] grid grid-cols-3 gap-8'>
      {partnerData.data.map((i, key) => (
        <div key={key} className='cursor-pointer bg-white drop-shadow-lg rounded-2xl overflow-hidden'>
          <Image 
            src={i?.image ? baseURL + i?.image : baseURL + noImage} 
            alt={i?.name} 
            width={800} 
            height={300} 
            className='hover:scale-110 transition-all duration-300 ease-in-out' />
        </div>
      ))}

    </div>
   </section>

   <SectionContact />

    </>
  )
}
