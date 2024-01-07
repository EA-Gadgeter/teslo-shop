import Link from "next/link";
import Image from "next/image";

import { IoCartOutline } from "react-icons/io5";

import { Title } from "@/components/ui";

import { initialData } from "@/mocks/mocks";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
];

interface Props {
  params: {
    id: string;
  }
}

export default function({ params }: Props) {
  const { id } = params;
  const isPaid = true;

  const isPaidStyle = !isPaid ? "bg-red-500" : "bg-green-700";

  // TODO: Verificacion
  // redirect("/")

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Orden #${id}`} />

        <div 
          className={`
            flex items-center gap-2
            py-2 px-3.5 mb-5
            text-xs font-bold
            text-white rounded-lg
            ${isPaidStyle}
          `}
        >
          <IoCartOutline size={30} />
          <span className="text-sm">
            {!isPaid ? "Pendiente de pago" : "Orden pagada"}
          </span>
        </div>

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
          </div>
        </div>
      </div>
    </div>
  );
}