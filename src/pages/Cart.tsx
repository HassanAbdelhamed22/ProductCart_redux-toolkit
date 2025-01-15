import { useSelector } from "react-redux";
import {
  cartSelector,
  deleteItemFromCartAction,
} from "../app/features/cart/cartSlice";
import { Product } from "../interface";
import { useAppDispatch } from "../app/store";
import Button from "../components/ui/Button";

const Cart = () => {
  const { cartItems } = useSelector(cartSelector);
  const dispatch = useAppDispatch();

  const totalCost = cartItems.reduce(
    (acc, item) => acc + item.priceAfter * item.quantity,
    0
  );

  const handleRemoveItem = (id: number) => {
    dispatch(deleteItemFromCartAction(id));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      {cartItems.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item: Product) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 shadow-md flex flex-col bg-gray-100 dark:bg-gray-800"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-gray-100">
                  {item.name}
                </h3>
                <div className="mt-2 text-xl">
                  <span className="line-through text-gray-500 mr-2">
                    ${item.priceBefore}
                  </span>
                  <span className="text-blue-500 font-bold">
                    ${item.priceAfter}
                  </span>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Quantity: <span className="font-bold">{item.quantity}</span>
                </p>
                <Button
                  className="mt-5"
                  onClick={() => handleRemoveItem(item.id)} variant={"danger"}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Total Cost:{" "}
              <span className="text-blue-500">${totalCost.toFixed(2)}</span>
            </h3>
          </div>
        </>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">
          Your cart is empty. Start adding items!
        </p>
      )}
    </div>
  );
};

export default Cart;
