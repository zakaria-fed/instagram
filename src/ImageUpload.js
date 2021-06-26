import { Button } from "@material-ui/core";
import React, { useState, useContext } from "react";
import { db, storage } from "./firebase";
import firebase from "firebase";

import "./ImageUpload.css";

import userContext from "./userContext";

function ImageUpload() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const val = useContext(userContext);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const upload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function
        const progress1 = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setProgress(progress1);
      },
      (err) => {
        // Error Function
        console.log(err);
        alert(err.message);
      },
      () => {
        // Complete Functon
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            // Post the Image inside the DB
            db.collection("posts").add({
              timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageURL: url,
              username: val[0].displayName,
            });

            setCaption("");
            setProgress(0);
            setImage(null);
          })
          .catch((err) => alert(err.message));
      }
    );
  };
  return (
    <div className="imageupload">
      {/* Caption */}
      <input
        value={caption}
        placeholder="Enter a caption ..."
        onChange={(e) => setCaption(e.target.value)}
        className="caption"
      />
      {/* File Input */}
      {/* Post Button */}
      <div className="upload__div">
        <input className="file" type="file" onChange={handleChange} />
        <div className="btn__pro">
          <Button
            className="upload__button"
            color="primary"
            variant="contained"
            onClick={upload}
          >
            Upload
          </Button>
          <progress value={progress} max="100" />
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
