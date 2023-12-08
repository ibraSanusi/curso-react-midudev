import "./App.css";
import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import { useState } from "react";
import { getFilteredProducts } from "./service/filters";
import { Filters } from "./components/Filters";
import { useFilters } from "./hooks/useFilters";

function App() {
  const [products] = useState(initialProducts);

  const { filters, setFilters } = useFilters();

  const filteredProducts = getFilteredProducts(products, filters);

  return (
    <>
      <nav className="filters">
        <Filters changeFilters={setFilters} />
      </nav>
      <main>
        <Products products={filteredProducts} />
      </main>
    </>
  );
}

export default App;
