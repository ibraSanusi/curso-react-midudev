import { useState, useId } from "react";

export function Filters({ changeFilters }) {
  // Minimo precio del filtrado
  const [minPrice, setMinPrice] = useState(0);

  const priceFilterId = useId();
  const categoryFilterId = useId();

  // Categoria del filtrado
  const [category, setCategory] = useState("all");

  const handlePriceFilter = (event) => {
    setMinPrice(event.target.value);
    changeFilters({
      category: category,
      minPrice: event.target.value,
    });
  };

  const handleCategoryFilter = (event) => {
    setCategory(event.target.value);
    changeFilters({
      category: event.target.value,
      minPrice: minPrice,
    });
  };

  return (
    <>
      <section>
        <div className="price">
          <label htmlFor="price">Price desde:</label>
          <input
            onChange={handlePriceFilter}
            id={priceFilterId}
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
            id={categoryFilterId}
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
    </>
  );
}
