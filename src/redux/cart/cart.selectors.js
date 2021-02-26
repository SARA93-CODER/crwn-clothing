/*Generally, we use selectors to devide the global or the gaint state into parts (parts) so we can only pass the props that has changed
or has modified, so that lets the react component knows exactly what to rernder, not to rerender all the props inside if the output of the selector is the same*/
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
