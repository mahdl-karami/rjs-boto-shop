export const getSearchParams = (searchParams, key) => {
	if (searchParams.get(key)) {
		return searchParams.get(key);
	}
	if (key == "category") {
		return "all";
	}
	return "";
};
