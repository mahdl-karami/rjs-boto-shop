import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
const SearchBar = ({ search, setSearch }) => {
	const handleChange = (e) => {
		setSearch(e.target.value);
	};
	return (
		<form className={styles.form}>
			<input type="text" name="search" placeholder="Search" value={search} onChange={(e) => handleChange(e)} />
			<button type="submit">
				<FaSearch />
			</button>
		</form>
	);
};

export default SearchBar;