import Link from "next/link";
import Image from "next/image";

import { Title } from "@/components/ui";

import { initialData } from "@/seed/seed";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
];

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar orden" />

        <Link href="/cart" className="underline mb-5">
          Editar carrito
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
                    <p>${product.price} x 3</p>
                    <p className="font-semibold">Subtotal: ${product.price * 3}</p>
                  </div>
                </li> 
              ))
            }
          </ul>

          <div className="h-fit p-7 bg-white shadow-md rounded-xl">
            <h2 className="text-2xl mb-2 font-bold">Dirección de entrega</h2>
            <div className="mb-10">
              <p className="text-xl font-semibold">Emiliano Acevedo</p>
              <p>Av. Siempre viva 123</p>
              <p>Col. Centro</p>
              <p>Alcaldía Cuahtemoc</p>
              <p>Ciudad de Mexico</p>
              <p>CP: 123454</p>
              <p>123.123.123</p>
            </div>

            <div className="w-full h-[2px] rounded bg-gray-200 mb-10" />

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
              href="/orders/123"
              className="w-full block mt-5 mb-2 btn-primary text-center"
            >
              Ordernar
            </Link>

            <p className="text-xs text-center">
              Al hacer lick en &quot;Ordenar&quot;, aceptas nuestros <a href="#" className="underline">términos y condiciones</a> y <a href="#" className="underline">política de privacidad</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}