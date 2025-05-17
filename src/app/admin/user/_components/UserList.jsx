"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { IoSearch } from 'react-icons/io5'
import { MdDeleteForever } from 'react-icons/md'
import UserAddModal from './UserAddModal'
import { MainContextState } from '@/contexts/MainContext'
import { _userDeleteAction, _userListAction, _userSearchAction } from '@/actions/UserActions'
import { toast } from 'react-toastify'
import { reactToastifyDark } from '@/_utils/reactToastify'



export default function UserList({ dbData }) {
    const {userState, userDispatch } = MainContextState()
    const [isModal, setIsModal] = useState(false)
    const [search, setSearch] = useState('');
    const [isSearch, setIsSearch] = useState(false);
     useEffect(() => {
        userDispatch({type: 'ADD_DATA', payload: {
            items: dbData?.data,
            prevURL: dbData?.links?.prev,
            nextURL: dbData?.links?.next,
        }});
    }, []);

    async function paginateHandler(url) {
        try{
            const res = await _userPaginateAction(url)
            userDispatch({type: 'ADD_DATA', payload: {
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
            const res = await _userSearchAction(search);
            userDispatch({type: 'ADD_DATA', payload: {
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
    
    async function getData() {
        try{
            const res = await _userListAction();
                userDispatch({type: 'ADD_DATA', payload: {
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
            const res = await _userDeleteAction(id);
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
        <h3 className='text-[2.5rem] font-light mb-1'>User List</h3>
        <hr className='border-b border-gray-200' />
      </div>

      <div className='mx-auto w-[92%] flex items-center justify-between mt-2 pb-2'>
        <form 
            action={getSearchData} 
            onSubmit={() => setIsSearch(true)} 
            className='border border-gray-300 lg:w-[50%] w-[80%] flex items-center justify-start'>
            <input 
                type='text'
                value={search} 
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search' 
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
        <div>
            <button onClick={() => setIsModal(true)}
                className='px-5 py-3 border border-gray-300 hover:bg-gray-900 hover:text-white transition-color ease-linear duration-200'>
                Add
            </button>
        </div>
      </div>

       {/* TABLE */}
        <section className="mx-auto w-[92%] lg:overflow-hidden overflow-scroll pb-[2rem]">
            <section className='lg:w-[100%] w-[70rem]'>
                {/* HEADER */}
                <div className='mx-auto w-[100%] text-lg py-2 flex items-center justify-start font-bold font-white bg-gray-200 '>
                    <div className='w-[40%] border-r border-white px-3 py-2'>NAME</div>
                    <div className='w-[30%] border-r border-white px-3 py-2'>PHONE</div>
                    <div className='w-[20%] border-r border-white px-3 py-2'>STATUS</div>
                    <div className='w-[10%] px-3 py-2 text-end'>ACTION</div>
                </div>

                {/* COLUMN */}
                { userState?.items?.length > 0 ?
                   userState?.items?.map((i, key) => (
                    <div className='mx-auto w-[100%] py-2 flex items-center justify-start border-b border-x border-gray-300'>
                        <div className='w-[40%] border-r border-gray-300 px-3 py-2'>{i?.name ?? 'Not Added'}</div>
                        <div className='w-[30%] border-r border-gray-300 px-3 py-2'>{i?.phone ?? 'Not Added'} </div>
                        <div className='w-[20%] border-r border-gray-300 px-3 py-2'>{i?.is_admin == 'Yes' ? 'Is Admin' : 'Not Admin'} </div>
                        <div className='w-[10%] px-3 py-2 text-end flex items-center justify-end gap-3 text-xl'>
                            <Link title='View' href={`/admin/user/${i?.id}`}> 
                            <FaEye className='hover:text-blue-500 duration-150 hover:scale-110 transition-all ease-in'/> 
                            </Link> 
                            <button onClick={() => deleteData(i?.id)} title='Delete'> 
                                <MdDeleteForever
                                className='hover:text-red-500 duration-150 hover:scale-110 transition-all ease-in' /> 
                            </button> 
                        </div>
                    </div>
                   ))
                   :
                    <section className='w-[100%] py-6'>
                        <h3 className='text-[3rem] font-light'>No Data Available at the moment.</h3>
                        <p>Click 
                            <Link href='/admin/user/add' className='cursor-pointer underline hover:no-underline mx-1'>
                                Add
                            </Link> 
                            to add.
                        </p>
                    </section> 
                }
                
             

            </section>
        </section>
        {/* PAGINATION */}
        <section className='w-[90%] mx-auto pb-[4rem] flex items-center justify-end gap-3'>
          {/* PREVIOUS */}
          { userState?.prevURL && 
          <button
                onClick={() => paginateHandler(userState?.prevURL)}
              className='group px-4 py-2 flex items-center justify-center gap-2 border border-gray-700 text-gray-700'>
              <FaArrowLeftLong className='transition-all ease-in-out duration-200 group-hover:-translate-x-1' />
              Prev
          </button>
          }
          {/* NEXT */}
           { userState?.nextURL && 
          <button 
                onClick={() => paginateHandler(userState?.nextURL)}
              className='group px-4 py-2 flex items-center justify-center gap-2 border border-gray-700 text-gray-700'>
              <span>Next</span>
              <FaArrowRightLong className='transition-all ease-in-out duration-200 group-hover:translate-x-1' />
          </button>
           }
        </section>
    </section>


    <UserAddModal
        getData={getData}
        isModal={isModal} 
        setIsModal={setIsModal} />


    </>
  )
}
