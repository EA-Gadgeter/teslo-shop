"use server";

import { signIn } from "@/auth.config";

export const authenticate = async (
  prevState: string | undefined,
  formData: FormData,
) => {
  try {
    await signIn("credentials", {
      ...Object.fromEntries(formData),
      redirect: false,
    });

    return "Success";
  } catch (error) {
    if ((error as any).type === "CredentialsSignin") {
      return "CredentialsSignin";
    }

    return "UnknownError";
  }
};

export const login = async (email: string, password: string) => {
  try {
    console.log({ email, password });
    await signIn("credentials", { email, password, redirect: false });

    return {
      ok: true,
    };
  } catch (error) {
    console.error(error);

    return {
      ok: false,
      message: "No se pudo iniciar sesión",
    };
  }
};
