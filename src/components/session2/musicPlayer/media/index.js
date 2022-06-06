import styles from "./styles.module.scss";
import React, { useState, useEffect, useRef } from "react";
import Animate from "rc-animate";
import {
  BsChevronDown,
  BsFillVolumeUpFill,
  BsPauseFill,
  BsFillPlayFill,
} from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { BiListUl } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineRedo } from "react-icons/ai";
import { CgPlayBackwards, CgPlayForwards } from "react-icons/cg";
import { IoMdShuffle } from "react-icons/io";
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

  const seekbarStart = () => {
    if (mediaSelector[0].id === 1) {
      disPatch();
    }
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
      if (seekbar === seekBarCurrent) {
        setM(0);
        setS(0);
        setSeekBar(0);
        setStart(0);
        setPlay(!play);
      } else {
        var timer = setInterval(() => {
          if (seekbar <= seekBarCurrent) {
            setSeekBar(seekbar + 1);
            setS(s + 1);
            if (s > 58) {
              setS(0);
              setM(m + 1);
            }
          } else {
            clearInterval(timer);
            setM(0);
            setS(0);
          }
        }, 1000);
      }
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
              fontSize: "1.2vmax",
              fontWeight: "700",
              cursor: "pointer",
            }}
          />
          <div className={styles.container_toolbar_volumn}>
            <BsFillVolumeUpFill
              style={{
                fontSize: "1.2vmax",
                fontWeight: "700",
                cursor: "pointer",
              }}
            />
            <FaEllipsisV
              style={{
                fontSize: "1.2vmax",
                fontWeight: "700",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <div className={styles.container_body}>
          <div className={styles.container_cover}>
            <Animate>
              <svg
                key={seekbar}
                className={styles.container_cover_art}
                height="10vw"
                viewBox="1 -12 511.99976 511"
                width="10vw"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m481.472656 256.59375-225.378906 225.378906c-7.027344 7.027344-18.417969 7.027344-25.445312 0l-225.378907-225.378906c-7.027343-7.027344-7.027343-18.417969 0-25.445312l225.378907-225.378907c7.027343-7.027343 18.417968-7.027343 25.445312 0l225.378906 225.378907c7.027344 7.027343 7.027344 18.417968 0 25.445312zm0 0"
                  fill="#fab700"
                />
                <path
                  d="m230.277344 6.140625-33.238282 33.238281 226.527344 226.527344c3.714844 3.714844 3.714844 9.738281 0 13.453125l-197.765625 197.765625 4.476563 4.476562c7.230468 7.230469 18.957031 7.230469 26.1875 0l224.636718-224.636718c7.234376-7.230469 7.234376-18.957032 0-26.1875l-224.636718-224.636719c-7.230469-7.230469-18.957032-7.230469-26.1875 0zm0 0"
                  fill="#faa200"
                />
                <path
                  d="m512 252.789062c0 102.949219-83.457031 186.402344-186.40625 186.402344-102.945312 0-186.402344-83.453125-186.402344-186.402344 0-102.949218 83.457032-186.40625 186.402344-186.40625 102.949219 0 186.40625 83.457032 186.40625 186.40625zm0 0"
                  fill="#682c54"
                />
                <path
                  d="m325.59375 66.382812c-7.027344 0-13.957031.40625-20.785156 1.160157 93.164062 10.339843 165.617187 89.324219 165.617187 185.246093 0 95.921876-72.453125 174.90625-165.617187 185.246094 6.828125.757813 13.757812 1.160156 20.785156 1.160156 102.949219 0 186.40625-83.457031 186.40625-186.40625 0-102.945312-83.457031-186.40625-186.40625-186.40625zm0 0"
                  fill="#542a48"
                />
                <path
                  d="m325.59375 66.382812c-102.945312 0-186.402344 83.457032-186.402344 186.40625 0 34.3125 9.28125 66.453126 25.457032 94.070313l255.015624-255.019531c-27.613281-16.171875-59.753906-25.457032-94.070312-25.457032zm0 0"
                  fill="#723661"
                />
                <path
                  d="m402.570312 108.933594 17.09375-17.09375c-27.613281-16.171875-59.753906-25.453125-94.070312-25.453125-7.027344 0-13.957031.402343-20.785156 1.160156 36.910156 4.09375 70.574218 18.953125 97.761718 41.386719zm0 0"
                  fill="#682c54"
                />
                <path
                  d="m418.285156 252.789062c0 51.191407-41.5 92.6875-92.691406 92.6875-51.1875 0-92.6875-41.496093-92.6875-92.6875 0-51.191406 41.5-92.691406 92.6875-92.691406 51.191406 0 92.691406 41.5 92.691406 92.691406zm0 0"
                  fill="#542a48"
                />
                // //{" "}
                <path
                  d="m389.765625 252.789062c0 35.441407-28.730469 64.167969-64.171875 64.167969-35.4375 0-64.167969-28.726562-64.167969-64.167969 0-35.441406 28.730469-64.171874 64.167969-64.171874 35.441406 0 64.171875 28.730468 64.171875 64.171874zm0 0"
                  fill="#ff6914"
                />
                <path
                  d="m338.429688 252.789062c0 7.089844-5.746094 12.835938-12.835938 12.835938-7.085938 0-12.832031-5.746094-12.832031-12.835938 0-7.089843 5.746093-12.835937 12.832031-12.835937 7.089844 0 12.835938 5.746094 12.835938 12.835937zm0 0"
                  fill="#005ca0"
                />
              </svg>
            </Animate>
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
              onChange={seekbarStart}
            />
          </div>
          <div className={styles.container_content}>
            <p>{`00:0${m}:${s < 10 ? `0${s}` : s}`}</p>
            <p>{mediaSelector[0].duration}</p>
          </div>
        </div>
        <div className={styles.container_controls}>
          <div>
            <IoMdShuffle
              style={{
                fontSize: "2vw",
                fontWeight: "700",
                cursor: "pointer",
              }}
            />
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
            <div key={seekbar} onClick={pauseClick}>
              <Animate>
                <BsPauseFill
                  key={seekbar}
                  className={styles.container_controls_pause}
                  style={{
                    fontSize: "2vw",
                    fontWeight: "700",
                    cursor: "pointer",
                  }}
                />
              </Animate>
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
