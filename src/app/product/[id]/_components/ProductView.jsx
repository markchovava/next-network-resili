"use client"
import React, { useState } from 'react'


export default function ProductView() {
  const [isTab, setIsTab] = useState({
    one: true, 
    two: false
  })

  return (
    <>
    <section className='w-full py-[5rem]'>
      <div className='mx-auto w-[92%] flex items-start justify-start gap-8'>
        {/*  */}
        <div className='w-[60%]'>
          <div className='mb-6 cursor-pointer w-[100%] aspect-[5/3] overflow-hidden rounded-xl bg-gray-100 drop-shadow-md'></div>
          <div className='w-[100%] grid grid-cols-5 gap-6'>
            <div className='aspect-[7/5] cursor-pointer bg-gray-100 drop-shadow'></div>
            <div className='aspect-[7/5] cursor-pointer bg-gray-100 drop-shadow'></div>
            <div className='aspect-[7/5] cursor-pointer bg-gray-100 drop-shadow'></div>
            <div className='aspect-[7/5] cursor-pointer bg-gray-100 drop-shadow'></div>
          </div>
        </div>
        {/* Information */}
        <div className='w-[40%] pt-[2rem]'>
          <h2 className='text-[2.2rem] mb-5'>Product Name</h2>
          {/*  */}
          <div className='w-[100%] mb-4'>
            <p className='font-light leading-tight mb-1'>Brand:</p>
            <h3 className='text-2xl'>Dell</h3>
          </div>
          {/*  */}
          <div className='w-[100%] mb-4'>
            <p className='font-light leading-tight mb-1'>Category:</p>
            <h3 className='text-2xl'>CCTVs, Computers</h3>
          </div>
          {/*  */}
          <div className='w-[100%] mb-4'>
            <p className='font-light leading-tight mb-1'>Quantity:</p>
            <input 
              type='number' 
              min={1} placeholder='1' 
              className='outline-none p-3 border border-gray-300' />
          </div>
          {/*  */}
          <div className='w-[100%] mt-4'>
            <button className='bg__one rounded-full text-white px-12 py-4'>
              Add to Cart
            </button>
          </div>

        </div>
      </div>

      <section className='mx-auto w-[92%] mt-[2rem] '>
        <div className='w-[100%] flex items-center justify-start'>
          <div 
            onClick={() => setIsTab({one: true})} 
            className={`${isTab.one ? 'border-t border-x' : 'border'} cursor-pointer px-6 py-3 border-gray-300`}>
              Description
          </div>
          <div 
            onClick={() => setIsTab({two: true})} 
            className={`${isTab.two ? 'border-t' : 'border-y'} cursor-pointer px-6 py-3 border-r border-gray-300`}>
              Specifications
          </div>
        </div>
        {/* DESCRIPTION */}
        {isTab.one &&
        <section className='mx-auto w-[100%] py-8 px-6 bg-white drop-shadow-lg'>
          <h2 className='mb-2 font-medium text-lg'>Description</h2>
          <p className='font-light mb-1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus nisi at adipisci, 
            quisquam laboriosam odit earum cum iste ipsum voluptas repellendus quaerat odio quo omnis 
            sit aspernatur corrupti a, provident laborum qui quibusdam, deserunt tempora ab? Laudantium, 
            placeat tempora! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus nisi 
            at adipisci, quisquam laboriosam odit earum cum iste ipsum voluptas repellendus quaerat odio quo 
            omnis sit aspernatur corrupti a, provident laborum qui quibusdam, deserunt tempora ab? Laudantium, 
            placeat tempora!
          </p>
          <p className='font-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus nisi at adipisci, 
            quisquam laboriosam odit earum cum iste ipsum voluptas repellendus quaerat odio quo omnis 
            sit aspernatur corrupti a, provident laborum qui quibusdam, deserunt tempora ab? Laudantium, 
            placeat tempora!
          </p>
        </section>
        }
        {/* SPECIFICATIONS */}
        {isTab.two &&
        <section className='mx-auto w-[100%%] py-8 px-6 bg-white drop-shadow-lg'>
          <div className='w-[100%] flex items-center justify-start border border-gray-300 font-medium'>
            <div className='w-[50%] py-3 px-4 border-r border-gray-300'>Name</div>
            <div className='w-[50%] py-3 px-4'>Specifications</div>
          </div>
          <div className='w-[100%] flex items-center justify-start border border-gray-300'>
            <div className='w-[50%] py-3 px-4 border-r border-gray-300'>Measurement</div>
            <div className='w-[50%] py-3 px-4'>400cm by 30cm</div>
          </div>
        </section>
        }
      </section>



 
    </section>
    </>
  )
}
