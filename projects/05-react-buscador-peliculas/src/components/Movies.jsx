import PropTypes from "prop-types";

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return (
    <>
      {hasMovies ? (
        <ul>
          {movies.map(({ id, title, poster }) => (
            <li key={id}>
              <h3>{title}</h3>
              {poster ? (
                <img src={poster} alt={`Imagen de la pelicula ${title}`} />
              ) : (
                <p>No hay imagen disponible</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <h3>No hay resultados</h3>
      )}
    </>
  );
}

// Prop Validation
Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      poster: PropTypes.string,
    })
  ),
};
