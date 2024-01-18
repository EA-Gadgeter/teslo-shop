export const revalidate = 604800; // La pagina se regenera cada 7 días

import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getProductBySlug } from "@/actions/product";

import { titleFont } from "@/config/fonts";

import { 
  AddToCart,
  ProductSlideshow, 
  ProductMobileSlideshow,
  StockLabel
} from "@/components/product";

interface Props {
  params: {
    slug: string;
  }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const slug = params.slug;

  const product = await getProductBySlug(slug);

  return {
    title: product?.title,
    description: product?.description,

    openGraph: {
      title: product?.title,
      description: product?.description,
      images: [`/products/${product?.images[1]}}`] // Debería ir el url completo, el que incluye https
    }
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = params;

  const product = await getProductBySlug(slug);

  if (!product) return notFound();

  return (
    <div className="mt-5 mb-5 grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2">
        <ProductMobileSlideshow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />

        <ProductSlideshow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>

      <div className="col-span-1 px-5">
        <StockLabel slug={slug} />

        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>

        <p className="text-lg mb-5">
          ${product.price}
        </p>

        <AddToCart product={product} />

        <h3 className="font-bold text-sm">
          Descripción
        </h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}