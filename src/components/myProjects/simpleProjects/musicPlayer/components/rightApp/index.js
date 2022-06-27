import styles from "./styles.module.scss";
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import TitleRight from "./components/titleRight/TitleRight";
import TotalSongs from "./components/totalSongs/TotalSongs";
import NavBar from "./components/navbar";
import Player from "./components/player";
import Control from "./components/control";

import mediaSlice from "../../../../../../redux/slices/simpleProjects/musicPlayer/mediaSlice";
import mediaSelectorRemaining from "../../../../../../redux/selectors/simpleProjects/musicPlayer/mediaSelector";
import musicSlice from "../../../../../../redux/slices/simpleProjects/musicPlayer/musicSlice";

export default function RightApp({ title, totalSongs }) {
  const selector = useSelector(mediaSelectorRemaining);
  const mediaSelector = selector[0];
  const refPlay = useRef();
  const disPatch = useDispatch();

  const [currentTime, setCurrentTime] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isRedo, setIsRedo] = useState(false);
  const [isMute, setIsMute] = useState(false);

  const controlClick = (message) => {
    let id = mediaSelector.id;
    switch (message) {
      case "play":
        refPlay.current.play();
        disPatch(mediaSlice.actions.play(id));
        disPatch(musicSlice.actions.playMedia(mediaSelector));
        break;
      case "pause":
        refPlay.current.pause();
        disPatch(mediaSlice.actions.pause(id));
        disPatch(musicSlice.actions.playMedia(mediaSelector));
        break;
      case "previous":
        if (id !== 1) {
          id = id - 1;
        } else {
          id = 8;
        }
        disPatch(mediaSlice.actions.changeSong(id));
        disPatch(musicSlice.actions.shuffleMedia(id + 1));
        setIsAutoPlay(false);
        break;
      case "next":
        if (id !== 8) {
          id = id + 1;
        } else {
          id = 1;
        }
        disPatch(mediaSlice.actions.changeSong(id));
        disPatch(musicSlice.actions.shuffleMedia(id - 1));
        setIsAutoPlay(false);
        break;
      case "shuffle":
        setIsShuffle(!isShuffle);
        setIsRedo(false);
        break;
      case "redo":
        setIsRedo(!isRedo);
        setIsShuffle(false);
        break;
      case "mute":
        setIsMute(!isMute);
        break;
      default:
        refPlay.current.pause();
    }
  };

  const controlChange = (message) => {
    refPlay.current.currentTime = message;
  };

  const timeUpdate = () => {
    if (refPlay.current.currentTime >= mediaSelector.timer) {
      let id = mediaSelector.id;
      if (isShuffle === true) {
        if (id < 8) {
          disPatch(mediaSlice.actions.shuffle(id + 1));
          disPatch(musicSlice.actions.shuffleMedia(id + 1));
          setIsAutoPlay(true);
        } else {
          disPatch(mediaSlice.actions.shuffle(1));
          disPatch(musicSlice.actions.shuffleMedia(1));
          setIsAutoPlay(true);
        }
      } else {
        disPatch(mediaSlice.actions.pause(id));
      }
      setCurrentTime(0);
    } else {
      setCurrentTime(Math.floor(refPlay.current.currentTime));
    }
  };

  const ended = () => {
    let id = mediaSelector.id;
    console.log("id", id);
    if (isRedo === true) {
      refPlay.current.play();
      disPatch(mediaSlice.actions.play(id));
    } else {
      disPatch(mediaSlice.actions.pause(id));
    }
  };

  return (
    <div className={` ${styles.container}`}>
      <div className={` ${styles.container_title}`}>
        <div className={` ${styles.container_title_titleRight}`}>
          <TitleRight title={title} />
        </div>
        <div className={` ${styles.container_title_totalSongs}`}>
          <TotalSongs totalSongs={totalSongs} />
        </div>
      </div>
      <div className={`${styles.container_body}`}>
        <div className={` ${styles.container_body_navbar}`}>
          <NavBar
            isMute={isMute}
            onClick={(message) => {
              controlClick(message);
            }}
          />
        </div>
        <div className={` ${styles.container_body_player}`}>
          <Player
            avatar={mediaSelector.avatar}
            singer={mediaSelector.author}
            audioName={mediaSelector.audioName}
            duration={mediaSelector.duration}
            timer={mediaSelector.timer}
            play={mediaSelector.play}
            currentValue={currentTime}
            onChange={(message) => {
              controlChange(message);
            }}
          />
        </div>
        <div className={` ${styles.container_body_control}`}>
          <Control
            play={mediaSelector.play}
            isShuffle={isShuffle}
            isRedo={isRedo}
            onClick={(message) => controlClick(message)}
          />
        </div>
        <audio
          ref={refPlay}
          className={`${styles.container_body_audio}`}
          src={mediaSelector.url}
          onTimeUpdate={(e) => timeUpdate()}
          onEnded={(e) => {
            ended();
          }}
          autoPlay={isAutoPlay || mediaSelector.play ? true : false}
          muted={isMute ? true : false}
        />
      </div>
    </div>
  );
}
RightApp.prototype = {
  title: PropTypes.string,
  totalSongs: PropTypes.string,
};
