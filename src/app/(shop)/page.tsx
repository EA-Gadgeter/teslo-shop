export const revalidate = 60;

import { redirect } from "next/navigation";

import { Title, Pagination } from "@/components/ui";
import { ProductsGrid } from "@/components/products";

import { getPaginatedProductsWithImages } from "@/actions/product";

interface Props {
  searchParams: {
    page?: string;
  }
}

export default async function HomePage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, totalPages } = await getPaginatedProductsWithImages({
    page
  });

  if (products.length === 0) return redirect("/");

  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />

      <ProductsGrid products={ products } />

      <Pagination totalPages={totalPages} />
    </>
  );
}
