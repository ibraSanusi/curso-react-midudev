import "./App.css";
import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import { getFilteredProducts } from "./service/filters";
import { Filters } from "./components/Filters";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart";
import { CartsContextProvider } from "./context/carts";

function App() {
  const { filters } = useFilters();

  const filteredProducts = getFilteredProducts(initialProducts, filters);

  return (
    <>
      <nav className="filters">
        <Filters />
      </nav>
      <CartsContextProvider>
        <main>
          <Products products={filteredProducts} />
          <Cart />
        </main>
      </CartsContextProvider>
    </>
  );
}

export default App;
