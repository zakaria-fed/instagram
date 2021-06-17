import React from "react";
import "./LeftSide.css";

import Stories from "./Stories";
import Posts from "./Posts";

function LeftSide() {
  return (
    <div className="leftSide">
      {/* Stories */}
      <Stories />
      {/* Posts */}
      <Posts />
    </div>
  );
}

export default LeftSide;
