import instance from "../../../axios/advanceProjects/Getmovies/axios";
import * as types from "../../types/types";

const getNetFlixOriginalsService = async () => {
  return await instance.get(
    `${types.NETFLIX_ORIGINALS_URL}${types.API_KEY}${types.NETFLIX_ORIGINALS_GENRES}`
  );
};
const getTrendingMoviesService = async () => {
  return await instance.get(
    `${types.TRENDING_MOVIES_URL}${types.API_KEY}${types.TRENDING_MOVIES_GENDES}`
  );
};
const getTopRatedMoviesService = async () => {
  return await instance.get(
    `${types.TOP_RATED_MOVIES_URL}${types.API_KEY}${types.TOP_RATED_MOVIES_GENDES}`
  );
};
const getActionMoviesService = async () => {
  return await instance.get(
    `${types.ACTION_MOVIES_URL}${types.API_KEY}${types.ACTION_MOVIES_GENDES}`
  );
};
const getComedyMoviesService = async () => {
  return await instance.get(
    `${types.COMEDY_MOVIES_URL}${types.API_KEY}${types.COMEDY_MOVIES_GENDES}`
  );
};
const getHorrorMoviesService = async () => {
  return await instance.get(
    `${types.HORROR_MOVIES_URL}${types.API_KEY}${types.HORROR_MOVIES_GENDES}`
  );
};
const getRomanceMoviesService = async () => {
  return await instance.get(
    `${types.ROMANCE_MOVIES_URL}${types.API_KEY}${types.ROMANCE_MOVIES_GENDES}`
  );
};
const getDocumentariesService = async () => {
  return await instance.get(
    `${types.DOCUMENTARIES_MOVIES_URL}${types.API_KEY}${types.DOCUMENTARIES_MOVIES_GENDES}`
  );
};

const getAllMoviesService = async (search) => {
  return await instance.get(
    `${types.ALL_MOVIES_URL}${types.API_KEY}${types.ALL_MOVIES_GENDES}&query=${search}`
  );
};

export {
  getNetFlixOriginalsService,
  getTrendingMoviesService,
  getTopRatedMoviesService,
  getActionMoviesService,
  getComedyMoviesService,
  getHorrorMoviesService,
  getRomanceMoviesService,
  getDocumentariesService,
  getAllMoviesService,
};
