// ! Import Hooks
import { useDispatch, useSelector } from "react-redux";
// ! Import Icons
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import { MdAddShoppingCart } from "react-icons/md";
// ! Import Modules
import styles from "./ProductPanel.module.css";
// ! Import Reducer Actions
import { ADD_ITEM, INCERASE_ITEM, DECREASE_ITEM, DELET_ITEM } from "../Features/Cart/CartSlice";
import { useState } from "react";

const ProductPanel = ({ product: { id } }) => {
	const [count, setCount] = useState(0);
	const dispatch = useDispatch();
	// const state = useSelector((state) => state.Cart);
	// console.log(state)
	return (
		<div className={styles.panel}>
			{!count ? (
				<button onClick={() => setCount(1)}>
					<MdAddShoppingCart />
				</button>
			) : (
				<>
					{count == 1 ? (
						<button onClick={() => setCount(0)}>
							<FiTrash2 />
						</button>
					) : (
						<button onClick={() => setCount((c) => c - 1)}>
							<FiMinus />
						</button>
					)}
					<p>{count}</p>
					<button onClick={() => setCount((c) => c + 1)}>
						<FiPlus />
					</button>
				</>
			)}
		</div>
	);
};

export default ProductPanel;
