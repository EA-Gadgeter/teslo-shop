"use server";

import prisma from "@/lib/prisma";

import bcryptjs from "bcryptjs";
import brcryptjs from "bcryptjs";

export const registerUser = async (
  name: string,
  email: string,
  password: string,
) => {
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: brcryptjs.hashSync(password, 10),
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return {
      ok: true,
      user,
      message: "Usuario creado correctamente",
    };
  } catch (error) {
    console.error(error);

    return {
      ok: false,
      message: "No se pudo crear el usuario",
    };
  }
};
