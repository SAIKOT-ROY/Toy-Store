import { createBrowserRouter } from "react-router-dom";

import NavigationBar from "../NavigationBar/NavigationBar";
import Home from "../Home/Home/Home";
import AllToys from "../Toys/AllToys/AllToys";
import Login from "../LoginsLayout/Login/Login";
import SignUp from "../LoginsLayout/SignUp/SignUp";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddToys from "../Toys/AddToys/AddToys";
import MyToys from "../Toys/MyToys/MyToys";
import Blogs from "../Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationBar></NavigationBar>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/addtoys',
        element: <AddToys></AddToys>
      },
      {
        path: '/mytoys',
        element: <MyToys></MyToys>
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      }
    ],
  },
]);

export default router;
