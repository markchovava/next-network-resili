"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { IoSearchOutline } from 'react-icons/io5';
import Image from 'next/image';
import { MainContextState } from '@/contexts/MainContext';
import { _productListAction, productListAction, productPaginateAction, productSearchWithCategoryAction } from '@/actions/ProductActions';
import { productByCategoryListAction } from '@/actions/ProductCategoryActions';
import { baseURL } from '@/api/BaseURL';
import { noImage } from '@/data/ImagesData';

const productData = [
  {id: 1, name: "Communication Product", img: '/assets/img/7by5/01coms.jpg', price: 0},
  {id: 2, name: "Network Product", img: '/assets/img/7by5/02net.jpg', price: 0},
  {id: 3, name: "Security Product", img: '/assets/img/7by5/03secu.jpg',  price: 0},
  {id: 4, name: "Solar Product", img: '/assets/img/7by5/04solar.jpg', price: 0},
  {id: 5, name: "Tracking Product", img: '/assets/img/7by5/05track.jpg', price: 0},
  {id: 6, name: "Network Product", img: '/assets/img/7by5/06web.jpg', price: 0},
  {id: 7, name: "Communication Product", img: '/assets/img/7by5/01coms.jpg', price: 0},
  {id: 8, name: "Network Product", img: '/assets/img/7by5/02net.jpg', price: 0},
]



