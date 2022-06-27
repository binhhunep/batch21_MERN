import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { Space } from "antd";
import Poster from "./components/Poster";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SmootHorizontalScrolling } from "../util";

function Originals({ title, data, isNetFlix, idSection, onClick }) {
  const posterRef = useRef();
  const itemRef = useRef();
  const [dragMove, setDragMove] = useState();
  const [dragStart, setDragStart] = useState();
  const [isDrag, setIsDrag] = useState(false);

  const handleScrollLeft = () => {
    if (posterRef.current.scrollLeft > 0) {
      SmootHorizontalScrolling(
        posterRef.current,
        250,
        -itemRef.current.clientWidth * 2,
        posterRef.current.scrollLeft
      );
    }
  };

  const handleScrollRight = () => {
    const maxScrollLeft =
      posterRef.current.scrollWidth - posterRef.current.clientWidth;

    if (maxScrollLeft > posterRef.current.scrollLeft) {
      SmootHorizontalScrolling(
        posterRef.current,
        250,
        itemRef.current.clientWidth * 2,
        posterRef.current.scrollLeft
      );
    }
  };

  const handleDragStart = (e) => {
    setIsDrag(!isDrag);
    setDragStart(e.clientX);
  };

  const handleDragEnter = (e) => {
    setDragMove(e.clientX);
  };

  const hangleDragEnd = (e) => {
    setIsDrag(!isDrag);
  };

  useEffect(() => {
    if (isDrag) {
      if (dragMove < dragStart) {
        handleScrollRight();
      } else if (dragMove > dragStart) {
        handleScrollLeft();
      }
    }
  }, [isDrag, dragStart, dragMove]);

  const handleShowDetailModalClick = (item) => {
    if (item) {
      onClick(item);
    }
  };
  return (
    <div>
      <div className={styles.container} ref={posterRef}>
        <h1 className={styles.container_title}>{title}</h1>
        <div className={styles.container_poster} id={idSection}>
          <Space
            draggable={false}
            className={styles.container_poster_slider}
            size={8}
            onDragStart={handleDragStart}
            onDragEnter={handleDragEnter}
            onDragEnd={hangleDragEnd}
          >
            {data.map((item, index) => {
              return (
                <div
                  onClick={() => handleShowDetailModalClick(item)}
                  ref={itemRef}
                  key={index}
                  className={styles.container_poster_item}
                >
                  <Poster
                    src={`https://image.tmdb.org/t/p/${
                      isNetFlix ? "original/" : "w500/"
                    }${isNetFlix ? item.poster_path : item.backdrop_path}`}
                    title={item.title ? item.title : item.name}
                    isNetFlix={isNetFlix}
                  />
                  ;
                </div>
              );
            })}
          </Space>
        </div>
        <div
          className={
            isNetFlix ? styles.container_left : styles.container_left_notNetFlix
          }
        >
          <FiChevronLeft
            onClick={handleScrollLeft}
            style={{ fontSize: isNetFlix ? "40px" : "20px" }}
          />
        </div>
        <div
          className={
            isNetFlix
              ? styles.container_right
              : styles.container_right_notNetFlix
          }
        >
          <FiChevronRight
            onClick={handleScrollRight}
            style={{ fontSize: isNetFlix ? "40px" : "20px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Originals;
