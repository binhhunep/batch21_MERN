import React, { useRef } from "react";
import styles from "./styles.module.scss";
import Originals from "./components/originals";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { useScrollY } from "../hooks/useScrollY";
import MovieDetail from "../modal/movieDetail/MovieDetail";
import { useDispatch, useSelector } from "react-redux";
import movieDetailSlice from "../../../../../redux/slices/advanceProjects/movieDetail/movieDetailSlice";
const handlePageUpClick = () => {
  scroll.scrollToTop({ duration: 100, smooth: true });
};

function Section({
  dataNetFlex,
  dataAction,
  dataComedy,
  dataDocumentaries,
  dataHorror,
  dataRomance,
  dataTrending,
  dataTopRated,
}) {
  const [scrollY, setScrollY] = useScrollY();
  const disPatch = useDispatch();

  const showModal = (movieDetail) => {
    disPatch(movieDetailSlice.actions.showDetail(movieDetail));
  };

  return (
    <div className={styles.container}>
      <MovieDetail />
      <div className={styles.container_listMovies}>
        <Originals
          onClick={(movieDetail) => showModal(movieDetail)}
          title={"NetFlix Originals"}
          data={dataNetFlex}
          isNetFlix={true}
          idSection={"netFlix"}
        />
      </div>
      <div className={styles.container_listMovies}>
        <Originals
          onClick={(movieDetail) => showModal(movieDetail)}
          title={"Trending Movies"}
          data={dataTrending}
          isNetFlix={false}
          idSection={"trending"}
        />
      </div>
      <div className={styles.container_listMovies}>
        <Originals
          onClick={(movieDetail) => showModal(movieDetail)}
          title={"Top Rated Movies"}
          data={dataTopRated}
          isNetFlix={false}
          idSection={"topRated"}
        />
      </div>
      <div className={styles.container_listMovies}>
        <Originals
          onClick={(movieDetail) => showModal(movieDetail)}
          title={"Action Movies"}
          data={dataAction}
          isNetFlix={false}
          idSection={"action"}
        />
      </div>
      <div className={styles.container_listMovies}>
        <Originals
          onClick={(movieDetail) => showModal(movieDetail)}
          title={"Comedy Movies"}
          data={dataComedy}
          isNetFlix={false}
          idSection={"comedy"}
        />
      </div>
      <div className={styles.container_listMovies}>
        <Originals
          onClick={(movieDetail) => showModal(movieDetail)}
          title={"Horror Movies"}
          data={dataHorror}
          isNetFlix={false}
          idSection={"horror"}
        />
      </div>
      <div className={styles.container_listMovies}>
        <Originals
          onClick={(movieDetail) => showModal(movieDetail)}
          title={"Romance Movies"}
          data={dataRomance}
          isNetFlix={false}
          idSection={"romance"}
        />
      </div>
      <div className={styles.container_listMovies}>
        <Originals
          onClick={(movieDetail) => showModal(movieDetail)}
          title={"War Movies"}
          data={dataDocumentaries}
          isNetFlix={false}
          idSection={"documentaries"}
        />
      </div>
      <div className={styles.container_pageUp}>
        <FaArrowAltCircleUp
          className={styles.container_pageUp_icon}
          style={{ visibility: scrollY > 600 ? "visible" : "hidden" }}
          onClick={handlePageUpClick}
        />
      </div>
    </div>
  );
}

export default Section;
