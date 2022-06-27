import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux/es/exports";
import movieDetailSelectorRemaining from "../../../../../../redux/selectors/advanceProjects/movieDetail/movieDetail";
import movieDetailSlice from "../../../../../../redux/slices/advanceProjects/movieDetail/movieDetailSlice";
import { MdClose } from "react-icons/md";
import * as Format from "../../../../../formatTime/FormatTime";
function MovieDetail({}) {
  const disPatch = useDispatch();
  const [isClose, setIsClose] = useState(false);

  // const [data, setData] = useState({
  //   url: "",
  //   title: "The king of the ring",
  //   rating: "",
  //   popularity: "",
  //   releaseDate: "",
  //   note: "",
  //   overview:
  //     "I'm using Ant modal in my react application, would appreciate if I can know the way to prevent modal popup disabling access to the background content. to remove the div tag it puts on top of the background.",
  //   smart: "",
  //   isSelect: false,
  // });
  const movieDetailSelector = useSelector(movieDetailSelectorRemaining);
  // setVisible(movieDetailSelector.isSelect);
  // setData(movieDetailSelector);
  // useEffect(() => {
  //   const isSelect = movieDetailSelector.isSelect;
  //   if (isSelect) {
  //     setVisible(isSelect);
  //     setData(movieDetailSelector);
  //   }
  //   return () => {
  //     setVisible(false);
  //     setData({});
  //   };
  // }, [visible, isClose]);

  const handleCloseClick = () => {
    setIsClose(!isClose);
    disPatch(movieDetailSlice.actions.closeDetail());
  };
  return (
    <div
      style={{
        display: movieDetailSelector.isSelect === false ? "none" : "",
      }}
      className={styles.container}
    >
      <div
        className={styles.container_modal}
        style={{
          display: movieDetailSelector.isSelect === false ? "none" : "",
          backgroundImage: `url(https://image.tmdb.org/t/p/original${
            movieDetailSelector.url
              ? movieDetailSelector.url
              : "/qdIMHd4sEfJSckfVJfKQvisL02a.jpg"
          })`,
        }}
      >
        <div className={styles.modal}>
          <div className={styles.container_modal_close}>
            <MdClose className={styles.modal_icon} onClick={handleCloseClick} />
          </div>
          <h1 className={styles.container_modal_title}>
            {movieDetailSelector.title}
          </h1>
          <div className={styles.container_modal_content}>
            <p
              className={styles.modal_content_rating}
            >{`Rating: ${movieDetailSelector.rating}`}</p>
            <p
              className={styles.modal_content_popularity}
            >{`Popularity: ${movieDetailSelector.popularity}`}</p>
            <p
              className={styles.modal_content_grading}
            >{`Grading: ${movieDetailSelector.smart}`}</p>
          </div>
          <p
            className={styles.container_modal_releaseDate}
          >{`Release date: ${Format.currentDate(
            movieDetailSelector.releaseDate
          )}`}</p>
          <p
            className={styles.container_modal_note}
          >{`Genres: ${movieDetailSelector.note}`}</p>
          <p className={styles.container_modal_overview}>
            {movieDetailSelector.overview}
          </p>
        </div>
      </div>
    </div>
  );
}
export default MovieDetail;
