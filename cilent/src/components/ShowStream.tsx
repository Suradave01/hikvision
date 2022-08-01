import React from "react";
import JSMpeg from "jsmpeg-player";

const ShowStream = () => {
  React.useEffect(() => {
    const videoUrl = `ws://localhost:3003/`;
    const player = new JSMpeg.VideoElement("#video-canvas", videoUrl, {
      autoplay: true,
    });
    console.log(player);
  });

  return (
    <div id="video-canvas" style={{ height: "80vh", width: "85vw" }}></div>
  );
};

export default ShowStream;
