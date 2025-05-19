"use server";

import { baseURL } from "@/api/BaseURL";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";




export async function categoryByProductListAction(id) {
    const res = await fetch(`${baseURL}index-by-product/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}

export async function productByCategoryListAction(id) {
    const res = await fetch(`${baseURL}index-by-category/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}


/* AUTHENTICATION */

export async function _categoryByProductListAction(id) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('NETWORK_RESILIENCE_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/index-by-product/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}

export async function _productByCategoryListAction(id) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('NETWORK_RESILIENCE_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/index-by-category/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}

export async function _productCategoryStoreAction(data) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('NETWORK_RESILIENCE_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/product-category`, {
      'method': 'POST',
      'body': JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}

export async function _productCategoryDeleteAction(id) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('NETWORK_RESILIENCE_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/product-category/${id}`, {
      'method': 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}