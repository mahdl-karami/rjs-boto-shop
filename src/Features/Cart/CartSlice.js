// ! Import Lybaries
import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../../Helpers/GetCartQuantity";

const initialState = {
	products: [],
	total: 0,
	quantity: 0,
};

export const CartSlice = createSlice({
	name: "Cart",
	initialState,
	reducers: {
		ADD_ITEM: (state, action) => {
			state.products.push({ ...action.payload, ["count"]: 1 });
			// ! Update Quantity and Total
			state.quantity = updateCart(state.products, "quantity");
			state.total = updateCart(state.products, "total");
		},
		INCERASE_ITEM: (state, action) => {
			state.products.find((p) => p.id == action.payload.id).count += 1;
			// ! Update Quantity and Total
			state.quantity = updateCart(state.products, "quantity");
			state.total = updateCart(state.products, "total");
		},
		DECREASE_ITEM: (state, action) => {
			state.products.find((p) => p.id == action.payload.id).count -= 1;
			// ! Update Quantity and Total
			state.quantity = updateCart(state.products, "quantity");
			state.total = updateCart(state.products, "total");
		},
		DELET_ITEM: (state, action) => {
			state.products = state.products.filter((p) => p.id != action.payload.id);
			// ! Update Quantity and Total
			state.quantity = updateCart(state.products, "quantity");
			state.total = updateCart(state.products, "total");
		},
	},
});

export default CartSlice.reducer;
export const { ADD_ITEM, INCERASE_ITEM, DECREASE_ITEM, DELET_ITEM } = CartSlice.actions;