export default function ProductList({dbData, categoryData}) {
    const [initialData, setInitialData] = useState(dbData)
    const {productState, productDispatch } = MainContextState();
    const [isSearch, setIsSearch] = useState(false);
    const [category, setCategory] = useState(categoryData?.data)
    const [input, setInput] = useState({
      search: '', 
      category_id: null,
      sort_type: '',
    });
    const handleInput = (e) => {
      setInput({...input, [e.target.name]: e.target.value })
    }
    /*  */
    useEffect(() => {
      productDispatch({type: 'ADD_DATA', payload: {
          items: dbData?.data,
          prevURL: dbData?.links?.prev,
          nextURL: dbData?.links?.next,
      }});
    }, []);
    /*  */
    async function getProductByCategory(cat_id) {
      if(!cat_id){
        await getData()
        return
      }
      try{
          const res = await productByCategoryListAction(cat_id)
          productDispatch({type: 'ADD_DATA', payload: {
            items: res?.data,
            prevURL: res?.links?.prev,
            nextURL: res?.links?.next,
          }});
      } catch (error) {
          console.error(`Error: ${error}`)
      } 
    }
    /*  */
    async function paginateHandler(url) {
      try{
          const res = await productPaginateAction(url)
          productDispatch({type: 'ADD_DATA', payload: {
            items: res?.data,
            prevURL: res?.links?.prev,
            nextURL: res?.links?.next,
          }});
      } catch (error) {
          console.error(`Error: ${error}`)
      } 
    }
    /*  */
    async function getData() {
       try{
          const res = await productListAction()
          productDispatch({type: 'ADD_DATA', payload: {
            items: res?.data,
            prevURL: res?.links?.prev,
            nextURL: res?.links?.next,
          }});
      } catch (error) {
          console.error(`Error: ${error}`)
      } 
    }
    /*  */
    async function searchData(){
      if(!input?.search && !input?.category_id){
        await getData();
        setIsSearch(false)
        return
      }
      const search = input.search
      const category_id = input.category_id
      try{
        const res = await productSearchWithCategoryAction(search, category_id)
        productDispatch({type: 'ADD_DATA', payload: {
          items: res?.data,
          prevURL: res?.links?.prev,
          nextURL: res?.links?.next,
        }});
        setIsSearch(false)

      } catch (error) {
          console.error(`Error: ${error}`)
          setIsSearch(false)
      } 
    }

    async function sortData(sort){
      var sortData = productState?.items
      switch(sort){
        case 'AscByName':
          productDispatch({type: 'ASCBYNAME', payload: sortData });
          break;
        case 'DescByName':
          productDispatch({type: 'DESCBYNAME', payload: sortData });
          break;
        case 'AscByPrice':
          productDispatch({type: 'ASCBYNAME', payload: sortData });
          break;
        case 'DescByPrice':
          productDispatch({type: 'DESCBYNAME', payload: sortData });
          break;
        default:
          productDispatch({type: 'ADD_DATA', payload: {
            items: initialData.data,
            prevURL: initialData?.links?.prev,
            nextURL: initialData?.links?.next,
         }});
      }         
    }


    //console.log('productState?.items', productState?.items)

  return (
    <>
    {/* SEARCH */}
      <section className='w-full bg-gray-50 drop-shadow py-[3rem]'>
        <form 
          action={searchData} 
          onSubmit={() => setIsSearch(true)} 
          className='mx-auto w-[92%] border border-gray-300 flex lg:flex-row flex-col items-center justify-start'>
          <div className='lg:w-[70%] w-[100%] lg:border-r lg:border-b-0 border-b border-gray-300'>
            <input 
              type='text' 
              name='search'
              value={input?.search}
              onChange={handleInput}
              placeholder='Search By Name.' 
              className='w-[100%] outline-none py-4 px-4' />
          </div>
          <div className='lg:w-[20%] w-[100%] h-[100%] lg:border-r lg:border-b-0 border-b border-gray-300'>
            <select
              name='category_id'
              value={input?.category_id}
              onChange={handleInput}
              className='w-[100%] h-[100%] outline-none py-4 px-4'>
              <option value=''>Select Category</option>
              {category.map((i, key) => (
                <option 
                  key={key} 
                  value={i?.id} 
                  selected={i?.id == input?.category_id && 'selected'}>
                    {i?.name}</option>
              ))}
            </select>
          </div>
          <button 
            type='submit' 
            className='group cursor-pointer text-center lg:w-[10%] w-[100%] h-[100%] flex items-center justify-center p-4'>
              { isSearch 
              ? <span className='animate-pulse w-[15px] h-[15px] rounded-full bg-slate-900'></span>
              : <IoSearchOutline className='text-[1.3rem] text-gray-600 group-hover:text-gray-950 group-hover:scale-110 transition-all ease-in-out duration-300' />
              }
          </button>
        </form>
      </section>

      {/*  */}
      <section className='w-full'>
        <div className='mx-auto w-[92%] py-[5rem] flex lg:flex-row flex-col justify-start items-start gap-6'>
          
          {/* LEFT */}
          <div className='lg:w-[25%] w-[100%] bg-gray-50 p-6 drop-shadow-lg'>
            {/* CATEGORY */}
            <h2 className='text-[1.4rem] font-bold mb-2'>Categories</h2>
            {/* LIST */}
            <ul className='font-light ml-3'>
              <li 
                onClick={() => getProductByCategory()}
                className='cursor-pointer mb-1 transition-all hover:underline hover:translate-x-2 ease-in-out duration-200'>
                All Categories
              </li>
              {category && category?.map((i, key) => (    
                <li 
                  onClick={() => getProductByCategory(i?.id)} key={key} 
                  className='cursor-pointer mb-1 transition-all hover:underline hover:translate-x-2 ease-in-out duration-200'>
                  {i?.name}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className='lg:w-[75%] w-[100%]'>

            <section className='w-[100%] flex justify-end items-center mb-4'>
              <select 
                value={input?.sort_type}
                onChange={(e) => {
                  setInput({...input, sort_type: e.target.value})
                  sortData(e.target.value) 
                }}
                className='outline-none border border-gray-300 px-4 py-3'>
                <option value=''>Select an option</option>
                <option value='AscByName'>ASC By Name</option>
                <option value='DescByName'>DESC By Name</option>
                <option value='AscByPrice'>ASC By Price</option>
                <option value='DescByPrice'>DESC By Price</option>
              </select>
            </section>

            {/* LIST */}
            { productState?.items ?
            <section className='w-[100%] grid lg:grid-cols-3 grid-cols-2 gap-6'>
              {/* COL */}
              { productState?.items?.map(i => (
                <div key={i?.id} className='group bg-white rounded-lg drop-shadow-md hover:drop-shadow-xl p-4'>
                 
                  <div className='w-[100%] aspect-[7/5] bg-gray-100 overflow-hidden rounded-lg mb-3'>
                  <Image 
                    src={ i?.product_images?.length > 0 
                      ? baseURL + i?.product_images[0]?.image 
                      : baseURL + noImage } 
                    width={700} 
                    height={500} 
                    className="group-hover:scale-110 transition-all ease-in-out duration-200"
                    alt='Image' />
                  </div>
                 
                  <Link href={`/product/${i?.id}`} className='hover:underline hover:text-blue-800'> 
                  <h3 className='font-light mb-1'>
                    {i.name}
                  </h3></Link>
                  <p className='text-xl font-bold mb-2'>{i?.price ? '$' + i?.price : 'Price Not Listed.'}</p>
                  <div className='flex items-center justify-start'>
                    <Link href={`/product/${i?.id}`} 
                    className='rounded-lg text-sm text-white cursor-pointer py-2 px-3 bg-gradient-to-br from-blue-600 to-blue-900 hover:bg-gradient-to-br hover:from-green-600 hover:to-green-900'>
                      View More
                    </Link>
                  </div>
                </div>
              )) }   
            </section>
            :
            <section className='w-[100%] text-center py-6'>
              <h3 className='text-[3rem] font-light'>No Data Available at the moment.</h3>
            </section>
            }

            {/* PAGINATION */}
            <section className='flex items-center justify-end gap-4 mt-[4rem]'>
              {productState?.prevURL &&
              <button
                onClick={ () => paginateHandler(productState?.prevURL) }
                className='group px-4 py-2 rounded-lg border bg-white text-blue-800 border-blue-800 hover:drop-shadow-lg flex items-center justify-center gap-1'>
                <FaArrowLeftLong className='group-hover:-translate-x-1 transition-all ease-in-out duration-200' />
                Previous
              </button>
              }
              {productState?.nextURL &&
              <button
                onClick={ () => paginateHandler(productState?.nextURL) }
                className='group px-4 py-2 rounded-lg border text-blue-800 bg-white border-blue-800 hover:drop-shadow-lg flex items-center justify-center gap-1'>
                Next
                <FaArrowRightLong className='group-hover:translate-x-1 transition-all ease-in-out duration-200' />
              </button>
              }
            </section>


          </div>

        </div>
      </section>
    </>
  )
}
