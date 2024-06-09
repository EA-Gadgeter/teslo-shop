"use client";

import { useState } from "react";

import Link from "next/link";

import { useForm, type SubmitHandler } from "react-hook-form";

import { registerUser } from "@/actions/auth/register";
import { login } from "@/actions/auth/login";

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

export const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setErrorMessage("");

    const { email, name, password } = data;

    const res = await registerUser(name, email.toLowerCase(), password);

    if (!res.ok) {
      setErrorMessage(res.message);
      return;
    }

    const resLogin = await login(email.toLowerCase(), password);

    if (!resLogin.ok) {
      setErrorMessage(res.message);
      return;
    }

    window.location.replace("/");
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Nombre completo</label>
      <input
        className={`px-5 py-2 border bg-gray-200 rounded mb-5 ${errors.name && "border-red-500"}`}
        type="text"
        autoFocus
        {...register("name", { required: true })}
      />

      <label htmlFor="email">Correo electrónico</label>
      <input
        className={`px-5 py-2 border bg-gray-200 rounded mb-5 ${errors.email && "border-red-500"}`}
        type="email"
        {...register("email", { required: true })}
      />

      <label htmlFor="email">Contraseña</label>
      <input
        className={`px-5 py-2 border bg-gray-200 rounded mb-5 ${errors.password && "border-red-500"}`}
        type="password"
        {...register("password", { required: true, minLength: 6 })}
      />

      <span className="text-red-500">{errorMessage}</span>

      <button className="btn-primary">Crear cuenta</button>

      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/login" className="btn-secondary text-center">
        Ingresar
      </Link>
    </form>
  );
};
