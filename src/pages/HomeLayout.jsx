import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  // global context
  const value = "some value";

  return (
    <>
      <Navbar />

      <section className="page">
        {isPageLoading ? <div className="loading" /> : <Outlet context={{ value }} />}
      </section>

      {/* <footer style={{ position: "fixed", bottom: "0" }}>footer</footer> */}
    </>
  );
};

export default HomeLayout;
