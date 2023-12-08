import { useState } from "react";

export function Filters() {
  const [filterPrice, setFilterPrice] = useState(0);

  const handleChange = (event) => {
    setFilterPrice(event.target.value);
  };

  return (
    <>
      <section>
        <strong>Min: {filterPrice} / Max: 1000</strong>
        <input
          onChange={handleChange}
          type="range"
          min={0}
          max={1000}
          defaultValue={filterPrice}
        />

        <div className="categories">
          <label htmlFor="categorySelect">Categorías</label>
          <select name="categorySelect" id="categorySelect">
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
