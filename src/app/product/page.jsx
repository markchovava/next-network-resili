import React from 'react'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import SectionContact from '../_components/SectionContact'
import { IoSearchOutline } from 'react-icons/io5'
import Link from 'next/link'

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

      <section className='w-full bg-gray-50 drop-shadow py-[3rem]'>
        <div className='mx-auto w-[92%] border border-gray-300 flex lg:flex-row flex-col items-center justify-start'>
          <div className='lg:w-[60%] w-[100%] lg:border-r lg:border-b-0 border-b border-gray-300'>
            <input 
            type='text' 
            placeholder='Search By Name.' 
            className='w-[100%] outline-none py-4 px-4' />
          </div>
          <div className='lg:w-[15%] w-[100%] h-[100%] lg:border-r lg:border-b-0 border-b border-gray-300'>
            <select className='w-[100%] h-[100%] outline-none py-4 px-4'>
              <option>Select Brand</option>
              <option value="HP">HP</option>
              <option value="Dell">Dell</option>
              <option value="Huawei">Huawei</option>
            </select>
          </div>
          <div className='lg:w-[15%] w-[100%] h-[100%] lg:border-r lg:border-b-0 border-b border-gray-300'>
            <select className='w-[100%] h-[100%] outline-none py-4 px-4'>
              <option>Select Category</option>
              <option value="HP">Routers</option>
              <option value="Dell">Phones</option>
              <option value="Huawei">Computer</option>
              <option value="Huawei">CCTV</option>
            </select>
          </div>
          <button className='group cursor-pointer text-center lg:w-[10%] w-[100%] h-[100%] flex items-center justify-center p-4'>
            <IoSearchOutline className='text-[1.3rem] text-gray-600 group-hover:text-gray-950 group-hover:scale-110 transition-all ease-in-out duration-300' />
          </button>
        </div>
      </section>

      {/*  */}
      <section className='w-full'>
        <div className='mx-auto w-[92%] py-[5rem] flex lg:flex-row flex-col justify-start items-start gap-6'>
          {/* LEFT */}
          <div className='lg:w-[25%] w-[100%] bg-gray-50 p-6 drop-shadow-lg'>
            {/* CATEGORY */}
            <h2 className='text-[1.4rem] font-bold mb-2'>Categories</h2>
            {/* LIST */}
            <ul className='font-light ml-3'>
              <Link href="#"> 
              <li className='mb-1 transition-all hover:translate-x-2 ease-in-out duration-200'>
                Routers
              </li> </Link>
              <Link href="#"> 
              <li 
                className='mb-1 transition-all hover:translate-x-2 ease-in-out duration-200'>
                Phone
              </li> </Link>
              <Link href="#"> 
              <li 
                className='mb-1 transition-all hover:translate-x-2 ease-in-out duration-200'>
                CCTVs 
              </li> </Link>
              <Link href="#"> 
              <li 
                className='mb-1 transition-all hover:translate-x-2 ease-in-out duration-200'>
                Laptops 
              </li> </Link>
            </ul>

            <hr className='border-b border-gray-300 mt-8 mb-4' />
            {/* BRANDS */}
            <h2 className='text-[1.4rem] font-bold mb-2'>Brands</h2>
            {/* LIST */}
            <ul className='font-light ml-3'>
              <Link href="#"> 
              <li 
                className='mb-1 transition-all hover:translate-x-2 ease-in-out duration-200'>
                Dell
              </li> </Link>
              <Link href="#"> 
              <li 
                className='mb-1 transition-all hover:translate-x-2 ease-in-out duration-200'>
                HP
              </li> </Link>
              <Link href="#"> 
              <li 
                className='mb-1 transition-all hover:translate-x-2 ease-in-out duration-200'>
                Apple
              </li> </Link>
              <Link href="#"> 
              <li 
                className='mb-1 transition-all hover:translate-x-2 ease-in-out duration-200'>
                Cisco
              </li> </Link>
            </ul>
          </div>
          {/* RIGHT */}
          <div className='lg:w-[75%] w-[100%]'>
            <section className='w-[100%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
              {/* COL */}
              {[...Array(9)].map(i => (
                <div key={i} className='bg-white rounded-lg drop-shadow-md hover:drop-shadow-xl p-4'>
                  {/* IMAGE */}
                  <div className='w-[100%] aspect-[7/5] bg-gray-100 rounded-lg mb-3'></div>
                  {/* TEXT */}
                  <Link href="#" className='hover:underline hover:text-blue-800'> 
                  <h3 className='font-light mb-1'
                  >Product 1
                  </h3></Link>
                  <p className='text-xl font-bold mb-2'>$23.00</p>
                  <div className='flex items-center justify-start'>
                    <button 
                    className='rounded-lg text-sm text-white cursor-pointer py-2 px-3 bg-gradient-to-br from-blue-600 to-blue-900 hover:bg-gradient-to-br hover:from-green-600 hover:to-green-900'>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </section>


            <section className='flex items-center justify-end gap-4 mt-[4rem]'>
              <button 
                className='group px-4 py-2 rounded-lg border bg-white text-blue-800 border-blue-800 hover:drop-shadow-lg flex items-center justify-center gap-1'>
                <FaArrowLeftLong className='group-hover:-translate-x-1 transition-all ease-in-out duration-200' />
                Previous
              </button>
              <button
                className='group px-4 py-2 rounded-lg border text-blue-800 bg-white border-blue-800 hover:drop-shadow-lg flex items-center justify-center gap-1'>
                Next
                <FaArrowRightLong className='group-hover:translate-x-1 transition-all ease-in-out duration-200' />
              </button>
            </section>


          </div>

        </div>
      </section>

      
      <SectionContact />



    </>
  )
}
