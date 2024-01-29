export const checkQueries = (search, category) => {
	const query = {};
	if (search) {
		query.search = search;
	}
	if (category != "all") {
		query.category = category;
	}
	return query;
};
