"use client"
import React, { useState } from 'react'
import { RiDeleteBack2Line } from "react-icons/ri";
import { IoAddCircleSharp } from "react-icons/io5";
import { reactToastifyDark } from '@/_utils/reactToastify';
import { _categoryByProductListAction, _productCategoryDeleteAction, _productCategoryStoreAction } from '@/actions/ProductCategoryActions';
import { toast } from 'react-toastify';


export default function ProductCategoryEdit({id,  dbData, categoryData, productCategoryData }) {
    console.log('productCategoryData', productCategoryData)
    const [data, setData] = useState(dbData?.data)
    const [category, setCategory] = useState(categoryData?.data)
    const [dList, setDList] = useState(productCategoryData?.data);
    const [isSubmit, setIsSubmit] = useState(false)


    async function getData() {
        const res = await _categoryByProductListAction(id);
        console.log('_categoryByProductListAction', res)
        setDList(res?.data);
    }

    async function postData(){
        if(!data?.category_id){
            const message = "Category is required."
            toast.warn(message, reactToastifyDark);
            return
        }
        const formData = {
            product_id: id,
            category_id: data?.category_id,
        }
        try{
            const res = await _productCategoryStoreAction(formData);
            if(res?.status == 1) {
                await getData();
                toast.success(res?.message, reactToastifyDark);
                setIsSubmit(false)
                return;
            }
        } catch (error) {
            console.error('Error object:', error);
            console.error('Error message:', error.message);
            console.error('Error name:', error.name);
            console.error('Error stack:', error.stack);
            setIsSubmit(false)
            return;
        }
    }

    async function deleteData(pc_id) {
        try{
            const res = await _productCategoryDeleteAction(pc_id);
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
    <section className='w-full py-[5rem]'>

        <div className='mx-auto lg:w-[70%] w-[92%]'>
            <p className='font-light text-sm leading-tight'>Product Name:</p>
            <h3 className='text-[2.5rem] leading-tight font-light mb-1'>{data?.name}</h3>
            <hr className='border-b border-gray-200' />
            <form action={postData} onSubmit={() => setIsSubmit(true)} className='w-[100%] bg-white drop-shadow-lg flex justify-start items-center mt-4 mb-6 p-6'>
                {category &&
                <div className='w-[90%]'>
                    <select
                    name='category_id'
                    value={data?.category_id}
                    onChange={(e) => setData({...data, category_id: e.target.value})}
                     className='p-3 w-[100%] outline-none border border-gray-300'>
                        <option value=''>Select an option</option>
                        { category.map((i, key) => (
                            <option key={key} value={i?.id}>{i?.name}</option> ))
                        }
                    </select>
                </div>
                }
                <div className='w-[10%] flex items-center justify-center'>
                    <button type='submit'>
                        <IoAddCircleSharp className='text-4xl cursor-pointer hover:scale-110 hover:text-blue-600 transition-all ease-in-out duration-300' />
                    </button>
                </div>
            </form>

            <section className='w-[100%] bg-white drop-shadow-lg mt-4 mb-6 p-6'>
                {dList.map((i, key) => (
                    <div key={key} className='w-[100%] flex justify-start items-center border border-gray-300'>
                        <div className='w-[90%] p-3 border-r border-gray-300'>{i?.category?.name}</div>
                        <div className='w-[10%] p-3 text-center justify-center items-center flex'>
                            <RiDeleteBack2Line
                            onClick={() => deleteData(i?.id)}
                            className='cursor-pointer text-xl hover:scale-110 hover:text-red-600 transition-all ease-in-out duration-300' />
                        </div>
                    </div>
                ))}

             

            </section>
        </div>
    </section>
    </>
  )
}
