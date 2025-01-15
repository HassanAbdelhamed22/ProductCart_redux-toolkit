import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../../interface";

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
      state.cartItems = [...state.cartItems, actionPayload.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItemToCartAction } = cartSlice.actions;

export default cartSlice.reducer;
