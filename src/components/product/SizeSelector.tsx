import type { Size } from "@/interfaces/product.interface";

interface Props {
  selectedSize?: Size;
  availableSizes: Size[];
  // eslint-disable-next-line no-unused-vars
  setSize: (size: Size) => void;
}

export const  SizeSelector: React.FC<Props> = ({ selectedSize, availableSizes, setSize }) => {
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
              onClick={() => setSize(size)}
            >
              {size}
            </button>
          ))
        }
      </div>
    </div>
  );
};