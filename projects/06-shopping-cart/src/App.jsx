import "./App.css";
import { Products } from "./components/Products";
import { products } from "./mocks/products.json";

function App() {
  return (
    <>
      <main>
        <Products products={products} />
      </main>
    </>
  );
}

export default App;
