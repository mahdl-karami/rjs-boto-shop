// ! Import Modules
import styles from "./Layout.module.css";
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
// ! Import Hooks
import { useSelector } from "react-redux";

const Header = () => {
	const quantity = useSelector((state) => state.Cart.quantity);
	return (
		<header className={styles.box}>
			<Link to="/">
				<h1>BotoShop</h1>
			</Link>
			<Link to="/cart">
				<button>
					<FaOpencart />
					{!!quantity && <span className={styles.quantity}>{quantity}</span>}
				</button>
			</Link>
		</header>
	);
};

export default Header;
