/**
 * This component is for the cart svg icon
 */
import React from 'react';
//Next
import Link from 'next/link'
//Redux
import { useSelector } from 'react-redux';
//svg
import ShoppingBag from '../svg/ShoppingBag';

const CartHeaderButton = () => {
    const { products } = useSelector(state => state.cart);

    const cartNumberFunction = () => {
        let items = []
        let result;

        if( !products || products.length === 0) return 0;
        
        products.map(item => items.push(item.units))
        
        result = items.reduce((a, b) => a + b, 0)
        return result
    }
    const cn = cartNumberFunction()

    return (
        <Link href="/cart">
        <div className="text-white relative flex cursor-pointer">
            <ShoppingBag svgStyle={'h-8 w-8 fill-current '}/>
            {
                cn > 0 && <span style={{top: -10, right: -7 }} className="absolute">{cn}</span>
            }
        </div>
        </Link>
    )
}

export default CartHeaderButton
