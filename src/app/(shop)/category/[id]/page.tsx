import { initialData } from "@/mocks/mocks";

import type { Category } from "@/interfaces/product.interface";

import { Title } from "@/components/ui";
import { ProductsGrid } from "@/components/products";

interface Props {
 params: {
  id: Category;
 }
}

const products = initialData.products;

export default function({ params }: Props) {
  const { id } = params;

  const filteredProducts = products.filter(product => product.gender === id);

  const labels: Record<Category, string> = {
    men: "para hombres",
    women: "para mujeres",
    kid: "para niños",
    unisex: "para todos"
  };

  /*if (id === "kids") {
    notFound();
  }*/

  return (
    <div>
      <Title title={`Artículos de ${labels[id]}`} subtitle="Todos los productos" className="mb-2" />

      <ProductsGrid products={filteredProducts} />
    </div>
  );
}