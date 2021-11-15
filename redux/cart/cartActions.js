import {  
    ADD_PRODUCT,
    ADD_UNITS,
    REMOVE_PRODUCT,
    REMOVE_UNITS,
    RESTART_PRODUCTS
} from "./cartTypes";


export const addProduct = ({product, units}) => {
    return {
        type: ADD_PRODUCT,
        payload: { product, units }
    }
}

export const addQuantity = (product) => {
    return {
        type: ADD_UNITS,
        payload: product
    }
}

export const removeProduct = (product) => {
    return {
        type: REMOVE_PRODUCT,
        payload: product
    }
}

export const removeQuantity = (product) => {
    return {
        type: REMOVE_UNITS,
        payload: product
    }
}

export const restartProducts = () => {
    return {type: RESTART_PRODUCTS}
}