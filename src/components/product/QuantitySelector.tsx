"use client";

import { IoRemoveCircleOutline, IoAddCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
  setQuantity: (value: number) => void;
}

export const QuantitySelector: React.FC<Props> = ({ quantity, setQuantity }) => {
  const onQuantityChange = (value: number) => {
    if (quantity + value < 1) return;

    setQuantity(quantity + value);
  };

  return (
    <div className="flex gap-3">
      <button onClick={() =>  onQuantityChange(-1)}>
        <IoRemoveCircleOutline size={30}/>
      </button>

      <span className="w-20 px-5 text-center bg-gray-200 leading-loose rounded">
        {quantity}
      </span>

      <button onClick={() =>  onQuantityChange(1)}>
        <IoAddCircleOutline size={30}/>
      </button>
    </div>
  );
};