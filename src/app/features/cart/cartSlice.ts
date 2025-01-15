import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../../interface";
import { addItemToShoppingCart } from "../../../utils/functions";
import { RootState } from "../../store";

export interface CounterState {
  cartItems: Product[];
}

// const [counter, setCounter] = useState(0)
const initialState: CounterState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart", //* Attached with Store *//
  initialState,
  reducers: {
    addItemToCartAction: (state, actionPayload: PayloadAction<Product>) => {
      state.cartItems = addItemToShoppingCart(
        state.cartItems,
        actionPayload.payload
      );
    },
    deleteItemFromCartAction: (state, actionPayload: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== actionPayload.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItemToCartAction, deleteItemFromCartAction } =
  cartSlice.actions;
export const cartSelector = ({ cart }: RootState) => cart;

export default cartSlice.reducer;
