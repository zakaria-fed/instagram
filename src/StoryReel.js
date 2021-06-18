import React from "react";
import "./StoryReel.css";

function StoryReel({ image, name }) {
  return (
    <div className="storyReel">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="storyReel__image"
      ></div>
      <h4>{name}</h4>
    </div>
  );
}

export default StoryReel;
