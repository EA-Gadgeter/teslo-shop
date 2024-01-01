import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/interfaces/product.interface";

interface Props {
  product: Product;
}

export const ProductGridItem: React.FC<Props> = ({ product }) => {
  return (
    <li className="rounded-md overflow-hidden fade-in">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/products/${product.images[0]}`} 
          alt={product.title}
          className="w-full object-cover"
          width={500}
          height={500}
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
