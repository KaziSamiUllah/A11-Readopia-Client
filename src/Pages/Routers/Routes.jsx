import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Shared Components/Layout";
import Home from "../Home/Home";
import AllBooks from "../AllBooks/AllBooks";
import AddBooks from "../AddBooks/AddBooks";
import BorrowedBooks from "../BorrowedBooks/BorrowedBooks";

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
        }
      ]
    }
  ]);

  export default router;