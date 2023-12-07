const API_KEY = "c190864a";

export async function searchMovies({ search }) {
  if (search !== "") {
    return fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        const movies = data.Search;
        // Remapeo de valores de las peliculas
        const mappedMovies = movies?.map((movie) => ({
          id: movie.imdbID,
          poster: movie.Poster,
          title: movie.Title,
        }));

        return mappedMovies;
      });
  }
}
