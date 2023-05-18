import { createBrowserRouter } from "react-router-dom";

import NavigationBar from "../NavigationBar/NavigationBar";
import Home from "../Home/Home/Home";
import AllToys from "../Toys/AllToys/AllToys";
import Login from "../LoginsLayout/Login/Login";
import SignUp from "../LoginsLayout/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationBar></NavigationBar>,
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
      }
    ],
  },
]);

export default router;
