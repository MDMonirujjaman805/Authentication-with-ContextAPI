import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Body from "./Body";

const Home = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div>
        {" "}
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-290px)]">
        {" "}
        <Outlet />
      </div>
      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
