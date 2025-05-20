"use client";

export const CartInit = (CartInitialState) => {
    const result = {
        ...CartInitialState, 
        cartitems: [],
        cart: null  
    }
    return result;
}


export const CartInitialState = {
    cartitems: [],
    cart: null   
};


export const CartReducer = (state, action) => {
    switch(action.type){
        case 'ADD_DATA':
            return {
                ...state,
                cartitems: action.payload.cartitems,
                cart: action.payload.cart,

            }    
        case 'ADD_QUANTITY':
            return {
                ...state,
                cartitems: state.cartitems.map(i => 
                    i.id === action.payload.id 
                    ? { ...i, 
                        quantity: action.payload.quantity, 
                        total: parseFloat(i.price) * Number(action.payload.quantity)
                        }
                    : i
                )
            }       
        case 'EMPTY_ITEMS':
            return {
                ...state,
                items: [],
            }  
        default:
           return state;
    }
}