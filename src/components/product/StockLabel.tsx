"use client";

import { useEffect, useState } from "react";

import { getStockBySlug } from "@/actions/product";

import { titleFont } from "@/config/fonts";

interface Props {
  slug: string;
}

export const StockLabel: React.FC<Props> = ({ slug }) => {
  const [stock, setStock] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    getStockBySlug(slug)
      .then(inStock => {
        setStock(inStock);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {
        isLoading ? (
          <h1 className="antialiased font-bold text-lg animate-pulse bg-gray-200 rounded">
            &nbsp;
          </h1>
        ) : (
          <h1 className={`${titleFont.className} antialiased font-bold text-lg`}>
            Stock: {stock}
          </h1>
        )
      }
    </>
  );
};
