import { products } from "../data/product";
import ProductCart from "../components/ProductCart";

const Home = () => {
  return (
    <div className="container mx-auto mt-8 max-w-screen-xl bg-gray-900 p-6 rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center">
        {products.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
