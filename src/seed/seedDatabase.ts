import prisma from "../lib/prisma";

import { initialData } from "./seed";
import { countries } from "./seedCoutries";

async function main() {

  // Borrar registros previos
  await prisma.user.deleteMany();
  await prisma.country.deleteMany();

  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const { categories, products, users } = initialData;

  await prisma.user.createMany({
    data: users
  });

  await prisma.country.createMany({
    data: countries
  });

  // Categorías
  const categoriesData = categories.map(category => ({ name: category }));
  await prisma.category.createMany({ data: categoriesData });

  // Productos
  const categoriesDB = await prisma.category.findMany();
  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>); // <string="shirt", string="categoryId">

  for (const product of products) {
    const { type, images, ...rest } = product;
    const dbProduct = await prisma.product.create({ data: { ...rest, categoryId: categoriesMap[type] } });

    // Imagenes
    const imagesData = images.map(image => ({
      url: image,
      productId: dbProduct.id
    }));

    await prisma.productImage.createMany({
      data: imagesData
    });
  }

  console.log("Seed ejectuado correctamente");
}

(() => {
  if (process.env.NODE_ENV === "production") return;

  main();
})();