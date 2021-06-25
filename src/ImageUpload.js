import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { db, storage } from "./firebase";
import firebase from "firebase";

function ImageUpload() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const getLocation = () => {
    //   We're gonna return a loaction or null
  };

  const upload = () => {
    const uploadTask = storage.ref(`image/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setProgress(progress);
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
              location: getLocation(),
            });
          });
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
      />
      {/* File Input */}
      <input type="file" onChange={handleChange} />
      {/* Post Button */}
      <Button onClick={upload}>Upload</Button>
    </div>
  );
}

export default ImageUpload;
