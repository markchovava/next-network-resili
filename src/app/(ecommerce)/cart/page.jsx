import React from 'react'

export default function page() {
  return (
    <>
    {/* TITLE */}
    <section 
      className="w-[100%] h-[16rem] relative bg-fixed bg-cover text-white bg-blue-800" 
      style={{backgroundImage: `url('/assets/img/02.jpg')`}}>
        <div className='absolute w-[100%] h-[100%] z-10 bg-black opacity-10'></div>
        <div className='absolute w-full z-20 mx-auto h-[100%] flex flex-col items-center justify-center'>
            <h2 className="text-center uppercase text-[2.5rem] font-extrabold mb-4">Shopping Cart</h2>
            <hr className="w-[10rem] border-b border-[0.4rem]" />
        </div>
    </section>

    <section className='w-full py-[5rem]'>
      <div className='w-[92%] mx-auto'>
        <h3 className='text-[1.8rem] font-light mb-3'>Your Cart</h3>

        <div className='w-[100%] border border-gray-300 flex items-center justify-start'>
          <div className='w-[40%] py-2 px-3 border-r border-gray-300'>Details</div>
          <div className='w-[30%] py-2 px-3 border-r border-gray-300'>Quantity</div>
          <div className='w-[30%] py-2 px-3'>Total</div>
        </div>
      </div>
    </section>
    </>
  )
}
