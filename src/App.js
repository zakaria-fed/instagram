import { Button, Input, makeStyles, Modal } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import { auth } from "./firebase";
import ImageUpload from "./ImageUpload";
import Main from "./Main";
import Navbar from "./Navbar";

import userContext from "./userContext";

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

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");

  const [user, setUser] = useState(null);

  const signUp = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        setUser(user);
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((err) => alert(err.message));

    setOpen1(false);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email1, password1)
      .then((authUser) => setUser(authUser))
      .catch((err) => alert(err.message));

    setOpen2(false);
    setEmail1("");
    setPassword1("");
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User has logged in
        console.log(authUser);
        setUser(authUser);
      } else {
        // User has logged out
        setUser(null);
      }

      return () => {
        unsubscribe();
      };
    });
  }, [user, username]);

  return (
    <div className="app">
      {/* Modal */}
      {user === null && (
        <div className="signup__page">
          <center>
            <img
              src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo-500x313.png"
              alt="Instagram Logo"
              className="logo"
            />
            <br />
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "30px" }}
              onClick={() => setOpen1(true)}
            >
              Sign Up
            </Button>

            <Button
              variant="contained"
              color="default"
              onClick={() => setOpen2(true)}
            >
              Sign in
            </Button>
          </center>
        </div>
      )}
      <Modal open={open1} onClose={() => setOpen1(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img
                src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo-500x313.png"
                alt="Instagram Logo"
                className="logo"
              />
            </center>

            <Input
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>

          <Button type="submit" onClick={signUp}>
            Sign up
          </Button>
        </div>
      </Modal>

      <Modal open={open2} onClose={() => setOpen2(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signin">
            <center>
              <img
                src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo-500x313.png"
                alt="Instagram Logo"
                className="logo"
              />
            </center>

            <Input
              placeholder="Email"
              type="text"
              value={email1}
              onChange={(e) => setEmail1(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="text"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
            />
          </form>

          <Button type="submit" onClick={signIn}>
            Sign In
          </Button>
        </div>
      </Modal>

      {user && (
        <>
          <userContext.Provider value={user.providerData}>
            <Navbar />
            <Main />
          </userContext.Provider>
        </>
      )}
    </div>
  );
}

export default App;
