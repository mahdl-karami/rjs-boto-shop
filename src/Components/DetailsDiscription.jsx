import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoPricetagOutline } from "react-icons/io5";
import { ShortThis } from "../Helpers/TextShorter";
import { MdOutlineCategory } from "react-icons/md";
import styles from "./DetailsDiscription.module.css";
const DetailsDiscription = ({ product }) => {
  return (
    <div className={styles.description}>
      <h4>{ShortThis(product.title)}</h4>
      <p>{product.description}</p>
      <div className={styles.footer}>
        <div>
          <p>
            <MdOutlineCategory /> {product.category}
          </p>
          <p>
            <IoPricetagOutline /> {product.price}
          </p>
        </div>
        <Link to="/products">
          <button>
            <FaArrowLeftLong /> Back To Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DetailsDiscription;
