// ! Import Icons
import { FaHashtag } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { MdPendingActions } from "react-icons/md";
// ! Import Modules
import styles from "./CartPanel.module.css"

const CartPanel = ({state}) => {
	return (
		<div className={styles.panel}>
			<p>
				<GoChecklist /> Total : {state.total.toFixed(2)} $
			</p>
			<p>
				<FaHashtag /> Quantity : {state.quantity}
			</p>
			<p>
				<MdPendingActions />
				Status : Pending ...
			</p>
		</div>
	);
};

export default CartPanel;
