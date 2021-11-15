/**
 * This function request the products from the api and filter 
 * the data for his use
 */
import axios from 'axios'
export const fetchProductsByCategory = async(categoryTitle, productId) => {
    const relatedProducts = [];

    try {
        const dataReq = await axios.get(`${process.env.NEXT_PUBLIC_LARAVEL_CATEGORY_NAME}/${categoryTitle}`);
        const { ok, products } = dataReq.data;

        if(ok === false || products.length === 0 ||  products.length === 1){
            return false;
        }

        if( ok === true && products.length > 4) {
            const filteredArray = products.filter(product => product.id !== productId);
            
            for( let i=0; i !== 4; i++ ) {
                let product = filteredArray[i];
                relatedProducts.push(product);
            }
            return relatedProducts;
        } else{
            return false;
        }

    } catch (error) {
        console.log('Error in fetchData.js')
        return null;
    }
}