import React from 'react'
import ContactEdit from './_components/ContactEdit'

export default function page() {
  return (
    <>
     {/* TITLE */}
    <section 
      className="w-[100%] h-[15rem] relative bg-fixed bg-cover text-white bg-blue-800" 
      style={{backgroundImage: `url('/assets/img/05.jpg')`}}>
        <div className='absolute w-[100%] h-[100%] z-10 bg-black opacity-10'></div>
        <div className='absolute z-20 mx-auto h-[100%] w-full flex flex-col items-center justify-center'>
            <h2 className="text-center text-[2.5rem] font-extrabold mb-4">CONTACT US</h2>
            <hr className="w-[10rem] border-b border-[0.4rem]" />
        </div>
    </section>

    <ContactEdit />      
    </>
  )
}
