import { ShortThis } from "../Helpers/TextShorter";
import styles from "./ProductCard.module.css";
const ProductCard = ({ product: { image, title, price, category } }) => {
	return (
		<div className={styles.card}>
			<div style={{ textAlign: "center" }}>
				<img src={image} alt={ShortThis(title, 3) + " Image"} />
			</div>
			<h5>{ShortThis(title, 3)}</h5>
			<p>{price} $</p>
		</div>
	);
};

export default ProductCard;
