// ! Import Components
import ProductPanel from "./ProductPanel";
// ! Import Helpers
import { ShortThis } from "../Helpers/TextShorter";
// ! Import Modules
import styles from "./ProductCard.module.css";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";

const ProductCard = ({ product, product: { image, title, price, id } }) => {
	return (
		<div className={styles.card}>
			<div style={{ textAlign: "center" }}>
				<img src={image} alt={ShortThis(title, 3) + " Image"} />
			</div>
			<h5>{ShortThis(title, 3)}</h5>
			<p>{price} $</p>
			<div>
				<Link to={`/products/${id}`} className={styles.detailes}>
					<button>
						<TbListDetails />
					</button>
				</Link>
				<ProductPanel product={product} />
			</div>
		</div>
	);
};

export default ProductCard;
