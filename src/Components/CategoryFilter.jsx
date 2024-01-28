import styles from './CategoryFilter.module.css'
const CategoryFilter = ({ category, setCategory }) => {
	const categories = [`all`, `men's clothing`, `jewelery`, `electronics`, `women's clothing`];
	return (
		<select value={category} onChange={(e) => setCategory(e.target.value)} className={styles.category}>
			{categories.map((categorie, i) => (
				<option value={categorie} key={i}>
					{categorie}
				</option>
			))}
		</select>
	);
};

export default CategoryFilter;
