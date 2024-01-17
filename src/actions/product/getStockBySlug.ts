"use server";

import prisma from "@/lib/prisma";

export const getStockBySlug = async (slug: string) => {
  try {
    const product = await prisma.product.findUnique({
      where: { slug },
      select: {
        inStock: true
      }
    });

    return product?.inStock ?? 0; // Si ocurre un error, lo dejamos al usuario comprar el producto
  } catch (error) {
    return 0; // Si ocurre un error, lo dejamos al usuario comprar el producto
  }
};