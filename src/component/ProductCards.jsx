import React from "react";
import css from "./ProductsCards.module.css";
import ProductCard from "./ProductCard";
import Navigation from "./Navigation";
import transformData from "../transformData";

function ProductCards({ products, fetchProducts, queryString }) {
  const { previousPage, currentPage, nextPage, totalPages } =
    products.pagination;
  products = transformData(products);
  return (
    <div className={css.container}>
      <Navigation
        previousPage={previousPage}
        currentPage={currentPage}
        nextPage={nextPage}
        totalPages={totalPages}
        fetchProducts={fetchProducts}
        queryString={queryString}
      />
      <div className={css.productListing}>
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              thumbnailImageUrl={product.thumbnailImageUrl}
              name={product.name}
              msrp={product.msrp}
              price={product.price}
            />
          );
        })}
      </div>

      <Navigation
        previousPage={previousPage}
        currentPage={currentPage}
        nextPage={nextPage}
        totalPages={totalPages}
        fetchProducts={fetchProducts}
        queryString={queryString}
      />
    </div>
  );
}

export default ProductCards;
