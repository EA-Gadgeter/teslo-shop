import { titleFont } from "@/config/fonts";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full flex justify-center gap-3 mb-10 text-xs">
      <Link href="/">
        <span className={`${titleFont.className} antialiased font-bold`}>
          Teslo
        </span>
        <span>| Shop</span>
        <span> {new Date().getFullYear()}</span>
      </Link>

      <Link href="/">
        Privacidad & Legal
      </Link>

      <Link href="/">
       Ubicaciones
      </Link>
    </div>
  );
};
