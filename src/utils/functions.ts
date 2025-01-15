import { Product } from "../interface";

export const addItemToShoppingCart = (cartItems: Product[], product: Product) => {
  // ** exist => update quantity
  const exists = cartItems.find((item) => item.id === product.id);

  if (exists) {
    return cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
  
  // ** !exist => add to cart
};