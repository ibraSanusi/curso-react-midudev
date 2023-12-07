import { Movies } from "./components/Movies";
import { useMoviesFetching } from "./hooks/useMovies";
import { useState } from "react";
import debounce from "just-debounce-it";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const { movies, loding, getMovies } = useMoviesFetching({ search });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { query } = Object.fromEntries(new window.FormData(event.target));
    setSearch(query);
  };

  const handleChange = debounce((event) => {
    const newSearch = event.target.value;
    getMovies({ search: newSearch });
  }, 300);

  return (
    <>
      <div className="page">
        <h1>Buscador de peliculas</h1>

        <header>
          <form action="" className="form" onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              name="query"
              type="text"
              placeholder="Avenger, Star Wars, Naruto, The Matrix..."
            />
            <button type="submit">Buscar</button>
          </form>
        </header>

        <main className="billboard">
          {loding ? <p>Cargando...</p> : <Movies movies={movies} />}
        </main>
      </div>
    </>
  );
}

export default App;
