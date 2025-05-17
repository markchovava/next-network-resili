"use client";
import {setCookie, deleteCookie, getCookie } from 'cookies-next';


export const cookieAuthName = 'NETWORK_RESILIENCE_AUTH_COOKIE'

const cookieDuration = 60 * 60 * 24 * 30 * 30;
export const setAuthCookie = async (token) => {
    await setCookie(cookieAuthName, token, { maxAge: cookieDuration });
}

export const getAuthCookie = () => {
    getCookie(cookieAuthName);
}

export const removeAuthCookie = async () => {
    await deleteCookie(cookieAuthName);
}

  