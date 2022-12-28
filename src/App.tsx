import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardConcert from "./components/CardConcert";

function App() {
  return <CardConcert price={12333} title={"Titre"}/>;
}

export default App;
