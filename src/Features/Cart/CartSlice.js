// ! Import Lybaries
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
	total: 0,
	cuantity: 0,
};

export const CartSlice = createSlice({
	name: "Cart",
	initialState,
	reducers: {
		ADD_ITEM: (state, action) => {
			state.products.push({ ...action.payload, ["count"]: 1 });
		},
		INCERASE_ITEM: (state, action) => {
			state.products.find((p) => p.id == action.payload.id).count += 1;
		},
		DECREASE_ITEM: (state, action) => {
			state.products.find((p) => p.id == action.payload.id).count -= 1;
		},
		DELET_ITEM: (state, action) => {
			state.products = state.products.filter((p) => p.id != action.payload.id);
		},
	},
});

export default CartSlice.reducer;
export const { ADD_ITEM, INCERASE_ITEM, DECREASE_ITEM, DELET_ITEM } = CartSlice.actions;
