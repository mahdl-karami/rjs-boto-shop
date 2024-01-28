import styles from "./Layout.module.css";
import { FaOpencart } from "react-icons/fa";
const Header = () => {
	return (
		<header className={styles.box}>
			<h1>BotoShop</h1>
			<button>
				<FaOpencart />
			</button>
		</header>
	);
};

export default Header;
