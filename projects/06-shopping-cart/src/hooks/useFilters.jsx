import { useState } from "react";

export function useFilters() {
  // Valores iniciales de los filtros
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  return { filters, setFilters };
}
