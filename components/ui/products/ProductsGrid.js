import React from 'react'
import AddToCart from '../buttons/AddToCart';
import Link from 'next/link';


const ProductsGrid = ({productsArray}) => {

    return (
      <div className="grid gap-2 grid-cols-2 sm:gap-4 sm:grid-cols-3 md:grid-cols-4" >
      {
        productsArray.map(product => {
          let image = `${process.env.NEXT_PUBLIC_LARAVEL_IMG_LOCAL}${decodeURIComponent(product.img)}`

          return (
            <div key={product.id} className="flex flex-col rounded-3xl	shadow-md relative">     
              <img
                src={image}
                alt={product.name}
                className="rounded-t-3xl"
              />
              <Link href={`/category/${product.category.title}/${product.name}`}>
                <a className="absolute h-full w-full">
                </a>
              </Link>


              <div className="bg-gray-100 rounded-b-3xl p-1.5 sm:p-4">
                <div >
                  <h2 className="uppercase">{product.name}</h2> 
                  <p>${product.price}</p>
                </div>
                
               
                  <AddToCart product={product} />
                

              </div>
            </div>
          )
        })
      }
      </div>
    )
}
export default ProductsGrid;