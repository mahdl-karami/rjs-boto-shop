import { Link } from "react-router-dom";
import { ShortThis } from "../Helpers/TextShorter";
import styles from "./DetailsDiscription.module.css";
const DetailsDiscription = ({ product }) => {
	return (
		<div>
			<h4>{ShortThis(product.title)}</h4>
			<p>{product.description}</p>
			<div>
				<div>
					<p>{product.category}</p>
					<p>{product.price}</p>
				</div>
				<Link to="/products">
					<button>Back To Products</button>
				</Link>
			</div>
		</div>
	);
};

export default DetailsDiscription;
