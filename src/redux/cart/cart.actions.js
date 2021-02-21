import CartActionTypes from "./cart.types";

const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export default toggleCartHidden;

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
