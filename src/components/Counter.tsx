import { useSelector, useDispatch } from "react-redux";
import Button from "./ui/Button";
import { RootState } from "../app/store";
import { decrement, increment, incrementByAmount } from "../app/features/counter/counterSlice";

const Counter = () => {
  const { text, value } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center space-x-4">
      <div>
        <h3 className="text-center text-red-500">Counter: {value}</h3>
        <Button onClick={() => dispatch(increment())}>
          {text}
        </Button>
      </div>
      <div>
        <h3 className="text-center text-blue-500">Counter: {value}</h3>
        <Button onClick={() => dispatch(decrement())}>
          Decrease Counter
        </Button>
      </div>
      <div>
        <h3 className="text-center text-green-500">Counter: {value}</h3>
        <Button onClick={() => dispatch(incrementByAmount(5))}>
          Increased By Amount
        </Button>
      </div>
    </div>
  );
};

export default Counter;
