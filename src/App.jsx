// ! Import Pages
import Layout from "./Pages/Layout";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import NoPage from "./Pages/NoPage";
// ! Import Lybrary
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Routes>
				{/* //! Layout */}
				<Route path="/" element={<Layout />}>
					{/* //! Navigate To Products */}
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
