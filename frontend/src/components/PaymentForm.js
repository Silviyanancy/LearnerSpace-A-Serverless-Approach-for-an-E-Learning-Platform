import React, { useContext, useEffect, useState } from 'react';
import {CourseCartContext} from '../states/cart';
import {CourseContext} from '../states/courses';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
//import {useHistory} from 'react-router-dom';

const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

const PaymentForm = () => {
    const {cart, subtotal, /*emptyCart*/} = useContext(CourseCartContext);
    const {checkout} = useContext(CourseContext);
    const [orderDetails, setOrderDetails] = useState({ cart, subtotal, address: null, token: null});
    const [error, setError] = useState(null);
    const stripe = useStripe();
    const stripeelements = useElements();
   // const stripehistory = useHistory();

    useEffect(() => {
        if (orderDetails.token) {
            checkout(orderDetails);
            //emptyCart();
            //stripehistory.push("/");
        }
    }, [orderDetails]);

    //function for handling real-time validation errors from card element
    const validatechange = (event) => {
        if(event.error){
            setError(event.error.message);
        }else{
            setError(null);
        }
    };

    //function for handling form submission
    const submitForm = async (event) => {
        event.preventDefault();
        const card = stripeelements.getElement(CardElement);
        const result = await stripe.createToken(card);
        if(result.error){
            //To inform the user if there is an error
            setError(result.error.message);
        }else{
            setError(null);
            //send token to the server
            const token = result.token;
            setOrderDetails({...orderDetails, token: token.id});
        }
    };

  return (
    <form onSubmit={submitForm}>
      <div className="checkout-form">
        <label htmlFor="checkout-address">Address Details</label>
        <input
        id='checkout-address'
        type='text'
        onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })}
        />
      <div className="stripe-section">
          <label htmlFor="stripe-element"> Credit or debit card </label>
          <CardElement id="stripe-element" options={CARD_ELEMENT_OPTIONS} onChange={validatechange} />
        </div>
        <div className="card-errors" role="alert">
          {error}
        </div>
        </div>
      <button type="submit" className="btn">
        Submit Payment
      </button>
    </form>
  );
};

export default PaymentForm;
