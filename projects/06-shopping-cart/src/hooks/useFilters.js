import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {
  // Valores iniciales de los filtros
  const { filters, setFilters } = useContext(FiltersContext);

  return { filters, setFilters };
}
