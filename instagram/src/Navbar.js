import React from "react";
import "./Navbar.css";

import { Avatar } from "@material-ui/core";

import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

function Navbar({profile}) {
  return <div className="navbar">
      {/* => Logo + Icons + Avatar */}
      <img src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo-500x313.png" alt="Instagram Clone" className="logo" />

      <div className="navbar__right">
          <HomeIcon />
          <SendIcon />
          <ExploreIcon />
          <FavoriteBorderOutlinedIcon />
          <Avatar src={profile} />
      </div>
  </div>;
}

export default Navbar;
