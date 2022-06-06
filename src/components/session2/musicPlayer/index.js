import styles from "./styles.module.scss";
import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import musicPlayerSelectorRemaining from "../../../redux/selectors/session2/musicPlayer/musicPlayer";
import Music from "./music";
import Media from "./media";

import mediaPlayerSlice from "../../../redux/slices/session2/musicPlayer/mediaPlayerSlice";

export default function MusicPlayer() {
  const disPatch = useDispatch();
  const musicSelectorClick = (item) => {
    disPatch(mediaPlayerSlice.actions.saveEdit(item));
  };
  const musicsPlayerSlector = useSelector(musicPlayerSelectorRemaining);
  return (
    <div className={`row ${styles.container}`}>
      <div className={`col-7 row ${styles.container_audio}`}>
        <div className={`col-12 ${styles.container_audio_title}`}>
          <h3>Most Popular</h3>
          <p>{"8 Songs"}</p>
        </div>
        {musicsPlayerSlector.map((item) => {
          return (
            <div
              className={`row col-12 ${styles.container_audio_musics}`}
              key={item.id}
              onClick={() => {
                musicSelectorClick(item);
              }}
            >
              <Music
                className={` ${styles.container_audio_music}`}
                index={item.index}
                avatar={item.avatar}
                audioName={item.audioName}
                author={item.author}
                duration={item.duration}
                timer={item.timer}
                iconHeartColor={item.iconHeartColor}
              />
            </div>
          );
        })}
      </div>
      <div className={`col-5 row ${styles.container_media}`}>
        <div className={`col-12 ${styles.container_media_title}`}>
          <h3>Now Playing</h3>
          <p>{"55 Items on the list"}</p>
        </div>
        <Media className={` ${styles.container_media_music}`} />
      </div>
    </div>
  );
}
