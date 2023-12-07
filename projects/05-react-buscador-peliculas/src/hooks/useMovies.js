import { useRef, useState, useCallback } from "react";
import { searchMovies } from "../service/searchMovies";

// Custom hook
export const useMoviesFetching = ({ search }) => {
  const [movies, setMovies] = useState([]);
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState(null);

  const previousSearch = useRef(search);

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return null;

    try {
      setLoding(true);
      setError(null);
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoding(false);
    }
  }, []);

  return { movies, loding, error, getMovies };
};
