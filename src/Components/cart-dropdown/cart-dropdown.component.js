import React from "react";

import CustomButton from "../custom-botton/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((CartItem) => (
        <CartItem key={CartItem.id} item={CartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const MapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(MapStateToProps)(CartDropdown);
