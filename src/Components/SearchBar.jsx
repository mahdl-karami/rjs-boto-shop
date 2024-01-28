import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
	return (
		<form className={styles.form}>
			<input type="text" name="search" placeholder="Search" />
			<button type="submit">
				<FaSearch />
			</button>
		</form>
	);
};

export default SearchBar;
