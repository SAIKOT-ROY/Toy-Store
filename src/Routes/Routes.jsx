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
import UpdateToys from "../Toys/MyToys/UpdateToys";
import OneToy from "../Toys/AllToys/OneToy/OneToy";
import PrivateRoutes from "./PrivateRoutes";

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
      },
      {
        path: '/mytoys/:id',
        element: <UpdateToys></UpdateToys>,
        loader:({params}) => fetch(`http://localhost:5000/item/${params.id}`)
      },
      {
        path: '/onetoy/:id',
        element: <PrivateRoutes><OneToy></OneToy></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/item/${params.id}`)
      }
    ],
  },
]);

export default router;
