import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51ImydSBUaCJgD23KFkIxdvgSvTt7y1McOWSoDKAZ3vuwUHPYgQwJNDGTGFpUo1dC6X0qzRKT3o8pF5cDuzNLDQO800DdV4vhcx';

    return (
        <StripeCheckout
            label='Pay Now'
            name = 'CROWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            amount={priceForStripe}
        />
    );
}

export default StripeCheckoutButton