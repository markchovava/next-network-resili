"use client"
import { BrandInit, BrandInitialState, BrandReducer } from "@/reducers/BrandReducer";
import { CategoryInit, CategoryInitialState, CategoryReducer } from "@/reducers/CartegoryReducer";
import { PartnerInit, PartnerInitialState, PartnerReducer } from "@/reducers/PartnerReducer";
import { ProductInit, ProductInitialState, ProductReducer } from "@/reducers/ProductReducer";
import { UserInit, UserInitialState, UserReducer } from "@/reducers/UserReducer";
import { createContext, useContext, useReducer } from "react";


export const MainContext = createContext();


export default function MainContextProvider({ children }) {
    const [userState, userDispatch] = useReducer(UserReducer, UserInitialState, UserInit);
    const [brandState, brandDispatch] = useReducer(BrandReducer, BrandInitialState, BrandInit);
    const [categoryState, categoryDispatch] = useReducer(CategoryReducer, CategoryInitialState, CategoryInit);
    const [partnerState, partnerDispatch] = useReducer(PartnerReducer, PartnerInitialState, PartnerInit);
    const [productState, productDispatch] = useReducer(ProductReducer, ProductInitialState, ProductInit);
   
   
    return (
        <MainContext.Provider value={{  
            userState, userDispatch,
            brandState, brandDispatch,
            categoryState, categoryDispatch,
            partnerState, partnerDispatch,
            productState, productDispatch
        }}>
            {children}
        </MainContext.Provider>
      )
}

export const MainContextState = () => {
    return useContext(MainContext);
}
 
