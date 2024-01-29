// ! Import Icons
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import { MdAddShoppingCart } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
// ! Import Modules
import styles from "./ProductPanel.module.css";
import { Link } from "react-router-dom";
const ProductPanel = ({ product : {id} }) => {
	return (
		<div className={styles.panel}>
			<Link to={`/products/${id}`} className={styles.detailes}>
				<button>
					<TbListDetails />
				</button>
			</Link>

			<div>
				<button>
					<MdAddShoppingCart />
				</button>
				{/* <button>
					<FiMinus />
				</button>
				<p>Count</p>
				<button>
					<FiPlus />
				</button>
				<button>
					<FiTrash2 />
				</button> */}
			</div>
		</div>
	);
};

export default ProductPanel;
