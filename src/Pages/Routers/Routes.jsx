import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Shared Components/Layout";
import Home from "../Home/Home";
import AllBooks from "../AllBooks/AllBooks";
import AddBooks from "../AddBooks/AddBooks";
import BorrowedBooks from "../BorrowedBooks/BorrowedBooks";
import Login from "../Login&Regiser/Login";
import Register from "../Login&Regiser/Register";

import CategoryDetails from "../CategoryDetails/CategoryDetails";
import BookDetail from "../BookDetail/BookDetail";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allBooks",
        element: (
          <PrivateRoutes>
            <AllBooks></AllBooks>
          </PrivateRoutes>
        ),
      },
      {
        path: "/addBooks",
        element: (
          <PrivateRoutes>
            <AddBooks></AddBooks>
          </PrivateRoutes>
        ),
      },
      {
        path: "/borrowedBooks",
        element: (
          <PrivateRoutes>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/categories/:name",
        element: (
          <PrivateRoutes>
            <CategoryDetails></CategoryDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/bookdetail/:name",
        element: (
          <PrivateRoutes>
            <BookDetail></BookDetail>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
