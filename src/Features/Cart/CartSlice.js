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
			state.products = [...state.products, { ...action.payload, ["count"]: 1 }];
		},
		INCERASE_ITEM: () => {},
		DECREASE_ITEM: () => {},
		DELET_ITEM: () => {},
	},
});

export default CartSlice.reducer;
export const { ADD_ITEM, INCERASE_ITEM, DECREASE_ITEM, DELET_ITEM } = CartSlice.actions;
