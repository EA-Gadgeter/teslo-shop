"use server";

import prisma from "@/lib/prisma";
import { Gender } from "@prisma/client";

interface PaginationOptions {
  page?: number;
  take?: number;
  gender?: Gender;
}

export const getPaginatedProductsWithImages = async ({
  page = 1,
  take = 12,
  gender
}: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    // 1. Obtener los productos
    const products = await prisma.product.findMany({
      take, // Cantidad de productos a tomar
      skip: (page - 1) * take, // El skip o page empieza en 0, por eso restamos

      include: {
        ProductImage: {
          take: 2, // Tomar solo 2 imagenes
          select: { url: true }
        }
      },

      where: {
        gender
      }
    });

    // 2. Obtener el total de paginas
    const totalProducts = await prisma.product.count({
      where: {
        gender
      }
    }); // Contar todos los elementos con prisma
    const totalPages = Math.ceil(totalProducts / take);

    return {
      currentPage: page,
      totalPages,
      products: products.map(product => ({
        ...product,
        images: product.ProductImage.map(image => image.url)
      }))
    };
  } catch (e) {
    throw new Error("Products could not be loaded");
  }
};