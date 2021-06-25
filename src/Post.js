import React from "react";
import { Avatar } from "@material-ui/core";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from '@material-ui/icons/Share';
import TurnedInNotOutlinedIcon from "@material-ui/icons/TurnedInNotOutlined";

import "./Posts.css";

function Post({ profile, name, location, image, message, timestamp, key }) {
  return (
    <div key={key} className="post">
      <div className="posts__top">
        <Avatar src={profile} />
        <div className="post__infos">
          <h6>{name}</h6>
          <p>{location}</p>
        </div>
        <MoreHorizIcon />
      </div>
      <div
        className="posts__image"
        style={{ background: `url(${image}) no-repeat center` }}
      ></div>
      <div className="posts__footer">
        <div className="posts__react">
          <div className="posts__react__left">
            <FavoriteBorderIcon />
            <CommentIcon />
            <ShareIcon />
          </div>
          <div className="posts__react__right">
            <TurnedInNotOutlinedIcon />
          </div>
        </div>
        {/* Message + Timestamp */}
        <div className="posts__message">
          <h6>
            <b>{name}</b>
          </h6>
          <p className="message">{message}</p>
          <p className="timestamp">
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
