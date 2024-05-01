import Link from "next/link";

import { Title } from "@/components/ui";
import { ProductsInCart } from "@/components/cart";
import { OrderSummary } from "@/components/order";

export default function CartPage() {
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
          <ProductsInCart />

          <div className="h-fit p-7 bg-white shadow-md rounded-xl">
            <h2 className="text-2xl mb-2">
              Resumen de orden
            </h2>

            <OrderSummary />

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