import { Title } from "@/components/ui";
import { ProductsGrid } from "@/components/products";

import { initialData } from "@/mocks/mocks";

const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />

      <ProductsGrid products={products} />
    </>
  );
}
