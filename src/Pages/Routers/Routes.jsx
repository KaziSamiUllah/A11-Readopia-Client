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

const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout></Layout>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path:"/allBooks",
          element:<AllBooks></AllBooks>
        },
        {
          path:"/addBooks",
          element:<AddBooks></AddBooks>
        },
        {
          path:"/borrowedBooks",
          element:<BorrowedBooks></BorrowedBooks>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/categories/:name",
          element:<CategoryDetails></CategoryDetails>
        },
        {
          path:"/bookdetail/:name",
          element:<BookDetail></BookDetail>
        },
      ]
    }
  ]);

  export default router;