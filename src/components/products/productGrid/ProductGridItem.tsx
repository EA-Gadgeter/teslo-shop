"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/interfaces/product.interface";

interface Props {
  product: Product;
}

export const ProductGridItem: React.FC<Props> = ({ product }) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);

  return (
    <li className="overflow-hidden fade-in">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/products/${displayImage}`} 
          alt={product.title}
          className="w-full object-cover rounded-md"
          width={500}
          height={500}
          onMouseEnter={() => setDisplayImage(product.images[1])}
          onMouseLeave={() => setDisplayImage(product.images[0])}
        />
      </Link>
      

      <div className="flex flex-col p-4">
        <Link href={`/product/${product.slug}`} className="hover:text-blue-600">
          {product.title}
        </Link>

        <span className="font-bold">${product.price}</span>
      </div>
    </li>
  );
};
