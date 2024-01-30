// ! Import Hooks
import { useSelector } from "react-redux";
// ! Import Modules
import styles from "./Cart.module.css";
import { ShortThis } from "../Helpers/TextShorter";
// ! Import Components
import ProductPanel from "../Components/ProductPanel";
import CartPanel from "../Components/CartPanel";

const Cart = () => {
	const state = useSelector((state) => state.Cart);
	return (
		<div className={styles.cart}>
      <CartPanel  state={state}/>
			<div className={styles.products}>
				{state.products.map((p, i) => (
					<div key={i} className={styles.productItem}>
						<img src={p.image} alt={ShortThis(p.title, 3)} />
						<h5>{ShortThis(p.title, 3)}</h5>
						<ProductPanel product={p} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Cart;
