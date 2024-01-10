import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

import { Title } from "@/components/ui";
import { QuantitySelector } from "@/components/product";

import { initialData } from "@/seed/seed";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
];

export default function() {
  if (productsInCart.length <= 0) return redirect("/empty");

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito" />

        <span>Agrega más productos</span>
        <Link href="/" className="underline mb-5">
          Continúa comprando
        </Link>

        <div 
          className="
            flex flex-col-reverse
            sm:grid sm:grid-cols-2 gap-10
          "
        >
          <ul className="flex flex-col gap-8 mt-5">
            {
              productsInCart.map(product => (
                <li key={product.slug} className="flex gap-5">
                  <Image
                    src={ `/products/${product.images[1]}`}
                    width={100}
                    height={100}
                    alt={product.title}
                    className="w-[100px] h-[100px] rounded"
                  />

                  <div>
                    <p>{product.title}</p>
                    <p>${product.price}</p>
                    <QuantitySelector quantity={3} />

                    <button className="mt-3 underline font-semibold text-red-500">
                      Eliminar
                    </button>
                  </div>
                </li> 
              ))
            }
          </ul>

          <div className="h-fit p-7 bg-white shadow-md rounded-xl">
            <h2 className="text-2xl mb-2">
              Resumen de orden
            </h2>

            <div className="grid grid-cols-2">
              <span>No. productos</span>
              <span className="text-right">3 productos</span>

              <span>Subtotal</span>
              <span>$100</span>

              <span>Impuetos (15%)</span>
              <span>$100</span>

              <span className="mt-5 text-2xl">Total</span>
              <span className="mt-5 text-2xl text-right">$100</span>
            </div>

            <Link 
              href="/checkout/address"
              className="w-full block mt-5 btn-primary text-center"
            >
              Siguiente
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}