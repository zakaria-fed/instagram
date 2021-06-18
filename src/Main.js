import React from "react";
import "./Main.css";

import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function Main() {
  return (
    <div className="main">
      {/* Left Side */}
      <LeftSide />

      {/* Right Side */}
      <RightSide
        name="zakaria_imzilen"
        username="Web Developer"
        profile="https://images.pexels.com/photos/7440281/pexels-photo-7440281.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
    </div>
  );
}

export default Main;
