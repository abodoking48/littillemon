import React from "react";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";

import Login from "./routes/Login";
import {Route, Routes} from "react-router-dom";
import Menu from "./routes/Menu";
import About from "./routes/About";


function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/reservations" element = {<Reservations />}/>
        <Route path = "/about" element = {<About />}/>
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/menu" element = {<Menu />}/>
      </Routes>
    </>
  );
}

export default App;
