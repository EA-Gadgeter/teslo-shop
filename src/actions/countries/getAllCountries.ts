"use server";

import prisma from "@/lib/prisma";

import type { Country } from "@/interfaces/country.interface";

export const getAllCountries = async (): Promise<Country[]> => {
  try {
    return await prisma.country.findMany({
      orderBy: {
        name: "asc"
      }
    });
  } catch (error) {
    console.error(error);
    return [];
  }
};