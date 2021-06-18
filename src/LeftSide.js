import React from "react";
import "./LeftSide.css";

import Stories from "./Stories";
import Posts from "./Posts";

function LeftSide() {
  return (
    <div className="leftSide">
      {/* Stories */}
      <Stories />
      {/* Posts */}
      <Posts
        profile="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo-500x313.png"
        name="zakaria"
        location="Sala Al-Jadida, Morocco"
        image="https://images.pexels.com/photos/6826295/pexels-photo-6826295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        message="I am the Greatest Entrepreneur in the world"
        timestamp="1 minute ago"
      />

      <Posts
        profile="https://images.pexels.com/photos/6826295/pexels-photo-6826295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        name="salma"
        location="Sala Al-Jadida, Morocco"
        image="https://images.pexels.com/photos/6789847/pexels-photo-6789847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        message="I am weak"
        timestamp="12 minute ago"
      />

      <Posts
        profile="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo-500x313.png"
        name="zakaria"
        location="Sala Al-Jadida, Morocco"
        image="https://images.pexels.com/photos/7440281/pexels-photo-7440281.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        message="I am the Greatest Entrepreneur in the world"
        timestamp="1 minute ago"
      />
    </div>
  );
}

export default LeftSide;
