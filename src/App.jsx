import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Shop from "./Component/Main/Shop";
import Fotter from "./Component/Fotter/Fotter";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Header />
      {/* <Shop></Shop> */}
      <Outlet />
      <Fotter></Fotter>
    </div>
  );
}

export default App;
