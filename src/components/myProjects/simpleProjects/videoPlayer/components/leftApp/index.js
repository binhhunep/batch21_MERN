import styles from "./styles.module.scss";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import musicVSelectorRemaining from "../../../../../../redux/selectors/simpleProjects/videoPlayer/videoSelector";
import mediaVSlice from "../../../../../../redux/slices/simpleProjects/videoPlayer/mediaVSlice";
import videoSlice from "../../../../../../redux/slices/simpleProjects/videoPlayer/videoSlice";

import TitleLeft from "./components/titleLeft/TitleLeft";
import Song from "./components/song";
import TotalSongs from "./components/totalSongs/TotalSongs";

export default function LeftApp({ title, totalSongs }) {
  const [isChoseId, setIsChoseId] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const disPatch = useDispatch();
  const musicSlector = useSelector(musicVSelectorRemaining);

  const playClick = (item) => {
    disPatch(videoSlice.actions.play(item));
    disPatch(mediaVSlice.actions.playChange(item));
  };

  return (
    <div className={`col-lg-6 col-md-12 col-sm-12 ${styles.container}`}>
      <TitleLeft className={styles.container_title} title={title} />
      <TotalSongs
        className={styles.container_totalSongs}
        totalSongs={totalSongs}
      />
      <div className={styles.container_songs}>
        {musicSlector.map((item) => {
          return (
            <div key={item.id} onClick={() => playClick(item)}>
              <Song
                index={item.index}
                avatar={item.avatar}
                audioName={item.audioName}
                author={item.author}
                duration={item.duration}
                iconHeartColor={item.iconHeartColor}
                select={item.select}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
LeftApp.prototype = {
  title: PropTypes.string,
  totalSongs: PropTypes.string,
};
