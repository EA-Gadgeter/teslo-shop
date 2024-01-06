"use client";

import { useState } from "react";

import { IoRemoveCircleOutline, IoAddCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
}

export const QuantitySelector: React.FC<Props> = ({ quantity }: Props) => {
  const [count, setCount] = useState(quantity);

  const onQuantityChange = (value: number) => {
    if (count + value < 1) return;

    setCount(count + value);
  };

  return (
    <div className="flex gap-3">
      <button onClick={() =>  onQuantityChange(-1)}>
        <IoRemoveCircleOutline size={30}/>
      </button>

      <span className="w-20 px-5 text-center bg-gray-200 leading-loose rounded">
        {count}
      </span>

      <button onClick={() =>  onQuantityChange(1)}>
        <IoAddCircleOutline size={30}/>
      </button>
    </div>
  );
};