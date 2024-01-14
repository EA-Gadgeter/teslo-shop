export const revalidate = 60;

import { redirect } from "next/navigation";

import type { Gender } from "@prisma/client";

import { getPaginatedProductsWithImages } from "@/actions/product";

import { Title } from "@/components/ui";
import { ProductsGrid } from "@/components/products";
import { Pagination } from "@/components/ui";

interface Props {
 params: {
  gender: string;
 },
  searchParams: {
    page?: string;
  }
}

export default async function ProductsGenderPage({ params, searchParams }: Props) {
  const { gender } = params;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, totalPages } = await getPaginatedProductsWithImages({
    page,
    gender: gender as Gender,
  });

  if (products.length === 0) return redirect(`/gender/${gender}`);

  const labels: Record<string, string> = {
    men: "para hombres",
    women: "para mujeres",
    kid: "para niños",
    unisex: "para todos"
  };

  return (
    <div>
      <Title title={`Artículos de ${labels[gender]}`} subtitle="Todos los productos" className="mb-2" />

      <ProductsGrid products={products} />

      <Pagination totalPages={totalPages} />
    </div>
  );
}