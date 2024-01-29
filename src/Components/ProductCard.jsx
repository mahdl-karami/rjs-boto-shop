// ! Import Modules
import { ShortThis } from "../Helpers/TextShorter";
import styles from "./ProductCard.module.css";
import ProductPanel from "./ProductPanel";

const ProductCard = ({ product ,  product: { image, title, price } }) => {
	return (
		<div className={styles.card}>
			<div style={{ textAlign: "center" }}>
				<img src={image} alt={ShortThis(title, 3) + " Image"} />
			</div>
			<h5>{ShortThis(title, 3)}</h5>
			<p>{price} $</p>
			<ProductPanel product={product}/>
		</div>
	);
};

export default ProductCard;
