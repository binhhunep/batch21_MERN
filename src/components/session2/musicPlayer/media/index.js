import styles from "./styles.module.scss";
import React, { useState, useEffect, useRef } from "react";
import {
  BsChevronDown,
  BsFillVolumeUpFill,
  BsPauseFill,
  BsFillPlayFill,
  BsFillVolumeMuteFill,
} from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { BiListUl } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineRedo } from "react-icons/ai";
import { CgPlayBackwards, CgPlayForwards } from "react-icons/cg";
import { IoMdShuffle } from "react-icons/io";
import { TbArrowsRight } from "react-icons/tb";
import ReactAudioPlayer from "react-audio-player";

/**********REDUX***********/
import { useDispatch, useSelector } from "react-redux";
import mediaPlayerSelectorRemaining from "../../../../redux/selectors/session2/mediaPlayer/mediaPlayer";
import mediaPlayerSlice from "../../../../redux/slices/session2/musicPlayer/mediaPlayerSlice";

export default function Media() {
  /************************/
  const disPatch = useDispatch();
  const mediaSelector = useSelector(mediaPlayerSelectorRemaining);
  const [m, setM] = useState(0);
  const [s, setS] = useState(0);
  const [seekBarCurrent, setSeekBarCurrent] = useState(0);
  const [play, setPlay] = useState(false);
  const [start, setStart] = useState(0);
  const [seekbar, setSeekBar] = useState(0);
  const [shuffle, setShuffle] = useState(false);
  const [muted, setMuted] = useState(false);
  const rap = useRef(null);

  const playClick = () => {
    const audioEl = rap.current.audioEl;
    setSeekBarCurrent(parseFloat(mediaSelector[0].timer, 10));
    setPlay(!play);
    audioEl.current.play();
    setStart(1);
  };

  const pauseClick = () => {
    setPlay(!play);
    const audioEl = rap.current.audioEl;
    audioEl.current.pause();
    setStart(0);
  };

  const seekbarStart = async (e) => {
    const audioEl = rap.current.audioEl;
    audioEl.current.currentTime = e.target.value;
    await setSeekBar(audioEl.current.currentTime);
  };

  const redoClick = () => {
    const audioEl = rap.current.audioEl;
    if (!play) {
      setPlay(!play);
    }
    audioEl.current.src = "";
    setM(0);
    setS(0);
    setSeekBar(0);
    setStart(0);
    setTimeout(() => {
      audioEl.current.src = `audios/session2/musicPlayer/${mediaSelector[0].avatar}.mp3`;
      audioEl.current.play();
    }, 1000);
    setStart(1);
  };

  const backClick = () => {
    if (mediaSelector[0].id === 1) {
      disPatch(mediaPlayerSlice.actions.backClick(8));
    } else {
      disPatch(mediaPlayerSlice.actions.backClick(mediaSelector[0].id - 1));
    }
  };

  const nextClick = () => {
    if (mediaSelector[0].id === 8) {
      disPatch(mediaPlayerSlice.actions.backClick(1));
    } else {
      disPatch(mediaPlayerSlice.actions.backClick(mediaSelector[0].id + 1));
    }
  };

  const shuffleClick = () => {
    setShuffle(!shuffle);
  };

  const mutedClick = () => {
    setMuted(!muted);
  };

  useEffect(() => {
    const audioEl = rap.current.audioEl;
    if (mediaSelector[0].avatar !== "aiChungTinhDuocMai") {
      setSeekBarCurrent(parseFloat(mediaSelector[0].timer, 10));
      setM(0);
      setS(0);
      setSeekBar(0);
      setStart(1);
      setPlay(true);
      audioEl.current.play();
    } else {
      setPlay(false);
    }
  }, [mediaSelector[0].avatar]);

  useEffect(() => {
    if (start > 0) {
      var timer = setInterval(() => {
        if (seekbar < seekBarCurrent) {
          setSeekBar(seekbar + 1);
          setS(seekbar % 60);
          setM(Math.floor(seekbar / 60));
        } else if (!shuffle) {
          clearInterval(timer);
          setM(0);
          setS(0);
          setSeekBar(0);
          setStart(0);
          setPlay(!play);
        } else {
          if (mediaSelector[0].id === 8) {
            disPatch(mediaPlayerSlice.actions.backClick(1));
          } else {
            disPatch(
              mediaPlayerSlice.actions.backClick(mediaSelector[0].id + 1)
            );
          }
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [start, seekbar]);

  return (
    <div className={`row col-12 ${styles.app}`}>
      <div className={`col-12 row ${styles.container}`}>
        <div className={styles.container_toolbar}>
          <BsChevronDown
            style={{
              fontSize: "1.8vmax",
              fontWeight: "700",
              cursor: "pointer",
            }}
          />
          <div className={styles.container_toolbar_volumn}>
            {!muted ? (
              <BsFillVolumeUpFill
                onClick={mutedClick}
                style={{
                  fontSize: "2vmax",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              />
            ) : (
              <BsFillVolumeMuteFill
                onClick={mutedClick}
                style={{
                  fontSize: "2vmax",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              />
            )}
            <FaEllipsisV
              style={{
                fontSize: "1.5vmax",
                fontWeight: "700",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <div className={styles.container_body}>
          <div className={styles.container_cover}>
            <div
              className={
                play ? styles.container_cover_art : styles.container_cover_art1
              }
              style={{
                backgroundImage: `url(images/session2/musicPlayer/${mediaSelector[0].avatar}.jpg`,
              }}
            >
              <div className={styles.cover_art_center} />
            </div>
            <div className={styles.container_cover_title}>
              <h4>{mediaSelector[0].audioName}</h4>
              <p>{mediaSelector[0].author}</p>
            </div>
          </div>
          <div className={styles.container_actions}>
            <BiListUl
              style={{
                fontSize: "1.2vmax",
                fontWeight: "700",
                cursor: "pointer",
              }}
            />
            <AiOutlinePlus
              style={{
                fontSize: "1.2vmax",
                fontWeight: "700",
                cursor: "pointer",
              }}
            />
          </div>
          <ReactAudioPlayer
            muted={muted ? true : false}
            autoPlay={false}
            ref={rap}
            src={`audios/session2/musicPlayer/${mediaSelector[0].avatar}.mp3`}
          />
          <div className={styles.container_seekbar}>
            <input
              type="range"
              className={styles.container_seekbar_slider}
              min="0"
              max={seekBarCurrent}
              value={seekbar}
              onChange={(e) => {
                seekbarStart(e);
              }}
            />
          </div>
          <div className={styles.container_content}>
            <p>{`00:0${m}:${s < 10 ? `0${s}` : s}`}</p>
            <p>{mediaSelector[0].duration}</p>
          </div>
        </div>
        <div className={styles.container_controls}>
          <div>
            {!shuffle ? (
              <IoMdShuffle
                onClick={shuffleClick}
                style={{
                  fontSize: "2vw",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              />
            ) : (
              <TbArrowsRight
                onClick={shuffleClick}
                style={{
                  fontSize: "2vw",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              />
            )}
          </div>
          <div>
            <CgPlayBackwards
              onClick={backClick}
              style={{
                fontSize: "2vw",
                fontWeight: "700",
                cursor: "pointer",
              }}
            />
          </div>
          {play ? (
            <div onClick={pauseClick}>
              <BsPauseFill
                className={styles.container_controls_pause}
                style={{
                  fontSize: "2vw",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              />
            </div>
          ) : (
            <div onClick={playClick}>
              <BsFillPlayFill
                style={{
                  fontSize: "2vw",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              />
            </div>
          )}

          <div>
            <CgPlayForwards
              onClick={nextClick}
              style={{
                fontSize: "2vw",
                fontWeight: "700",
                cursor: "pointer",
              }}
            />
          </div>
          <div>
            <AiOutlineRedo
              onClick={redoClick}
              style={{
                fontSize: "2vw",
                fontWeight: "700",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
