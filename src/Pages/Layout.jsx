import Header from "../Modules/Header";
import Footer from "../Modules/Footer";
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
