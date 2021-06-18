import { Avatar } from "@material-ui/core";
import React from "react";
import "./RightSide.css";

function RightSide({ profile, name, username }) {
  return (
    <div className="rightSide">
      <div className="container">
        <div className="rightSide__switch">
          <Avatar src={profile} />
          <div className="rightSide__infos">
              <h6 className="infos__name">{name}</h6>
              <h6 className="infos__username">{username}</h6>
          </div>
          <div className="action">
              <small>Switch</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
