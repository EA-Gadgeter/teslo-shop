import type { Size } from "@/interfaces/product.interface";

interface Props {
  selectedSize: Size;
  availableSizes: Size[];
}

export const  SizeSelector: React.FC<Props> = ({ selectedSize, availableSizes }) => {
  const selectedSizeStyle = "underline";

  return (
    <div className="my-5 ">
      <h3 className="font-bold mb-4">Tallas disponibles</h3>

      <div className="flex gap-2">
        {
          availableSizes.map(size => (
            <button
              key={size}
              className={`
                text-lg hover:underline 
                ${selectedSize === size && selectedSizeStyle}
              `}
            >
              {size}
            </button>
          ))
        }
      </div>
    </div>
  );
};