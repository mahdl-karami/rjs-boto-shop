import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ShortThis } from "../Helpers/TextShorter";
import ProductPanel from "../Components/ProductPanel";
import DetailsDiscription from "../Components/DetailsDiscription";
import styles from './ProductDetails.module.css'
const ProductDetails = () => {
	const state = useSelector((state) => state.Products);
	const pathId = useLocation().pathname.split("/")[2];
	const product = state.products.find((p) => p.id == pathId);
	return (
		<div className={styles.details}>
			<div>
				<img src={product.image} alt={ShortThis(product.title)} />
				<ProductPanel product={product} />
			</div>
			<DetailsDiscription product={product} />
		</div>
	);
};

export default ProductDetails;
