import { configureStore } from "@reduxjs/toolkit";

import ProductsReducer from "../Features/Products/ProductsSlice";

const store = configureStore({
	reducer: {
		Products: ProductsReducer,
	},
});

export default store;
