import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'



export default function Footer() {
  return (
    <>
    <section className='w-[100%] bg-gradient-to-br from-blue-800 to-slate-950 text-gray-100 font-light pt-[5rem] '>
        <div className='pb-[2rem] lg:w-[94%] w-[90%] mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg;gap-6 gap-8 '>
            <section className='w-[100%]'>
                <Link href='/'>
                    <div className='lg:mx-0 mx-auto lg:w-[70%] w-[40%] overflow-hidden'>
                       <h2 className='text-4xl'>
                        NETWORK <br />
                        <span className='text-blue-300'>RESILIENCE</span>
                        </h2>
                       
                    </div>
                </Link>
            </section>

            <section className='w-[100%]'>
                <ul>
                    <Link href='/about'>
                        <li className='ease-linear transition-all duration-200 uppercase font-semibold hover:underline mb-3'>
                            About Us
                        </li>
                    </Link>
                    <Link href='/service'>
                        <li className='hover:underline mb-2 ease-linear transition-all duration-200'>
                            Our Services
                        </li>
                    </Link>
                    <Link href='/product'>
                        <li className='hover:underline mb-2 ease-linear transition-all duration-200'>
                            Our Products
                        </li>
                    </Link>
                    <Link href='/partner'>
                        <li className='hover:underline mb-2 ease-linear transition-all duration-200'>
                            Our Partners
                        </li>
                    </Link>
                    <Link href='/contact'>
                        <li className='hover:underline mb-2 ease-linear transition-all duration-200'>
                        Contact Us
                        </li>
                    </Link>                   
                   
                </ul>
            </section>

 
            <section className=''>
                <div className='uppercase font-semibold mb-3'>
                    Social Media Links
                </div>
                <div className='w-[100%] flex items-center justify-start gap-3 text-gray-100'>
                    <a href="https://www.facebook.com/networkresilience" target="_blank" className="hover:scale-110 transition-all ease-linear">
                        <FaFacebook className="text-[1.5rem]" />
                    </a>
                    <a href="https://x.com/NetwkResilience" target="_blank" className="hover:scale-110 transition-all ease-linear">
                        <FaXTwitter className="text-[1.5rem]" />
                    </a>
                    <a href="https://www.linkedin.com/company/networkresilience" target="_blank" className="hover:scale-110 transition-all ease-linear">
                        <FaLinkedin className="text-[1.5rem]" />
                    </a>
                    <a href="https://www.instagram.com/networkresilience/" target="_blank" className="hover:scale-110 transition-all ease-linear">
                        <FaInstagram className="text-[1.5rem]" />
                    </a>
                </div>
            </section>


            

             <section className=''>
                <div className='mb-4'>
                    <p className='mb-1'>Call:</p>
                    <h2 className='lg:text-[1.6rem] font-bold'>
                        +263 868 800 8486
                    </h2>
                </div>
                <div className='mb-4'>
                   <p className=''>Email</p>
                    <h2 className='text-[1.5rem]'>info@networkresilience.co.zw</h2>
                </div>
            </section>

        </div>

        <div className='lg:w-[94%] w-[90%] mx-auto pb-[3rem] text-gray-100 flex lg:flex-row flex-col lg:items-center items-start lg:justify-between justify-start gap-6 font-light text-sm'>
            <ul className='flex lg:flex-row flex-col lg:items-center justify-start gap-3'>
                <Link href='#' className='hover:underline ease-linear transition-all duration-150'>
                    <li>Privacy</li>
                </Link>
                <li className='hidden lg:inline'>|</li>
                <Link href='#' className='hover:underline ease-linear transition-all duration-150'>
                    <li>Terms of Use</li>
                </Link>
                <li className='hidden lg:inline'>|</li>
                <Link href='#' className='hover:underline ease-linear transition-all duration-150'>
                    <li>Accessibility</li>
                </Link>
                <li className='hidden lg:inline'>|</li>
                <Link href='#' className='hover:underline ease-linear transition-all duration-150'>
                    <li>Cookies Policy</li>
                </Link>
                <li className='hidden lg:inline'>|</li>
                <Link href='#' className='hover:underline ease-linear transition-all duration-150'>
                    <li>Regulatory Disclosures</li>
                </Link>
            </ul>
            <p className='leading-tight'>
                &copy; {new Date().getFullYear()} Network Resilience & Co. All rights reserved.
            </p>
        </div>

    </section>
    </>
  )
}





