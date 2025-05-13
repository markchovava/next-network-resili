import React from 'react'

export default function page() {
  return (
    <>
    {/* TITLE */}
    <section 
      className="w-[100%] h-[16rem] relative bg-fixed bg-cover text-white bg-blue-800" 
      style={{backgroundImage: `url('/assets/img/04.jpg')`}}>
        <div className='absolute w-[100%] h-[100%] z-10 bg-black opacity-10'></div>
        <div className='absolute w-full z-20 mx-auto h-[100%] flex flex-col items-center justify-center'>
            <h2 className="text-center uppercase text-[2.5rem] font-extrabold mb-4">Checkout</h2>
            <hr className="w-[10rem] border-b border-[0.4rem]" />
        </div>
    </section>


    <section className='w-full py-[5rem]'>
      <div className='mx-auto w-[92%] flex lg:flex-row flex-col items-start justify-start gap-8'>
        <div className='lg:w-[65%] w-[100%]'>
          <h2 className='font-light text-[2rem] mb-1'>Customer Information</h2>
          <hr className='border-b border-gray-300' />
          {/* FULL NAME */}
          <div className='w-[100%] mb-4 mt-3'>
            <p className='font-light mb-1'>Full Name:</p>
            <input type='text' placeholder='Full Name' className='w-[100%] p-3 outline-none border border-gray-300' />
          </div>
          {/* ADDRESS */}
          <div className='w-[100%] mb-4'>
            <p className='font-light mb-1'>Address:</p>
            <input 
              type='text' 
              placeholder='Enter Address' 
              className='w-[100%] p-3 outline-none border border-gray-300' />
          </div>
          {/*  */}
           <div className='w-[100%] mb-4 grid lg:grid-cols-2 grid-cols-1 gap-4'>
              <div className='w-[100%]'>
                <p className='font-light mb-1'>Email:</p>
                <input 
                  type='text' 
                  placeholder='Enter Email' 
                  className='w-[100%] p-3 outline-none border border-gray-300' />
              </div>
              <div className='w-[100%]'>
                <p className='font-light mb-1'>Phone:</p>
                <input 
                  type='text' 
                  placeholder='Enter Phone' 
                  className='w-[100%] p-3 outline-none border border-gray-300' />
              </div>
           </div>
           {/* NOTES */}
          <div className='w-[100%] mb-4'>
            <p className='font-light mb-1'>Notes:</p>
            <textarea
              type='text' 
              placeholder='Enter Notes' 
              className='w-[100%] h-[10rem] p-3 outline-none border border-gray-300'></textarea>
          </div>


        </div>
        <div className='lg:w-[35%] w-[100%] bg-gray-100 drop-shadow-md py-8 px-6'>
          <h2 className='font-light text-[1.8rem] mb-1'>Transaction Details</h2>
          <hr className='border-b border-gray-300' />
          <section className='w-[100%] border border-gray-300 flex justify-start items-center mt-2 font-bold'>
            <div className='w-[55%] p-2 border-r border-gray-300'>Details</div>
            <div className='w-[45%] p-2'>Total</div>
          </section>

           <section className='w-[100%] border border-gray-300 flex justify-start items-center font-light'>
            <div className='w-[55%] p-2 border-r border-gray-300'>
              <p>Product Name</p>
              <p className='text-sm'>Quantity: 200</p>
            </div>
            <div className='w-[45%] p-2'>$12.00</div>
          </section>
           <section className='w-[100%] border border-gray-300 flex justify-start items-center font-light'>
            <div className='w-[55%] p-2 border-r border-gray-300'>
              <p>Product Name</p>
              <p className='text-sm'>Quantity: 200</p>
            </div>
            <div className='w-[45%] p-2'>$12.00</div>
          </section>
           <section className='w-[100%] flex justify-start items-center mb-4'>
            <div className='w-[55%] p-2 '>
              <p className='text-end font-semibold'>Total</p>
            </div>
            <div className='w-[45%] font-semibold p-2 border border-gray-300 bg-blue-800 text-white'>
              $12.00</div>
          </section>

          <div className='w-[100%] flex items-center justify-start gap-2 font-light mb-4'>
            <input type='radio' name='is_agree' className='' />
            I accept the terms and conditions outlined by site.
          </div>

          <div className=''>
            <button className='mx-auto w-[100%] ease-in-out duration-300 transition-all cursor-pointer rounded-full py-4 text-white bg-gradient-to-br from-green-500 to-blue-900 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-900'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
