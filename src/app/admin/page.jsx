import React from 'react'
import { FaUser } from "react-icons/fa6";
import { MdOutlineDataSaverOff } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { IoBriefcaseOutline } from "react-icons/io5";
import { CgTrack } from "react-icons/cg";
import { TbPlugConnected } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";



export default function page() {
  return (
    <>
    <section className='py-[5rem] border-t border-gray-300'>
      <div className='mx-auto w-[92%]'>
        <h3 className='text-[1.8rem] font-light mb-3'>Admin Dashboard</h3>
        <hr className='border-b border-gray-200' />
        <div className='w-[100%] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-4'>
          {/*  */}
          <div className='group cursor-pointer bg-white rounded-2xl drop-shadow-md py-8 px-6 flex items-center justify-start gap-8 hover:drop-shadow-xl'>
            <div className='overflow-hidden bg-gradient-to-br p-5 from-green-400 to-green-900 flex items-center justify-center rounded-full'>
              <FaUser className='text-[2rem] text-white group-hover:scale-110 duration-300 ease-in-out transition-all' />
            </div>
          <h2 className='text-[1.8rem]'>Users</h2>
          </div>
          {/*  */}
          <div className='group cursor-pointer bg-white rounded-2xl drop-shadow-md py-8 px-6 flex items-center justify-start gap-8 hover:drop-shadow-xl'>
            <div className='overflow-hidden bg-gradient-to-br p-5 from-cyan-400 to-cyan-900 flex items-center justify-center rounded-full'>
              <MdOutlineDataSaverOff className='text-[2rem] text-white group-hover:scale-110 duration-300 ease-in-out transition-all' />
            </div>
          <h2 className='text-[1.8rem]'>Products</h2>
          </div>
          {/*  */}
          <div className='group cursor-pointer bg-white rounded-2xl drop-shadow-md py-8 px-6 flex items-center justify-start gap-8 hover:drop-shadow-xl'>
            <div className='overflow-hidden bg-gradient-to-br p-5 from-blue-400 to-blue-900 flex items-center justify-center rounded-full'>
              <MdOutlineCategory className='text-[2rem] text-white group-hover:scale-110 duration-300 ease-in-out transition-all' />
            </div>
          <h2 className='text-[1.8rem]'>Categories</h2>
          </div>
          {/*  */}
          <div className='group cursor-pointer bg-white rounded-2xl drop-shadow-md py-8 px-6 flex items-center justify-start gap-8 hover:drop-shadow-xl'>
            <div className='overflow-hidden bg-gradient-to-br p-5 from-pink-400 to-pink-900 flex items-center justify-center rounded-full'>
              <IoBriefcaseOutline className='text-[2rem] text-white group-hover:scale-110 duration-300 ease-in-out transition-all' />
            </div>
          <h2 className='text-[1.8rem]'>Brands</h2>
          </div>
          {/*  */}
          <div className='group cursor-pointer bg-white rounded-2xl drop-shadow-md py-8 px-6 flex items-center justify-start gap-8 hover:drop-shadow-xl'>
            <div className='overflow-hidden bg-gradient-to-br p-5 from-violet-400 to-violet-900 flex items-center justify-center rounded-full'>
              <CgTrack className='text-[2rem] text-white group-hover:scale-110 duration-300 ease-in-out transition-all' />
            </div>
          <h2 className='text-[1.8rem]'>Orders</h2>
          </div>
          {/*  */}
          <div className='group cursor-pointer bg-white rounded-2xl drop-shadow-md py-8 px-6 flex items-center justify-start gap-8 hover:drop-shadow-xl'>
            <div className='overflow-hidden bg-gradient-to-br p-5 from-amber-400 to-amber-900 flex items-center justify-center rounded-full'>
              <TbPlugConnected className='text-[2rem] text-white group-hover:scale-110 duration-300 ease-in-out transition-all' />
            </div>
          <h2 className='text-[1.8rem]'>Partners</h2>
          </div>
          {/*  */}
          <div className='group cursor-pointer bg-white rounded-2xl drop-shadow-md py-8 px-6 flex items-center justify-start gap-8 hover:drop-shadow-xl'>
            <div className='overflow-hidden bg-gradient-to-br p-5 from-gray-400 to-gray-900 flex items-center justify-center rounded-full'>
              <IoMdSettings className='text-[2rem] text-white group-hover:scale-110 duration-300 ease-in-out transition-all' />
            </div>
          <h2 className='text-[1.8rem]'>Partners</h2>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
