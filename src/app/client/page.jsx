import React from 'react'
import { FaUser } from "react-icons/fa6";
import { MdOutlineDataSaverOff } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { IoBriefcaseOutline } from "react-icons/io5";
import { CgTrack } from "react-icons/cg";
import { TbPlugConnected } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import Link from 'next/link';



export default function page() {
  return (
    <>
    {/* BREADCRUMBS */}
    <section className='w-full border-y border-gray-200 py-1'>
      <ul className='mx-auto w-[92%] flex items-center justify-start gap-2 text-sm'>
        <Link href='/'> <li>Home</li> </Link>
        <li><FaAngleRight /></li>
        <Link href='/client'><li>Client</li></Link>
      </ul>
    </section>

    <section className='py-[5rem]'>
      <div className='mx-auto w-[92%]'>
        <h3 className='text-[2.5rem] font-light mb-3'>Client Dashboard</h3>
        <hr className='border-b border-gray-200' />
        <div className='w-[100%] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-4'>
          {/* PROFILE */}
          <Link href='/client/profile'>
          <div className='group cursor-pointer bg-white rounded-2xl drop-shadow-md py-8 px-6 flex items-center justify-start gap-8 hover:drop-shadow-xl'>
            <div className='overflow-hidden bg-gradient-to-br p-5 from-red-400 to-red-900 flex items-center justify-center rounded-full'>
              <FaUser className='text-[2rem] text-white group-hover:scale-110 duration-300 ease-in-out transition-all' />
            </div>
          <h2 className='text-[1.8rem]'>Profile</h2>
          </div>
          </Link>
          {/* ORDER */}
          <Link href='/client/order'>
          <div className='group cursor-pointer bg-white rounded-2xl drop-shadow-md py-8 px-6 flex items-center justify-start gap-8 hover:drop-shadow-xl'>
            <div className='overflow-hidden bg-gradient-to-br p-5 from-violet-400 to-violet-900 flex items-center justify-center rounded-full'>
              <CgTrack className='text-[2rem] text-white group-hover:scale-110 duration-300 ease-in-out transition-all' />
            </div>
          <h2 className='text-[1.8rem]'>Orders</h2>
          </div>
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}
