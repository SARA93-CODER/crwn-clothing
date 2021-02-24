import React from "react";

import CustomButton from "../custom-botton/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

const CartDropdown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        //now we will show (empty cart message) if the length is 0, which means there is no cart item in there, and we'll rendering the cartitems if there is one.
        cartItems.length ? (
          cartItems.map((CartItem) => (
            <CartItem key={CartItem.id} item={CartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )
      }
    </div>
    <CustomButton onClick={() => history.push("/checkout")}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const MapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(MapStateToProps)(CartDropdown));
