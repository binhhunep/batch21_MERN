import styles from "./styles.module.scss";
import React, { useState, memo, useMemo, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Navbar from "./components/navbar";
import Intro from "./components/header/intro/Intro";
import Menu from "./components/menu";
import Section from "./components/section";

import { getNetFlixOriginals } from "../../../redux/slices/advanceProjects/movie/netFlexOriginalsSlice";
import { getActionMovies } from "../../../redux/slices/advanceProjects/movie/actionMoviesSlice";
import { getComedyMovies } from "../../../redux/slices/advanceProjects/movie/comedyMoviesSlice";
import { getDocumentaries } from "../../../redux/slices/advanceProjects/movie/documentariesSlice";
import { getHorrorMovies } from "../../../redux/slices/advanceProjects/movie/horrorMoviesSlice";
import { getRomanceMovies } from "../../../redux/slices/advanceProjects/movie/romanceMoviesSlice";
import { getTopRatedMovies } from "../../../redux/slices/advanceProjects/movie/topRatedMoviesSlice";
import { getTrendingMovies } from "../../../redux/slices/advanceProjects/movie/trendingMoviesSlice";

import nextFlexSelectorRemaining from "../../../redux/selectors/advanceProjects/movie/netFlexOriginalsSelector";
import actionMoviesSelectorRemaining from "../../../redux/selectors/advanceProjects/movie/actionMoviesSelector";
import comedyMoviesSelectorRemaining from "../../../redux/selectors/advanceProjects/movie/comedyMoviesSelector";
import documentariesSelectorRemaining from "../../../redux/selectors/advanceProjects/movie/documentariesSelector";
import horrorMoviesSelectorRemaining from "../../../redux/selectors/advanceProjects/movie/horrorMoviesSelector";
import romanceMoviesSelectorRemaining from "../../../redux/selectors/advanceProjects/movie/romanceMoviesSelector";
import trendingMoviesSelectorRemaining from "../../../redux/selectors/advanceProjects/movie/trendingMoviesSelector";
import topRatedMoviesSelectorRemaining from "../../../redux/selectors/advanceProjects/movie/topRatedMoviesSelector";

function AdvanceProjects() {
  const [isUpdateApi, setIsUpdateApi] = useState(false);
  const disPatch = useDispatch();

  useEffect(() => {
    disPatch(getNetFlixOriginals());
    disPatch(getActionMovies());
    disPatch(getComedyMovies());
    disPatch(getDocumentaries());
    disPatch(getHorrorMovies());
    disPatch(getRomanceMovies());
    disPatch(getTopRatedMovies());
    disPatch(getTrendingMovies());
  }, [isUpdateApi]);

  const netFlixOriginalsSelector = useSelector(nextFlexSelectorRemaining);
  const actionMoviesSelector = useSelector(actionMoviesSelectorRemaining);
  const comedyMoviesSelector = useSelector(comedyMoviesSelectorRemaining);
  const documentariesSelector = useSelector(documentariesSelectorRemaining);
  const horrorMoviesSelector = useSelector(horrorMoviesSelectorRemaining);
  const romanceMoviesSelector = useSelector(romanceMoviesSelectorRemaining);
  const trendingMoviesSelector = useSelector(trendingMoviesSelectorRemaining);
  const topRatedMoviesSelector = useSelector(topRatedMoviesSelectorRemaining);

  return (
    <div className={styles.container}>
      <Navbar />
      <Intro />
      <Menu />
      <Section
        dataNetFlex={netFlixOriginalsSelector.data}
        dataAction={actionMoviesSelector.data}
        dataComedy={comedyMoviesSelector.data}
        dataDocumentaries={documentariesSelector.data}
        dataHorror={horrorMoviesSelector.data}
        dataRomance={romanceMoviesSelector.data}
        dataTrending={trendingMoviesSelector.data}
        dataTopRated={topRatedMoviesSelector.data}
      />
    </div>
  );
}

export default AdvanceProjects;
