import { createSlice } from "@reduxjs/toolkit";
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
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {  } = cartSlice.actions;

export default cartSlice.reducer;
