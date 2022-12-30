import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CardConcert from "./components/CardConcert";
import About from "./pages/About/About";
import Concert from "./pages/Concert/Concert";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import Reservation from "./pages/Reservation/Reservation";
import SingleReservation from "./pages/Reservation/SingleReservation";
import SharedLayout from "./pages/SharedLayout";
import SharedReservationLayout from "./pages/SharedReservationLayout";

import AdminLayout from "./pages/Admin/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminArtist from "./pages/Admin/AdminArtist";
import AdminClient from "./pages/Admin/AdminClient";
import AdminConcert from "./pages/Admin/AdminConcert";
import AdminSalle from "./pages/Admin/AdminSalle";

function App() {
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
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        {/* admin routes */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Navigate to='/admin/artiste' />} />
          <Route path="artiste" element={<AdminArtist />} />
          <Route path="client" element={<AdminClient />} />
          <Route path="concert" element={<AdminConcert />} />
          <Route path="salle" element={<AdminSalle />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
