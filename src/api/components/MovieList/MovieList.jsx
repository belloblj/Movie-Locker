import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";

function MovieList({ movies, onMovieClick }) {
  return (
    <div className={styles.grid}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={() => onMovieClick(movie.id)}
        />
      ))}
    </div>
  );
}

export default MovieList;