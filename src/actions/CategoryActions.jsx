"use server";

import { baseURL } from "@/api/BaseURL";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


/* AUTHENTICATED */
export async function _categoryPaginateAction(url) {
  const cookieStore = await cookies();
  const authToken = await cookieStore.get('NETWORK_RESILIENCE_AUTH_COOKIE');
  if(!authToken?.value){ redirect('/login'); }
  const res = await fetch(url, {
    'method': 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken?.value}`
    }
  });
  return await res.json();
}

export async function _categorySearchAction(search) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('NETWORK_RESILIENCE_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/category-search/${search}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}

export async function _categoryListAllAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('NETWORK_RESILIENCE_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/category-all`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}

export async function _categoryListAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('NETWORK_RESILIENCE_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/category`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}

export async function _categoryStoreAction(data) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('NETWORK_RESILIENCE_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/category`, {
      'method': 'POST',
      'body': JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    revalidatePath('/admin/category');
    return await res.json();
}

export async function _categoryUpdateAction(data, id) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('NETWORK_RESILIENCE_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/category/${id}`, {
      'method': 'POST',
      'body': JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    revalidatePath(`/admin/category/${id}`);
    return await res.json();
}

export async function _categoryViewAction(id) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('NETWORK_RESILIENCE_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/category/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}

export async function _categoryDeleteAction(id) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('NETWORK_RESILIENCE_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/category/${id}`, {
      'method': 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    revalidatePath(`/admin/category`);
    return await res.json();
}