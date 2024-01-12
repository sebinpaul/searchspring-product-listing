import React from "react";
import css from "./Product.module.css";
import { ShoppingCartIcon } from "lucide-react";

function ProductCard({ id, thumbnailImageUrl, name, price, msrp }) {
  return (
    <div className={css.container}>
      <img
        className={css.productImage}
        src={thumbnailImageUrl}
        alt="product-img"
      />
      <div className={css.productDescription}>
        <span className={css.productName}>{name}</span>
        <div className={css.subItemsContainer}>
          <div className={css.priceContainer}>
            <span
              className={css.msrp}
              style={
                price < msrp
                  ? { textDecoration: "line-through", color: "grey" }
                  : { textDecoration: "none", color: "black" }
              }
            >
              ${msrp}
            </span>
            <span className={css.price}>${price}</span>
          </div>
          <ShoppingCartIcon color="black" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
