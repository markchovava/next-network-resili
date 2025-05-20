"use client"
import { reactToastifyDark } from '@/_utils/reactToastify'
import { cartStoreAction } from '@/actions/CartActions'
import { baseURL } from '@/api/BaseURL'
import { setCartCookie } from '@/cookies/CookieCartClient'
import { noImage } from '@/data/ImagesData'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'


const imagesData = [
  {id: 1, img: '/assets/img/7by5/01coms.jpg'},
  {id: 2, img: '/assets/img/7by5/02net.jpg'},
  {id: 3, img: '/assets/img/7by5/03secu.jpg',},
  {id: 4, img: '/assets/img/7by5/04solar.jpg'},
]



export default function ProductView({id, dbData, productCategoryData, cartToken}) {
  const router = useRouter();
  const [data, setData] = useState(dbData?.data)
  const [input, setInput] = useState({quantity: ''})
  const [pcData, setPcData] = useState(productCategoryData.data)
  const [images, setImages] = useState(dbData?.images);
  const [specs, setSpecs] = useState(dbData?.specs);
  const [errMsg, setErrMsg] = useState({quantity: ''})
  const [isSubmit, setIsSubmit] = useState(false)
  const [isActive, setIsActive] = useState(dbData?.product_images?.length > 0 
                                  ? baseURL + dbData?.product_images[0]?.image 
                                  : baseURL + noImage)
  const [isTab, setIsTab] = useState({
    one: true, 
    two: false
  })


  async function postData(){
    if(!input?.quantity){
      const message = "Quantity is requred.";
      setErrMsg({quantity: message})
      setIsSubmit(false)
      toast.warn(message, reactToastifyDark);
      return
    }
    const formData = {
      cart_id: cartToken?.value ? Number(cartToken?.value) : '',
      product_id: data?.id,
      price: data?.price,
      quantity: input?.quantity,
      total: Number(input?.quantity) * data?.price,
    }
    try{
        const res = await cartStoreAction(formData)
        if(res?.status == 1) {
            toast.success(res?.message, reactToastifyDark);
            setErrMsg({});
            setIsSubmit(false);
            setCartCookie(res?.data?.id)
            router.push('/cart')
            return
        }
        const message = "Something went wrong, try again.";
        toast.warn(message, reactToastifyDark);
        setIsSubmit(false);
  
    } catch (error) {
        console.error(`Error: ${error}`);
        setIsSubmit(false); 
    }
  }


  return (
    <>
    <section className='w-full py-[5rem]'>
      <div className='mx-auto w-[92%] flex lg:flex-row flex-col items-start justify-start gap-8'>
        {/*  */}
        <div className='lg:w-[60%] w-[100%]'>
          <div className='group mb-6 cursor-pointer w-[100%] aspect-[5/3] overflow-hidden rounded-xl bg-gray-100 drop-shadow-md'>
            <Image 
              src={isActive} 
              width={1050} 
              height={750} 
              className="group-hover:scale-110 transition-all ease-in-out duration-200 object-cover"
              alt='Image' />
          </div>
          {images.length > 0 &&
          <div className='w-[100%] grid grid-cols-5 gap-6'>
            {images.map(i => 
              <div 
                onClick={() => setIsActive(baseURL + i?.image)} 
                className='group aspect-[7/5] rounded-lg cursor-pointer bg-gray-100 drop-shadow overflow-hidden'>
                <Image 
                  src={i.img} 
                  width={350} 
                  height={250} 
                  className="group-hover:scale-110 transition-all ease-in-out duration-200 object-cover"
                  alt='Image' />
              </div>
            )}
          </div>
          }
        </div>
        {/* Information */}
        <div className='lg:w-[40%] w-[100%] pt-[2rem]'>
          <h2 className='text-[2.2rem] mb-5'>{data?.name}</h2>
          {/* STATUS */}
          <div className='w-[100%] mb-6'>
            <h3 className='text-2xl text-blue-800'>
               <span className='p-2 rounded-lg bg-gradient-to-br text-white from-red-500 to-blue-800'>
                {data?.status}
               </span>
              </h3>
          </div>
           {/* BRAND */}
          <div className='w-[100%] mb-4'>
            <p className='font-light leading-tight mb-1'>Price:</p>
            <h3 className='text-4xl font-bold'>
              {data?.price ? '$' + data?.price : 'Not Added'}
            </h3>
          </div>
          {/* BRAND */}
          { data?.brand?.name &&
          <div className='w-[100%] mb-4'>
            <p className='font-light leading-tight mb-1'>Brand:</p>
            <h3 className='text-2xl'>
              {data?.brand?.name}
            </h3>
          </div>
          }
          {/*  */}
          <div className='w-[100%] mb-4'>
            <p className='font-light leading-tight mb-1'>Category:</p>
            <h3 className='text-2xl'>
              { pcData.map((i, key) => (
                key < pcData.length - 1 ? i?.category?.name + ', ' : i?.category?.name
              ))}</h3>
          </div>
          {/*  */}
          <div className='w-[100%] mb-4'>
            <p className='font-light leading-tight mb-1'>Quantity:</p>
            <input 
              type='number' 
              min={1} 
              value={input?.quantity}
              onChange={(e) => setInput({...input, quantity: Number(e.target.value)})}
              placeholder='1' 
              className='outline-none p-3 border border-gray-300' />
              {errMsg?.quantity &&
              <p className='text-sm text-red-600'>{errMsg?.quantity}</p>}
          </div>
          {/*  */}
          <form action={postData} onSubmit={() => setIsSubmit(true)} className='w-[100%] mt-4'>
            <button 
              type='submit' 
              className='bg__one rounded-full text-white px-12 py-4'>
              Add to Cart
            </button>
          </form>

        </div>
      </div>

      <section className='mx-auto w-[92%] mt-[2rem] '>
        <div className='w-[100%] flex items-center justify-start'>
          <div 
            onClick={() => setIsTab({one: true})} 
            className={`${isTab.one ? 'border-t border-x' : 'border'} cursor-pointer px-6 py-3 border-gray-300`}>
              Description
          </div>
          <div 
            onClick={() => setIsTab({two: true})} 
            className={`${isTab.two ? 'border-t' : 'border-y'} cursor-pointer px-6 py-3 border-r border-gray-300`}>
              Specifications
          </div>
        </div>
        {/* DESCRIPTION */}
      
          {isTab.one &&
          <>
          {data?.description ? 
            <section className='mx-auto w-[100%] py-8 px-6 bg-white drop-shadow-lg'>
              <h2 className='mb-2 font-medium text-lg'>Description</h2>
              <p className='font-light mb-1'>
                {data?.description}
              </p>
            </section>  
          :
            <section className='mx-auto w-[100%%] py-12 px-6 bg-white drop-shadow-lg'>
              <h3 className='font-light text-5xl'>Description not available at the moment.</h3>
            </section>
          }
          </>
          }
   

        
        {/* SPECIFICATIONS */}
      
          {isTab.two &&
          <>
          {specs.length > 0 ? 
            <section className='mx-auto w-[100%%] py-8 px-6 bg-white drop-shadow-lg'>
              <div className='w-[100%] flex items-center justify-start border border-gray-300 font-medium'>
                <div className='w-[50%] py-3 px-4 border-r border-gray-300'>Name</div>
                <div className='w-[50%] py-3 px-4'>Specifications</div>
              </div>
              {specs.map((i, key) => (
                <div className='w-[100%] flex items-center justify-start border border-gray-300'>
                  <div className='w-[50%] py-3 px-4 border-r border-gray-300'>{i?.name}</div>
                  <div className='w-[50%] py-3 px-4'>{i?.name}</div>
                </div>
              ))}
            </section>
            :
            <section className='mx-auto w-[100%%] py-12 px-6 bg-white drop-shadow-lg'>
              <h3 className='font-light text-5xl'>Specifications not available at the moment.</h3>
            </section>
          }
          </>
          }
      
  

      </section>



 
    </section>
    </>
  )
}
