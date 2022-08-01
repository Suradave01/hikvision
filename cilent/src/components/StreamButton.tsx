import React from "react";
import axios from "axios";
import JSMpeg from "jsmpeg-player";

const StreamButton = () => {
  const videoUrl = `ws://localhost:3003/`;
  const player = new JSMpeg.VideoElement("#video-canvas", videoUrl, {
    autoplay: true,
  });
  const playButton = () => {
    player.play();
  };
  const pauseButton = () => {
    player.stop();
  };
  const snapButton = () => {
    axios.get(`/snapshot`).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <button onClick={playButton}>play</button>
      <button onClick={pauseButton}>pause</button>
      <button onClick={snapButton}>snapshot</button>
    </div>
  );
};

export default StreamButton;
