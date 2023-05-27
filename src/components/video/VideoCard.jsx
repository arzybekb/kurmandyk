import React from "react";
import YouTube from "react-youtube";

const VideoCard = ({ videoId, title }) => {
  const videoOptions = {
    width: "100%",
    height: "240px",
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={videoOptions} />
      <h6>{title}</h6>
    </div>
  );
};

export default VideoCard;
