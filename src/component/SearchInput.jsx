import React, { useState } from "react";
import css from "./SearchInput.module.css";

function SearchInput({ fetchProducts }) {
  const [searchString, setSearchString] = useState("");
  function searchProduct(e) {
    e.preventDefault();
    if (searchString) {
      fetchProducts(searchString);
    }
  }
  return (
    <div className={css.container}>
      <form onSubmit={searchProduct}>
        <input
          className={css.searchInput}
          type="text"
          placeholder="Enter product name"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        ></input>
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchInput;
