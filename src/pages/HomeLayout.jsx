import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <footer style={{ position: "fixed", bottom: "0" }}>footer</footer> */}
    </>
  );
};

export default HomeLayout;
