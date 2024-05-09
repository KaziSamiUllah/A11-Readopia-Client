import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Layout from './Shared Components/Layout.jsx';
import AllBooks from './Pages/AllBooks/AllBooks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path:"/",
    element: <Layout></Layout>,
    children:[
      {
        path:"/allBooks",
        element:<AllBooks></AllBooks>
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
