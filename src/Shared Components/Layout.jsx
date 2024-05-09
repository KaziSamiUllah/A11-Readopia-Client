import { Outlet } from "react-router-dom";
import Nav from "./Navbar/Nav";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <>
    <ToastContainer></ToastContainer>
      <Nav></Nav>
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
