/**
 * This button is used in product page
 */
import React from 'react'
//next
import Link from 'next/link';
//Redux
import { useDispatch, useSelector } from 'react-redux';
//Actions
import  {addProduct, addQuantity } from '../../../redux/cart/cartActions';

const BuyNow = ({product}) => {
    const { products } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleClick = () => {
        const searchProduct = products.find(item => item.product.id === product.id);


        if( searchProduct === undefined || null) {
            return dispatch( addProduct({product, units:1}) )
        } else {
            return dispatch( addQuantity(product) )
        }
    }

    return (
        <Link href="/cart">
        <button onClick={handleClick} className="w-full sm:w-1/2 mx-auto mt-8 py-4 w-full bg-cyan-500 hover:bg-cyan-600 border shadow rounded-xl text-white uppercase tracking-wide font-bold">
            Buy Now
        </button>
        </Link>
    )
}

export default BuyNow
