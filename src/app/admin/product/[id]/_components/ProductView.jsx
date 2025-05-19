"use client"
import React, { useState } from 'react'
import ProductEditModal from './ProductEditModal';
import { baseURL } from '@/api/BaseURL';
import Image from 'next/image';
import { _productViewAction } from '@/actions/ProductActions';
import { formatDate } from '@/_utils/formatDate';


export default function ProductView({ id, dbData, brandData, productCategoryData }) {
    const [isModal, setIsModal] = useState(false);
    const [data, setData] = useState(dbData?.data);
    const [images, setImages] = useState(dbData?.images);
    const [specs, setSpecs] = useState(dbData?.specs);
    const [brands, setBrands] = useState(brandData?.data)
    const [pCatData, setCategory] = useState(productCategoryData?.data)
    console.log('productCategoryData?.data', productCategoryData?.data)

    async function getData() {
        const res = await _productViewAction(id);
        setData(res?.data);
        setImages(res?.images);
        setSpecs(res?.specs);
    }



  return (
    <>
   <section className='w-[100%] mt-4 pb-[5rem]'>
        <div className='mx-auto w-[92%]'>
            <div className='flex items-center justify-end mb-4'>
                <button 
                    onClick={() => setIsModal(!isModal)}
                    className='bg-white drop-shadow duration-100 ease-linear transition-all border border-gray-800 hover:bg-gray-800 hover:text-white hover:drop-shadow-md px-4 py-3'>
                    Edit
                </button>
            </div>

             <div className=''>
                <h3 className='text-[2.5rem] font-light mb-1'>View Product</h3>
                <hr className='border-b border-gray-200' />
            </div>

            <section className='bg-white drop-shadow-lg p-6 mt-4'>
                {/* IMAGES */}
                { images &&
                    <div className='mb-6'>
                        <p className='text-sm font-light mb-2'>Images:</p>
                        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>
                            {images.map((i, key) => (
                            <div key={key} className='w-[100%] aspect-[7/5] drop-shadow bg-gray-100 rounded-lg overflow-hidden'>
                                <Image src={baseURL + i?.image} 
                                    width={700} className="w-[100%] h-[100%]"
                                    height={500} alt="Image" />
                            </div>
                            ))}
                        </div>
                    </div>
                }
                {/* NAME */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Name:</p>
                    <p className='text-lg'>{data?.name ?? 'Not added.'}</p>
                </div>
                {/* PRICE */}
                <div className='mb-6'>
                    <p className='text-sm font-light mb-2'>Status:</p>
                    <p className='text-lg font-medium'>
                        <span className='p-2 rounded-lg bg-gradient-to-br text-white from-red-600 to-blue-800'>
                        {data?.status}
                        </span>
                    </p>
                </div>
                {/* PRICE */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Price:</p>
                    <p className='text-lg'>{ data?.price ? '$' + data?.price : 'Not Added' }</p>
                </div>
                {/* BRAND */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Brand:</p>
                    <p className='text-lg'>{ data?.brand?.name ? data?.brand?.name : 'Not Added' }</p>
                </div>
                {/* CATEGORY */}
                {pCatData.length > 0 &&
                <div className='mb-6'>
                    <p className='text-sm font-light'>Categories:</p>
                    <p className='text-lg'>
                    { pCatData.map((i, key) => (
                        key < pCatData.length - 1 
                        ? i?.category?.name + ', ' 
                        : i?.category?.name
                    ))}
                    </p>
                </div>
                }

                {/* PRICE */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Quantity:</p>
                    <p className='text-lg'>{data?.quantity ?? 'Not added.'}</p>
                </div>
                {/* DESCRIPTION */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Description:</p>
                    <p className='text-lg'>
                        {data?.description}
                    </p>
                </div>

                 {/* SPECIFICATIONS */}
                { specs &&
                <div className='mb-6'>
                    <p className='text-sm font-light mb-2'>Specification:</p>
                    <div className='lg:w-[50%] md:w-[80%] w-[100%]'>
                        {specs.map((i, key) => (
                            <div key={key} className='flex items-center justify-start border border-gray-300'>
                                <div className='w-[50%] p-2 border-r border-gray-300'>{i?.name}</div>
                                <div className='w-[50%] p-2'>{i?.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
                }
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Updated:</p>
                    <p className='text-lg'>
                        {data?.created_at ? formatDate(data?.updated_at) : 'Not Added'}
                    </p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Created :</p>
                    <p className='text-lg'>
                        {data?.created_at ? formatDate(data?.created_at) : 'Not Added'}
                    </p>
                </div>
                {/* */}
                <div className='mb-6'>
                    <p className='text-sm font-light'>Author:</p>
                    <p className='text-lg'>
                        {data?.user?.email ? data?.user?.email : 'Not Added.'}
                    </p>
                </div>
            </section>
        </div>
    </section>
   

    <ProductEditModal 
        id={id}
        getData={getData}
        domData={data}
        imagesData={images}
        specsData={specs}
        brands={brands}
        isModal={isModal} 
        setIsModal={setIsModal} />
    </>

  )
}
