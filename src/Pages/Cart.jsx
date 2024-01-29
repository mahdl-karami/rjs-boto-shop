import { useSelector } from "react-redux";
import styles from "./Cart.module.css";
import { ShortThis } from "../Helpers/TextShorter";
import ProductPanel from "../Components/ProductPanel";
const Cart = () => {
	const state = useSelector((state) => state.Cart);
	return (
		<div className={styles.cart}>
			<div>
				<p>Quantity : {state.quantity}</p>
				<p>Total : {state.total} $</p>
				<p>Status : Pending ...</p>
			</div>
			<div>
				{state.products.map((p, i) => (
					<>
						<p key={i}>{ShortThis(p.title, 3)}</p>
						<ProductPanel product={p} />
					</>
				))}
			</div>
		</div>
	);
};

export default Cart;
