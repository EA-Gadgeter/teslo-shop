import type { Product } from "@/interfaces/product.interface";

import { ProductGridItem } from "@/components/products";

interface Props {
  products: Product[]
}

export const ProductsGrid: React.FC<Props> = ({ products }) => {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-10">
      {
        products.map(product => (
          <ProductGridItem key={product.slug} product={product} />
        ))
      }
    </ul>
  );
};
