"use server";

import { signIn } from "@/auth.config";

export const authenticate = async (
  prevState: string | undefined,
  formData: FormData
) => {
  try {
    await signIn("credentials", Object.fromEntries(formData));
  } catch (error) {
    return "CredentialSignin";
  }
};