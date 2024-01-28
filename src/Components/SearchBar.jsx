// ! Import Modules
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ search, setSearch, children }) => {
	return (
		<form className={styles.form}>
			{children}
			<input type="text" name="search" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
			<button type="submit">
				<FaSearch />
			</button>
		</form>
	);
};

export default SearchBar;
