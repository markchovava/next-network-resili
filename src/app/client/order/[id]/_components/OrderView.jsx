"use client"
import React, { useState } from 'react'
import OrderStatusModal from './OrderStatusModal';
import { _orderViewAction } from '@/actions/OrderActions';



export default function OrderView({ id, dbData }) {
    const [isModal, setIsModal] = useState(false);
    const [order, setOrder] = useState(dbData?.order);
    const [detail, setDetail] = useState(dbData?.detail);
    const [orderItems, setOrderItems] = useState(dbData?.orderitems);

    //console.log('dbData', dbData)

    async function getData() {
        const res = await _orderViewAction(id);
        setOrder(res?.order);
        setDetail(res?.detail);
        setOrderItems(res?.orderitems);
    }

  return (
    <>
   <section className='w-[100%] mt-4 pb-[5rem]'>
        <div className='mx-auto w-[92%] pt-[2rem]'>
           <section className='flex items-center justify-end'>
           <button 
                onClick={() => setIsModal(!isModal)}
                className='bg-white drop-shadow-md duration-100 ease-linear transition-all border border-gray-800 hover:bg-gray-800 hover:text-white hover:drop-shadow-md px-4 py-3'>
                Edit
            </button>
           </section>
            <div className=''>
                <h3 className='text-[2.5rem] font-light mb-1'>View Order</h3>
                <hr className='border-b border-gray-200' />
            </div>

            <section className='bg-white drop-shadow-md p-6 mt-4 grid md:grid-cols-2 grid-cols-1 gap-6'>
                {/* PERSONAL */}
                <div className='w-[100%] '>
                    <h3 className='text-[1.8rem] font-light mb-2'>Personal Info</h3>
                    {/* NAME */}
                    <div className='mb-4'>
                        <p className='text-sm font-light'>Name:</p>
                        <p className='text-lg'>{detail?.name ? detail?.name : 'Not Added'}</p>
                    </div>
                    {/*  */}
                    <div className='mb-4'>
                        <p className='text-sm font-light'>Phone:</p>
                        <p className='text-lg'>{detail?.phone ? detail?.phone : 'Not Added'}</p>
                    </div>
                    {/* EMAIL */}
                    <div className='mb-4'>
                        <p className='text-sm font-light'>Email:</p>
                        <p className='text-lg'>
                            {detail?.email ? detail?.email : 'Not Added'} </p>
                    </div>
                    {/* EMAIL */}
                    <div className='mb-4'>
                        <p className='text-sm font-light'>Address:</p>
                        <p className='text-lg'>
                            {detail?.address ? detail?.address : 'Not Added'} </p>
                    </div>
                  
                </div>
                {/* ORDER */}
                <div className='w-[100%] '>
                    <h3 className='text-[1.8rem] font-light mb-2'>Order Info</h3>
                    {/* NAME */}
                    <div className='mb-4'>
                        <p className='text-sm font-light'>Ref:</p>
                        <p className='text-lg'>
                            {order?.ref_no ? order?.ref_no : 'Not Added'} 
                        </p>
                    </div>
                    {/*  */}
                    <div className='mb-4'>
                        <p className='text-sm font-light'>Total:</p>
                        <p className='text-lg'>
                            {order?.total ? '$' + order?.total : 'Not Added'} 
                        </p>
                    </div>
                    {/*  */}
                    {order?.status &&
                    <div className='mb-4'>
                        <p className='text-sm font-light mb-1'>Status:</p>
                        <p className='text-lg'>
                            <span className='px-2 py-1 bg-blue-600 text-white rounded-lg'>
                                {order?.status ? order?.status : 'Not Added'}
                            </span>
                        </p>
                    </div>
                    }
                    {/* QUANTITY */}
                    <div className='mb-4'>
                        <p className='text-sm font-light'>Quantity:</p>
                        <p className='text-lg'>
                            {order?.quantity ? order?.quantity : 'Not Added'}  </p>
                    </div>
                    {/* NOTES */}
                    <div className='mb-4'>
                        <p className='text-sm font-light'>Notes:</p>
                        <p className='text-lg'>
                           {order?.notes ? order?.notes : 'Not Added'} </p>
                    </div>
                </div>
            </section>

            {/* TABLE */}
            <section className="bg-white drop-shadow-md w-[100%] lg:overflow-hidden overflow-scroll mt-[2rem] pb-[2rem]">
                <section className='lg:w-[100%] w-[70rem]'>
                    {/* HEADER */}
                    <div className='mx-auto w-[100%] text-lg py-2 flex items-center justify-start font-bold font-white bg-gray-200 '>
                        <div className='w-[30%] border-r border-white px-3 py-2'>NAME</div>
                        <div className='w-[15%] border-r border-white text-end px-3 py-2'>QUANTITY</div>
                        <div className='w-[25%] border-r border-white text-end px-3 py-2'>PRICE</div>
                        <div className='w-[30%] px-3 py-2 text-end'>TOTAL</div>
                    </div>
                    {/* COLUMN */}
                    {orderItems ?
                        orderItems.map((i, key) => (
                        <div key={key} className='mx-auto w-[100%] py-2 flex items-center justify-start border-b border-x border-gray-300'>
                            <div className='w-[30%] border-r border-gray-300 px-3 py-2'>
                                {i?.product?.name ? i?.product?.name : 'Not Added'}</div>
                            <div className='w-[15%] border-r text-end border-gray-300 px-3 py-2'>
                                {i?.quantity ? i?.quantity : 'Not Added'}</div>
                            <div className='w-[25%] border-r text-end border-gray-300 px-3 py-2'>
                                {i?.price ? '$' + i?.price : 'Not Added'}</div>
                            <div className='w-[30%] px-3 py-2 text-end flex items-center justify-end gap-3 text-xl'>
                                {i?.total ? '$' + i?.total : 'Not Added'}
                            </div>
                        </div>
                    ))
                    :
                    <section className='w-[100%] py-6'>
                        <h3 className='text-[3rem] text-center font-light'>No Data Available at the moment.</h3>
                    </section>
                    }
                

                </section>
            </section>

        </div>
    </section>
   
    <OrderStatusModal 
        id={id}
        getData={getData}
        domData={order}
        isModal={isModal} 
        setIsModal={setIsModal} />

    </>
  )
}
