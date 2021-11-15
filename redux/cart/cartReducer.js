import {  
    ADD_PRODUCT,
    ADD_UNITS,
    REMOVE_PRODUCT,
    REMOVE_UNITS,
    RESTART_PRODUCTS
} from "./cartTypes";

const initialState = {
    products: []
}

export const cartReducer = (state = initialState, action) => {

    switch ( action.type ) {
        case ADD_PRODUCT:

            return { 
                ...state, 
                products: [...state.products, action.payload ] 
            };

        case ADD_UNITS:
            return {
                ...state,
                products:[
                    ...state.products.map(item => {return item.product.id === action.payload.id ? { ...item, units: (item.units += 1)} : item})
                ] 
            }
        
        case REMOVE_PRODUCT: 
            return {
                products: [
                    ...state.products.filter(item => item.product.id !== action.payload.id)
                ],
            }
        
        case REMOVE_UNITS:
            return {
                ...state,
                products:[
                    ...state.products.map(item => {return item.product.id === action.payload.id ? {...item, units: (item.units - 1)} : item})
                ]
            }
    
        case RESTART_PRODUCTS:
            return state = initialState

        default:
            return state;
    }

}