import Link from "next/link";
import Image from "next/image";

import { titleFont } from "@/config/fonts";

export const PageNotFound = () => {
  return (
    <div 
      className="
        h-screen w-full
        flex flex-col-reverse md:flex-row justify-center items-center 
        align-middle
      "
    >
      <div className="px-5 mx-5 text-center">
        <h2 className={`${titleFont.className} antialiased text-9xl`}>404</h2>

        <p className="font-semibold text-xl">Whoops! Lo sentimos mucho</p>

        <p className="font-light">
          <span>Puedes regresar al </span>
          <Link className="font-bold hover:underline transition-all" href="/">
            Inicio
          </Link>
        </p>
      </div>

      <div className="px-5 mx-5">
        <Image 
          src="/imgs/starman_750x750.png"
          alt="Starman"
          className="p-5 sm:p-0"
          width={550}
          height={550}
        />
      </div>
    </div>
  );
};
