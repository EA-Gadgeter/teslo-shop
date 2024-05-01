"use client";

import { useEffect, useState } from "react";

import { cartStore } from "@/stores";

import { currencyFormater } from "@/helpers";

export const OrderSummary = () => {
  const cartSummaryInfo = cartStore(state => state.getSummaryInformation());

  const [componentLoaded, setComponentLoaded] = useState(false);

  useEffect(() => {
    setComponentLoaded(true);
  }, []);

  if (!componentLoaded) return <p>Cargando...</p>;

  return (
    <div className="grid grid-cols-2">
      <span>No. productos</span>
      <span className="text-right">{cartSummaryInfo.itemsInCart} producto(s)</span>

      <span>Subtotal</span>
      <span>{currencyFormater(cartSummaryInfo.subTotal)}</span>

      <span>Impuetos (15%)</span>
      <span>{currencyFormater(cartSummaryInfo.tax)}</span>

      <span className="mt-5 text-2xl">Total</span>
      <span className="mt-5 text-2xl text-right">{currencyFormater(cartSummaryInfo.total)}</span>
    </div>
  );
};
