/**
 * This component handle the checking for stripe
 */

import React, {useState, useEffect} from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import StripeCheckingForm from "../buttons/StripeCheckingForm";


const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_CLIENT_SECRET_KEY}`);

const CartChecking = ({ productsArr }) => {
  
  const noOfProducts = productsArr.length;

  const [ handleShippingOptions, setShippingOption ] = useState("standar");

  const [shippingCostOption, setShippingCostOption] = useState({ type: "standar", amount: 10 });

  useEffect(() => {
    if (handleShippingOptions === "standar") { 
      setShippingCostOption( { type: "standar", amount: 10 } ) 
    } else {
      setShippingCostOption( { type: "express", amount: 29 } ) 
    } 

  }, [handleShippingOptions] );

  const totalAmount = (shippingAmount) => {

    let ammountPerProduct = [];
    for (let i = 0; i < noOfProducts; i++) {
      let result = productsArr[i].units * productsArr[i].product.price;
      ammountPerProduct.push(result);
    }

    let total = ammountPerProduct.reduce((a, b) => a + b, 0);

    return total + shippingAmount;
  };

  let totalToPay = totalAmount(shippingCostOption.amount);

  return (
    <div id="summary" className="w-full lg:w-1/4 px-8 py-10">
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>

      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">
          Items {noOfProducts}
        </span>
        <span className="font-semibold text-sm">590$</span>
      </div>

      <div>
        <label className="font-medium inline-block mb-3 text-sm uppercase">
          Shipping
        </label>
        <select
          id="shipping"
          onChange={(e)=>{ 
            setShippingOption(e.target.value)
          } }
          className="block p-2 text-gray-600 w-full text-sm"
        >
          <option value="standar">Standard shipping - $10.00</option>
          <option value="express">Express shipping - $29.00</option>
        </select>
      </div>

      <div className="py-10">
        <label
          htmlFor="promo"
          className="font-semibold inline-block mb-3 text-sm uppercase"
        >
          Promo Code
        </label>
        <input
          type="text"
          id="promo"
          placeholder="Enter your code"
          className="p-2 text-sm w-full"
        />
      </div>

      <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase rounded-3xl">
        Apply
      </button>

      

      <div className="border-t mt-8">

        

        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          {<span>${totalToPay}</span>}
        </div>

        <Elements stripe={stripePromise}>
            <StripeCheckingForm productsArr={productsArr} shippingInfo={shippingCostOption} />  
        </Elements>
        
       

      </div>
    </div>
  );
};





export default CartChecking;
