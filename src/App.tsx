import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CardConcert from "./components/CardConcert";

import Concert from "./pages/Concert/Concert";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import Reservation from "./pages/Reservation/Reservation";
import SingleReservation from "./pages/Reservation/SingleReservation";
import SharedLayout from "./pages/SharedLayout";
import SharedReservationLayout from "./pages/SharedReservationLayout";
import Tickets from "./pages/About/Tickets";
import AdminArtist from "./pages/Admin/AdminArtist";
import AdminClient from "./pages/Admin/AdminClient";
import AdminConcert from "./pages/Admin/AdminConcert";
import AdminLayout from "./pages/Admin/AdminLayout";
import AdminSalle from "./pages/Admin/AdminSalle";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/reservation/concerts"
            element={<SharedReservationLayout />}
          >
            <Route index element={<Concert />} />
            <Route path=":concertId" element={<SingleReservation />} />
          </Route>
          <Route path="billets" element={<Tickets />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        {user?.role === "ADMIN" ? (
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/artiste" />} />
            <Route path="artiste" element={<AdminArtist />} />
            <Route path="client" element={<AdminClient />} />
            <Route path="concert" element={<AdminConcert />} />
            <Route path="salle" element={<AdminSalle />} />
          </Route>
        ) : (
          <></>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
