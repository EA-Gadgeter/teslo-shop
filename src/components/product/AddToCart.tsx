"use client";

import { useState } from "react";

import { cartStore } from "@/stores";

import type { CartProduct, Product, Size } from "@/interfaces/product.interface";

import { SizeSelector, QuantitySelector } from ".";

interface Props {
  product: Product
}

export const AddToCart: React.FC<Props> = ({ product }) => {
  const addProductToCart = cartStore(state => state.addProductToCart);

  const [size, setSize] = useState<Size|undefined>();
  const [quantity, setQuantity] = useState(1);
  const [posted, setPosted] = useState(false);

  const onAddToCart = () => {
    setPosted(true);

    if (!size) return;

    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      image: product.images[0],
      price: product.price,
      title: product.title,
      quantity,
      size,
    };

    addProductToCart(cartProduct);

    setPosted(false);
    setQuantity(1);
    setSize(undefined);
  };

  return (
    <>
      {
        (posted && !size) && (
          <span className="mt-2 text-red-500 fade-in">Selecciona una talla primero</span>
        ) 
      }

      <SizeSelector selectedSize={size} availableSizes={product.sizes} setSize={setSize}/>

      <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>

      <button className="btn-primary my-5" onClick={onAddToCart}>
        Agregar al carrito
      </button>
    </>
  );
};
