import React from "react";
import "./albumimage.css";
export default function Albumimage({ url }) {
  return (
    <div className="albumImage flex">
      <img src={url} alt="image_song" className="albumImage-art" />
      <div className="albumImage-shadow">
        <img src={url} alt="shadow" className="albumImage-shadow" />
      </div>
    </div>
  );
}
