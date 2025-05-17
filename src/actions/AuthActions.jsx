"use server";
import { baseURL } from "@/api/BaseURL";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function registerAction(data) {
    const res = await fetch(`${baseURL}register`, {
        "mode": "no-cors",
      'method': 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    revalidatePath('/login');
    return await res.json();
}

export async function loginAction(data) {
    const res = await fetch(`${baseURL}login`, {
      'method': 'POST',
      'body': JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    revalidatePath('/login');
    revalidatePath('/');
    revalidatePath('/checkout');
    return await res.json();
}

/**
 *  AUTHENTICATION
 **/
export async function _logoutAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('NETWORK_RESILIENCE_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/logout`, {
        'method': 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken?.value}`
        }
    });
    revalidatePath('/login');
    return await res.json();
}

export async function _profileViewAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('NETWORK_RESILIENCE_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/profile`, {
        'method': 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken?.value}`
        }
    });
    return await res.json();
}

export async function _profileStoreAction(data) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('NETWORK_RESILIENCE_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/profile`, {
        'method': 'POST',
        'body': data,
        headers: {
            'Authorization': `Bearer ${authToken?.value}`
        }
    });
    revalidatePath('/admin/profile');
    revalidatePath('/client/profile');
    return await res.json();
}


export async function _passwordAction(data) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('NETWORK_RESILIENCE_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/password`, {
        'method': 'POST',
        'body': JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken?.value}`,
        }
    });
    revalidatePath('/admin/profile');
    revalidatePath('/client/profile');
    return await res.json();
}


export async function _emailAction(data) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('NETWORK_RESILIENCE_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/email`, {
        'method': 'POST',
        'body': JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken?.value}`,
        }
    });
    revalidatePath('/admin/profile');
    revalidatePath('/client/profile');
    return await res.json();
}