import { createContext } from "react";
export const CartContext = createContext();

function CartContextFile() {
  const cart = [];
  return <CartContext.Provider value={cart}></CartContext.Provider>;
}
export default CartContextFile;
