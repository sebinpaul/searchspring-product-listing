import "./App.css";
import SearchInput from "./component/SearchInput";
import { BASE_URL } from "./Constants";
import ProductCards from "./component/ProductCards";
import { useEffect, useState } from "react";
import fetchResults from "./apiClient/fetchResults";
import { ShimmerPostList } from "react-shimmer-effects";

function App() {
  const [queryString, setQueryString] = useState("");
  const [productsData, setProductsData] = useState(null);
  let width = window.innerWidth;
  async function fetchProducts(searchString, page = 1, url = BASE_URL) {
    setQueryString(searchString);
    setProductsData(null);
    const data = await fetchResults(url, searchString, page);
    setProductsData(data);
  }
  return (
    <div className="App">
      <div className="container">
        <SearchInput fetchProducts={fetchProducts} />
        {productsData && queryString ? (
          <ProductCards
            products={productsData}
            fetchProducts={fetchProducts}
            queryString={queryString}
          />
        ) : (
          !productsData &&
          queryString &&
          ((width >= 900 && (
            <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={2} gap={30} />
          )) ||
            (width >= 700 && (
              <ShimmerPostList
                postStyle="STYLE_FOUR"
                col={3}
                row={2}
                gap={30}
              />
            )) ||
            (width >= 600 && (
              <ShimmerPostList
                postStyle="STYLE_FOUR"
                col={2}
                row={2}
                gap={30}
              />
            )) || (
              <ShimmerPostList
                postStyle="STYLE_FOUR"
                col={1}
                row={2}
                gap={30}
              />
            ))
        )}
        {useEffect(() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }, [])}
      </div>
    </div>
  );
}

export default App;
