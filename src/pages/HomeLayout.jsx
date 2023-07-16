import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <h1>home layout</h1>
      <Outlet />
      {/* <footer style={{ position: "fixed", bottom: "0" }}>footer</footer> */}
    </div>
  );
};

export default HomeLayout;
