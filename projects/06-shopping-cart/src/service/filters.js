export const getFilteredProducts = (products, filters) => {
  return products.filter((product) => {
    return (
      product.price >= filters.minPrice &&
      (filters.category === "all" || product.category === filters.category)
    );
  });
};
