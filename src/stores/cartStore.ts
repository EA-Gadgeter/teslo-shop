import { create } from "zustand";
import { persist } from "zustand/middleware"; // Middleware de Zustand que nos permite guardar la info en localeStorage

import type { CartProduct } from "@/interfaces/product.interface";

interface State {
  cart: CartProduct[];
  // eslint-disable-next-line no-unused-vars
  addProductToCart: (product: CartProduct) => void;
  //updateProductQuantity
  //removeProductFromCart
}

export const cartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],

      addProductToCart: (product: CartProduct) => {
        const { cart } = get();

        // 1. Revisar si el producto existe en el carrito con la talla seleccionada
        const productInCartIndex = cart.findIndex(item =>
          item.id === product.id &&
          item.size === product.size
        );

        if (productInCartIndex === -1) {
          set({ cart: [...cart, product] });
          return;
        }

        // 2. Si el producto existe por talla, creamos una copia y ahi aumentamos el valor
        const updatedCartProducts = [...cart];
        updatedCartProducts[productInCartIndex].quantity += product.quantity;

        set({ cart: updatedCartProducts });
      }
    }),
    {
      name: "shoppingCart" // Nombre a utilizar en localStorage
    }
  )
);