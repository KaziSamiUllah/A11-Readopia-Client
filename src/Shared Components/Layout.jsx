import { Outlet } from "react-router-dom";
import Nav from "./Navbar/Nav";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      <ToastContainer></ToastContainer>
      <Nav></Nav>
      <div className="montserrat mx-20">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Layout;
