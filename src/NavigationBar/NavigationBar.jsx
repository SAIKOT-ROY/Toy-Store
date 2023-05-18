import React from "react";
import Navbar from "../Shared/NavBar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-150px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default NavigationBar;
