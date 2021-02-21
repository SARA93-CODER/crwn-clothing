import CartActionTypes from "./cart.types";

import addItemToCart from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.types) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        //if the state is from (TOGGLE_CART_HIDDEN) type, wr're gonna switch it from of the previous stte was to the opposite one.
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default CartReducer;
