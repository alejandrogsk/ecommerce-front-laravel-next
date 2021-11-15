import React from 'react'
import CreditCard from '../../ui/svg/CreditCard';
import Box from '../../ui/svg/Box';
import BuyNow from '../buttons/BuyNow';

const ProductTemplate = ({product, categoryName}) => {

    return (
        <div className="my-8 grid gap-4 grid-cols-1 sm:grid-cols-2">
            <img
                src={`${process.env.NEXT_PUBLIC_LARAVEL_IMG_LOCAL}${decodeURIComponent(product.img)}`}
                alt="Picture of the author"
                className="rounded-md"
              />
            <div className="mt-8 flex flex-col">

                <div className="my-1 flex justify-between items-center">
                <h1 className="tracking-wide capitalize text-2xl" >{product.name}</h1>
                    <span className="tracking-wide text-xl" >${product.price}</span> 
                </div>
                
                <div className="my-1 flex justify-between items-center">
                    <h2 className="tracking-wide uppercase text-lg" >{categoryName}</h2>
                    <span className="tracking-wide " >Units available: {product.quantity}</span>  
                </div>

                
                <span className="mt-2 h-1 w-full border rounded-xl bg-cyan-600"></span>

                <div className="py-3">
                    <span className="tracking-wide " >About this products: </span>  
                    <p className="tracking-wide	py-1">{product.description}</p>
                </div>
            
                <div className="flex flex-col sm:flex-row  justify-between align-center">
                    
                    <div className="my-2 p-3 border rounded-xl flex justify-center align-center mr-0.5">
                        <div className="text-cyan-500 mr-3"><CreditCard svgStyle={'h-8 w-8 fill-current'}/></div>
                        <span className="text-lg">Up to 6 payments with the medium of your choice.</span>
                    </div>

                    <div className="my-2 p-3 border rounded-xl flex justify-center align-center ml-0.5">
                        <div className="text-cyan-500 mr-3"><Box svgStyle={'h-8 w-8 fill-current'}/></div>
                        <span className="text-lg">Free shipping to the whole country with any purchase.</span>
                    </div>
                
                </div>
            
                <BuyNow product={product} />

            </div>
        </div>
    )
}

export default ProductTemplate
