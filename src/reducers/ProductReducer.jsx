"use client";

export const ProductInit = (ProductInitialState) => {
    const result = {
        ...ProductInitialState, 
        items: null,
        prevURL: '',
        nextURL: '',
    }
    return result;
}


export const ProductInitialState = {
    items: null,
    prevURL: '',
    nextURL: '',
};


export const ProductReducer = (state, action) => {
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
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload ]
            } 
        case 'ADD_NEXTURL':
            return {
                ...state,
                nextURL: action.payload.url
            }   
        case 'ADD_PREVURL':
            return {
                ...state,
                prevURL: action.payload.url
            }   
        case 'ASCBYNAME':
            return {
                ...state,
                items: action.payload.sort((a, b) => 
                    a.name.localeCompare(b.name)
                )
            }   
        case 'DESCBYNAME':
            return {
                ...state,
                items: action.payload.sort((a, b) => 
                    b.name.localeCompare(a.name)
                )
            }   
        case 'ASCBYPRICE':
            return {
                ...state,
                items: action.payload.sort((a, b) => {
                    if (a.price === null && b.price === null) return 0;
                    if (a.price === null) return 1;
                    if (b.price === null) return -1;
                    return a.price - b.price;
                })
            }   
        case 'DESCBYPRICE':
            return {
                ...state,
                items: action.payload.sort((a, b) => {
                    if (a.price === null && b.price === null) return 0;
                    if (a.price === null) return 1;       
                    if (b.price === null) return -1;     
                    return b.price - a.price;             
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