import Link from 'next/link'
import React from 'react'



export default function SectionContact() {
  return (
    <>
    <section 
      className="w-[100%] h-[35rem] lg:h-[25rem] relative bg-fixed bg-cover bg-green-800" 
      style={{backgroundImage: `url('/assets/img/01.jpg')`,}}>
        <div className="absolute z-10 w-[100%] h-[100%] bg-black opacity-30">
        </div>
        <div className="py-[5rem] absolute z-20 w-full text-white mx-auto flex flex-col items-center justify-center ">
            <h2 className="text-center text-[2rem] font-extrabold uppercase mb-4">
              Engage Us For Free Consultation.
            </h2>
            <hr className="w-[10rem] border-white border-b border-[0.4rem]" />

            <p className="py-6 text-center text-[1.4rem] w-[60%]">
              Our business is to accelerate yours by equiping you with all you need to run smarter.
            </p>

            <Link href="#">
              <button className="uppercase px-12 py-4 text-lg rounded-2xl bg-gradient-to-br from-green-500 to-blue-900 text-white ease-in-out duration-300 transition-all hover:drop-shadow-lg hover:scale-110 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-950">
                Call Us Now
              </button>
            </Link>
        </div>
    </section>
    </>
  )
}
