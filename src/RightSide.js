import { Avatar, Button } from "@material-ui/core";
import React, { useContext } from "react";
import { auth } from "./firebase";
import "./RightSide.css";

import userContext from "./userContext";

function RightSide() {
  const val = useContext(userContext);

  return (
    <div className="rightSide">
      <div className="container">
        <div className="rightSide__switch">
          <Avatar src={val.photoURL} />
          <div className="rightSide__infos">
            <h6 className="infos__name">{val[0].displayName}</h6>
            <h6 className="infos__username">{val[0].email}</h6>
          </div>
          <div className="action">
            <Button
              variant="contained"
              color="secondary"
              onClick={() => auth.signOut()}
            >
              Log out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
