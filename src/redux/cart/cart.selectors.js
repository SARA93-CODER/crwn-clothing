import { createSelector } from "reselect";

// the input selector takes the hole state and return a slice of it which here it is the state.cart
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumelatedQuantity, cartItem) =>
        accumelatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumelatedQuantity, cartItem) =>
      accumelatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
