import React from 'react'

export default function page() {
  return (
    <>
     {/* TITLE */}
    <section 
      className="w-[100%] h-[15rem] relative bg-fixed bg-cover text-white bg-blue-800" 
      style={{backgroundImage: `url('/assets/img/02.jpg')`}}>
        <div className='absolute w-[100%] h-[100%] z-10 bg-black opacity-10'></div>
        <div className='absolute z-20 mx-auto h-[100%] w-[92%] flex flex-col items-center justify-center'>
            <h2 className="text-center  text-[2rem] font-extrabold mb-4">WHO WE ARE?</h2>
            <hr className="w-[10rem] border-b border-[0.4rem]" />
        </div>
      </section>
    </>
  )
}
