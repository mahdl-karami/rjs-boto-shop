import { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { FETCH_PRODUCTS } from "../Features/Products/ProductsSlice";

const Products = () => {
	const [search, setSearch] = useState("");
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(FETCH_PRODUCTS());
	}, []);
	return (
		<div>
			<SearchBar search={search} setSearch={setSearch} />
		</div>
	);
};

export default Products;
