import React from "react";
import { Outlet } from "react-router-dom";

function SharedReservationLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default SharedReservationLayout;
