"use client";

export const OrderInit = (OrderInitialState) => {
    const result = {
        ...OrderInitialState, 
        items: null,
        prevURL: '',
        nextURL: '',
    }
    return result;
}


export const OrderInitialState = {
    items: null,
    prevURL: '',
    nextURL: '',
};


export const OrderReducer = (state, action) => {
    switch(action.type){
        case 'ADD_DATA':
            return {
                ...state,
                items: action.payload.items,
                nextURL: action.payload.nextURL,
                prevURL: action.payload.prevURL,

            }    
        case 'ADD_ITEMS':
            return {
                ...state,
                items: action.payload
            } 
        /* --------------- */   
        case 'ASCBYDATE':
            return {
                ...state,
                items: action.payload.sort((a, b) => 
                    a.created_at.localeCompare(b.created_at)
                )
            }   
        case 'DESCBYDATE':
            return {
                ...state,
                items: action.payload.sort((a, b) => 
                    b.created_at.localeCompare(a.created_at)
                )
            }   
        case 'ASCBYTOTAL':
            return {
                ...state,
                items: action.payload.sort((a, b) => {
                    if (a.total === null && b.total === null) return 0;
                    if (a.total === null) return 1;
                    if (b.total === null) return -1;
                    return a.total - b.total;
                })
            }   
        case 'DESCBYTOTAL':
            return {
                ...state,
                items: action.payload.sort((a, b) => {
                    if (a.total === null && b.total === null) return 0;
                    if (a.total === null) return 1;       
                    if (b.total === null) return -1;     
                    return b.total - a.total;             
                })
            }   
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter((i) => i.id !== action.payload.id),
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