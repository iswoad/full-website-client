import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51J4qufGxtFhgOXKm7qYnnRLI6vX8CY83yND2IYQgv8YicakZuzKZOf4dghpMEmiex1yZzF8uTJS9IIgtHglnf62n00KZWXGorM');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;