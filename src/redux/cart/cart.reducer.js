import CartActionTypes from "./cart.types";

import { addItemToCart, removeItemFromCart } from "./cart.utils";

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
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        //here we use filter func. to clear out the items we dont need by keeping only the items that doesnt match with the (action.payload.id).
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default CartReducer;
