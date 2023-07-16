import React from "react";
import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";
// import styled from "styled-components";

// const StyledElement = styled.element `...`
// const StyledBtn = styled.button`
//   background: red;
//   color: white;
//   padding: 2rem;
// `;

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        {/* <StyledBtn>click on me</StyledBtn> */}
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletters" className="nav-link">
            Newsletters
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
