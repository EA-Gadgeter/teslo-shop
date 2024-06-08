"use client";

import { useEffect } from "react";

import { useFormState, useFormStatus } from "react-dom";

import Link from "next/link";

import { IoInformationOutline } from "react-icons/io5";

import { authenticate } from "@/actions/auth/login";

const LoginButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`${pending ? "btn-disabled" : "btn-primary"}`}
      disabled={pending}
    >
      Ingresar
    </button>
  );
};

export const LoginForm = () => {
  const [state, dispatch] = useFormState(authenticate, undefined);

  useEffect(() => {
    if (state === "Success") {
      // redireccionar
      // router.replace('/');
      window.location.replace("/");
    }
  }, [state]);

  return (
    <form className="flex flex-col" action={dispatch}>
      <label htmlFor="email">Correo electrónico</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="email"
        name="email"
      />

      <label htmlFor="email">Contraseña</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="password"
        name="password"
      />

      <div
        className="flex h-8 mb-2 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {state === "CredentialSignin" && (
          <>
            <IoInformationOutline className="w-5 h-5 text-red-500" />
            <p className="text-sm text-red-500">Credenciales incorrectas</p>
          </>
        )}
      </div>

      <LoginButton />

      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/new-account" className="btn-secondary text-center">
        Crear una nueva cuenta
      </Link>
    </form>
  );
};
