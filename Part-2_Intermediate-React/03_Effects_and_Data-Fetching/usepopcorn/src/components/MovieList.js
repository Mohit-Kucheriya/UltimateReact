import Movie from "./Movie";

// Right side of the app, showing movies list
export default function MovieList({ movies, onSelectedMovieID }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          key={movie.imdbID}
          movie={movie}
          onSelectedMovieID={onSelectedMovieID}
        />
      ))}
    </ul>
  );
}
