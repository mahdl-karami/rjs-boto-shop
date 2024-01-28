// ! Import Modules
import styles from "./Layout.module.css";
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className={styles.box}>
			<Link to="/">
				<h1>BotoShop</h1>
			</Link>
			<Link to="/cart">
				<button>
					<FaOpencart />
				</button>
			</Link>
		</header>
	);
};

export default Header;
