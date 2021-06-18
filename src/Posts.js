import React from "react";
import { Avatar } from "@material-ui/core";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CommentIcon from "@material-ui/icons/Comment";
import IosShareOutlinedIcon from "@material-ui/icons/IosShareOutlined";
import TurnedInNotOutlinedIcon from "@material-ui/icons/TurnedInNotOutlined";

import "./Posts.css";

function Posts({ profile, name, location, image, message, timestamp }) {
  return (
    <div className="posts">
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
            <IosShareOutlinedIcon />
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
          <p className="timestamp">{timestamp}</p>
        </div>
      </div>
    </div>
  );
}

export default Posts;
