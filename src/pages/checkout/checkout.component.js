import React from "react";
import "./checkout.styles.scss";

import { connect } from "react-redux";
//to pull some staff out of the state, we use reselect library
import { createStructuredSelector } from "reselect";

import StripeCheckoutButton from "../../Components/stripe-button/stripe-button.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../Components/checkout-item/checkout-item.component";

const CheckoutPage = (cartItems, total) => (
  <div className="checkout-page">
    <div className="chekout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>

    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: $ {total}</span>
    </div>
    <div className="test warning">
      *Please use the following test Credit Card for payments*
      <br />
      4242 4242 4242 4242 -Exp: 01/20 - CVV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
