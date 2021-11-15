/**
 * This is used in category page
 */
import React from 'react'
import ShoppingBag from '../svg/ShoppingBag';

//Redux
import { useDispatch, useSelector } from 'react-redux';
//Actions
import  {addProduct, addQuantity } from '../../../redux/cart/cartActions';

const AddToCart = ({product}) => {

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
        <div className="flex justify-center align-center absolute bottom-4 right-3">

                <button 
                onClick={handleClick}
                className="bg-cyan-600 hover:bg-white p-2 md:p-4 rounded-full  text-white hover:text-cyan-400">
                    <ShoppingBag svgStyle={'h-4 w-4 fill-current '}/>
                </button>
        </div>
    )
}
export default AddToCart;