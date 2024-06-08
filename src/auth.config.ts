import NextAuth, { type NextAuthConfig } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

import { z } from "zod";

import bcryptjs from "bcryptjs";

import prisma from "@/lib/prisma";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/new-account",
  },

  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.data = user;
      }

      return token;
    },

    session({ session, token }) {
      session.user = token.data as any;
      return session;
    },
  },

  providers: [
    CredentialProvider({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) return null;

        const { email, password } = parsedCredentials.data;

        const user = await prisma.user.findUnique({
          where: { email: email.toLocaleLowerCase() },
        });

        if (!user) return null;

        if (!bcryptjs.compareSync(password, user.password)) return null;

        // Regresar el usuario sin la contrasenia
        const { password: _, ...rest } = user;

        return rest;
      },
    }),
  ],
};

export const {
  auth: authSession,
  signIn,
  signOut,
  handlers,
} = NextAuth(authConfig);
