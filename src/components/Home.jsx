import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="w-10/12 mx-auto">
        <Navbar/>
        <Outlet/>
        <Footer/>
        </div>
    );
};

export default Home;