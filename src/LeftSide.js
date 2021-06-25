import React, { useEffect, useState } from "react";
import "./LeftSide.css";

import Stories from "./Stories";
import Post from "./Post.js";

import { db } from "./firebase";
import ImageUpload from "./ImageUpload";

function LeftSide() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
      })));
    });
  }, []);

  return (
    <div className="leftSide">
      {/* Stories */}
      <Stories />
      <ImageUpload />
      {/* Posts */}
      {posts.length <= 0
        ? "Loading ..."
        : posts.map((post) => (
            <Post
              profile={post.data.imageURL}
              name={post.data.username}
              location={post.data.location}
              image={post.data.imageURL}
              message={post.data.caption}
              key={post.id}
            />
          ))}
      {console.log(posts)}
    </div>
  );
}

export default LeftSide;
