import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";
import { Input, Space } from "antd";
import { BsSearch } from "react-icons/bs";
import searchSlice from "../../../../../../../redux/slices/advanceProjects/search/searchSlice";

function Search() {
  const disPatch = useDispatch();
  const [keyWords, setKeyWords] = useState("");
  const handleChange = (e) => {
    setKeyWords(e.target.value);
    e.target.value.length > 0
      ? disPatch(searchSlice.actions.showSearchMovies(e.target.value))
      : disPatch(searchSlice.actions.hideSearchMovies("search"));
  };

  const handleCatchSearch = () => {
    setKeyWords("");
  };
  return (
    <div className={styles.container} onClick={handleCatchSearch}>
      <BsSearch
        onClick={handleCatchSearch}
        className={styles.container_iconSearch}
      />
      <Input
        onClick={handleCatchSearch}
        placeholder="movies..."
        className={styles.container_input}
        value={keyWords}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </div>
  );
}

export default Search;
