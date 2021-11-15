/**
 * This component returns releted products by category
 */


import React from "react";
import { fetchProductsByCategory } from "../../../helpers/fetchData";

import ProductsGrid from "./ProductsGrid";

const GetRelatedProducts = ({ categoryTitle, productId }) => {
    const [relatedProducts, setRelatedProducts] = React.useState(null);

    React.useEffect(() => {
        (async () => {
            const products = await fetchProductsByCategory(
                categoryTitle,
                productId
            );
            
            setRelatedProducts(products);
        })();
    }, []);

    return( 
    <>
    {relatedProducts === null && (<p>Loading....</p>)  }

    {relatedProducts === false && (<p>No related products could be found</p>)}

    {(relatedProducts !== null && relatedProducts !== false ) && <ProductsGrid
            productsArray={relatedProducts}
            categoryTitle={categoryTitle}
        />}

    </>)  
    
};

export default GetRelatedProducts;
