import { useState } from "react";
import SearchBar from "../Components/SearchBar";

const Products = () => {
	const [search, setSearch] = useState("");
	return (
		<div>
			<SearchBar search={search} setSearch={setSearch}/>
		</div>
	);
};

export default Products;
