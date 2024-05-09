import { Outlet } from "react-router-dom";
import Nav from "./Navbar/Nav";

const Layout = () => {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
