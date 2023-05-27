import React from "react";
import ReactPlayer from "react-player";
import styles from "./AboutVideoPlayer.module.css";
import compVideo from "../../assets/images/compVideo.svg";

const AboutVideoPlayer = () => {
  return (
    <div className={styles.container}>
      <img className={styles.comp} src={compVideo} alt="comp" />
      <ReactPlayer
        className={styles.video}
        url="https://www.youtube.com/watch?v=r_Az_VdTt20"
        controls={true}
      />
    </div>
  );
};

export default AboutVideoPlayer;
