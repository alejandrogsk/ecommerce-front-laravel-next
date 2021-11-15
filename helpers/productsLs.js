/*This function verifies that the product exist in localStorage
*
* Returns true or false 
* if is true return the object
* if is false return undefined
*/
export const verifyProductLS = (product) => {
    //products = JSON.parse(lsProducts);
    let lsProducts;

    //check if LS exists
    let ISSERVER = typeof window === "undefined"; 
    if(ISSERVER) return console.error("Whe are not in frontend, localStorage doesn't found");
    else lsProducts = localStorage.getItem('products');
  
    if(!lsProducts) return console.error("Products not found");
    
    console.log('lsProducts', lsProducts);
    return lsProducts.find(item => item.id === product.id);
}