import styles from "./styles.module.scss";
import React, { useState, memo, useMemo, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Navbar from "./components/navbar";
import Intro from "./components/header/intro/Intro";
import Menu from "./components/menu";
import Section from "./components/section";
import Search from "./components/search";

import { getNetFlixOriginals } from "../../../redux/slices/advanceProjects/movie/netFlexOriginalsSlice";
import { getActionMovies } from "../../../redux/slices/advanceProjects/movie/actionMoviesSlice";
import { getComedyMovies } from "../../../redux/slices/advanceProjects/movie/comedyMoviesSlice";
import { getDocumentaries } from "../../../redux/slices/advanceProjects/movie/documentariesSlice";
import { getHorrorMovies } from "../../../redux/slices/advanceProjects/movie/horrorMoviesSlice";
import { getRomanceMovies } from "../../../redux/slices/advanceProjects/movie/romanceMoviesSlice";
import { getTopRatedMovies } from "../../../redux/slices/advanceProjects/movie/topRatedMoviesSlice";
import { getTrendingMovies } from "../../../redux/slices/advanceProjects/movie/trendingMoviesSlice";
import { getAllMovies } from "../../../redux/slices/advanceProjects/search/searchSlice";

import nextFlexSelectorRemaining from "../../../redux/selectors/advanceProjects/movie/netFlexOriginalsSelector";
import actionMoviesSelectorRemaining from "../../../redux/selectors/advanceProjects/movie/actionMoviesSelector";
import comedyMoviesSelectorRemaining from "../../../redux/selectors/advanceProjects/movie/comedyMoviesSelector";
import documentariesSelectorRemaining from "../../../redux/selectors/advanceProjects/movie/documentariesSelector";
import horrorMoviesSelectorRemaining from "../../../redux/selectors/advanceProjects/movie/horrorMoviesSelector";
import romanceMoviesSelectorRemaining from "../../../redux/selectors/advanceProjects/movie/romanceMoviesSelector";
import trendingMoviesSelectorRemaining from "../../../redux/selectors/advanceProjects/movie/trendingMoviesSelector";
import topRatedMoviesSelectorRemaining from "../../../redux/selectors/advanceProjects/movie/topRatedMoviesSelector";
import searchMoviesSelectorRemaining from "../../../redux/selectors/advanceProjects/search/searchMoviesSelector";

function AdvanceProjects() {
  const [isUpdateApi, setIsUpdateApi] = useState(false);
  const disPatch = useDispatch();

  const netFlixOriginalsSelector = useSelector(nextFlexSelectorRemaining);
  const actionMoviesSelector = useSelector(actionMoviesSelectorRemaining);
  const comedyMoviesSelector = useSelector(comedyMoviesSelectorRemaining);
  const documentariesSelector = useSelector(documentariesSelectorRemaining);
  const horrorMoviesSelector = useSelector(horrorMoviesSelectorRemaining);
  const romanceMoviesSelector = useSelector(romanceMoviesSelectorRemaining);
  const trendingMoviesSelector = useSelector(trendingMoviesSelectorRemaining);
  const topRatedMoviesSelector = useSelector(topRatedMoviesSelectorRemaining);
  const searchMoviesSelector = useSelector(searchMoviesSelectorRemaining);

  useEffect(() => {
    disPatch(getNetFlixOriginals());
    disPatch(getActionMovies());
    disPatch(getComedyMovies());
    disPatch(getDocumentaries());
    disPatch(getHorrorMovies());
    disPatch(getRomanceMovies());
    disPatch(getTopRatedMovies());
    disPatch(getTrendingMovies());
    disPatch(getAllMovies(searchMoviesSelector.search));
  }, [searchMoviesSelector.search]);

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
        dataSearch={searchMoviesSelector.data}
        isSearchChange={searchMoviesSelector.isSearchChange}
      />
    </div>
  );
}

export default AdvanceProjects;
