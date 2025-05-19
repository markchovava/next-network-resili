"use client";
import {setCookie, deleteCookie, getCookie } from 'cookies-next';


export const cookieCartName = 'NETWORK_RESILIENCE_CART_COOKIE'

const cookieDuration = 60 * 60 * 24 * 30 * 30;
export const setCartCookie = async (token) => {
    await setCookie(cookieCartName, token, { maxAge: cookieDuration });
}

export const getCartCookie = () => {
    getCookie(cookieCartName);
}

export const removeCartCookie = async () => {
    await deleteCookie(cookieCartName);
}