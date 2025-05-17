"use client";
import {setCookie, deleteCookie, getCookie } from 'cookies-next';


const cookieAdminName = 'NETWORK_RESILIENCE_ADMIN_COOKIE'

const cookieDuration = 60 * 60 * 24 * 30 * 30;
export const setAdminCookie = async (token) => {
    await setCookie(cookieAdminName, token, { maxAge: cookieDuration });
}

export const getAdminCookie = () => {
    getCookie(cookieAdminName);
}

export const removeAdminCookie = async () => {
    await deleteCookie(cookieAdminName);
}

  