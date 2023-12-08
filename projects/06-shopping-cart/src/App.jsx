import "./App.css";
import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState(initialProducts);

  const [minPrice, setMinPrice] = useState(0);

  // Valores iniciales de los filtros
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  // Actualizar los productos siempre que ese cambie el filtro
  useEffect(() => {
    const filteredProducts = getFilteredProducts(initialProducts);
    setProducts(filteredProducts);
    console.log("effect");
  }, [filters]);

  // Filtracion de los productos
  const getFilteredProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  const handlePriceFilter = (event) => {
    setMinPrice(event.target.value);
    setFilters({
      category: filters.category,
      minPrice: event.target.value,
    });
  };

  const handleCategoryFilter = (event) => {
    setFilters({
      category: event.target.value,
      minPrice: minPrice,
    });
  };

  return (
    <>
      <nav className="filters">
        <section>
          <div className="price">
            <label htmlFor="price">Price desde:</label>
            <input
              onChange={handlePriceFilter}
              id="price"
              type="range"
              min={0}
              max={1000}
              step={10}
              defaultValue={minPrice}
            />
            <strong>{minPrice}€</strong>
          </div>

          <div className="categories">
            <label htmlFor="categorySelect">Categorías</label>
            <select
              onChange={handleCategoryFilter}
              name="categorySelect"
              id="categorySelect"
            >
              <option value="all">All</option>
              <option value="home-decoration">Decoración</option>
              <option value="smartphones">Móviles</option>
              <option value="laptops">Portátiles</option>
              <option value="fragrances">Perfumes</option>
              <option value="skincare">Skincare</option>
              <option value="groceries">Alimentos</option>
            </select>
          </div>
        </section>
      </nav>
      <main>
        <Products products={products} />
      </main>
    </>
  );
}

export default App;
