"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { cartStore } from "@/stores";

import { QuantitySelector } from "@/components/product";

export const ProductsInCart = () => {
  const productsInCart = cartStore(state => state.cart);
  const updateProductQuantity = cartStore(state => state.updateProductQuantity);
  const removeProductFromCart = cartStore(state => state.removeProductFromCart);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return (
    <span>Cargando...</span>
  );

  return (
    <ul className="flex flex-col gap-8 mt-5">
      {
        productsInCart.map(product => (
          <li key={`${product.slug}-${product.size}`} className="flex gap-5">
            <Image
              src={`/products/${product.image}`}
              width={100}
              height={100}
              alt={product.title}
              className="w-[100px] h-[100px] rounded"
            />

            <div>
              <Link href={`/product/${product.slug}`} className="hover:underline">
                {product.size} - {product.title}
              </Link>
              <p>${product.price}</p>

              <QuantitySelector
                quantity={product.quantity}
                setQuantity={(value) => updateProductQuantity(product, value)}
              />

              <button
                className="mt-3 underline font-semibold text-red-500"
                onClick={() => removeProductFromCart(product)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))
      }
    </ul>
  );
};