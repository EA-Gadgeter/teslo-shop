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
    if ((error as any).type === "CredentialSignin") {
      return "CredentialSignin";
    }

    return "UnknownError";
  }
};
