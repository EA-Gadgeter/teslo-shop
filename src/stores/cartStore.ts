import { create } from "zustand";
import { persist } from "zustand/middleware"; // Middleware de Zustand que nos permite guardar la info en localeStorage}

import type { CartProduct } from "@/interfaces/product.interface";

interface State {
  cart: CartProduct[];
  // eslint-disable-next-line no-unused-vars
  addProductToCart: (product: CartProduct) => void;

  getTotalItems: () => number;

  // eslint-disable-next-line no-unused-vars
  updateProductQuantity: (product: CartProduct, quantity: number) => void;

  // eslint-disable-next-line no-unused-vars
  removeProductFromCart: (product: CartProduct) => void;

  getSummaryInformation: () => {
    subTotal: number;
    tax: number;
    total: number;
    itemsInCart: number;
  };
}

export const cartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],

      addProductToCart: (product: CartProduct) => {
        const { cart } = get();

        // 1. Revisar si el producto existe en el carrito con la talla seleccionada
        const productInCartIndex = cart.findIndex(
          (item) => item.id === product.id && item.size === product.size,
        );

        if (productInCartIndex === -1) {
          set({ cart: [...cart, product] });
          return;
        }

        // 2. Si el producto existe por talla, creamos una copia y ahi aumentamos el valor
        const updatedCartProducts = [...cart];
        updatedCartProducts[productInCartIndex].quantity += product.quantity;

        set({ cart: updatedCartProducts });
      },

      updateProductQuantity: (product: CartProduct, quantity: number) => {
        const { cart } = get();

        const productToModIndex = cart.findIndex(
          (item) => item.id === product.id && item.size === product.size,
        );

        if (productToModIndex === -1) return;

        const updatedCartProducts = [...cart];
        updatedCartProducts[productToModIndex].quantity = quantity;

        set({ cart: updatedCartProducts });
      },

      removeProductFromCart: (product: CartProduct) => {
        const { cart } = get();

        const productIndex = cart.findIndex(
          (item) => item.id === product.id && item.size === product.size,
        );

        if (productIndex === -1) return;

        const updatedCartProducts = cart.toSpliced(productIndex, 1);

        set({ cart: updatedCartProducts });
      },

      getTotalItems: () => {
        const { cart } = get();

        return cart.reduce((total, currentItem) => {
          return total + currentItem.quantity;
        }, 0);
      },

      getSummaryInformation: () => {
        const { cart } = get();

        const subTotal = cart.reduce(
          (total, product) => (product.quantity * product.price) + total, 
          0
        );

        const tax = subTotal * 0.15;
        const total = subTotal + tax;
        const itemsInCart = cart.reduce((total, currentItem) => {
          return total + currentItem.quantity;
        }, 0);

        return {
          subTotal,
          tax,
          total,
          itemsInCart
        };
      }
    }),
    {
      name: "shoppingCart", // Nombre a utilizar en localStorage
    },
  ),
);
