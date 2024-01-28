// ! Import Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// ! Import Components And Pages
import SearchBar from "../Components/SearchBar";
import ProductCard from "../Components/ProductCard";
import CategoryFilter from "../Components/CategoryFilter";
// ! Import Reducer Action
import { FETCH_PRODUCTS } from "../Features/Products/ProductsSlice";
// ! Import Modules
import styles from "./Products.module.css";

const Products = () => {
	// ! Set States
	const [search, setSearch] = useState("");
	const [category, setCategory] = useState("all");
	// ! Redux Things
	const dispatch = useDispatch();
	const state = useSelector((state) => state.Products);
	// ! Fetch Data By Axios > Storea (Side Effect)
	useEffect(() => {
		if (!state.products.length) {
			dispatch(FETCH_PRODUCTS());
		}
	}, []);
	return (
		<div>
			<SearchBar search={search} setSearch={setSearch}>
				<CategoryFilter category={category} setCategory={setCategory} />
			</SearchBar>
			<div className={styles.productsList}>
				{/* // ! Loading Spinner */}
				{state.isLoading && <h1>Loading ...</h1>}
				{/* // ! Render Products */}
				{state.products.map((product, i) => (
					<ProductCard key={i} product={product} />
				))}
			</div>
		</div>
	);
};

export default Products;
