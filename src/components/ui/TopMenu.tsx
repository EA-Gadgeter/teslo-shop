import Link from "next/link";

import { titleFont } from "@/config/fonts";

export const TopMenu = () => {
  return (
    <nav className="w-full flex justify-between items-center px-5">
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

      <div className="flex items-center">
        <Link></Link>
      </div>
    </nav>
  );
};