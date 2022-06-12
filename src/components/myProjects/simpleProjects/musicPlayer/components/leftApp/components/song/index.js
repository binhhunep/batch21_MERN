import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

import Avatar from "./components/avatar/Avatar";
import Number from "./components/number/Number";
import Name from "./components/name/Name";
import PlayPauseIcon from "./components/playPauseIcon/PlayPauseIcon";
import Singer from "./components/singer/Singer";
import Duration from "./components/duration/duration";
import AddListIcon from "./components/addListIcon/AddListIcon";

export default function Song({
  index,
  avatar,
  audioName,
  author,
  duration,
  iconHeartColor,
  select,
}) {
  return (
    <div className={styles.container}>
      <Number index={index} />
      <Avatar avatar={avatar} />
      <PlayPauseIcon select={select} />
      <Name select={select} audioName={audioName} />
      <Singer author={author} />
      <Duration duration={duration} />
      <AddListIcon styles={{ backgroundColor: iconHeartColor }} />
    </div>
  );
}
Song.prototype = {
  index: PropTypes.number,
  avatar: PropTypes.string,
  audioName: PropTypes.string,
  author: PropTypes.string,
  duration: PropTypes.string,
  iconHeartColor: PropTypes.string,
  select: PropTypes.bool,
  onClick: PropTypes.func,
};
