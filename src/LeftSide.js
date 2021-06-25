import React, { useEffect, useState } from "react";
import "./LeftSide.css";

import Stories from "./Stories";
import Post from "./Post.js";

import { db } from "./firebase";

function LeftSide() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="leftSide">
      {/* Stories */}
      <Stories />
      {/* Posts */}
      {posts.length <= 0
        ? "Loading ..."
        : posts.map((post) => (
            <Post
              profile={post.imageURL}
              name={post.username}
              location={post.location}
              image={post.imageURL}
              message={post.caption}
              timestamp={post.timeStamp}
              key={post.key}
            />
          ))}
      {console.log(posts)}
    </div>
  );
}

export default LeftSide;
