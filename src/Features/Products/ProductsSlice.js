// ! Import Lybaries
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// ! Import Configs
import { API } from "../../Services/API_Config";

const initialState = {
	isLoading: false,
	products: [],
	error: "",
};

// ! Create Async ExtraReducer
export const FETCH_PRODUCTS = createAsyncThunk("Products/FETCH_PRODUCTS", () => {
	return API.get("/products");
});

export const ProductsSlice = createSlice({
	name: "Products",
	initialState,
	extraReducers: (bulder) => {
		// ! Add Thunk Cases
		bulder.addCase(FETCH_PRODUCTS.pending, (state) => {
			// ! Pending
			state.isLoading = true;
		});
		bulder.addCase(FETCH_PRODUCTS.fulfilled, (state, action) => {
			// ! Success
			state.isLoading = false;
			state.products = action.payload;
			state.error = "";
		});
		bulder.addCase(FETCH_PRODUCTS.rejected, (state, action) => {
			// ! Errore
			state.isLoading = false;
			state.products = [];
			state.error = action.error.message;
		});
	},
});

export default ProductsSlice.reducer;
