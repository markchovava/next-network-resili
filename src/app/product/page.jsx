import React from 'react'
import ComingSoon from '../_components/ComingSoon'
import SectionContact from '../_components/SectionContact'
import { IoSearchOutline } from 'react-icons/io5'

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

      <ComingSoon />
      
      <SectionContact />
    </>
  )
}
