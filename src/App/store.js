import { configureStore } from "@reduxjs/toolkit";

import ProductsReducer from "../Features/Products/ProductsSlice";
import CartReducer from "../Features/Cart/CartSlice";

const store = configureStore({
	reducer: {
		Products: ProductsReducer,
		Cart: CartReducer,
	},
});

export default store;
