import Image from 'next/image'
import React from 'react'
import SectionContact from '../_components/SectionContact'




export default function page() {
  return (
    <>
    {/* TITLE */}
    <section 
      className="w-[100%] h-[16rem] relative bg-fixed bg-cover text-white bg-blue-800" 
      style={{backgroundImage: `url('/assets/img/06.jpg')`}}>
        <div className='absolute w-[100%] h-[100%] z-10 bg-black opacity-10'></div>
        <div className='w-full h-[100%] absolute z-20 mx-auto flex flex-col items-center justify-center'>
            <h2 className="text-center uppercase text-[2rem] font-extrabold mb-4">OUR SERVICES</h2>
            <hr className="w-[10rem] border-b border-[0.4rem]" />
        </div>
    </section>

     <section className="w-full py-[5rem]">
        <div className="w-[70%] mx-auto flex flex-col items-center justify-center">
            <h2 className="text-center text-[2rem] font-extrabold mb-4">
                WHAT WE DO?
            </h2>
            <hr className="w-[10rem] border-b border-[0.4rem]" />
            <p className="text-center text-[1.6rem] mt-4 mb-6 font-light">
            We provide all-in-one business solutions, including all the supporting services your 
            business may need. One provider to simplify PBX systems and call centre set-ups, network 
            infrastructure design and installation, access control systems and cyber security solutions, 
            plus many more services. One provider, multiple solutions.
            </p>
        </div>
    </section>

    <section className='w-full py-[5rem] bg-gradient-to-br from-gray-50 to-gray-100'>
        <div className='mx-auto w-[92%] grid md:grid-cols-2 grid-cols-1 gap-6'>
            
            {/*  */}
            <div className='bg-white drop-shadow-lg rounded-xl py-8 px-6'>
                <div className='w-[100%] aspect-[7/5] overflow-hidden rounded-xl mb-4'>
                    <Image 
                        width={700} 
                        height={500} 
                        src='/assets/img/7by5/01coms.jpg' alt='Image'/>
                </div>
                <h2 className='text-[1.6rem] font-bold leading-tight mb-2'>
                    Business Communications</h2>
                <p className='font-light text-lg'>
                    At Network Resilience, we offer tailored telecommunications solutions to enhance 
                    your business operations. We provide VoIP systems and on-premise PBX systems for 
                    office and call centre set ups. Enhance your PBX system with Unified Communication 
                    tools that improves collaboration and supports a mobile workforce. Our voice will 
                    cover your business needs for the highest quality calls backed by the highest level 
                    of professional support we also offer maintenance, and accessories, ensuring seamless 
                    communication and connectivity.
                </p>
            </div>
            {/*  */}
            <div className='bg-white drop-shadow-lg rounded-xl py-8 px-6'>
                <div className='w-[100%] aspect-[7/5] overflow-hidden rounded-xl mb-4'>
                    <Image 
                        width={700} 
                        height={500} 
                        src='/assets/img/7by5/02net.jpg' alt='Image'/>
                </div>
                <h2 className='text-[1.6rem] font-bold leading-tight mb-2'>
                    Networking 
                </h2>
                <p className='font-light text-lg'>
                    Network Resilience offers installation and ongoing support for all wired and wireless 
                    networking needs.  Our team can help with network infrastructure design, server room 
                    setups, cable & cabinet installations, network cleanups & audits, as well as switch, 
                    and router configurations. Find out more about our LAN, WAN, cabling and porting services.
                </p>
            </div>
            {/*  */}
            <div className='bg-white drop-shadow-lg rounded-xl py-8 px-6'>
                 <div className='w-[100%] aspect-[7/5] overflow-hidden rounded-xl mb-4'>
                    <Image 
                        width={700} 
                        height={500} 
                        src='/assets/img/7by5/06web.jpg' alt='Image'/>
                </div>
                <h2 className='text-[1.6rem] font-bold leading-tight mb-2'>
                    Web Design 
                </h2>
                <p className='font-light text-lg'>
                    Elevate your online presence with our professional web design services. Our team crafts 
                    visually stunning, user-friendly websites that capture your brand's essence and drive engagement.
                </p>
            </div>
             {/*  */}
            <div className='bg-white drop-shadow-lg rounded-xl py-8 px-6'>
                <div className='w-[100%] aspect-[7/5] overflow-hidden rounded-xl mb-4'>
                    <Image 
                        width={700} 
                        height={500} 
                        src='/assets/img/7by5/05track.jpg' alt='Image'/>
                </div>
                <h2 className='text-[1.6rem] font-bold leading-tight mb-2'>
                    Vehicle Tracking
                </h2>
                <p className='font-light text-lg'>
                    Stay in control of your fleet with our advanced vehicle tracking solutions. Our systems provide 
                    real-time GPS tracking, driver behavior monitoring, and fuel management, helping you optimize 
                    logistics and reduce costs.
                </p>
            </div>
             {/*  */}
            <div className='bg-white drop-shadow-lg rounded-xl py-8 px-6'>
                <div className='w-[100%] aspect-[7/5] overflow-hidden rounded-xl mb-4'>
                    <Image 
                        width={700} 
                        height={500} 
                        src='/assets/img/7by5/04solar.jpg' alt='Image'/>
                </div>
                <h2 className='text-[1.6rem] font-bold leading-tight mb-2'>
                    Solar Energy & Back Up Power Solutions
                </h2>
                <p className='font-light text-lg'>
                    We provide our customers with turnkey energy solutions to ensure uninterrupted operations, reduced 
                    energy costs and to drive environmental accountability. Our energy solutions are tailored to meet 
                    the specific needs of each business, be it for essential back-up power or a full solar system, our 
                    in-house team of energy specialists are well equipped to ensure your business gets the energy solution 
                    it needs.
                </p>
            </div>
             {/*  */}
            <div className='bg-white drop-shadow-lg rounded-xl py-8 px-6'>
                <div className='w-[100%] aspect-[7/5] overflow-hidden rounded-xl mb-4'>
                    <Image 
                        width={700} 
                        height={500} 
                        src='/assets/img/7by5/03secu.jpg' alt='Image'/>
                </div>
                <h2 className='text-[1.6rem] font-bold leading-tight mb-2'>
                    Business Security
                </h2>
                <p className='font-light text-lg'>
                    Equip your business with CCTV video surveillance, biometric access control systems  and alarm systems to 
                    reduce the risk of theft and increase health & safety. Prevent cyber criminals from gaining unauthorized 
                    access to your private network with our cyber security solutions with our firewall security systems to ensure 
                    protection of your data.
                </p>
            </div>
           
        </div>
    </section>

    <SectionContact />

    </>
  )
}
