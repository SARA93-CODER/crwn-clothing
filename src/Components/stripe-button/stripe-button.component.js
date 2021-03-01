import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  //in strip we're dealing with sints so we convert price in Dollars to price in sints.
  const priceForStripe = price * 100;
  // we need the publishableKey to link the stripe elements to our App.
  const publishableKey =
    "pk_test_51IPt3nCLdFcLfosZtOyuWPx5T9AelA3X8ZacunYd3lmsC9WecDCO6bawMhyY3XgtPcHC8daElGckWub57wZNufyn00yrZiQLv7";

  const onToken = (token) => {
    console.log(token);
    alert("payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN CLOTHING Ltd."
      billingAddress
      shippingAddress
      image=""
      //note: we use here the price value not the priceForStripe.
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
