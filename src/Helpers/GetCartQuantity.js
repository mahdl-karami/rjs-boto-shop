export const updateCart = (products, stateKey) => {
	const state = products.map((p) => ({ count: p.count, price: p.price }));
	// ! Process Quantity
	const quantity = products.map((p) => p.count).reduce((partialSum, a) => partialSum + a, 0);
	console.log(state);
	if (stateKey == "quantity") {
		return quantity;
	}
	// ! Process Total
	const total = state.map((product) => product.count * product.price).reduce((partialSum, a) => partialSum + a, 0);
	if (stateKey == "total") {
		return total;
	}
};
