"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

import { titleFont } from "@/config/fonts";

import { uiStore, cartStore } from "@/stores";

export const TopMenu = () => {
  const openSideMenu = uiStore(state => state.openSideMenu);
  const totalItemsInCart= cartStore(state => state.getTotalItems());

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const cartRoute = (totalItemsInCart === 0 && loaded) ? "/empty" : "/cart";

  return (
    <nav className="w-full flex pt-2 justify-between items-center px-5">
      <Link href="/"> 
        <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
        <span> | Shop</span>
      </Link> 

      <div className="hidden sm:block">
        <Link className="p-2 rounded-md transition-all hover:bg-gray-100" href="/gender/men">
          Hombres
        </Link>

        <Link className="p-2 rounded-md transition-all hover:bg-gray-100" href="/gender/women">
          Mujeres
        </Link>

        <Link className="p-2 rounded-md transition-all hover:bg-gray-100" href="/gender/kid">
          Niños
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/search">
          <IoSearchOutline className="w-5 h-5"/>
        </Link>

        <Link href={cartRoute}>
          <div className="relative">
            {
              (totalItemsInCart > 0 && loaded) && (
                <span className="absolute px-1 text-xs font-bold rounded-full -top-2 -right-2 bg-blue-700 text-white">
                  {totalItemsInCart}
                </span>
              )
            }

            <IoCartOutline className="w-5 h-5"/>
          </div>
        </Link>

        <button className="p-2 rounded-md transition-all hover:bg-gray-100" onClick={openSideMenu}>
          Menú
        </button>
      </div>
    </nav>
  );
};