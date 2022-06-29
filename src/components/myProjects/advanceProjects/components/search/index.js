import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Col, Row, Card } from "antd";
import styles from "./styles.module.scss";
import Poster from "./components/poster/Poster";
import MovieDetail from "../modal/movieDetail/MovieDetail";
import movieDetailSlice from "../../../../../redux/slices/advanceProjects/movieDetail/movieDetailSlice";
function Search({ data, isSearchChange }) {
  const disPatch = useDispatch();
  const showModal = (movieDetail) => {
    disPatch(movieDetailSlice.actions.showDetail(movieDetail));
  };
  return (
    <div
      className={styles.container}
      style={{ display: isSearchChange ? "" : "none" }}
    >
      <MovieDetail />
      <Row gutter={[8, 8]}>
        {data.map((item, index) => {
          return (
            <Col
              onClick={() => showModal(item)}
              key={index}
              xs={{ span: 12 }}
              // sm={{ span: 8 }}
              md={{ span: 8 }}
              lg={{ span: 6 }}
              // xl={{ span: 8 }}
              // xxl={{ span: 6 }}
            >
              <Poster
                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                title={item.title ? item.title : item.name}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Search;
