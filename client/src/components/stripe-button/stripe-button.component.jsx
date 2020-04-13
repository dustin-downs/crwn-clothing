import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_wiDAxx4bIzB0PBMSVtfXbQve00OHCRmP7W';

  const onToken = async (token) => {
    try {
      await axios({
        url: 'payment',
        method: 'POST',
        data: {
          amount: priceForStripe,
          token,
        },
      });
      alert('Payment was successful!');
    } catch (error) {
      console.log('Payment error: ', error);
      alert(
        'There was an issue with your payment. Please make sure you use the provided credit card.'
      );
    }
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
