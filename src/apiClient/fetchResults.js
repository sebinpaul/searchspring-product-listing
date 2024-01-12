async function fetchResults(url, query, page) {
  const urlParams = new URLSearchParams();
  urlParams.set("query", query);
  urlParams.set("page", page);
  urlParams.set("resultsFormat", "native");
  urlParams.set("siteId", "scmq7n");
  const response = await fetch(url + urlParams);
  const data = await response.json();
  return data;
}

export default fetchResults;
