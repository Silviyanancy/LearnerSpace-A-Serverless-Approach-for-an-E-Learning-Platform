import React from 'react';
import {Authenticator} from '@aws-amplify/ui-react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import PaymentForm from '../components/PaymentForm';

const Checkout = () => {
    const stripePromise = loadStripe('pk_test_51OqcS8CAxP2Gngqxoi63XR7MY2Yfh5nSlarFVvJuhSYunIU6Mpi1pNOsPRuTugwlK0DedaccTJgmCNjRRqyNY4U400Csn28uOX');

  return (
    <section classname = "checkout-wrapper">
      <Authenticator>
        <Elements stripe = {stripePromise}>
          <section>
            <h2>Do you want to checkout now?</h2>
            <PaymentForm />
          </section>
        </Elements>
      </Authenticator>
    </section>
  )
}

export default Checkout
