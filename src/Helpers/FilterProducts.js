// ! Import Helper
import { ShortThis } from "./TextShorter";

export const filterProducts = (state, search, category) => {
	// ! Search And Return By Filter Or InitialState ...
	const searchFilter = () => {
		if (!search) {
			return state.products;
		} else {
			return state.products.filter((product) => ShortThis(product.title.toLowerCase()).includes(search.toLowerCase().trim()));
		}
	};
	// ! Use Searched Items Or InitialState For Filter By Category ...
	const newProducts = () => {
		if (category == "all") {
			return searchFilter();
		} else {
			return searchFilter().filter((product) => product.category == category);
		}
	};
	// ! Return Filterd (Search || Category) Or InitialState
	return newProducts();
};
