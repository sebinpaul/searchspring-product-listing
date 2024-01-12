function cleanData(data) {
  let cleanedData = [];
  if (data.results && data.results.length > 0) {
    const rawData = data.results;

    rawData.forEach((datum) => {
      const product = {
        id: datum.id,
        thumbnailImageUrl: datum.thumbnailImageUrl,
        name: datum.name,
        price: datum.price,
        msrp: datum.msrp,
      };
      cleanedData.push(product);
    });
  }
  return cleanedData;
}

export default cleanData;
