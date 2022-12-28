import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      </Routes>
    </BrowserRouter>
  )
}

export default App;
