"use client";

import Link from "next/link";

import { useSession } from "next-auth/react";

import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

import { uiStore } from "@/stores";

import { logout } from "@/actions/auth/logout";

export const Sidebar = () => {
  const { isSideMenuOpen, closeSideMenu } = uiStore();

  const menuStyle = "translate-x-full";

  const { data: session } = useSession();
  const isAuthenticated = session ? true : false;

  return (
    <>
      {/* Background black */}
      {isSideMenuOpen && (
        <div
          className="
            w-full h-screen
            fixed top-0 left-0 z-10
            bg-black opacity-30
          "
        ></div>
      )}

      {/* Blur */}
      {isSideMenuOpen && (
        <div
          className="
            w-full h-screen opacity-30
            fixed top-0 left-0 z-10
            fade-in backdrop-filter backdrop-blur-sm
          "
          onClick={closeSideMenu}
        ></div>
      )}

      {/* Sidebar */}
      <nav
        className={`
          w-full sm:w-[500px] h-screen
          fixed right-0 top-0 z-20
          p-5
          bg-white shadow-2xl
          transform transition-all duration-300
          ${!isSideMenuOpen && menuStyle}
        `}
      >
        <button className="absolute top-5 right-5" onClick={closeSideMenu}>
          <IoCloseOutline size={40} />
        </button>

        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />

          <input
            className="
              w-full
              py-1 pl-10
              text-base
              border-b-2 border-gray-200
              bg-gray-50 rounded
              focus:outline-none focus:border-blue-500
            "
            type="text"
            placeholder="Buscar"
          />
        </div>

        {/* Menu */}
        <ul className="flex flex-col gap-3.5 mt-10">
          {isAuthenticated ? (
            <>
              <li>
                <Link
                  href="/profile"
                  className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition-all"
                  onClick={closeSideMenu}
                >
                  <IoPersonOutline size={30} />
                  <span className="text-xl">Perfil</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition-all"
                >
                  <IoTicketOutline size={30} />
                  <span className="text-xl">Ordenes</span>
                </Link>
              </li>

              <li>
                <button
                  className="w-full flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition-all"
                  onClick={() => logout()}
                >
                  <IoLogOutOutline size={30} />
                  <span className="text-xl">Salir</span>
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link
                href="/auth/login"
                className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition-all"
              >
                <IoLogInOutline size={30} />
                <span className="text-xl">Ingresar</span>
              </Link>
            </li>
          )}
        </ul>

        {isAuthenticated && session?.user.role === "admin" && (
          <>
            <div className="w-full h-px bg-gray-200 my-10" />

            <ul className="flex flex-col gap-3.5 mt-10">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition-all"
                >
                  <IoShirtOutline size={30} />
                  <span className="text-xl">Productos</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition-all"
                >
                  <IoPeopleOutline size={30} />
                  <span className="text-xl">Usuarios</span>
                </Link>
              </li>
            </ul>
          </>
        )}
      </nav>
    </>
  );
};
