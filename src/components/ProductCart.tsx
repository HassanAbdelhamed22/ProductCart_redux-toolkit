import { Product } from "../interface/index";
import Button from "./ui/Button";

interface ProductCardProps {
  product: Product;
}

const ProductCart = ({ product }: ProductCardProps) => {
  return (
    <div className="w-72 h-[26rem] bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-md flex flex-col">
      <div className="relative">
        <div className="absolute top-2 left-2 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-bold">
          {product.discountPercentage}% OFF
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover rounded-md"
        />
      </div>
      <h3 className="mt-4 text-lg font-bold text-gray-100">{product.name}</h3>
      <div className="mt-2 text-xl text-gray-100">
        <span className="line-through text-gray-500 mr-2">
          ${product.priceBefore}
        </span>
        <span className="text-blue-400 font-bold">${product.priceAfter}</span>
      </div>
      <Button className="mt-auto w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCart;
