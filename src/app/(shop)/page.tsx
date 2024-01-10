import { Title } from "@/components/ui";
import { ProductsGrid } from "@/components/products";

import { getPaginatedProductsWithImages } from "@/actions/product";

interface Props {
  searchParams: {
    page?: string;
  }
}

export default async function({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products } = await getPaginatedProductsWithImages({
    page
  });

  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />

      <ProductsGrid products={ products } />
    </>
  );
}
