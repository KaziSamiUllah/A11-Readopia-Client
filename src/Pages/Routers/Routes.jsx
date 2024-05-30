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
import Updatebook from "../UpdateBook/Updatebook";
import Error from "../Error";
import Allusers from "../AllUsers/Allusers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<Error></Error>,
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
        )},
        {
          path: "/allUsers",
          element: 
            <PrivateRoutes>
              <Allusers></Allusers> 
            </PrivateRoutes>
                  ,
        },
      {
        path: "/allUsers",
        element: 
          <PrivateRoutes>
            <Allusers></Allusers> 
          </PrivateRoutes>
                ,
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
      {
        path: "/updateBook/:name",
        element: (
          <PrivateRoutes>
            <Updatebook></Updatebook>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
