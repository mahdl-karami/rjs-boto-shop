// ! Import Components
import Header from "../Modules/Header";
import Footer from "../Modules/Footer";
// ! Import Lybrary
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
