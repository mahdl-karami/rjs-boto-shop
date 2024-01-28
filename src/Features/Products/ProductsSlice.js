import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../Services/API_Config";

const initialState = {
	isLoading: false,
	products: [],
	error: "",
};

const FETCH_PRODUCTS = createAsyncThunk("Products/FETCH_PRODUCTS", async () => {
	return await API.get("/products");
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