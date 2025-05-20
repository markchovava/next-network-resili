"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { IoSearch } from 'react-icons/io5'
import { MdDeleteForever } from 'react-icons/md'
import OrderAddModal from './OrderAddModal'
import { MainContextState } from '@/contexts/MainContext'
import { _orderDeleteAction, _orderListAction, _orderListByStatusAction, _orderPaginateAction, _orderSearchAction } from '@/actions/OrderActions'
import { toast } from 'react-toastify'
import { reactToastifyDark } from '@/_utils/reactToastify'
import { formatDate } from '@/_utils/formatDate'





export default function OrderList({ dbData }) {
  const [initialData, setInitialData] = useState(dbData)
  const {orderState, orderDispatch } = MainContextState()
  const [data, setData] = useState({status:''})
      const [isModal, setIsModal] = useState(false)
      const [search, setSearch] = useState('');
      const [isSearch, setIsSearch] = useState(false);
      useEffect(() => {
          orderDispatch({type: 'ADD_DATA', payload: {
              items: dbData?.data,
              prevURL: dbData?.links?.prev,
              nextURL: dbData?.links?.next,
          }});
      }, []);
  
      async function paginateHandler(url) {
          try{
              const res = await _orderPaginateAction(url)
              orderDispatch({type: 'ADD_DATA', payload: {
                  items: res?.data,
                  prevURL: res?.links?.prev,
                  nextURL: res?.links?.next,
              }});
          } catch (error) {
              console.error(`Error: ${error}`)
          } 
      }
  
      async function getSearchData() {
        if(!search) {
            await getData();
            setIsSearch(false)
            return;
        }
        try{
        const res = await _orderSearchAction(search);
        console.log('res', res)
        orderDispatch({type: 'ADD_DATA', payload: {
            items: res?.data,
            prevURL: res?.links?.prev,
            nextURL: res?.links?.next,
        }});
        setIsSearch(false);
        } catch (error) {
            console.error(`Error: ${error}`); 
            setIsSearch(false)
        }
      }

      async function getDataByStatus(status) {
        if(!status) {
            await getData();
            return;
        }
        try{
            const res = await _orderListByStatusAction(status);
            console.log('res', res)
                orderDispatch({type: 'ADD_DATA', payload: {
                    items: res?.data,
                    prevURL: res?.links?.prev,
                    nextURL: res?.links?.next,
                }});
            } catch (error) {
                console.error(`Error: ${error}`); 
            }
      }
      
      async function getData() {
          try{
              const res = await _orderListAction();
                  orderDispatch({type: 'ADD_DATA', payload: {
                      items: res?.data,
                      prevURL: res?.links?.prev,
                      nextURL: res?.links?.next,
                  }});
              } catch (error) {
                  console.error(`Error: ${error}`); 
              }
      }
      
      async function deleteData(id) {
          try{
              const res = await _orderDeleteAction(id);
              if(res.status == 1) {
                  await getData();
                  toast.success(res?.message, reactToastifyDark);
                  return;
              }
              } catch (error) {
                  console.error(`Error: ${error}`); 
          }
      }


    async function sortData(sort) {
      var sortData = orderState?.items
      switch(sort){
        case 'AscBy':
          orderDispatch({type: 'ASCBYDATE', payload: sortData });
          break;
        case 'DescByDate':
          orderDispatch({type: 'DESCBYDATE', payload: sortData });
          break;
        case 'AscByTotal':
          orderDispatch({type: 'ASCBYTOTAL', payload: sortData });
          break;
        case 'DescByTotal':
          orderDispatch({type: 'DESCBYTOTAL', payload: sortData });
          break;
        default:
          orderDispatch({type: 'ADD_DATA', payload: {
            items: initialData.data,
            prevURL: initialData?.links?.prev,
            nextURL: initialData?.links?.next,
         }});
      }         
    }

  return (
    <>
    <section className='w-full pt-[4rem] pb-[5rem]'>
      
      <div className='mx-auto w-[92%]'>
        <h3 className='text-[2.5rem] font-light mb-1'>Order List</h3>
        <hr className='border-b border-gray-200' />
      </div>

      <div className='mx-auto w-[92%] flex lg:flex-row flex-col items-center justify-between gap-4 mt-2 lg:pb-2 pb-4'>
        <form 
            action={getSearchData} 
            onSubmit={() => setIsSearch(true)} 
            className='border border-gray-300 lg:w-[50%] w-[100%] flex items-center justify-start'>
            <input 
                type='text'
                placeholder='Search' 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                className='outline-none border-r border-gray-300 p-3 w-[85%]' />
            <button 
                type='submit' 
                className='cursor-pointer hover:scale-110 ease-linear transition-all h-[100%] lg:w-[15%] px-4 py-3 text-center flex items-center justify-center'>
                { isSearch
                    ? <span className='animate-pulse w-[15px] h-[15px] rounded-full bg-slate-900'></span>
                    : <IoSearch className='text-lg' />
                }
            </button>
        </form>
        <div className='w-[100%] lg:w-auto flex items-center justify-end lg:gap-2 gap-4'>
          <select
            type='text' 
            name='sort_type'
            onChange={(e) => {
              sortData(e.target.value)
              console.log('sort_type', e.target.value)
            }}
            className='lg:w-auto w-[50%] border border-gray-300 outline-none p-3'>
            <option value=''>Select an Option</option>
            <option value='AscByDate'>ASC By Date</option>
            <option value='DescByDate'>DESC By Date</option>
            <option value='AscByTotal'>ASC By Total</option>
            <option value='DescByTotal'>DESC By Total</option>
          </select>

          <select
            type='text' 
            name='status'
            value={data?.status}
            onChange={(e) => getDataByStatus(e.target.value)}
            className='lg:w-auto w-[50%] border border-gray-300 outline-none p-3'>
            <option value=''>Order By Status</option>
            <option value='Processing'>Processing</option>
            <option value='In-Transit'>In-Transit</option>
            <option value='Completed'>Completed</option>
          </select>
        </div>
      </div>

       {/* TABLE */}
        <section className="mx-auto w-[92%] lg:overflow-hidden overflow-scroll pb-[2rem]">
            <section className='lg:w-[100%] w-[70rem]'>
                {/* HEADER */}
                <div className='mx-auto w-[100%] text-lg py-2 flex items-center justify-start font-bold font-white bg-gray-200 '>
                    <div className='w-[25%] border-r border-white px-3 py-2'>REF NO.</div>
                    <div className='w-[25%] border-r border-white px-3 py-2'>TOTALS</div>
                    <div className='w-[20%] border-r border-white px-3 py-2'>CREATED</div>
                    <div className='w-[20%] border-r border-white px-3 py-2'>STATUS</div>
                    <div className='w-[10%] px-3 py-2 text-end'>ACTION</div>
                </div>

              {/* COLUMN */}
              { orderState?.items?.length > 0 ?
                orderState?.items?.map((i, key) => (
                <div key={key} className='mx-auto w-[100%] py-2 flex items-center justify-start border-b border-x border-gray-300'>
                  <div className='w-[25%] border-r border-gray-300 px-3 py-2'>{i?.ref_no}</div>
                  <div className='w-[25%] border-r border-gray-300 px-3 py-2'>
                    <p>Quantity: {i?.quantity ? '$' + i?.quantity : 'Not Added'} </p>
                    <p>Total: <span className='font-bold'>{i?.total ? '$' + i?.total : 'Not Added'}</span> </p>
                  </div>
                  <div className='w-[20%] border-r border-gray-300 px-3 py-2'>
                  {i?.created_at ? formatDate(i?.created_at) : 'Not Added'}
                  </div>
                  <div className='w-[20%] border-r border-gray-300 px-3 py-2'>
                    {i?.status &&
                      <span className='bg-blue-500 text-white rounded-xl px-4 py-1'>{i?.status}</span>
                    }
                  </div>
                  <div className='w-[10%] px-3 py-2 text-end flex items-center justify-end gap-3 text-xl'>
                      <Link title='View' href={`/admin/order/${i?.id}`}> 
                      <FaEye className='hover:text-blue-500 duration-150 hover:scale-110 transition-all ease-in'/> 
                      </Link> 
                      <button title='Delete' onClick={() => deleteData(i?.id)}> 
                          <MdDeleteForever
                          className='hover:text-red-500 duration-150 hover:scale-110 transition-all ease-in' /> 
                      </button> 
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
        {/* PAGINATION */}
        <section className='w-[90%] mx-auto pb-[4rem] flex items-center justify-end gap-3'>
          {/* PREVIOUS */}
          {orderState?.prevURL &&
            <button
              onClick={() => paginateHandler(orderState?.prevURL) }
              className='group px-4 py-2 flex items-center justify-center gap-2 border border-gray-700 text-gray-700'>
              <FaArrowLeftLong className='transition-all ease-in-out duration-200 group-hover:-translate-x-1' />
              Prev
            </button>
          }
          {/* NEXT */}
          {orderState?.nextURL &&
          <button 
            onClick={() => paginateHandler(orderState?.prevURL) }
            className='group px-4 py-2 flex items-center justify-center gap-2 border border-gray-700 text-gray-700'>
            <span>Next</span>
            <FaArrowRightLong className='transition-all ease-in-out duration-200 group-hover:translate-x-1' />
          </button>
          }
        </section>
    </section>


    <OrderAddModal
      isModal={isModal} 
      setIsModal={setIsModal} />


    </>
  )
}
