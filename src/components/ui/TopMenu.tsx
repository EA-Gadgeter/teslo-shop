"use client";

import Link from "next/link";

import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

import { titleFont } from "@/config/fonts";

import { useUIStore } from "@/stores";

export const TopMenu = () => {
  const { openSideMenu } = useUIStore();

  return (
    <nav className="w-full flex pt-2 justify-between items-center px-5">
      <Link href="/"> 
        <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
        <span> | Shop</span>
      </Link> 

      <div className="hidden sm:block">
        <Link className="p-2 rounded-md transition-all hover:bg-gray-100" href="/category/men">
          Hombres
        </Link>

        <Link className="p-2 rounded-md transition-all hover:bg-gray-100" href="/category/women">
          Mujeres
        </Link>

        <Link className="p-2 rounded-md transition-all hover:bg-gray-100" href="/category/kids">
          Niños
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/search">
          <IoSearchOutline className="w-5 h-5"/>
        </Link>

        <Link href="/search">
          <div className="relative">
            <span className="absolute px-1 text-xs font-bold rounded-full -top-2 -right-2 bg-blue-700 text-white">3</span>
            
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button className="p-2 rounded-md transition-all hover:bg-gray-100" onClick={openSideMenu}>
          Menú
        </button>
      </div>
    </nav>
  );
};