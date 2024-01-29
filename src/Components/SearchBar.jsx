// ! Import Modules
import styles from "./SearchBar.module.css";

const SearchBar = ({ search, setSearch, children }) => {
	return (
		<form className={styles.form}>
			{children} {/* //! Category Select Place */}
			<input type="text" name="search" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
		</form>
	);
};

export default SearchBar;
