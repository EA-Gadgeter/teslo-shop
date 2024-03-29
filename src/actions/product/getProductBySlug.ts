"use server";

import prisma from "@/lib/prisma";

export const getProductBySlug = async (slug: string) => {
  try {
    const product = await prisma.product.findUnique({
      include: {
        ProductImage: {
          select: {
            url: true,
          }
        }
      },

      where: {
        slug
      }
    });

    if (!product) return null;

    return {
      ...product,
      images: product.ProductImage.map(image => image.url)
    };
  } catch (e) {
    console.log(e);
    throw new Error("Error al obtener producto del slug");
  }
};