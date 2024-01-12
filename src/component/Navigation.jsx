import React from "react";
import css from "./Navigation.module.css";

function Navigation({
  previousPage,
  currentPage,
  nextPage,
  totalPages,
  fetchProducts,
  queryString,
}) {
  return (
    <div className={css.container}>
      {previousPage !== 0 && (
        <button onClick={() => fetchProducts(queryString, previousPage)}>
          Previous
        </button>
      )}
      <div className={css.currentPage}>
        {currentPage} of {totalPages} pages
      </div>
      {nextPage !== 0 && (
        <button onClick={() => fetchProducts(queryString, nextPage)}>
          Next
        </button>
      )}
    </div>
  );
}

export default Navigation;
