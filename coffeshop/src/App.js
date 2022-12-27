import React, { useRef, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import BookTable from "./components/BookTable/BookTable";
import SpecialCoffee from "./components/SpecialCoffee/SpecialCoffee";
import Quotes from "./components/Quotes/Quotes";
import Best from "./components/Best/Best";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="app">
      <Home />
      <SpecialCoffee />
      <BookTable />
      <Menu />
      <Best />
      <Quotes />
      <Contact/>
    </div>
  );
}

export default App;
