"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { IoSearch } from 'react-icons/io5'
import { MdDeleteForever } from 'react-icons/md'
import MessageAddModal from './MessageAddModal'
import { MainContextState } from '@/contexts/MainContext'
import { _messageDeleteAction, _messageListAction, _messagePaginateAction, _messageSearchAction, _messageSortListAction } from '@/actions/MessageActions'
import { toast } from 'react-toastify'
import { reactToastifyDark } from '@/_utils/reactToastify'
import { formatDate } from '@/_utils/formatDate'





export default function MessageList({ dbData }) {
    const {messageState, messageDispatch } = MainContextState()
    const [isModal, setIsModal] = useState(false)
    const [search, setSearch] = useState('');
    const [isSearch, setIsSearch] = useState(false);
    useEffect(() => {
        messageDispatch({type: 'ADD_DATA', payload: {
            items: dbData?.data,
            prevURL: dbData?.links?.prev,
            nextURL: dbData?.links?.next,
        }});
    }, []);
    
    async function paginateHandler(url) {
        try{
            const res = await _messagePaginateAction(url)
            messageDispatch({type: 'ADD_DATA', payload: {
                items: res?.data,
                prevURL: res?.links?.prev,
                nextURL: res?.links?.next,
            }});
        } catch (error) {
            console.error(`Error: ${error}`)
        } 
    }

  async function sortData(sort) {
      try{
          const res = await _messageSortListAction(sort);
          console.log('res', res)
          messageDispatch({type: 'ADD_DATA', payload: {
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
            const res = await _messageListAction();
                messageDispatch({type: 'ADD_DATA', payload: {
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
            const res = await _messageDeleteAction(id);
            if(res.status == 1) {
                await getData();
                toast.success(res?.message, reactToastifyDark);
                return;
            }
            } catch (error) {
                console.error(`Error: ${error}`); 
        }
    }

  return (
    <>
    <section className='w-full pt-[4rem] pb-[5rem]'>
      
      <div className='mx-auto w-[92%]'>
        <h3 className='text-[2.5rem] font-light mb-1'>Message List</h3>
        <hr className='border-b border-gray-200' />
      </div>

      <div className='mx-auto w-[92%] flex items-center justify-end mt-2 pb-2'>
       
        <div>
          <select
            type='text' 
            name='status'
            onChange={(e) => sortData(e.target.value) }
            className='border border-gray-300 outline-none p-3'>
            <option value=''>Select an option</option>
            <option value='Read'>Read</option>
            <option value='UnRead'>Unread</option>
          </select>
        </div>
      </div>

       {/* TABLE */}
        <section className="mx-auto w-[92%] lg:overflow-hidden overflow-scroll pb-[2rem]">
            <section className='lg:w-[100%] w-[70rem]'>
                {/* HEADER */}
                <div className='mx-auto w-[100%] text-lg py-2 flex items-center justify-start font-bold font-white bg-gray-200 '>
                    <div className='w-[40%] border-r border-white px-3 py-2'>EMAIL</div>
                    <div className='w-[30%] border-r border-white px-3 py-2'>DATE</div>
                    <div className='w-[20%] border-r border-white px-3 py-2'>STATUS</div>
                    <div className='w-[10%] px-3 py-2 text-end'>ACTION</div>
                </div>

                {/* COLUMN */}
                {messageState?.items?.length > 0 ?
                  messageState?.items?.map((i, key) => (
                    <div key={key} className='mx-auto w-[100%] py-2 flex items-center justify-start border-b border-x border-gray-300'>
                      <div className='w-[40%] border-r border-gray-300 px-3 py-2'>
                        <p>Email: <span>{i?.email}</span></p>
                        <p>Phone: <span>{i?.phone}</span></p>
                      </div>
                      <div className='w-[30%] border-r border-gray-300 px-3 py-2'>
                        {formatDate(i?.created_at)}
                      </div>
                      <div className='w-[20%] border-r border-gray-300 px-3 py-2'>
                        <span className='px-2 py-1 bg-blue-600 rounded-lg text-white'>{i?.status}</span> 
                        </div>
                      <div className='w-[10%] px-3 py-2 text-end flex items-center justify-end gap-3 text-xl'>
                          <Link title='View' href={`/admin/message/${i?.id}`}> 
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
          {messageState?.prevURL &&
          <button
              onClick={() => paginateHandler(messageState?.prevURL)}
              className='group px-4 py-2 flex items-center justify-center gap-2 border border-gray-700 text-gray-700'>
              <FaArrowLeftLong className='transition-all ease-in-out duration-200 group-hover:-translate-x-1' />
              Prev
          </button>
          }
          {/* NEXT */}
          {messageState?.nextURL &&
          <button 
              onClick={() => paginateHandler(messageState?.nextURL)}
              className='group px-4 py-2 flex items-center justify-center gap-2 border border-gray-700 text-gray-700'>
              <span>Next</span>
              <FaArrowRightLong className='transition-all ease-in-out duration-200 group-hover:translate-x-1' />
          </button>
          }
        </section>
    </section>


    <MessageAddModal
      isModal={isModal} 
      setIsModal={setIsModal} />


    </>
  )
}
