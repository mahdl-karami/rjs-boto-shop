import { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { FETCH_PRODUCTS } from "../Features/Products/ProductsSlice";
import ProductCard from "../Components/ProductCard";
import styles from "./Products.module.css";
import CategoryFilter from "../Components/CategoryFilter";
const Products = () => {
	const [search, setSearch] = useState("");
	const [category, setCategory] = useState("all");
	const dispatch = useDispatch();
	const state = useSelector((state) => state.Products);
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
				{state.isLoading && <h1>Loading ...</h1>}
				{state.products.map((product, i) => (
					<ProductCard key={i} product={product} />
				))}
			</div>
		</div>
	);
};

export default Products;
