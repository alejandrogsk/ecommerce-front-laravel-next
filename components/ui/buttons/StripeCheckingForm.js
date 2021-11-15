import axios from 'axios'

/**
 * This is the form for stripe
 */
import React,{useState} from "react";
//Next
import { useRouter } from 'next/router'
//Stripe
import {
    CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

//Redux
import { useDispatch, useSelector } from 'react-redux';
//Redux Actions
import { restartProducts } from '../../../redux/cart/cartActions';

import Spinner from '../loaders/Spinner';

const StripeCheckingForm = ({productsArr, shippingInfo}) => {

  const router = useRouter();

  const dispatch = useDispatch();


  const {user, token} = useSelector((state) => state.auth);
    //this are for the payment method
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const stripe = useStripe();
    const elements = useElements();

    // Create PaymentIntent
    const createPaymentIntent = async() => {
      try {
        axios.defaults.withCredentials = true;
        let {data} = await axios({
          method: 'POST',
          headers: {"Content-Type": "application/json", 'Authorization': `Bearer ${token}`  },
          url: process.env.NEXT_PUBLIC_LARAVEL_ORDER_CREATE,
          data: { items: productsArr, shipping: shippingInfo, client: user }
        });        

        if( data.ok === true ){
          let cs = data.payment_data.clientSecret;
          return cs;
        } else {
          setError(`There seems to be an error. ${res.message && res.message}`);
          return null;
        }

      } catch (err) {
        setError('There seems to be an error');
      }

    };


    const handleChange = async (event) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!user){
          return router.push('/auth/login');
        }

        setProcessing(true);
        //cs is the clienSecret that backend return
        let clientSecretValue = await createPaymentIntent();
        
        const payload = await stripe.confirmCardPayment(clientSecretValue, {
          payment_method: {
            card: elements.getElement(CardElement)
          }
        });

        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            setError(null);
            setProcessing(false);
            setSucceeded(true);
            dispatch( restartProducts());
        }
    
    };


  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };


  return (

    <form id="payment-form" onSubmit={handleSubmit}>
      <CardElement id="card-element" options={cardStyle} onChange={handleChange} />

      {
        succeeded 
        ? <div className=" w-full bg-cyan-600 my-4 px-8 py-2 rounded-3xl flex justify-center items-center"><p className="text-white">Payment succeeded!</p></div>
        :
      <button
        disabled={ processing || disabled}  
        className="bg-cyan-500 font-semibold hover:bg-cyan-600 py-4 text-sm text-white uppercase w-full mt-4 rounded-3xl"
        id="submit"
        type="submit"
      >
        <span id="button-text">
          {(processing && !error) ? (
            <Spinner color="gray" tone="50" />
          ) : (
            "Pay now"
          )}
        </span>
      </button>
}
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        
      </p>

    </form>
  );
};

export default StripeCheckingForm;

