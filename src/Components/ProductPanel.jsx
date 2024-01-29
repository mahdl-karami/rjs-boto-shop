import { useDispatch, useSelector } from "react-redux";
// ! Import Icons
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import { MdAddShoppingCart } from "react-icons/md";
// ! Import Modules
import styles from "./ProductPanel.module.css";
// ! Import Reducer Actions
import { ADD_ITEM, DECREASE_ITEM, INCERASE_ITEM, DELET_ITEM } from "../Features/Cart/CartSlice";

const ProductPanel = ({ product }) => {
	// ! Redux Things
	const state = useSelector((state) => state.Cart);
	const dispatch = useDispatch();
	// ! Set Product Count (0 or From Cart)
	const count = () => {
		if (state.products.find((p) => p.id == product.id)) {
			return state.products.find((p) => p.id == product.id).count;
		}
		return 0;
	};
	return (
		<div className={styles.panel}>
			{!count() ? (
				<button onClick={() => dispatch(ADD_ITEM(product))}>
					<MdAddShoppingCart />
				</button>
			) : (
				<>
					{count() == 1 ? (
						<button onClick={() => dispatch(DELET_ITEM(product))}>
							<FiTrash2 />
						</button>
					) : (
						<button onClick={() => dispatch(DECREASE_ITEM(product))}>
							<FiMinus />
						</button>
					)}
					<p>{count()}</p>
					<button onClick={() => dispatch(INCERASE_ITEM(product))}>
						<FiPlus />
					</button>
				</>
			)}
		</div>
	);
};

export default ProductPanel;
