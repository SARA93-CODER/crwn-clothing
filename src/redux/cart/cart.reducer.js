import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.types) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        //if the state is from (TOGGLE_CART_HIDDEN) type, wr're gonna switch it from of the previous stte was to the opposite one.
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default CartReducer;
