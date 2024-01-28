import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	products: [],
	error: "",
};

const FETCH_PRODUCTS = createAsyncThunk("Products/FETCH_PRODUCTS", () => {
	return fetch("https://fakestoreapi.com/products").then((res) => res.json());
});

export const ProductsSlice = createSlice({
	name: "Products",
	initialState,
	extraReducers: (bulder) => {
		bulder.addCase(FETCH_PRODUCTS.pending, (state) => {
			state.isLoading = true;
		});
		bulder.addCase(FETCH_PRODUCTS.fulfilled, (state, action) => {
			state.isLoading = false;
			state.products = action.payload;
			state.error = "";
		});
		bulder.addCase(FETCH_PRODUCTS.rejected, (state, action) => {
			state.isLoading = false;
			state.products = [];
			state.error = action.error.message;
		});
	},
});

export default ProductsSlice.reducer;
export { FETCH_PRODUCTS };
