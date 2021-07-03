import React, { useContext, useState } from "react";
import { Avatar, Button, makeStyles, Modal } from "@material-ui/core";

import "./Navbar.css";

import userContext from "./userContext";
import { auth } from "./firebase";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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

function Navbar() {
  const val = useContext(userContext);
  const [open, setOpen] = useState(false);

  // Modal
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  return (
    <div className="navbar">
      {/* => Logo + Icons + Avatar */}
      <img
        src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo-500x313.png"
        alt="Instagram Clone"
        className="logo"
      />

      <div className="navbar__right">
        <Avatar
          onClick={() => setOpen(true)}
          src={val[0].photoURL !== null ? val[0].photoURL : ""}
        />
      </div>

      {/* Modal */}

      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <h5>Click the Button to log out</h5>
          <hr />
          <Button
            color="secondary"
            variant="contained"
            type="submit"
            onClick={() => auth.signOut()}
          >
            Log Out
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Navbar;
