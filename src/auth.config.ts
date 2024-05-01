import NextAuth, { type NextAuthConfig } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

import { z } from "zod";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/new-account",
  },
  providers: [
    CredentialProvider({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) return null;

        const { email, password } = parsedCredentials.data;

        return null;
      },
    }),
  ],
};

export const { auth: authSession, signIn, signOut } = NextAuth(authConfig);
