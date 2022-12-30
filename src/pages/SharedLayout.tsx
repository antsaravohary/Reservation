import React from "react";
import { Outlet } from "react-router-dom";
import StyledNavbar from "./StyledNavbar";

function SharedLayout() {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
}

export default SharedLayout;
