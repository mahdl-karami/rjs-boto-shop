import Footer from "./Modules/Footer";
import Header from "./Modules/Header";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Pages/Layout";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import NoPage from "./Pages/NoPage";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Navigate to="/products" />} />
					<Route path="/products" element={<Products />} />
					<Route path="/products/:id" element={<ProductDetails />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/*" element={<NoPage />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
