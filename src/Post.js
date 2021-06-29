import React, { useEffect, useState, useContext } from "react";
import userContext from "./userContext";
import { Avatar, Modal } from "@material-ui/core";
import { Button, Input, makeStyles } from "@material-ui/core";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import TurnedInNotOutlinedIcon from "@material-ui/icons/TurnedInNotOutlined";

// List Material Ui
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

import { db } from "./firebase";

import "./Posts.css";
import { DoneAllTwoTone } from "@material-ui/icons";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = (theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Post({ name, image, message, postId }) {
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);

  // Modal Component
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const nameOfUser = useContext(userContext)[0].displayName;

  useEffect(() => {
    db.collection("posts")
      .doc(postId)
      .collection("comments")
      .onSnapshot((snapshot) => {
        setComments(
          snapshot.docs.map((doc) => ({
            data: doc.data(),
            id: doc.id,
          }))
        );
      });

    db.collection("posts")
      .doc(postId)
      .collection("likes")
      .onSnapshot((snapshot) => {
        setLikes(
          snapshot.docs.map((doc) => ({
            data: doc.data(),
            id: doc.id,
          }))
        );
      });
  }, []);

  const likeClicked = () => {
    // if(likes) {

    // }

    db.collection("posts").doc(postId).collection("likes").add({
      username: nameOfUser,
    });
    window.removeEventListener('click', likeClicked, true);
  };

  return (
    <div className="post">
      <div className="posts__top">
        <Avatar />
        <div className="post__infos">
          <h6>{name}</h6>
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
            <FavoriteBorderIcon onClick={likeClicked} />
            <span onClick={handleOpen}>{likes.length}</span>
            <CommentIcon />
            <span>{comments.length}</span>
            <ShareIcon />
          </div>
          <div className="posts__react__right">
            <TurnedInNotOutlinedIcon />
          </div>

          {/* Modal of Likes */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div style={modalStyle} className={classes.paper}>
              {likes.map((like) => (
                <ListItem>
                  <DoneAllTwoTone />
                  <ListItemText inset primary={like.data.username} />
                </ListItem>
              ))}
              {console.log(likes)}
            </div>
          </Modal>
        </div>
        {/* Message + Timestamp */}
        <div className="posts__message">
          <h6>
            <strong>{name}</strong>
          </h6>
          <p className="message">{message}</p>
          <p className="timestamp"></p>
          <hr />
          {/* Comments */}
          {comments.length > 0 &&
            comments.map((comm) => (
              <p key={comm.id}>
                <b>{comm.data.username}</b> {comm.data.comment}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
