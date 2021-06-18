import React from "react";
import "./Stories.css";

import StoryReel from "./StoryReel";

function Stories() {
  return (
    <div className="stories">
      <StoryReel
        image="https://images.pexels.com/photos/4628315/pexels-photo-4628315.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        name="zakaria"
      />
      <StoryReel
        image="https://images.pexels.com/photos/7440281/pexels-photo-7440281.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        name="salma"
      />
      <StoryReel
        image="https://images.pexels.com/photos/8264620/pexels-photo-8264620.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        name="mama"
      />
      <StoryReel
        image="https://images.pexels.com/photos/6789847/pexels-photo-6789847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        name="baba"
      />
      <StoryReel
        image="https://images.pexels.com/photos/6826295/pexels-photo-6826295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        name="ayoub"
      />
    </div>
  );
}

export default Stories;
