import React, { useState } from "react";
import styles from "./styles.module.scss";
import ReactPlayer from "react-player";
import { VscMute } from "react-icons/vsc";
import { GoUnmute } from "react-icons/go";

function Intro() {
  const [isMuted, setIsMuted] = useState(false);
  const handleMutedClick = () => {
    setIsMuted(!isMuted);
  };
  return (
    <div className={styles.container}>
      <ReactPlayer
        className={styles.container_video}
        playing
        loop
        width="100%"
        height="100%"
        volume={1}
        muted={isMuted ? true : false}
        url="https://vimeo.com/76084225"
        config={{
          playerOptions: {
            playsinline: true,
          },
        }}
      />
      <div className={styles.container_introInfo}>
        <h1 className={styles.container_introInfo_title}>Netflix Elite</h1>
        <p className={styles.container_introInfo_content}>
          Trailer for Netflix series "The Rain" Production: Fox Devil Films GmbH
          for Netflix Amsterdam Director: Simon Ritzler Dop: Carlo Jelavic
          Editor: Michael Timmers Colorist: Mike Bothe Compositing: Stathis
          Nafpliotis
        </p>
      </div>
      <div className={styles.container_volum}>
        {isMuted ? (
          <VscMute
            className={styles.container_volum_muted}
            onClick={handleMutedClick}
          />
        ) : (
          <GoUnmute
            className={styles.container_volum_muted}
            onClick={handleMutedClick}
          />
        )}
      </div>
      <div className={styles.container_bottom}></div>
    </div>
  );
}

//Stylist component
export default Intro;
