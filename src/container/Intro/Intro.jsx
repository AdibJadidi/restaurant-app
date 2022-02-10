import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants/index";

import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const videoHandler = () => {
    setPlayVideo((pervPlayVideo) => !pervPlayVideo);

    if (!playVideo) {
      vidRef.current.play();
    } else {
      vidRef.current.pause();
    }
  };
  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        loop
        controls={false}
        muted
        type="video/mp4"
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay__circle flex__center"
          onClick={videoHandler}
        >
          {playVideo ? (
            <BsPauseFill size={30} color="#fff" />
          ) : (
            <BsFillPlayFill size={30} color="#fff" />
          )}
        </div>
      </div>
    </div>
  );
};
export default Intro;
