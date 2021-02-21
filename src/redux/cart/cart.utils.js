const addItemToCart = (cartItems, cartItemsToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => (cartItem.id = cartItemsToAdd.id)
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id == cartItemsToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }
  /*if there is no cartItems in there, pass them and pass the new item with
  (cartItemToAdd). Here the quantity property will be as a reference value for the previous block as it wont run if it is a new item*/
  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

export default addItemToCart;
